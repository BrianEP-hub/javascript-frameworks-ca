import { Form, Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import styles from '../../styles/Form.module.css';

export default function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Card className={styles.formCard}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="firstName">First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              id="firstName"
              min={3}
              required
            />
            <Form.Control.Feedback type="invalid">
              First name needs to be atleast 3 characters long
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="lastName">Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              id="lastName"
              min={4}
              required
            />
            <Form.Control.Feedback type="invalid">
              Last name needs to be atleast 4 characters long
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control type="email" name="email" id="email" required />
            <Form.Control.Feedback type="invalid">
              Check that you have typed the correct format for email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="subject">Subject</Form.Label>
            <Form.Select name="subject" id="subject" required>
              <option value={1}>Technical</option>
              <option value={2}>Game</option>
              <option value={3}>Other</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              You have to select a subject
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="message">Your Message</Form.Label>
            <Form.Control as="textarea" rows={5} cols={10} min={10} required />
            <Form.Control.Feedback type="invalid">
              Message has to be atleast 10 characters long
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" className={styles.btn}>
            Send
          </Button>
        </Form>
      </Card>
    </>
  );
}
