import React from "react";
import "./story.css";
const Story = () => {
  return (
    <div className="mt-5 pt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <p className="story-header">
              OUR  UNIVERSE
              {/* <span style={{ fontFamily: "calibri", fontWeight: "bold" }}>
                &#39;
              </span> */}
               
            </p>
            <p className="story-desc">
              Tells the story of our founder Aayush , he thinks about what we
              can do in the online world
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-center flex-column justify-content-center">
            <p className="story-subdescription-first mt-5 pt-3">
              it all started with a child's dream he asked --"What it would be like to live with Gods and watch them using thier extraordinary powers to change and manipulate the world, were they really so strong,  
              I Hope one day someone creates a time machine so that I
              can go and check how does god feel like, and How it would be like for kings to run a kingdom all by himself". 
            </p>
            <p className="story-subdescription-second mt-5">
            The metaverse we design on myths would offer different methodologies of proving stimulating experiences of great events like Mahabharata, Ramayana and not just events but also great religious books like The Bhagwat Geeta, 
            which would surely bring out devotion in people for their religion. The uniqueness and specific accounts of god/ goddesses or preternatural beings involved in extraordinary events or circumstances in a time that's unidentified 
            but which is understood as existing apart from ordinary human experiences and traditions.
              {" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
