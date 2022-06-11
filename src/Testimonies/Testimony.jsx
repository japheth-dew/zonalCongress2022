import { orderBy, collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firbaseConfig";
import TestimonyCard from "./TestimonyCard";

const Testimony = ({ handleClick }) => {
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    const testimonyRef = collection(db, "testimony");
    const q = query(testimonyRef, orderBy("date", "desc"));
    onSnapshot(q, (snapshot) => {
      const testimonies = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTestimonies(testimonies);
      console.log(testimonies);
    });
  }, []);
  return (
    <div className=" md:px-14 px-5">
      {testimonies.length === 0 ? (
        <p> Loading Testimonies </p>
      ) : (
        testimonies.map((testimony) => (
          <div>
            <TestimonyCard
              key={testimony.name}
              name={testimony.name}
              chapter={testimony.fellowship}
              testimony={testimony.testimony}
              date={testimony.date.toDate().toDateString()}
              handleClick={handleClick}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Testimony;
