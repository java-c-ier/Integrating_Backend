import React, { useEffect } from "react";

function Services() {

  useEffect(() => {
    console.log("Service Component is Created");

    return () => console.log('Service Component is Deleted');
  });

  return (
    <div className="p-10">Services</div>
  );
}

export default Services;
