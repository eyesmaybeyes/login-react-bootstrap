import './App.css'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Form className='form' onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Имя пользователя</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Введите имя пользователя"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Введите пароль"
        />
      </Form.Group>
      <Button type="submit" variant="primary">Войти</Button>
    </Form>
  );
}

export default App;