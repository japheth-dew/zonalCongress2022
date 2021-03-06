import React from "react";
import Button from "../Testimonies/Button";

const TestimonyCard = ({ name, chapter, date, testimony, handleClick }) => {
  return (
    <div className="p-5 bg-blue-500  rounded-md shadow-md my-5">
      <h1 className="font-bold text-[1.3rem]">{name}</h1>
      <h2 className="text-[13px]">{chapter}</h2>
      <div className="bg-white p-2 rounded-md shadow-md mt-1">
        <p>{testimony}</p>
      </div>
      <p className="text-blue-900 font-semibold my-1 text-[12px] ">{date}</p>
      <Button  />
    </div>
  );
};

export default TestimonyCard;
