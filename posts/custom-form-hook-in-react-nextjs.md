---
title: Build a custom form hook in React (Next.js)
date: '2021-08-05'
excerpt: 'Create a custom hook to manage state of a form for React / Next.js'
---

One way to use a form is to have the state change when you change an input with an inline onChange function that changes the state, like this:

```jsx
import {useState} from 'react';

export default function CreateProduct() {
const [name, setName] = useState('andy');

return (
<form>
  <label htmlFor="name">
    Name
    <input
      type="text"
      id="name"
      name="name"
      placeholder="name"
      value={name}
      onChange={(e) => setState(e.target.name)}
    />
   </label>
</form>
);
```

This is fine if you only have one input, however what if you have 10 or more inputs, you don't want to be using 10 lines for state management. So, this is where a custom hook comes in.

We'll create a new file called _useForm.js_. We can now use the _useState()_ hook from react, but use it to manipulate our data, which we'll create the handleChange function to do.
We will initialise the forms state with an initial value passed into useForm(), if there isn't one passed in, we can use the backup array initial = {}.
The handleChange will use the event object passed to it.

```jsx
import { useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    setInputs({
      // copy existing state
      ...inputs,
      [name]: value,
    });
  }
}
```

From the event, we're only really interested in the value, and the name, and perhaps the 'type' - if you want to ensure certain types of inputs behave in a certain way. For example, number inputs default to converting a number into a string, which can be annoying if you want to keep it as a number. I find this happens a fair bit, so I've left it in. Perhaps we want someone's age, and we want to do some arithmetic on it.

So if we receive a value that is of the type number, we'll convert it back to an integer using _parseInt(value)_.

We're then going to setInputs to an object. By first spreading the current inputs, the initial state, we then overwrite any of the inputs in the latter part of the array by using the values passed in by the event, so the new name, and value. To ensure the new array gets the value from name, we need to restructure it.

We can then return the new inputs and the handleChange function, so our useForm code looks like this:

```jsx
import { useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    setInputs({
      // copy existing state
      ...inputs,
      [name]: value,
    });
  }
  return {
    inputs,
    handleChange,
  };
}
```

We'll often want to clear a form once it has been submitted, so I like to include that in this hook too. You can either reset the form to the initial values, if those were blank, or make the form blank, removing any initial values.

For that we need to create a new _clearForm()_ function and a •resetForm()\* function. Choose which ever behaviour you want.

The clearForm is a little weird, because we need to loop over all the different inputs, and wipe the values for each, we therefore need to convert the object into an array, and then back to an object. Here's how we can achieve that:

```jsx
function clearForm() {
  const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
  setInputs(blankState);
}
```

The _resetForm()_ is a lot easier, we simple use the initial values passed into the form, and set the new values based on that:

```jsx
function resetForm() {
  setInputs(initial);
}
```

The finished _useForm()_ file looks like this:

```jsx
import { useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    setInputs({
      // copy existing state
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }
  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
    setInputs(blankState);
  }
  // return the things we want to surface from custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
```

Now we can import these functions and values from useForm() and use them on any form inputs. Using the inputs.[name] for the current values, we can manage these with the handleChange function.

```jsx
import {useState} from 'react';
import useForm from '../lib/useForm';

export default function CreateProduct() {
const { inputs, clearForm, resetForm, handleChange } = useForm({
    //set initial state from database or manually
    name: 'Andy',
    price: 300,
  });

return (
<form>
  <label htmlFor="name">
    Name
    <input
      type="text"
      id="name"
      name="name"
      placeholder="name"
      value={inputs.name}
      onChange={handleChange}
    />
   </label>
  <label htmlFor="name">
    Age
    <input
      type="number"
      id="age"
      name="age"
      placeholder="age"
      value={inputs.age}
      onChange={handleChange}
    />
   </label>
</form>
);
```
