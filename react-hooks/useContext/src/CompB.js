import React, { useContext } from "react";
import { NameContext } from "./App";

export default function CompB() {
  const name = useContext(NameContext);
  return <div>This is CompB {name.first + " " + name.last}</div>;
}

// import React from "react";
// import { NameContext } from "./App";

// export default function CompB() {
//   return (
//     <NameContext.Consumer>
//       {(name) => <div>This is CompB {name.first + " " + name.last}</div>}
//     </NameContext.Consumer>
//   );
// }
