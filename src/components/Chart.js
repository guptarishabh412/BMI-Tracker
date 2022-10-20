import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
//---------------------------------
import { AreaChart,Area,XAxis,YAxis,CartesianGrid,Tooltip} from "recharts";
//--------------------------

const Chart=()=>{
    const {recordjson,setrecordjson}=useContext(AppContext);
    // const {w,setw}=useState(window.innerWidth)
    // console.log(w)
    return(
    // console.log()
     
        <AreaChart width={window.innerWidth} height={300} data={recordjson}
  margin={{ top: 10, right: 50, left: 10, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
   
  </defs>
  <XAxis dataKey="date" />
  <YAxis />
  <Tooltip />
  <Area type="monotone" dataKey="bmi" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  
</AreaChart>


   
    )
}

export default Chart;
