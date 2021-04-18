import React, { useState } from "react";

const SettingsModalShowContext = React.createContext(false);

function SettingsContextProvider(props) {
  const { children } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <SettingsModalShowContext.Provider value={[showModal, setShowModal]}>
      {children}
    </SettingsModalShowContext.Provider>
  );
}

export { SettingsModalShowContext, SettingsContextProvider };
