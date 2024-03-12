import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div id="container">
        <img
          src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          id="homeimg"
          alt="homeimg"
        />
        <div id="bio">
          <h2>
            <i>Welcome to your one stop destination.</i>
          </h2>
          <p>||Find your Holiday||</p>
          <p>
            we help you plan trips,holidays,meets and much more. Choose any
            place to make it your favourite.
          </p>
          <p>Travelera provide almost 40+ of Holiday plans with free pickups</p>
        </div>
      </div>
    </>
  );
}

export default Home;
