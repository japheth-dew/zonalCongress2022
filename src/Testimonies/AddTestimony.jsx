import React, { useState } from "react";

import { db } from "../firbaseConfig";
import { motion } from "framer-motion";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

const AddTestimony = () => {
  const [formData, setFormData] = useState({
    name: "",
    fellowship: "",
    testimony: "",
    date: Timestamp.now().toDate(),
  });

  const handleChnage = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePublish = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.fellowship || !formData.testimony) {
      alert("Please fill all the fields");
      return;
    }
    const name = formData.name;
    const fellowship = formData.fellowship;
    const testimony = formData.testimony;
    const date = formData.date;

    const testimonyCollRef = collection(db, "testimony");
    addDoc(testimonyCollRef, { name, fellowship, testimony, date })
      .then((response) => {
        console.log(response);
        alert("Testimonies added Successfully!");
        window.location = "/";
      })
      .catch((error) => {
        console.log(error.message);
      });

  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" w-full h-full  shadow-lg "
    >
      <div className="flex flex-col items-center mt-10">
        <form className=" border-[3px] border-blue-500 py-5 px-2 rounded-md flex flex-col gap-4 md:w-[50%] w-[90%]">
          <input
            name="name"
            value={formData.name}
            onChange={(e) => handleChnage(e)}
            placeholder="Full Name"
            className="p-2 rounded-md w-full border-blue-500 border-[3px]"
          />
          <input
            name="fellowship"
            value={formData.fellowship}
            onChange={(e) => handleChnage(e)}
            placeholder="Fellowship Chapter"
            className="p-2 rounded-md w-full border-blue-500 border-[3px]"
          />

          <textarea
            name="testimony"
            onChange={(e) => handleChnage(e)}
            value={formData.testimony}
            name="testimony"
            id=""
            cols="30"
            rows="7"
            className="p-2 rounded-md w-full border-blue-500 border-[3px]"
            placeholder="Share Your Testimony"
          ></textarea>
          <Link to={"/"}>
            <button
              // whileTap={{ scale: 0.9 }}
              className="w-full bg-blue-900 p-2 font-bold text-white rounded-md hover:bg-blue-700"
              onClick={handlePublish}
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </motion.div>
  );
};

export default AddTestimony;
