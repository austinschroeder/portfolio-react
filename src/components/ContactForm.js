import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xknkrapl');
  if (state.succeeded) {
    return <p>Get back to you soon!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email"></label>
      <input id="email" type="email" name="email" placeholder="Your email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" placeholder="Your message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
