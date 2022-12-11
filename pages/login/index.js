import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import { useState } from 'react';
import Router from 'next/router';
import { ADMIN_URL } from '../api/api';
import { setCookie } from 'nookies';
import { Form, Button } from 'react-bootstrap';

//login form with username/email and pwd field
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    const loginCreds = {
      identifier: username,
      password: password,
    };
    const login = await fetch(`${ADMIN_URL}/auth/local`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(loginCreds),
    });

    const loginResp = await login.json();

    setCookie(null, 'jwt', loginResp.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });

    Router.push('/admin');
  }

  return (
    <Layout>
      <Heading title="Login" />
      <div className="container">
        <Form onSubmit={handleLogin}>
          <Form.Group>
            <Form.Label htmlFor="user">username/email</Form.Label>
            <Form.Control
              type="email"
              name="username"
              required
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
            <Form.Control.Feedback type="invalid">
              Wrong username
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              required
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <Form.Control.Feedback type="invalid">
              Invalid password
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </div>
    </Layout>
  );
}
