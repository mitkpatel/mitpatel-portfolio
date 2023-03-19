import React from "react";
import bucketlistVacation from "../assets/portfolio/bucketlistVacation.png";
import netflixHome from "../assets/portfolio/netflixHome.png";
import searchAPI from "../assets/portfolio/searchAPI.png";
import todoList from "../assets/portfolio/todoList.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bucketlistVacation,
      url: "https://bucketlistvacation.netlify.app/",
    },
    {
      id: 2,
      src: netflixHome,
      url: "https://netflix-mit.netlify.app/",
    },
    {
      id: 3,
      src: searchAPI,
      url: "https://apifetch-mit.netlify.app/",
    },
    {
      id: 4,
      src: todoList,
      url: "https://todo-list-mit.netlify.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto"
    >
      <div className="pt-20">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
          <div className="pb-0">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
          </div>
          <p className="py-6">Check out some of my work right here</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, url }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <a href={url} target="blank">
                    <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105">
                      View demo
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
