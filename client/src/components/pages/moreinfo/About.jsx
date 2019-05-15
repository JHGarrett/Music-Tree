import React from "react";


// this is the about page that will display info about the app and the creator
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
        <h2>Tech that is used</h2>
        <span>
          <a
            className="bold link"
            href="https://developers.google.com/youtube/"
            target="_blank"
          >
            Youtube API <i className="iconify" data-icon="logos:youtube" />
          </a>
        </span>
        <span>
          <a
            className="bold link"
            href="https://developers.google.com/"
            target="_blank"
          >
            Google API{" "}
            <i className="iconify" data-icon="flat-color-icons:google" />
          </a>
        </span>
        <span>
          <a
            className="bold link"
            href="https://developers.facebook.com"
            target="_blank"
          >
            Facebook API <i className="iconify" data-icon="logos:facebook" />
          </a>
        </span>
        <span>
          <a className="bold link" href="https://reactjs.org" target="_blank">
            React <i className="iconify" data-icon="logos:react" />
          </a>
        </span>
        <span>
          <a className="bold link" href="https://redux.js.org" target="_blank">
            Redux <i className="iconify" data-icon="logos:redux" />
          </a>
        </span>
        <span>
          <a
            className="bold link"
            href="https://www.mongodb.com"
            target="_blank"
          >
            MongoDB Atlas <i className="iconify" data-icon="logos:mongodb" />
          </a>
        </span>
        <span>
          <a className="bold link" href="https://nodejs.org" target="_blank">
            Node JS <i className="iconify" data-icon="fa-brands:node" />
          </a>
        </span>
        <span>
          <a className="bold link" href="https://sass-lang.com" target="_blank">
            SASS <i className="iconify" data-icon="logos:sass" />
          </a>
        </span>
        <span>
          <a
            className="bold link"
            href="https://webpack.js.org"
            target="_blank"
          >
            Webpack <i className="iconify" data-icon="logos:webpack" />
          </a>
        </span>
        <span>
          <a
            className="bold link"
            href="https://www.docker.com"
            target="_blank"
          >
            Heroku <i className="iconify" data-icon="logos:heroku" />
          </a>
        </span>
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
              <p>John Garrett</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default About;
