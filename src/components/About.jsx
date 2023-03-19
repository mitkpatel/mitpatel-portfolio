import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl pt-10">
          As a front-end developer with 3 years of experience, I am passionate
          about creating beautiful, responsive, and user-friendly web
          applications that provide seamless experiences to users. I have a
          strong background in HTML, CSS, JavaScript, and other front-end
          technologies, and I am constantly expanding my skills and knowledge to
          stay up-to-date with the latest industry trends.
        </p>

        <br />

        <p className="text-xl">
          I am a front-end developer currently working with Siemens company,
          where I have been fortunate to work on a variety of projects ranging
          from small-scale websites to complex web applications. I work closely
          with our design team to ensure that our products not only look great
          but also provide intuitive and seamless user experiences. I am proud
          to be a part of a team that is dedicated to delivering high-quality
          products that meet the needs of our customers.
        </p>
      </div>
    </div>
  );
};

export default About;
