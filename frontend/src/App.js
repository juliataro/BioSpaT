import React, { useState } from "react";

import { GlobalProvider } from "./Context";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import { Procedures } from "./Pages/Procedures";
import { About } from "./Pages/About";
import LogRocket from "logrocket";

LogRocket.init("mfxcuw/biospa-new");
LogRocket.identify("mfxcuw/biospa-new", {
  name: "Julia Taro",
  email: "julia.taro@gmail.com",
});

function App() {
  // Context useStates for Passing globally through components
  const [targetsValue, setTargetsValue] = useState([]); // Catches chosen Targets in Dropdown
  const [symptomsValue, setSymptomsValue] = useState([]); // Catches chosen Symptoms in Dropdown
  const [diseasesValue, setDiseasesValue] = useState([]); // Catches chosen Diseases in Dropdown
  const [proceduresValue, setProceduresValue] = useState([]); // Catches chosen Diseases in Dropdown
  const [pricesValue, setPricesValue] = useState([]); // Catches chosen Diseases in Dropdown
  const [procedures, setProcedures] = useState([]); // Catches chosen Diseases in Dropdown

  // useStates as one object for ClobalContext.Proveider value
  const allProps = {
    diseasesValue,
    setDiseasesValue,
    targetsValue,
    setTargetsValue,
    symptomsValue,
    setSymptomsValue,
    proceduresValue,
    setProceduresValue,
    pricesValue,
    setPricesValue,
    procedures,
    setProcedures,
  };

  return (
    <>
      {/* Global Context provider defined in Context.js */}

      <GlobalProvider value={allProps}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Procedures />} />
            <Route exact path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
