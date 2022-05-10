import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import background from "./lines5.png";
const Home = () => {
  const [count, setcount] = useState(0);
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();
  const img4 = useRef();
  const div1 = useRef();
  const div2 = useRef();
  const div3 = useRef();
  const div4 = useRef();
  const main = useRef();
  const number1 = useRef();
  const number2 = useRef();
  const number3 = useRef();
  const number4 = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      setcount((state) => state + 1);
      if (window.matchMedia("(max-width: 425px)").matches) {
        div1.current.style.opacity = 1;
        img1.current.style.opacity = 1;
        number1.current.style.opacity = 1;
        div4.current.style.opacity = 0;
        img4.current.style.opacity = 0;
        number4.current.style.opacity = 0;
        div2.current.style.opacity = 0;
        img2.current.style.opacity = 0;
        number2.current.style.opacity = 0;
        div3.current.style.opacity = 0;
        img3.current.style.opacity = 0;
        number3.current.style.opacity = 0;
      } else {
        div1.current.style.opacity = 0;
        img1.current.style.opacity = 0;
        number1.current.style.opacity = 0;
        main.current.style.backgroundImage = `url(${background})`;
        if (count % 4 === 0) {
          div1.current.style.opacity = 1;
          // main.current.style.backgroundImage = `url("./lines4.png")`;
          main.current.style.backgroundImage = `url(${background})`;
          img1.current.style.opacity = 1;
          number1.current.style.opacity = 1;
          div4.current.style.opacity = 0;
          img4.current.style.opacity = 0;
          number4.current.style.opacity = 0;
        } else if (count % 4 === 1) {
          div2.current.style.opacity = 1;
          main.current.style.backgroundImage = "none";
          img2.current.style.opacity = 1;
          number2.current.style.opacity = 1;
          div1.current.style.opacity = 0;
          img1.current.style.opacity = 0;
          number1.current.style.opacity = 0;
        } else if (count % 4 === 2) {
          // main.current.style.backgroundImage = `url("./lines4.png")`;
          main.current.style.backgroundImage = `url(${background})`;
          div3.current.style.opacity = 1;
          img3.current.style.opacity = 1;
          number3.current.style.opacity = 1;
          div2.current.style.opacity = 0;
          img2.current.style.opacity = 0;
          number2.current.style.opacity = 0;
          div4.current.style.opacity = 0;
          img4.current.style.opacity = 0;
          number4.current.style.opacity = 0;
        } else if (count % 4 === 3) {
          // main.current.style.backgroundImage = `url("./lines4.png")`;
          main.current.style.backgroundImage = `url(${background})`;
          div4.current.style.opacity = 1;
          img4.current.style.opacity = 1;
          number4.current.style.opacity = 1;
          div3.current.style.opacity = 0;
          img3.current.style.opacity = 0;
          number3.current.style.opacity = 0;
        }
      }
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const JoinButton = () => {
    return (
      <button className="container m-0  bg-transparent  button-container btn-lg text-white join "
        style={{zIndex: 100}}
        onClick={() => {
          window.open("https://docs.google.com/forms/d/e/1FAIpQLScS4eW9zCH9RPsJ0qmbKIU3Hm0YgYyy69zgXgFvWZiQ7hQtHQ/viewform?usp=pp_url", "_blank")
        }}
      >
        {/* <a className="nav-link mx-4" 
          href="https://docs.google.com/forms/d/e/1FAIpQLScS4eW9zCH9RPsJ0qmbKIU3Hm0YgYyy69zgXgFvWZiQ7hQtHQ/viewform?usp=pp_url"
          target="_blank"
          rel="noreferrer"
        > */}
          JOIN US
        {/* </a> */}
      </button>
    )
  }

  return (
    <div className="container-fluid ">
      <div
        ref={main}
        className="position-relative d-flex justify-content-center main-div"
      >
        {/* first div*/}
        <div className="d-flex h-100 justify-content-center align-items-center position-absolute top-0 ">
          <img
            ref={number2}
            src="images/2.png"
            className="img-fluid number3"
            alt="Home"
            style={{}}
          />

          <img
            ref={img2}
            src="images/home2.png"
            style={{}}
            className="img-fluid home-img2"
            alt="home"
          />

          <div
            ref={div2}
            className="w-50 d-flex justify-content-center align-items-center flex-column text-container"
            style={{
              opacity: 0,
              transition: "all ease-in-out 1s",
            }}
          >
            <p className="home-header  text-center">
            UNLEASH THE   {"  "}
              <span style={{ fontFamily: "Calibri" }}>&#35;</span>OUTERSPACE 
            </p>
            <p className="home-description  text-center">  
           Space metaverse is redefining experience, are you positioned?
The metaverse could potentially use virtual reality, or accelerated reality, to immerse users in an alternate world. We’re all living during a metaverse, whether we'd like to or not. The question is ― are you living in the right one? 
      
  
{" "}
            </p>
            <JoinButton />
          </div>
        </div>
        {/* first div complete */}
        {/* second div  starts*/}
        <div className="d-flex h-100 justify-content-center align-items-center  position-absolute top-0 div-1 ">
          <div
            ref={div1}
            className="w-50 d-flex justify-content-center align-items-center flex-column text-container"
            style={{
              opacity: 1,
              transition: "all ease-in-out 1s",
            }}
          >
            <p className="home-header text-center">
            UNLEASH THE WORLD OF{" "}
              <span style={{ fontFamily: "Calibri" }}>&#35;</span>METAVERSE
            </p>
            <p className="home-description text-center">
            The ultimate breakthrough – breaking the barriers into a parallel virtual reality where people could opt to live, work, learn and play continuously in real-time, in a very real way. 
   Creating unified 3D virtual worlds focused on social connections and digital real-life experiences to enhance customer service and build loyalty. 
             {" "}
            </p>
             <JoinButton />
          </div>
          <img
            ref={img1}
            src="images/home.png"
            className="img-fluid home-img1"
            alt="Home"
          />
          <img
            ref={number1}
            src="images/1.png"
            className="img-fluid number1"
            alt="Home"
          />
        </div>
        {/* second div finished */}
        {/* third div */}
        <div className="d-flex h-100 justify-content-center align-items-center position-absolute top-0">
          <div
            ref={div3}
            className="w-50 d-flex justify-content-center align-items-center flex-column  text-container"
            style={{
              opacity: 0,
              transition: "all ease-in-out 1s",
            }}
          >
            <p className="home-header text-center">
              UNLEASH THE EXPERIENCE OF{" "}
              <span style={{ fontFamily: "Calibri" }}>&#35;</span>NATURE
            </p>
            <p className="home-description text-center">
            Come fly with me and unleash the eternal nature.
Being in a virtual natural environment enables relaxation and enhances resistance to stress which can alleviate symptoms of anxiety and improves mood. Hop on and experience swimming with turtles underwater. 
{" "}
            </p>
            <JoinButton />
          </div>
          <img
            ref={img3}
            src="images/home3.png"
            className="img-fluid home-img3"
            alt="Home"
          />
          <img
            ref={number3}
            src="images/3.png"
            className="img-fluid number3"
            alt="Home"
          />
        </div>
        {/* third div finished */}
        {/* fourth div */}
        <div className="d-flex h-100 justify-content-center align-items-center position-absolute top-0">
          <div
            ref={div4}
            className="w-50 d-flex justify-content-center align-items-center flex-column  text-container"
            style={{
              opacity: 0,
              transition: "all ease-in-out 1s",
            }}
          >
            <p className="home-header text-center">
              UNLEASH THE EXPERIENCE OF{" "}
              <span style={{ fontFamily: "Calibri" }}>&#35;</span> SPIRITUALISM
            </p>
            <p className="home-description text-center">
            The man, the myth and the metaverse
Undergo war, be it Mahabharata or the 2nd world war, witness it with yourself being in one. Come live with us in the metaverse stimulation. 
{" "}
            </p>
            <JoinButton />
          </div>
          <img
            ref={img4}
            src="images/home4.png"
            className="img-fluid home-img4"
            alt="Home"
          />
          <img
            ref={number4}
            src="images/4.png"
            className="img-fluid number4"
            alt="Home"
          />
        </div>{" "}
        {/* fourth div finished*/}
      </div>
    </div>
  );
};

export default Home;
