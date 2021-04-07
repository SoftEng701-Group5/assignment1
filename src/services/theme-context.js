import React from "react";

const DarkModeContext = React.createContext({
  isDarkMode: true,
  setIsDarkMode: () => {},
});
export default DarkModeContext;
