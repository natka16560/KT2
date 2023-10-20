import React from "react";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-text-container">
        <p className="primary-subheading">О нас</p>
        <h1 className="primary-heading">Почему именно мы?</h1>
        <p className="primary-text">
          Наш сервис работает 24/7! С нами ваш пароль точно будет самым надежным
          из всех!
        </p>
        <p className="primary-text">
          Ну а вообще поставьте нам пожалуйста баллы :(
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Узнать больше</button>
        </div>
      </div>
    </div>
  );
};

export default About;
