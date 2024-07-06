import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import emailjs from "emailjs-com"; // Import EmailJS
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service
    emailjs
      .send(
        "service_bv9hds2", // Replace with your service ID
        "template_2gkew69", // Replace with your template ID
        formData,
        "Di5sS_AwjJfLdAMIN" // Replace with your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );

    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact">
      <Fade cascade>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit} className="contact__form">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </Fade>
    </section>
  );
};

export default Contact;
