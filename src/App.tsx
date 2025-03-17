// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./assets/logo.png";
import flowersTop from "./assets/border-top-flowers.png";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="sub-wrapper">
          <div className="border-top-img">
            <img src={flowersTop} className="flowers-top" alt="" />
          </div>
          <div className="content-container">
            <div className="logo-container">
              <img src={logo} className="logo-img" alt="" />
            </div>
            <div className="message-container">
              <span>
                "If you're looking for a place where the game feels calm — where
                you can just play without the pressure or the drama —
                <b>Halcyon Concord</b> might be what you're looking for.
                <br />
                <br />
                We're not about rushing or competition. Here, it's all about
                taking things at your own pace, finding comfort in a guild where
                respect, friendship, and loyalty are what matter most. There's
                no need to share your real-life worries — we keep things simple,
                focused on the game and the moments we create together. Whether
                you're the type to quietly grind, explore new content, or just
                log in to relax, you'll find a space here where you can be
                yourself — no expectations, no demands.
                <br />
                <br />
                Our events? They happen when they happen — maybe every other
                month, maybe less. No pressure, just something to enjoy together
                when the time feels right.
                <br />
                <br />
                We're not a place for those just passing through. If you're
                someone looking to build real connections — even if only within
                the game — you'll find that here.
                <br />
                <br />
                If you're interested in joining, you can find me on
                <b> International 1 Server</b>. Visit my land — <b>6220001</b> at <b>18:00 GMT+8</b>,
                from <b>Sunday to Friday</b>.
                <br />
                <br />
                If the server is full, I'll be at the <b>Global Server</b> instead."
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;