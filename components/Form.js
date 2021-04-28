import value from '../components/headers';

export default function Form() {
  const registerUser = async (event) => {
    event.preventDefault();

    let url = 'https://api.sheety.co/518dfb4222e8b9c20571d23cefbed8c9/flights/users';
    var headers = new Headers();
    headers.append('Authorization', 'Bearer djfhsiufhds7h7i3hfiqoaw9aezjff3jf');

    let body = {
      user: {
        name: event.target.name.value,
        email: event.target.email.value,
        airport: event.target.airport.value,
      },
    };
    await fetch(url, {
      headers: headers,
      body: JSON.stringify(body),
      method: 'POST',
    });
    const result = res.json;
    console.log(result);
  };

  return (
    <form onSubmit={registerUser}>
      <label htmlFor='name'>Name</label>
      <input id='name' name='name' type='text' autoComplete='name' required />
      <input id='email' name='email' type='email' autoComplete='email' required />
      <input id='airport' name='airport' type='text' autoComplete='city' required />
      <button type='submit'>Register</button>
    </form>
  );
}
