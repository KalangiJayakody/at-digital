import React, { useState } from "react";
import TopNavigation from "../Components/TopNavigation/TopNavigation";
import homeimage from "../Images/Home.png";
import homepage2 from "../Images/homepage2.png";
import homepage3 from "../Images/homepage3.png";
import Footer from "../Components/Footer/Footer";

import "../Styles/Home.css";

const faqItems = [
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },
  {
    question: "Tortor scelerisque integer?",
    answer: "Tortor scelerisque integer lorem ipsum dolor sit amet.",
  },
  {
    question: "Consectetur adipisicing elit?",
    answer: "Consectetur adipisicing elit. Iusto, beatae.",
  },
];

const Home = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div>
      <TopNavigation />
      <img src={homeimage} alt="Home" id="home-page-image" />
      <div id="middle-container">
        <p id="middle-sent">
          We crush your competitors, goals, and sales records - without the B.S.
        </p>
        <div className="button-consultation">
          <p id="button-consultation-text">GET FREE CONSULTATION</p>
        </div>
      </div>

      <div className="container" id="container-1">
        <img src={homepage2} alt="Home" id="home-page-image-2" />
        <div className="text-container">
          <p className="text-container-title">Web & Mobile App Development</p>
          <p className="text-container-body">
            We use frameworks which tailor content and engagement methods to
            respond to different intents shown by your potential customers who
            interact with your business online.
          </p>
          <div>
            <button className="button-learnmore">Learn More</button>
          </div>
        </div>
      </div>

      <div className="container" id="container-2">
        <div className="text-container" style={{ marginLeft: "40px" }}>
          <p className="text-container-title">Web & Mobile App Development</p>
          <p className="text-container-body">
            We use frameworks which tailor content and engagement methods to
            respond to different intents shown by your potential customers who
            interact with your business online.
          </p>
          <div>
            <button className="button-learnmore">Learn More</button>
          </div>
        </div>
        <img src={homepage3} alt="Home" id="home-page-image-2" />
      </div>

      <p id="faq-title">Frequently asked questions</p>

      <div id="faq-main">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-container">
            <div
              className="faq-set"
              onClick={() => toggleExpand(index)}
              style={{
                color: expanded[index] ? "#6b3cc9" : "#000000",
              }}
            >
              <p
                className="faq"
                style={{ color: expanded[index] ? "#6b3cc9" : "#000000" }}
              >
                {item.question}
              </p>
              <span
                className="faq-expand"
                style={{ color: expanded[index] ? "#6b3cc9" : "#000000" }}
              >
                {expanded[index] ? "-" : "+"}
              </span>
            </div>
            {expanded[index] && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
