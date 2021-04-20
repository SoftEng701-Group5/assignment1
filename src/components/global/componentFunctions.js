import React from "react";
import ExpandIcon from "../../assets/icons/ExpandIcon";
import MinimizeIcon from "../../assets/icons/MinimizeIcon";
import PlusIcon from "../../assets/icons/PlusIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import RightChevronIcon from "../../assets/icons/RightChevron";
import CrossIcon from "../../assets/icons/CrossIcon";
import PlayIcon from "../../assets/icons/PlayIcon";
import PauseIcon from "../../assets/icons/PauseIcon";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import ResetIcon from "../../assets/icons/ResetIcon";
import DarkModeIcon from "../../assets/icons/DarkModeIcon";
import EditIcon from "../../assets/icons/EditIcon";
import LightModeIcon from "../../assets/icons/LightModeIcon";

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
    logout: LogoutIcon,
    reset: ResetIcon,
    edit: EditIcon,
    lightMode: LightModeIcon,
    darkMode: DarkModeIcon,
  };
  if (!map[icon]) {
    return <div />;
  }

  const IconToRender = map[icon];
  return <IconToRender className="icon" />;
}

export default getIcon;
