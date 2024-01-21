import React from "react"

export const MadlibFormInfo = (noun, noun2, adjective, color, handleChange, handleSubmit) => {
    return (
    <form
        className="form"
        onSubmit={handleSubmit}>

    <input
        name="noun"
        value={noun}
        placeholder="noun"
        id=""
        onChange={handleChange}
    >
    </input>
    <input
        name="noun2"
        placeholder="noun2"
        value={noun2}
        id=""
        onChange={handleChange}
    >
    </input>
    <input
        name="adjective"
        placeholder="adjective"
        value={adjective}
        id=""
        onChange={handleChange}
    >
    </input>
    <input
        name="color"
        value={color}
        placeholder="color"
        id=""
        onChange={handleChange}
    >
    </input>
    <button> Get Story </button>
        </form>
    )
}