import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about us spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At rerum
            repellat voluptas distinctio fugiat, ut quo totam placeat debitis.
          </p>
          <button className="custom__button" type="button">
            Know More
          </button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="knife image" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about us spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At rerum
            repellat voluptas distinctio fugiat, ut quo totam placeat debitis.
          </p>
          <button className="custom__button" type="button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
