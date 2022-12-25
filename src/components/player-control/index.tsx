import React from "react";
import ControlMedia from "./components/control-media";
import ControlCenter from "./components/control-center";
import ControlRight from "./components/control-right";

const PlayerControl:React.FC = () => {
  return (
    <div className="playercontrol">
      <div className="playercontrol-media">
        <ControlMedia/>
      </div>
      <div className="playercontrol-center">
        <ControlCenter />
      </div>
      <div className="playercontrol-right">
        <ControlRight />
      </div>
    </div>
  )
}

export default PlayerControl;