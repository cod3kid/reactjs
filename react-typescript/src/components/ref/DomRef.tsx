import React, { useEffect, useRef } from "react";

function DomRef() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} value="" onChange={() => {}} />
    </div>
  );
}

export default DomRef;
