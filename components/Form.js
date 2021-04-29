import styles from '../components/layout.module.css';

export default function Form() {
  const registerUser = async (event) => {
    event.preventDefault();

    let url = 'https://api.sheety.co/518dfb4222e8b9c20571d23cefbed8c9/flights/users';
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer djfhsiufhds7h7i3hfiqoaw9aezjff3jf');

    let body = {
      user: {
        name: event.target.name.value,
        email: event.target.email.value,
        airport: event.target.airport.value,
        country: event.target.country.value,
        currency: event.target.currency.value,
      },
    };
    const res = await fetch(url, {
      headers: headers,
      body: JSON.stringify(body),
      method: 'POST',
    });
    const result = res.json;
    console.log(result);
  };

  return (
    <form className={styles.form} onSubmit={registerUser}>
      <h1>Sign Up for Andy's Flight Club</h1>
      <div className={styles.formRow}>
        <label htmlFor='name'>Name</label>
        <input id='name' name='name' type='text' autoComplete='name' required />
      </div>
      <div className={styles.formRow}>
        <label htmlFor='name'>Email</label>
        <input id='email' name='email' type='email' autoComplete='email' required />
      </div>
      <div className={styles.formRow}>
        <label htmlFor='name'>Closest City</label>
        <input id='airport' name='airport' type='text' autoComplete='city' required />
      </div>
      <div className={styles.formRow}>
        <label htmlFor='name'>Country</label>
        <input id='country' name='country' type='text' autoComplete='city' required />
      </div>
      <div className={styles.formRow}>
        <label htmlFor='name'>Currency</label>
        <select id='currency'>
          <option value='AUD'>AUD</option>
          <option value='NZD'>NZD</option>
          <option value='GBP'>GBP</option>
          <option value='EUR'>EUR</option>
          <option value='CHF'>CHF</option>
          <option value='USD'>USD</option>
          <option value='CAD'>CAD</option>
          <option value='JPY'>JPY</option>
        </select>
      </div>
      <button type='submit'>Register</button>
    </form>
  );
}
