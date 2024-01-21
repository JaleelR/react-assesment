import React, {useState} from 'react';
import logo from './logo.svg';
import './Madlibs.css';
import { MadlibsForm } from './madlibform';


function Madlibs() {
  const [story, setStory] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false) 

  const getStory =  (noun, noun2, adjective, color) => {
    setStory(`There was a ${adjective} ${noun}, Who loved a ${color} ${noun2}`);
    setFormSubmitted(true);
  }

  const resetForm = () => {
    setFormSubmitted(false);
    setStory(""); 
  };
  return (
    <div className="App">
      <h1>Madlibs</h1>
      {formSubmitted ? 
        <div> 
          <p className='story'><b>{story}</b> </p><button onClick={resetForm}>Reset</button> 
        </div>
      :    <MadlibsForm getStory={ getStory} /> }

    </div>
  );
}

export default Madlibs; 
