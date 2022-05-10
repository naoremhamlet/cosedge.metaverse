// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Map from "./pages/map/Map";
import Design from "./pages/design/Design";
import Advent from "./pages/adventure/Advent";
import About from "./pages/about/About";
import Story from "./pages/story/Story";
import Footer from "./pages/footer/Footer";
import Application from "./pages/applications/Applications";
import Navbar from "./pages/home/Navbar";
// import Community from "./pages/community/Community";
import Discord from "./pages/community/discord/Discord";
import Facebook from "./pages/community/facebook/Facebook";
import LinkedIn from "./pages/community/linked/Linked";
import Instagram from "./pages/community/insta/Instagram";
import Contact from './pages/contact/Contact';

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "5px",
  transition: transitions.SCALE,
};

function App() {
  return (
    <div
      className="App"
      style={{
        overflowX: "hidden",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <Application />
              <br></br>
              <br></br>
              <About />
              <br></br>
              <br></br>
              <Advent />
              <Design />
              <br></br>
              <br></br>
              <Story />
              <Map />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Navbar />
              <AlertProvider template={AlertTemplate} {...options}>
                <Contact />
              </AlertProvider>
              <Footer />
            </>
          } />
          <Route path="/discord" element={<Discord />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/linkedin" element={<LinkedIn />} />
          <Route path="/instagram" element={<Instagram />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
