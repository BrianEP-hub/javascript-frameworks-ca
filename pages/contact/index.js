import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import ContactForm from '../../components/forms/contactForm';

//contact form with 5 inputs, firstName, lastName, eMail, subject, message (form validation)
export default function Contact() {
  return (
    <Layout>
      <Heading title="Contact" />
      <ContactForm />
    </Layout>
  );
}
