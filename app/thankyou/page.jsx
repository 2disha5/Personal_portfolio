import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="bg-[#27272c] text-white p-10 rounded-xl max-w-md text-center shadow-lg">
        <h1 className="text-4xl font-bold text-accent mb-4">Thank You!</h1>
        <p className="text-white/70 text-lg mb-6">
          Your message has been sent successfully. I’ll get back to you soon!
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-accent text-[#27272c] rounded hover:bg-opacity-80 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default page;
