---
title: NextJS rendering and data fetching
date: '2021-05-12'

---

## Static props rendering

Loading the props or data in the build phase, so when the app is actually built and then shipped. This is useful for fairly unchanged code. If for example you want to display products in a store which aren't updated by user interaction, or in need of lightening updates. 

However, they can update every time a page is requested with the option to only refresh the data after a certain period of time. So to stop the site form 'rebuilding' each time, you can put a revalidate option in there, in seconds. There is a notFound fallback and redirect options so if the data isn't there, you can serve a 404 page, or send the user to an no-data found page.

The [NextJS docs](https://nextjs.org/docs/basic-features/data-fetching) state:

### You should use getStaticProps if:
- The data required to render the page is available at build time ahead of a user’s request.
- The data comes from a headless CMS.
- The data can be publicly cached (not user-specific).
- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.



```jsx
export default function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link href={`/${product.id}`}>{product.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export async function getStaticProps(context) {
  const filepath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }

  if (data.products.length < 1) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10, //this is in seconds to regenerate the page on any request.
  };
}
```

## Serving static props on dynamic pages with getStaticPaths

If a page has dynamic routing, it needs to have the paths defined. Dynamic paths by nature build the page based on the URL. Therefore without the paths defined, NextJS would have no way to build the page before the URL is entered or clicked. 

To do this we use getStaticPaths. This data can be fed in from a server and then create the paths to build the pages at build time still. The path and fs imports are used to build the path if the data is on the server. This might be if the data is in a JSON file or perhaps GraphQL, but I haven't looked into that in a while. 

```javascript
import path from 'path';
import fs from 'fs/promises';

import { Fragment } from 'react';

export default function ProductPage(props) {
  const { loadedProduct } = props;

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

// get the data first 
async function getData() {
  const filepath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticPaths() {
  //call the data function within the static paths function asynchronously 
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}
```


## Server Side Props Rendering 

[NextJS Docs](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering):

This cannot be mixed with Static Props rendering, and should be used if you need to pre-render a page whose data needs to be fetched a the request time, for example a user authentication token. This will slow down the pages load speed, or time to first byte (TTFB), so only use if needed. If you don't need to pre-render the data, then you can fetch the data on the client side, in the traditional fetch method, used for ReactJS. 

Example:

```javascript
export default function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  console.log(req);
  console.log(res);

  return {
    props: {
      username: 'Andy',
    },
  };
}

```

Client side fetching as mentioned from above:

```javascript
import { useEffect, useState } from 'react';
import { satisfies } from 'semver';

export default function LastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      'https://nextjs-course-6f90d-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json',
    )
      .then((response) => response.json())
      .then((data) => {
        const transformedSales = [];

        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }

        setSales(transformedSales);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No data yet</p>;
  }
  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - {sale.volume}
        </li>
      ))}
    </ul>
  );
}
```


An alternate way to render the fetched data with a React Hook is SWR (stale-while-loading) which cuts down a lot of the code above to this:

```javascript
import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('/api/user', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```

With the fetcher being a specific type of fetch, if using GraphQL. If you want the default fetch, leave it blank.