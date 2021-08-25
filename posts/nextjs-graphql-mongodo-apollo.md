---
title: Set up Next.js with MongoDB database, using GraphQL, Apollo Server PT.1
date: '2021-08-24'
excerpt: 'Straightforward set up guide for Next.js with MongoDb Apollo and GraphQL, using Mongoose as the ORM.'
---

I am a big fan of Next.js, I can’t think of enough web apps that don’t benefit from routing, so that alone is enough to make me choose Next.js over a standard React app as it comes baked in, but on top of that the data fetching, server side rendering and static generation builds are also super powerful if you want a performant web app or website that is SEO friendly. And coming from a marketing background, SEO is a big deal.

I am also a big fan of MongoDB for its simplicity and developer experience. To me, it feels how a database should feel, and the tools like Atals and Compass make seeing it all very clear.

## Setting up MongoDB

To begin with, we’ll set up a new MongoDB account using (MongoDB Atlas)[https://www.mongodb.com/cloud/atlas/register]. If you already have a MongoDB account, you can go ahead and log in.

I’m going to call this build a boilerplate. So we’re going to make a new Organisation called “MANG Boiler” . Then choose MongoDB Atlas, as it comes with a lot of benefits from scaling to simply being highly secure.

We don’t need to add any members so we’ll Create Organisation.

Now we need a new project. I’m going to name that ‘Boilerplate’. This just has to be unique within your new organisation. No need to add members for me, so I’ll hit Create Project.

Now to build the database. We’ll choose the free Shared option, but as you can see from the pricing here, it’s quite reasonable when you come to scaling up.

Now you can choose the Provider. AWS seems to be the quickest, and being in Australia myself, it’s the only provider with an Australian server, but choose whatever you like here. I leave the rest of the setting as is, and click Create Cluster. This can take a few moments. So skip ahead to the Next.js part or go make yourself a tea/coffee/wine for whenever or whereever you are in your day.

## Set up Next.js

We’ll use the create-next-app by running _npx create-next-app name-of-your-app_ in the location you want the files to live. Then _cd name-of-your-app_

We don't need to run the the dev yet, as we need to set up a few things to get the server up and running.

## Get the connection URI

Back to Mondgo Atals, this should have finished running by now, if not wait until it has. When ready, click the connect button.

To make this database a little secure whilst in development, go ahead and choose the Add Your Current IP Address (Highly secure, remember).

Then choose a username and password, and write this down, just for now as we'll use the password very shortly, I jot it into the .env file, which we need to create and use (Yes, .env, not the .env.local usually used for Next.js apps, as we need this for our server) As a side note, you'll need to add .env to your gitignore. The password works best if it is just alpha-numeric, no symbols. I tend to click the "Autogenetrate Secure Password" button provided by MongoDB as you know it'll work.

Now we've created that user, we need to Choose a connection method. If you want to use Compass, you can connect that way, I'm going to "connect you application". This gives you a URI that you can now add to your .env file. It should look like this:

```jsx
MONGO_DB_URI=mongodb+srv://<user>:<password>@cluster0.zqrla.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

Replace <user> with the username you chose. Replace <password> with the password for the user. Replace myFirstDatabase with the name of the database that connections will use by default. And replace the < and > as well, they are not to surround your username or password.

eg:

```jsx
MONGO_DB_URI=mongodb+srv://dbUser:JS8duekdskd@cluster0.zqrla.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

We're basically done with MongoDB for now.

We now need to install a few dependencies to get this into our new server and then the app.

Run _npm i @apollo/client apollo-server-express graphql mongoose dotenv_

We will need all of these eventually, so just install them now. We'll also need nodemon for hot refreshing our node server, but only as a Dev dependency, so run _npm i -D nodemon_

We're going to build the server all in one folder, so we can extract it when we need to deploy.

I like to create a new folder called server, and then create a file called server.js. We'll need to create a script to run the dev server, so open up your package.json, and make sure all those are listed under dependencies and devDependencies. We also need to create a new script for our Node server to run. I call my script _"devserver" : "modemon server/server.js"_

For GraphQL, we'll need resolvers and typeDefs, and we'll also need some Schema models for the resolvers. Some tutorials will have you build them directly in the server file to get it up and running, but I like to strucutre mind from the start, so create a new folder called graphql and then the three files, resolvers.js, typeDefs.js and Post.model.js. We're going to start with some post data as though a blog.

Let's first create our schema model for our post, this uses Mongoose ORM to structure the schema, so open up the Post.model.js file. This isn't for Authentication, yet, so we'll keep it simple with a title, slug and content. IDs are added automatically, so don't need to be in the schema. These are also both going to be type String. But we can choose from String, Int, Float, Boolean, and ID.

```jsx
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  slug: {
    type: String,
  },
  content: {
    type: String,
  },
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;
```

Now we can create our type definitions, by opening up typeDefs.js

As this is Node, we'll import with the require method.

```jsx
const { gql } = require('apollo-server-express');
```

Then add our typeDefs using gql and backticks, usually next to the 1 on a keyboard. Also, make sure you export the module.

```jsx
const typeDefs = gql`
  type Post {
    id: ID!
    title: String
    slug: String
    content: String
  }
`;

module.exports = typeDefs;
```

We'll also need a Query to pull the data, so add that no, and we'll need to create that in the resolvers now:

```jsx
const typeDefs = gql`
  type Post {
    id: ID!
    title: String
    slug: String
    content: String
  }
  type Query {
    getAllPosts: [Post]
    getPost(id: ID): Post
  }
`;

module.exports = typeDefs;
```

So, open up the resolvers, these are like functions that call data down.

```jsx
const Post = require('./models/Post.model');

const resolvers = {
  Query: {
    getAllPosts: async () => {
      return await Post.find();
    },
    getPost: async (_parent, { id }, _context, _info) => {
      // const {id} = args destructured above
      return await Post.findById(id);
    },
  },
};

module.exports = resolvers;
```

Here we can call all our posts by returning Post.find() - that call all Posts in the database. We can also use the .findById(id) function to find a unique person. We you might be able to see in the typeDefs, adding the exclamation mark (!) after the type means the value has to be unique.

Now we've got our setup sorted, we can finally build the server.

Open up the server.js file. And we need to import the following:

```jsx
require('dotenv').config({ path: '.env' });
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const mongoose = require('mongoose');
```

Now we need to start the server by adding the following function. I've added comments to explain all the code, but you can remove that if you want. Obviously.

```jsx
require('dotenv').config({ path: '.env' });
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const mongoose = require('mongoose');

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // wait for the server to start
  await apolloServer.start();

  // apply the middleware of express defined above

  apolloServer.applyMiddleware({ app: app, path: '/graphql' }); // the default path for the graphql server is /graphql so adding the path is not needed but I leave it there in case you want a differnet path for some reason.

  // send a response from the express server

  app.use((req, res) => {
    res.send('hello from express apollo server');
  });

  // connect to our MongoDB database. this is why we needed the .env file and needed to import that file at the very very top
  await mongoose.connect(process.env.MONGO_DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  // logs that we're connected to the console.
  console.log('mongoose connected');

  // set the port for the listening. Choose anything other than 3000, as that's the where the Next.js app will run from.
  app.listen(4000, () => console.log('Server is running on post 4000: http://localhost:4000'));
}
// call the function
startServer();
```

Now is the moment of truth. Run _npm run devserver_ and you should be successful. If not, pay attention to the console log and figure out what you've done wrong.

You can now go to http://localhost:4000/graphql to use the graphql studio. With the new Apollo Server, you will be directed to their new studio.apollographql.com/sandbox/explorer, and you can start testing your queries and mutations.

In the studio, you should be able to query all posts by running the following:

query GetAllPosts {
getAllPosts {
id
title
slug
content
}
}

At the moment, you'll get an empty array, but we'll add some more functions to create, update and delete in the next post.
