import React from "react";
import ExpandIcon from "../../assets/icons/ExpandIcon";
import MinimizeIcon from "../../assets/icons/MinimizeIcon";
import PlusIcon from "../../assets/icons/PlusIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import RightChevronIcon from "../../assets/icons/RightChevron";
import CrossIcon from "../../assets/icons/CrossIcon";
import PlayIcon from "../../assets/icons/PlayIcon";
import PauseIcon from "../../assets/icons/PauseIcon";
import ResetIcon from "../../assets/icons/ResetIcon";
import DarkModeIcon from "../../assets/icons/DarkModeIcon";
import EditIcon from "../../assets/icons/EditIcon";

function getIcon(icon) {
  const map = {
    settings: SettingsIcon,
    expand: ExpandIcon,
    minimize: MinimizeIcon,
    plus: PlusIcon,
    rightArrow: RightChevronIcon,
    cross: CrossIcon,
    play: PlayIcon,
    pause: PauseIcon,
    reset: ResetIcon,
    lightMode: DarkModeIcon,
    edit: EditIcon,
  };
  if (!map[icon]) {
    return <div />;
  }

  const IconToRender = map[icon];
  return <IconToRender className="icon" />;
}

export default getIcon;
