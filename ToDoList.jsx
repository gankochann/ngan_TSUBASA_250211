import React, { useEffect, useState } from 'react'

export default function ToDoList() {

  const [ jobs, setJob] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchData = () => {
    //hien thi loading
    setIsLoading(true);

    fetch("http://localhost:3000/job") 
  .then((response) => response.json())
  .then((data) => setJob(data))
  .catch ((error) => console.log("error" , error))
  .finally(() => {
    //tat loading
    setIsLoading(false);
  })
  };

  //xoa job 
const handleDlelete = (id) => {
  fetch(`http://localhost:3000/job/${id}`, {
    method : "DELETE",
  })
  .then((response) => fetchData())
  .catch((error) => console.log(error))

}
//ham cap nhat job

const handleUpDateJob = (id) => {
  const newJob = {job: "don dep"};
  fetch(`http://localhost:3000/job/${id}`, {
    method : "PUT",
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify(newJob),
  })
  .then((response) => response.json())
  .then((data) => {
    if(data) {
      fetchData();
    }
  })
  .catch((error) => console.log(error))

}

 useEffect ( () => {
  fetchData()
 }, []);

  return (
    <div className='flex-col'>

      {/* hien thi loading */}
    {
      isLoading && <div className='loader'></div>
    }
        {/* start*/}
        {jobs.map((job) => (
          <div className='flex-row  w-[500px]  flex justify-around  border-2 border-gray-300 rounded-[5px]'>
          <div className="space-y-2 mb-4 flex justify-around" key={job.id}>
           <input className='w-[20px] h-[20px]' type='checkbox'></input>
           <label >{job.job}</label>
           </div>
           <div>
           <button className='bg-blue-400 text-white px-4 py-2 rounded' onClick={() => handleDlelete(job.id)}> xoa</button>
           <button className='bg-red-400 text-white px-4 py-2 rounded' onClick={() => handleUpDateJob(job.id)}> sua</button>
           </div>
           </div>
        ))}
        {/* end */}
    </div>
)
};
