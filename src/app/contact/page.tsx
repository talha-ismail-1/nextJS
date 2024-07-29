"use client";
import React, { useState } from 'react';
import { db, collection, doc, setDoc } from '../api/firebase';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const customDocId = formData.name;
      const docRef = doc(collection(db, 'contacts'), customDocId);
      await setDoc(docRef, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date(),
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setError(null);
    } catch (err) {
      console.error("Error adding document: ", err);
      setError(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <p className="mt-4">
        This is the Contact page of the web application. Here, you can find
        information about how to contact us.
      </p>
      {submitted && <p className="text-green-500">Form submitted successfully!</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="homeContent-section-contact-form">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
