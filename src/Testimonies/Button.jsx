import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Button = ({ handleClick }) => {
  return (
    <div>
      <Link to={"/addtestimony"}>
        <motion.button
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.06 }}
          className=" bg-indigo-900 p-3 font-semibold  rounded-md text-white hover:bg-blue-700 mt-4 "
          onClick={handleClick}
        >
          Share Yours😊
        </motion.button>
      </Link>
    </div>
  );
};

export default Button;
