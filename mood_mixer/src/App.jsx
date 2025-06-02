import React from "react";
import "./App.css";

import Slider from "@mui/material/Slider";

function App() {
  return (
    <div>
      <h1>Mood Mixer</h1>
      <div className="mood_input">
        <div className="slider_row">
          <label>Happy</label>
          <div className="slider_container">
            <Slider
              size="large"
              defaultValue={70}
              aria-label="Happy"
              valueLabelDisplay="auto"
            />
          </div>
        </div>
        <div className="slider_row">
          <label>Sad</label>
          <div className="slider_container">
            <Slider
              size="large"
              defaultValue={70}
              aria-label="Sad"
              valueLabelDisplay="auto"
            />
          </div>
        </div>
        <div className="slider_row">
          <label>Angry</label>
          <div className="slider_container">
            <Slider
              size="large"
              defaultValue={70}
              aria-label="Angry"
              valueLabelDisplay="auto"
            />
          </div>
        </div>
      </div>

      <div className="mood_viewer"></div>
    </div>
  );
}

export default App;
