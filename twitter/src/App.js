import React from "react"; 
import Tweet from "./Tweet";


function App() {
  
  return(
    <div className="app">      
      <Tweet name="shubhro" message="i learn react.js" />
      <Tweet name="jon snow" message = "winter is coming" />
      <Tweet name="daenerys" message = "fire tihngs"/>
      <Tweet name="tyrion" message ="i am shortie." />
    </div>
  );
}

export default App;
