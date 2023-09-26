import React from "react"

const Contact = () => {
  return (
    <div
      name="contact"
      className="py-16 w-full h-auto bg-[#0a192f] flex justify-center items-center p-8 "
    >
      <form
        method="POST"
        action="https://getform.io/f/ec0adf4b-5ae8-4e53-a7cd-91752fb5cd9e"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="py-4 text-gray-300">
            //Submit the form below or shoot me an email - mannynnodim@gmail.com
          </p>
        </div>
        <input
          className="p-2  bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="my-4 p-2 bg-[#ccd6f6]"
          placeholder="Message"
          rows="10"
          name="message"
        />
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
