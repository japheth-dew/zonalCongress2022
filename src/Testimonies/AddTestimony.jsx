import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Timestamp } from "firebase/firestore";

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

  const handlePublish = () => {
    if (!formData.name || !formData.fellowship || !formData.testimony) {
      alert("Please fill all the fields");
      return;
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute w-screen h-screen  bg-blue-500 top-[10rem] "
    >
      <div className="flex flex-col items-center mt-10">
        <form className=" border-[3px] border-white py-5 px-2 rounded-md flex flex-col gap-4 md:w-[50%] w-[90%]">
          <input
            name="name"
            value={formData.name}
            onChange={(e) => handleChnage(e)}
            placeholder="Full Name"
            className="p-2 rounded-md w-full"
          />
          <input
            name="fellowship"
            value={formData.fellowship}
            onChange={(e) => handleChnage(e)}
            placeholder="Fellowship Chapter"
            className="p-2 rounded-md w-full"
          />

          <textarea
            name="testimony"
            onChange={(e) => handleChnage(e)}
            value={formData.testimony}
            name="testimony"
            id=""
            cols="30"
            rows="7"
            className="p-2 rounded-md w-full"
            placeholder="Share Your Testimony"
          ></textarea>

          <button
            // whileTap={{ scale: 0.9 }}
            className="w-full bg-blue-900 p-2 font-bold text-white rounded-md hover:bg-blue-700"
            onClick={handlePublish}
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default AddTestimony;
