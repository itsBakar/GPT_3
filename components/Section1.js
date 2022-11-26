import Image from "next/image";
import React from "react";
import ai from "../public/assets/ai.png";
import people from "../public/assets/people.png";

const Section1 = () => {
  return (
    <div className="md:flex md:flex-row sm:flex sm:flex-col-reverse md:items-center sm:items-center sm:justify-center">
      <div>
        <h1 className="sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-shocking-purple to-light-orange">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="text-light-blue text-xl text-left mt-10">
          Yet bed any for traveling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="mt-10">
          <input
            className="px-10 py-4 rounded-l sm:max-sm max-w-md bg-dark-blue text-white focus:outline-none"
            placeholder="Your Email Address"
          ></input>
          <button className="text-1xl text-white bg-bright-orange px-10 py-4 rounded-r font-normal">
            Get Started
          </button>
        </div>
        <div className="mt-10 flex items-center">
          <Image src={people} alt="people" />
          <p className="text-xs text-white ml-3">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div>
        <Image height={1800} src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Section1;
