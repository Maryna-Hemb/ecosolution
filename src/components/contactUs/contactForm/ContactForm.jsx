import { Form, Formik, Field } from "formik";
import { nanoid } from "nanoid";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          <p>&#42;Full name:</p>
          <Field
            type="text"
            name="name"
            placeholder="John Rosie"
            pattern="^[a-zA-Z]+\s[a-zA-Z]+$"
            title="Username must be two words separated by space."
            required
          />
        </label>
        <label>
          <p>&#42;E-mail</p>
          <Field
            type="email"
            name="email"
            placeholder="johnrosie@gmail.com"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            title="Enter an e-mail like johnrosie@gmail.com"
            required
          />
        </label>

        <label>
          <p>&#42;Number</p>
          <Field
            type="tel"
            name="phone"
            placeholder="380961234567"
            pattern="38[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
            title="Enter a phone number 380111112222"
            required
          />
        </label>
        <label>
          <p>Message</p>
          <Field
            type="text"
            name="message"
            placeholder="My message...."
            rows="4"
          />
        </label>
        <div>
          <button type="submit">Send</button>
        </div>
      </Form>
    </Formik>
  );
};
