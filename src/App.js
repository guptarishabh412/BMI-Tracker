
import Input from "./components/Input";
import Chart from "./components/Chart";
import PastRecords from "./components/PastRecords";
import AppContext from "./context/AppContext";
import { useContext, useState } from "react";
import './App.css';


function App() {
  const record=JSON.parse(localStorage.getItem("record"))
  console.log(record)
  const [recordjson,setrecordjson]=useState(record)
 
  return (
    <div className="App">
         <h1 className="logo">BMI Tracker</h1>
         <AppContext.Provider value={{
          recordjson:recordjson,
          setrecordjson:setrecordjson
     }}>
            <Input/>
            <Chart/>
            <PastRecords/>

         </AppContext.Provider>
    </div>
  );
}

export default App;
