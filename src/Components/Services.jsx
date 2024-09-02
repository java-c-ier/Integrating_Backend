import React, { useEffect, useState } from "react";

function Services() {

  const [first, setFirst] = useState('This is normal data');
  const [second, setSecond] = useState('This is important data');

  useEffect(() => {
    console.log("Service Component is Created");

    return () => console.log('Service Component is Deleted');
  });

  return (
    <div className="p-10">Services</div>
  );
}

export default Services;
