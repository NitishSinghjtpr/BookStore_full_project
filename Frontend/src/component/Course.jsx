import React, { useEffect, useState } from "react";
import Card from '../../src/component/Card.jsx'
// import list from '../../public/list.json'
import {Link} from 'react-router-dom'

const Course = () => {
    const [list, setList] = useState([]);

useEffect(() => {
  fetch("/list.json")
    .then(res => res.json())
    .then(data => setList(data));
}, []);

    console.log(list);
    
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className=" mt-28 items-center justify-center text-center">
         <h1 className="text-2x font-bold md:text-4xl 
    text-gray-900 dark:text-white"
>
  We're delighted to have you{" "}
  <span className="text-pink-500">Here! :)</span>
</h1>

<p className="mt-12 text-gray-700 dark:text-gray-300">
  Lorem ipsum dolor sit amet consectetur adipisicing elit...
</p>
          <Link to="/">
          <button className=" bg-pink-500 text-white rounde-md mt-6 px-4 pt-2 hover:bg-pink-700 rounded-lg p-2  ">
            Back</button>
          </Link>
        </div>
        <div className=" mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 ">
            {
                list.map((item)=>(
                    <Card key={item.id} item={item}/>
                ))
            }
        </div>
      </div>
    </>
  );
};

export default Course;
