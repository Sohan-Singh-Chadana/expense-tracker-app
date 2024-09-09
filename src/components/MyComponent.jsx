import { useState, useEffect } from "react";

function MyComponent() {
  const [myFunction, setMyFunction] = useState(() => {
    const storedFunction = localStorage.getItem("myFunction");
    if (storedFunction) {
      return eval("(" + storedFunction + ")"); // Parse the string back into a function
    } else {
      return () => console.log("Default function"); // Default function if nothing is stored
    }
  });

  const handleClick = () => {
    const newFunction = () => console.log("New function!");
    setMyFunction(newFunction);
    localStorage.setItem("myFunction", newFunction.toString());
  };

  return (
    <div>
      <button onClick={handleClick}>Update Function</button>
      <button onClick={myFunction}>Call Function</button>
    </div>
  );
}

export default MyComponent;
