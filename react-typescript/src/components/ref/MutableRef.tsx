import React, { useState, useEffect, useRef } from "react";

function MutableRef() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 500);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);
  return <div>Timer {timer}</div>;
}

export default MutableRef;
