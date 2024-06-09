import { useState } from "react";
import classNames from "classnames"

/* eslint-disable react/prop-types */
function Element({ noteCount, date, time }) {

  const [color,setColor] = useState("green");

  const bgColorClass = classNames({
    'bg-orange-300': color === 'orange',
    'bg-red-300': color === 'red',
    'bg-blue-400': color === 'blue',
    'bg-green-300': color === 'green',
    'bg-gray-300': color === 'gray',
    'bg-purple-300': color === 'purple',
    'bg-yellow-300': color === 'yellow', 
    'bg-lime-300': color === 'lime'
  });

  return (
    <>
  <div className="flex flex-warp p-3 my-2 bg-white text-black rounded-2xl justify-center gap-0 items-center ">
    <span className="font-bold">Choose Theme: </span>
    <button className="bg-orange-500 rounded-3xl text-white px-2 py-1 mx-2"
    onClick={() => setColor("orange")}
    >Orange</button>
    <button className="bg-purple-500 rounded-3xl text-white px-2 py-1 mx-2"
    onClick={() => setColor("purple")}
    >Purple</button>
    <button className="bg-red-500 rounded-3xl text-white px-2 py-1 mx-2"
    onClick={() => setColor("red")}
    >Red</button>
    <button className="bg-blue-500 rounded-3xl text-white px-2 py-1 mx-2"
    onClick={() => setColor("blue")}
    >Blue</button>
    <button className="bg-green-500 rounded-3xl text-white px-2 py-1 mx-2"
    onClick={() => setColor("green")}
    >Green</button>
    <button className="bg-gray-500 rounded-3xl text-white px-2 py-1 mx-2"
    onClick={() => setColor("gray")}
    >Gray</button>
    <button className="bg-yellow-500 rounded-3xl text-white px-2 py-1 mx-2"
    onClick={() => setColor("yellow")}
    >Yellow</button>
    <button className="bg-lime-500 rounded-3xl text-white px-2 py-1 mx-2"
    onClick={() => setColor("lime")}
    >Lime</button>
  </div>
    <div className={` m-8 p-3 rounded-xl text-white font-bold ${bgColorClass} `}>
      <span
        style={{
          color: "white",
          backgroundColor: "grey",
          padding: "5px",
          borderRadius: "10px",
        }}
      >
        note - {noteCount}
      </span>
      <br />
        <input type="text" 
        value= {date + " , "  +  time}
        readOnly
        className="bg-white text-black p-2 rounded-3xl m-3"
        />
        <br/>
        <input type="text" className="bg-blue-300 p-2 m-2 rounded-3xl" placeholder="Heading" style={{color: "brown"}}/>
      <div className="flex felx-warp justify-center items-centre">
        <textarea
          name="note"
          cols="80"
          rows="10"
          className="p-2 rounded-xl bg-yellow-100 text-black"
        >
          enter your notes here
        </textarea>
      </div>
      <div className="p-3 flex flex-warp justify-left" style={{color: "red"}}>
        <textarea 
        placeholder="Remarks here"
        cols="60"
        rows="3"
        className="bg-pink-300 p-2 rounded-2xl"
        ></textarea>

      </div>
    </div>
    </>
  );
}

export default Element;
