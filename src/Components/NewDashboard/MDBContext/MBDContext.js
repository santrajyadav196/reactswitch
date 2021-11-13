import React, { useState, createContext } from "react";

export const MDBCreateContext = createContext();

export const MBDProvider = (props) => {
  const [global, setGlobal] = useState({
    closeDialog: true,
    closeProposal: false,
    closeContracts: true,
    hamburgerMenu: "My Desk",
    createContractsIsSetup: false,
  });

  return (
    <MDBCreateContext.Provider value={[global, setGlobal]}>
      {props.children}
    </MDBCreateContext.Provider>
  );
};
