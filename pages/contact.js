import React, { useState } from "react";
import Head from "next/head";
import { X } from "react-feather";

import Navbar from "../components/Navbar";
import Curve from "../components/Curve";
import Footer from "../components/Footer";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields");
      return;
    }

    setDisabled(true);

    const formData = new FormData();
    formData.append("nc-name", name);
    formData.append("nc-email", email);
    formData.append("nc-message", message);

    // Send form data to the server (replace with your API endpoint)
    fetch("https://nc-backend-sd1q.onrender.com/api/v1/form/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setName("");
        setEmail("");
        setMessage("");
        setShowNotification(true);
      })
      .catch((error) => {
        alert("Form submission failed: " + error);
        setDisabled(false);
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
        {showNotification && (
          <div className="flex items-center justify-center mb-6">
            <div
              className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-2 rounded w-auto relative"
              role="alert"
            >
              <div className="">
                Yayy 🎉 Thanks we will get back to you soon.
              </div>
            </div>
          </div>
        )}

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
                id="nc-name"
                name="nc-name"
                value={name}
                placeholder="Enter your name"
                onChange={(event) => setName(event.target.value)}
                required
                disabled={disabled}
              />
            </div>

            <div className="mb-6">
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                id="nc-email"
                name="nc-email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                disabled={disabled}
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
                disabled={disabled}
              ></textarea>
            </div>

            <input
              className={`cursor-pointer w-full bg-nc-purple-900 text-white font-medium py-2 px-4 rounded ${
                disabled ? "opacity-30" : ""
              }`}
              type="submit"
              value="Submit"
              disabled={disabled}
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
