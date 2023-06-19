import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Curve from "../components/Curve";
import Footer from "../components/Footer";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (name === "" || email === "" || contact === "" || message === "") {
      alert("Please fill in all fields");
      return;
    }

    // Send form data to the server (replace with your API endpoint)
    fetch("https://nc-backend-sd1q.onrender.com/api/v1/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, contact, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Form submitted successfully");
        setName("");
        setEmail("");
        setContact("");
        setMessage("");
      })
      .catch((error) => {
        alert("Form submission failed: " + error);
      });
  };

  return (
    <>
      <Head>
        <title>Contact | Newcycl</title>
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
        <h1 className="px-12 text-5xl leading-none text-center">
          We've been waiting for you.
        </h1>
        <div className="px-12 text-md font-normal text-center mt-4">
          We want to hear from you. Let us know how we can help.
        </div>

        <div className="mt-12 w-full max-w-md px-12 sm:px-0 m-auto">
          <form className="" onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                value={name}
                placeholder="Enter your name"
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <textarea
                id="message"
                placeholder="Enter your message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              ></textarea>
            </div>

            <input
              className="cursor-pointer w-full bg-nc-purple-900 text-white font-medium py-2 px-4 rounded"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>

      <Curve />
      <Footer />
    </>
  );
};

export default ContactForm;
