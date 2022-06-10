import { orderBy, collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firbaseConfig";
import TestimonyCard from "./TestimonyCard";

const Testimony = ({ handleClick }) => {
  const [testimonies, setTestimonies] = useState([1]);

  useEffect(() => {
    const testimonyRef = collection(db, "zonalcongress");
    const q = query(testimonyRef, orderBy("date", "desc"));
    onSnapshot(q, (snapshot) => {
      console.log(snapshot.docs);
    });
  });
  return (
    <div className=" md:px-14 px-5">
      {testimonies.length === 0 ? (
        <p> No Testimonies found </p>
      ) : (
        testimonies.map((testimony) => (
          <div>
            <TestimonyCard
              name={"name"}
              chapter={"chapter"}
              testimony={"lotesimony "}
              date={"date"}
              handleClick={handleClick}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Testimony;
