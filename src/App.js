
import Input from "./components/Input";
import Chart from "./components/Chart";
import PastRecords from "./components/PastRecords";
import AppContext from "./context/AppContext";
import { useContext, useState } from "react";
import './App.css';


function App() {
  const localstringdata=localStorage.getItem("record");
  const record=localstringdata?(JSON.parse(localstringdata)):[]
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
            <h2 style={{textAlign:"center"}}>7 Day Data</h2>
            <PastRecords/>

         </AppContext.Provider>
    </div>
  );
}

export default App;
