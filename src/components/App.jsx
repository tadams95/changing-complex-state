import React, {useState} from "react";

function App() {

  //useState hook and function to set the first name
  const [fName, setfName] = useState("");
  function handleFName(event) {
    setfName(event.target.value);
  }

  //useState hook and function to set the last name
  const [lName, setlName] = useState("");
  function handleLName(event) {
    setlName(event.target.value);
  }

//useState hook and function to set the heading
  const [headingText, setHeadingText] = useState("");
  function handleClick(event) {
    setHeadingText(fName + " " + lName);
    //function to prevent refresh and maintain state
    event.preventDefault();
  }


  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input onChange={handleFName} name="fName" placeholder="First Name" value={fName}/>
        <input onChange={handleLName} name="lName" placeholder="Last Name" value={lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
