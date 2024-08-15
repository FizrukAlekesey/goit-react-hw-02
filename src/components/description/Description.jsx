/*import { useEffect, useState } from "react";
import { Myc } from '../options/Options';

const getInitialClicks = () => {
  const savedClicks = window.localStorage.getItem("my-clicks");
  return savedClicks !== null ? JSON.parse(savedClicks) : 0;
};


export default function ClickTracker() {
  const [clicks, setClicks] = useState(getInitialClicks);
  

  
  useEffect(() => {
    window.localStorage.setItem("my-clicks", JSON.stringify(clicks));
  }, [clicks]);

  const updateClicks = () => {
    setClicks(clicks + 1)
  }
 
  const resetClicks = () => {
    setClicks(0)
  }
  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>Good</button>
      <button onClick={() => setClicks(clicks + 1)}>Neutral</button>
      <button onClick={() => setClicks(clicks + 1)}>Bad</button>
      <button onClick = {resetClicks}>Reset</button>
      
        
      
    </div>
  );
}*/

import "./Description.module.css";

export default function Description() {
  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}