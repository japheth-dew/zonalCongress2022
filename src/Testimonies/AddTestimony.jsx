import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const AddTestimony = ({ handleClick }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute w-screen h-screen  bg-blue-500 top-[10rem] "
    >
      <div className="flex flex-col items-center mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" border-[3px] border-white py-5 px-2 rounded-md flex flex-col gap-4 md:w-[50%] w-[90%]"
        >
          <input
            {...register("firstName")}
            placeholder="Full Name"
            className="p-2 rounded-md w-full"
          />
          <input
            {...register("fellowship")}
            placeholder="Fellowship Chapter"
            className="p-2 rounded-md w-full"
          />

          <textarea
            {...register("testimony", { required: true, maxLength: 200 })}
            name="testimoty"
            id=""
            cols="30"
            rows="7"
            className="p-2 rounded-md w-full"
            placeholder="Share Your Testimony"
          ></textarea>

          <motion.input
            whileTap={{ scale: 0.9 }}
            className="w-full bg-blue-900 p-2 font-bold text-white rounded-md hover:bg-blue-700"
            type="submit"
          />
        </form>
      </div>
    </motion.div>
  );
};

export default AddTestimony;
