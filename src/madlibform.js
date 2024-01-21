import React, { useState,useEffect } from "react";
import "./madlibform.css"
export const MadlibsForm = ({ getStory }) => {
    const initialState = {
        noun: "", 
        noun2: "", 
        adjective: "", 
        color: "",         
}
const [madlib, setMadlib] = useState(initialState)
 const [formSubmitted, setformSubmitted] = useState(false)  
    
    const handleChange = (e) => {
        const { name, value } = e.target;
setMadlib({...madlib, [name]: value})
}
    const handleSubmit = (e) => {
        e.preventDefault();
       getStory(madlib.noun, madlib.noun2, madlib.adjective, madlib.color)
        setMadlib(initialState);
        setformSubmitted(true);
        console.log(madlib);
    }
    return (
        <div className="container">
            <form
            className="form"
                onSubmit={handleSubmit}>
               
                <input
                    name="noun"
                    value={madlib.noun}
                    placeholder="noun"  
                    id=""
                    onChange={handleChange}
                >
                </input>
                <input
                    name="noun2"
                    placeholder="noun2" 
                    value={madlib.noun2}
                    id=""
                    onChange={handleChange}
                >
                </input>
                <input
                    name="adjective"
                    placeholder="adjective" 
                    value={madlib.adjective}
                    id=""
                    onChange={handleChange}
                >
                </input>
                <input
                    name="color"
                    value={madlib.color}
                    placeholder="color"  
                    id=""
                    onChange={handleChange}
                >
                </input>
            <button> Get Story </button>
            </form> 
        </div>
    )
}