import React from "react";
import { request } from "./config/request";
import { Card } from "./component/card";
import {ToastContainer} from 'react-toastify';
import { Form } from "./component/form";




function App() {

  const [data, setData] = React.useState([]);

 

  const getData = () => {
    request.get("/todos").then((res) => {
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