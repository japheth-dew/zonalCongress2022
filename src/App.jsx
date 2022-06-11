import React, { useState } from "react";
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
      {showModal && <AddTestimony  />}
      <Header />
      <p className="md:px-14 ml-4 py-2 font-bold ">Recent Testimonies</p>
      <Testimony handleClick={handleClick} />
    </div>
  );
};

export default App;
