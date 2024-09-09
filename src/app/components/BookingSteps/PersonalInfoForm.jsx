"use client";
import { useState } from "react";

const PersonalInfoForm = ({ onSubmit, onBack }) => {
  const [personalData, setPersonalData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    request: "",
  });

  const handleChange = (e) => {
    setPersonalData({ ...personalData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(personalData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="First Name*"
          name="name"
          id="name"
          value={personalData.name}
          onChange={handleChange}
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Last Name*"
          name="lastName"
          id="lastName"
          value={personalData.lastName}
          onChange={handleChange}
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Email*"
          name="email"
          id="email"
          value={personalData.email}
          onChange={handleChange}
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          placeholder="Phone*"
          type="tel"
          name="phone"
          id="phone"
          value={personalData.phone}
          onChange={handleChange}
        />
      </div>
      <div class="my-4">
        <textarea
          placeholder="Message*"
          name="request"
          id="request"
          value={personalData.request}
          onChange={handleChange}
          className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
