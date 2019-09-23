import React from 'react';
import './App.css';
import Jobs from './components/Jobs'
import Header from './components/Header'
import Search from './components/Search'
import Image from './components/Image'

// const jobs = [

//   {title:'REACT', company:"Google"},
//   {title:'REACT', company:"Google"},
//   {title:'REACT', company:"Google"}

// ]

const JOB_API = "http://localhost:3001/jobs"

const fetchApi = async (updateCb) => {
  const res = await fetch(JOB_API)
  const json = await res.json()
  updateCb(json)
  console.log({json})
}


function App() {
  const [jobList, setJob] = React.useState([])

  React.useEffect(()=>{
    fetchApi(setJob)
  },[])
  

  return (
   <Header>
   <Image/>
    <Search/>
     <Jobs jobs={jobList} />
   </Header>
   
  );
}

export default App;
