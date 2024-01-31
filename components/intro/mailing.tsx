"use client";

import { useState } from "react";

export default function Mailing() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState<"yes" | "no" | "">("");
  const handleSubmit = async () => {
    const requestOption = {
      body: JSON.stringify({ email: email, message: message }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch("http://localhost:3000/api", requestOption);
    if (response.ok) {
      return setSuccess("yes");
    } else {
      return setSuccess("no");
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className=" flex justify-center items-center flex-col gap-4 my-7"
    >
      {success.length > 0 && (
        <h2 className=" text-2xl text-white">
          {success === "yes" ? "Send successfully" : "Something went wrong"}
        </h2>
      )}
      <label className=" text-lg sm:text-2xl font-serif uppercase font-extrabold text-white">
        Your email
      </label>
      <input
        required
        className="bg-transparent text-lg sm:text-2xl outline-none p-2 rounded-md border-2 border-[#732020] w-[88vw] sm:w-[70vw] lg:w-[60vw] text-white"
        type="email"
        autoComplete={"false"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />
      <label className=" text-lg sm:text-2xl font-serif uppercase font-extrabold text-white">
        Message
      </label>
      <textarea
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="bg-transparent text-lg sm:text-2xl outline-none p-2 rounded-md border-2 border-[#732020] w-[88vw] sm:w-[70vw] lg:w-[60vw] text-white"
        name="message"
        style={{
          resize: "none",
          height: "300px",
        }}
      />
      <button
        type="submit"
        className=" rounded-md text-white w-fit px-4 p-2 text-2xl bg-[#732020] hover:bg-red-500"
      >
        Send me
      </button>
    </form>
  );
}
