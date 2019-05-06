import React from "react";

const About = props => (
  <div className={props.launch ? "page-wrapper nodash" : "page-wrapper"}>
    <div className="about-wrapper">
      <h1>Welcome!</h1>
      <p>
        Music-Tree is a video browser platform to watch and listen to your
        favorite music and provide an immersive experience!
      </p>

      <div className="divider" />

      <div className="about-container">
        <h2>The App</h2>
        {/* <p>this is where i will put a description of the app and </p> */}
      </div>

      <div className="divider" />

      <div className="about-container">
        <h2>Tech that is used</h2>
        <span>
          YouTube API
          <a
            className="bold link"
            href="https://developers.google.com/youtube/"
            target="_blank"
          >
            Youtube <i className="fab fa-youtube" />
          </a>
        </span>
        {/* <span>list the rest of the tech that was used</span> */}
      </div>

      <div className="divider" />

      <div className="about-container">
        <div className="team-grid">
          <h2 className="section-title">Developer</h2>
          <a
            href="https://github.com/JHGarrett"
            target="_blank"
            className="about-teammate"
          >
            <div className="team-member">
              <div className="circle-icon">
                <img
                  className="avatar"
                  src="https://avatars0.githubusercontent.com/u/44414269?s=400&u=4b07d7ea562ec9d8d8a8065f50b137b932ece190&v=4"
                />
              </div>
              <p>John</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default About;
