import React from "react";

const ContactSection = () => {
  return (
    <section>
      <div className="h-screen grid place-content-center md:grid-cols-3 md:grid-flow-col ">
        <form action="" className="w-4/5 h-[60vh] col-span-2">
          <div className=" container flex flex-col h-full justify-around  ">
            <input type="text" placeholder="name" className="input" />
            <input type="email" placeholder="email" className="input" />
            <textarea placeholder="decipstion" className="input" />
            <input
              type="submit"
              className="h-8 w-24  bg-green-400 self-center"
            ></input>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
