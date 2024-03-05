import React from "react";
import axios from 'axios';
import { Card } from "./component/card";
import {ToastContainer} from 'react-toastify';
import { Form } from "./component/form";
import { get } from "react-hook-form";



function App() {

  const [data, setData] = React.useState([]);

 

  const getData = () => {
    axios.get("http://localhost:3600/todos").then((res) => {
      setData(res.data)
    });
  };


  React.useEffect(() => {
    getData();
  }, [])



  return (
    <>
    <ToastContainer />
    <div className="w-[600px] h-[50vh] translate-y-5 border-gray-600/50 border-2 shadow-lg rounded-[20px] ml-auto mr-auto flex flex-col items-center justify-center pt-[20px] pl-[20px] mb-[50px] pr-[20px] pb-[20px]">
    <Form reFetch={getData} />
    <div className="w-[500px] h-[200px] overflow-scroll">
    {data.reverse().map((item) => (
      <Card 
      reFetch={getData}
      title={item.title}
      id={item.id}
      desc={item.description}
      />
    ))}
    </div>
    </div>
    </>
  )
};



export default App;