import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Curve from "../components/Curve";
import Footer from "../components/Footer";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (name === '' || email === '' || contact === '' || message === '') {
      alert('Please fill in all fields');
      return;
    }

    // Send form data to the server (replace with your API endpoint)
    fetch('https://nc-backend-sd1q.onrender.com/api/v1/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, contact, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Form submitted successfully');
        setName('');
        setEmail('');
        setContact('');
        setMessage('');
      })
      .catch((error) => {
        alert('Form submission failed: ' + error);
      });
  };

  return (
    <>
      <Head>
        <title>Impact</title>
        <meta
          name="description"
          content="Newcycl is making household waste management easy, exciting, and rewarding."
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newcycl.com/impact" />
        <meta property="og:title" content="Impact" />
        <meta
          property="og:description"
          content="Newcycl is making household waste management easy, exciting, and rewarding."
        />
        <meta
          property="og:image"
          content="https://www.newcycl.com/newcycl-banner.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://newcycl.com/" />
        <meta property="twitter:title" content="Impact" />
        <meta
          property="twitter:description"
          content="Newcycl is making household waste management easy, exciting, and rewarding."
        />
        <meta
          property="twitter:image"
          content="https://www.newcycl.com/newcycl-banner.png"
        />
      </Head>
      <Navbar />
      <div className="relative lg:px-48 pt-24 mx-auto">
        <h1  className="px-12 text-5xl leading-none sm:mr-12">
          We've been waiting for you.
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="contact">Contact:</label>
          <input
            type="number"
            id="contact"
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          ></textarea>

          <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Submit" />
        </form>
      </div>

      <Curve />
      <Footer />
    </>
  );
};

export default ContactForm;
