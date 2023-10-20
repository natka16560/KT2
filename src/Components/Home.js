import React from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            С нами вы сможете сделать самый надежный пароль!
          </h1>
          <p className="primary-text">
            Наш способ проверки пароля является одним из самых надежный. Нашим
            сайтом пользуется более 100000 пользователей!
          </p>
          <button className="secondary-button">
            Узнать больше <FiArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
