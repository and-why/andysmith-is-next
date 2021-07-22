## Firestore API calling data

Create a service Account within Google Firebase Console.
Generate a new key and say the client_email, private_key to .env variables. 

```javascript
npm install firebase-admin
```


### firebase-admin.js


```jsx
import admin from 'firebase-admin';

if (!admin.app.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      project_id: process.env.NEXT_PUBLIC_PROJECT_ID
    }),
    databaseURL: process.env.NEXT_PUBLIC_AUTH_DOMAIN
  });
}

export default admin.firestore();
```

### pages/api/collection_name.js

```jsx
import admin from '_pathto_/firebase-admin';

export default async (_, res) => {
  const snapshot = await admin.collection('collection_name').get();

  const collection_name = [];

  snapshot.forEach((doc) => {
    collection_name.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).json(collection_name);
};
```

## Fetcher for NextJS swr

```lib/utils```

```jsx
const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};

export default fetcher;

```
