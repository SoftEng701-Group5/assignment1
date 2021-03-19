import React from "react";
import ExpandIcon from "../../assets/icons/ExpandIcon";
import MinimizeIcon from "../../assets/icons/MinimizeIcon";
import PlusIcon from "../../assets/icons/PlusIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import RightChevronIcon from "../../assets/icons/RightChevron";
import PlayIcon from "../../assets/icons/PlayIcon";
import PauseIcon from "../../assets/icons/PauseIcon";

function getIcon(icon) {
  const map = {
    "settings": SettingsIcon,
    "expand": ExpandIcon,
    "minimize": MinimizeIcon,
    "plus": PlusIcon,
    "rightArrow": RightChevronIcon,
    "play": PlayIcon,
    "pause": PauseIcon,
  };
  if (!map[icon]) {
    return <div />;
  }

  const IconToRender = map[icon];
  return (
    <IconToRender
      className="icon"
    />
  );
}

export default getIcon;