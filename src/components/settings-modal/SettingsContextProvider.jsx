import React, { useState } from "react";

const SettingsModalShowContext = React.createContext(false);

function SettingsContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <SettingsModalShowContext.Provider value={[showModal, setShowModal]}>
      {children}
    </SettingsModalShowContext.Provider>
  );
}

export { SettingsModalShowContext, SettingsContextProvider };
