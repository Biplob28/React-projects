import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("biplob kafle");
  const [email, setEmail] = useState("biplobkafle21@gmail.com");
  const [text, setText] = useState("hello everyone");
  function submit(event) {
      event.preventDefault();
      setName(event.target[0].value);
      setEmail(event.target[1].value);
      setText(event.target[2].value);
      
      console.log(name, email,text);
    }

  return (
    <div className="form-section" onSubmit={submit}>
      <form action="" className="form">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" required />
        <label htmlFor="email">Email Id:</label>
        <input type="email" name="email" required />
        <label htmlFor="text">Text</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Submit</button>

        <div>{`name: ${name}`}</div>
        <div>{`email: ${email}`}</div>
        <div>{` text:${text}`}</div>
      </form>
      <div className="form-image">
        <img src="/src/assets/contact.svg" alt="Contact Us" />
      </div>
    </div>
  );
}

export default ContactForm;
