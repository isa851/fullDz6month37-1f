import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1'
         },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        alert('Вход успешен! Токен: ' + data.token);
      } else {
        alert(data.error || 'Ошибка входа');
      }
    } catch {
      alert('Ошибка');
    }
  };

  return (
    <form onSubmit={submit}>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        required
      />
      <button type="submit">Войти</button>
    </form>
  );
}

export default App