import { Button } from "@mui/base";
import React, { useState } from "react";

const PauseButton = () => {
  const [pause, setPause] = useState(false);

  return (
    <div className="pause-button-div">
      <Button
        className="pause-box flex items-center"
        onClick={() => {
          setPause(!pause);
        }}
      >
        <img
          className="pause-btn mr-2"
          src={pause ? "./images/Play.png" : "./images/Pause.png"}
          alt=""
        />
        {pause ? <p className="text-white">Play</p> : <p className="text-white">Pause</p>}
      </Button>
    </div>
  );
};

export default PauseButton;
