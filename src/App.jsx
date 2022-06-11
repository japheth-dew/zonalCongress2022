import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import AddTestimony from "./Testimonies/AddTestimony";
import Testimony from "./Testimonies/Testimony";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Testimony handleClick />} />
        <Route path="/addtestimony" element={<AddTestimony />} />
      </Routes>
    </div>
  );
};

export default App;
