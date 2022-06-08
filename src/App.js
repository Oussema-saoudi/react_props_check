import React from "react";
import "./App.css";
import Profile from "./profile/Profile";
import Ousama from "./img_saoudi.jpg";
const HandleName = (props) => {
  return alert("Hello! the profile user is Ousama Saoudi");
};

function App() {
  return (
    <div style={{ color: "aqua", textAlign: "center" }}>
      <HandleName />
      <Profile
        fullName="Ousama Saoudi"
        bio="Currently  looking for a new opportunity with a first experience as a junior embedded software engineer at sagemcom software and technologies working in the Gateway department I think my profile would fit perfectly with your recent job requirements.
      Motivated and always looking to learn from the best, working at primatec would be an enriching experience for me."
        profession="Industrial electronics engineer"
      >
        <img width={400} height={300} src={Ousama} alt="imageinSource" />
      </Profile>
    </div>
  );
}

export default App;
