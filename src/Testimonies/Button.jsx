import React from "react";
import { motion } from "framer-motion";

const Button = ({ handleClick }) => {
  return (
    <div>
      <a href="https://wa.me/2348113199535?text=Pls%20provide,%20name%20fellowship%20chapter,%20testimony">
        <motion.button
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.06 }}
          className=" bg-indigo-900 p-3 font-semibold  rounded-md text-white hover:bg-blue-700 mt-4 "
          onClick={handleClick}
        >
          Send Us your Testimony
        </motion.button>
      </a>
    </div>
  );
};

export default Button;
