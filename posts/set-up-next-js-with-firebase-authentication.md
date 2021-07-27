---
title: Set up Next JS with firebase authentication
date: '2021-07-27'
excerpt: 'A simple straight to the point guide to setting up firebase authentication for Next.js.' 
---

## Set up Firebase

Go to [firebase.google.com](https://firebase.google.com) and create a new Firebase database. 

Go to Authentication in the navigation menu and choose Get Started.

We'll start with Google's sign-in provider, as it's the simplest. GitHub also make the experience pretty easy. Facebook and Twitter have a few extra requirements, like having a privacy policy and T&Cs, but if you want to start here you can simply put in a fake URL to get past that requirement.

As we're going with Google, choose Google from the list and enable it. Choose a Project public facing name, this will appear on the popup, so make it user friendly. Also choose a support email and hit save. 

We also need to make sure we have allowed certain domains to have access, in development that's usually Localhost, which should already be in the authorised domains, if you already have a domain picked out for your app, add that to the authorised domains so you don't forget. I can't tell you the number of times I've launched something and it's broken when live and the amount of time it takes to remember this is the issue.

Now that's sorted, click the settings cog in the Firebase menu, and create a new Web App. Name the app and take note of the apiKey, authDomain and projectId. That's all we need for authentication. At the moment, at least. 

## Save credentials

For safety, we'll put this into our *.env.local* files. These need to be on the client side, as we'll be making the calls by the client. So they have to be named with *NEXT_PUBLIC* at the beginning. I named mine: *NEXT_PUBLIC_FIREBASE_API_KEY, NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, NEXT_PUBLIC_FIREBASE_PROJECT_ID*.

Save your *.env.local* file and restart your dev environment. 

We'll need to *npm install firebase* to get the functions within our Next JS app. 

## Initialising Firebase

Back in our apps codebase, we need to initialise Firebase. We'll do this by creating a *firebase.js* file. I like to put this in a lib folder. So */lib/firebase.js*. 

In here we need to initialise the app by using the following code. This essentially calls to Firebase with our secret credentials and creates a firebase function, which we'll export as our default:

```jsx
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID
  });
}

// this will create access to firestore database, if using firestore as a database.
export function firestore() {
  return firebase.firestore();
}


export default firebase;
```

We can now call this from anywhere within our app.

## Authorisation

Now to create an Authorisation context, we can create an *auth.js* within our utils folder, so */utils/auth.js* we'll come back to this file in a moment.

When we come to saving user related data into a database, and should we choose firestore to be that database, we'll also need to create a new database file for all our database functions. I call mine *db.js*. If you're only using Firebase auth, you can ignore all these database calls.

*db.js*

```jsx
import firebase from '@/lib/firebase';

const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}
```

Back to our *auth.js* file. Here is the code I'll use, and I'll go through what its doing below:

```jsx
import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from '@/lib/firebase'

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser);
      const { token, ...userWithoutToken } = user;

      createUser(user.uid, userWithoutToken); // creating a place in the database - not needed for auth only
      setUser(user);

      cookie.set('name-your-cookie', true, { expires: 30 });

      setLoading(false);
      return user;
    } else {
      setUser(false);
      cookie.remove('bare-comments-auth');
      setLoading(false);
      return false;
    }
  };

  const signinWithGoogle = () => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response.user);
        Router.push('/sites'); // remove to keep user on current page
      });
  };


  const signout = () => {
    Router.push('/'); // remove to keep user on page
    return firebase
      .auth()
      .signOut()
      .then(() => {
        handleUser(false);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signinWithGitHub,
    signinWithGoogle,
    signinWithEmail,
    signout
  };
}

const formatUser = async (user) => {
  return {
    uid: user.uid,
    email: user.email,
    token: user.za,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};

```

We need to create a context provider for our Auth so we can wrap the entire app with it. We'll also create signin and sign out function which we can use to allow users to initiate the sign in. I also like to add a cookie here, so that we can be ready to protect any api calls or routes and for our app to remember the user is logged in more easily. I use js-cookie - so *npm install js-cookie* if you want a cookie.

When the user initiates the sign in function our app will then take the user's returned details in raw format from Google Firebase and then call the *formatUser* to get what we want. If using Firestore as a database, call the createUser function we created in *db.js* from there with the the new formatted user details. However, we don't want to send all these details, so we need to destructure the user as we don't want to save the token to the database, we can do this by pulling out the token as its own constant variable, and spreading the rest of the values under *const {token, ...userWithoutToken} = user*. We can then create the user in the database with *user.id* as the firestore document id and then add the user details as the data. 

Next we are creating a cookie so we can identify a user on their computer, and set an expiry. This is in days. Skip this if you don't need or want a cookie. 

We can then set the user state across the app. Meaning we can check if the user is signed in to show different parts of the app. For example, showing either 'login' or 'my account' from the navigation. We need to remove any loading states as we're done with the sign in at this point. This if/else statement also handles sign out, so if there is no *rawUser* being passed into the function, it will remove the cookie, set the user's state to false.

Next up we need to actually create a function that calls all this handleUser function, so for this case the Google sign in function. 

We start by setting *loading* to true, so that we can use this variable to show the user that something is happening. Then we can return the firebase function *.auth()* using the *signInWithPopup()* function with firebase Google auth as the argument. Then we can take the response, which will be the users data, and we can call the handleUser function we created to pass the rawData to. After this we can push the user to the homepage, the account page, or remove the router and the page won't change.

We will also create a sign out function within the *useProvideAuth()* function. 

We can then return an object containing all these functions, and export *useAuth()* with React's (createContext()* hook to create the *authContext* const, and the *useContext()* hook to use that *authContext*. These functions will then all be accessible by calling *useAuth* function within pages. By creating the authContext provider we can pass in the useProviderAuth as the value. 

> On a side note, I use @ for escaping the ../../.. patterns, to do this with Next.js you need to create a jsconfig.json document at the route of your folder, and add this code:
> ```jsx
> {
>   "compilerOptions": {
>     "baseUrl": ".",
>     "paths": {
>       "@/components/*": ["components/*"],
>       "@/lib/*": ["lib/*"],
>       "@/utils/*": ["utils/*"],
>       "@/styles/*": ["styles/*"]
>     }
>   }
> }
> ```
> It essentially writes the path to the folders with an @ symbol, so when you are importing something from a different file structure, you just need to say *import { function } from '@/utils/functions'* instead of *import { function } from '../../utils/functions'


Now we have the context let's go to *pages/_app.js* , and wrap our app with the newly created AuthProvider function. Looking something like this:

```jsx
import '../styles/globals.css';
import { AuthProvider } from '@/utils/auth';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
```

Save, close that file as we won't need it again and go back to your auth.js file.
 
Now we need to add the function somewhere to use it. For this, I'm going to place the login and account into the Navigation bar. 

To get access to these details, because we've used React's context hooks, we can call them by calling the *useAuth()* function from the *auth.js* file.


```jsx
import { useAuth } from '@/utils/auth';

export default function Navbar() {
  const { user, signinWithGoogle } = useAuth();

  return (
    <>
      {user ? (
        <button variant='ghost'>My Account</button>
      ) : (
        <button variant='ghost' onClick={signinWithGoogle}>
          Log in
        </button>
      )}
    </>
  );
}

```

And that's basically it. You can add other authentication methods or show different parts of the app by checking if the user is logged in. By using the cookie, you can protect certain API routes by using it in the headers so that it'll only pull a users data from firestore. 



