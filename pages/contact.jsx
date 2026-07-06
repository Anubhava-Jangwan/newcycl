import React, { useState } from "react";
import Head from "next/head";
import { X } from "react-feather";

import Navbar from "../components/Navbar";
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

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 pt-28 pb-16 font-source-sans">
        {showNotification && (
          <div className="flex items-center justify-center mb-10">
            <div
              className="bg-emerald-50 border border-emerald-500/20 text-ink-dark px-6 py-4 rounded-2xl w-full max-w-md text-center shadow-premium"
              role="alert"
            >
              <div className="text-sm font-semibold">
                Yayy 🎉 Thanks! We will get back to you soon.
              </div>
            </div>
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink-dark tracking-tight leading-none text-center mb-4">
          We've been waiting for you.
        </h1>
        <div className="text-sm sm:text-base text-body/80 text-center font-light max-w-md mx-auto mb-14">
          We want to hear from you. Let us know how we can help.
        </div>

        <div className="w-full max-w-md mx-auto">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                className="w-full bg-white border border-emerald-500/10 rounded-2xl py-3.5 px-4 text-ink-dark placeholder-muted/65 focus:outline-none focus:ring-2 focus:ring-accent-green/30 focus:border-accent-green transition duration-200 shadow-sm"
                id="nc-name"
                name="nc-name"
                value={name}
                placeholder="Enter your name"
                onChange={(event) => setName(event.target.value)}
                required
                disabled={disabled}
              />
            </div>

            <div>
              <input
                type="email"
                className="w-full bg-white border border-emerald-500/10 rounded-2xl py-3.5 px-4 text-ink-dark placeholder-muted/65 focus:outline-none focus:ring-2 focus:ring-accent-green/30 focus:border-accent-green transition duration-200 shadow-sm"
                placeholder="Enter your email"
                id="nc-email"
                name="nc-email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                disabled={disabled}
              />
            </div>

            <div>
              <textarea
                id="message"
                placeholder="Enter your message"
                rows={4}
                className="w-full bg-white border border-emerald-500/10 rounded-2xl py-3.5 px-4 text-ink-dark placeholder-muted/65 focus:outline-none focus:ring-2 focus:ring-accent-green/30 focus:border-accent-green transition duration-200 shadow-sm resize-none"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
                disabled={disabled}
              ></textarea>
            </div>

            <input
              className={`w-full bg-accent-green hover:bg-accent-green-hover text-white font-bold tracking-wider uppercase py-3.5 px-6 rounded-2xl shadow-premium cursor-pointer transition-all duration-300 active:scale-98 ${
                disabled ? "opacity-30 cursor-not-allowed" : ""
              }`}
              type="submit"
              value="Submit"
              disabled={disabled}
            />
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactForm;
