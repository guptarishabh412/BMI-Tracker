import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";

const Input=()=>{
    const [height,setheight]=useState()
    const [weight,setweight]=useState()
    const {recordjson,setrecordjson}=useContext(AppContext);
    const changehandler=(e)=>{
        if(e.target.id=="height"){
            setheight(e.target.value)
        }
        else{
            setweight(e.target.value)
        }
    }
    const handleclick=()=>{
    console.log(window.innerWidth)

        if(recordjson.length<7 && height && weight){
        setheight("")
        setweight("")
        const date=new Date
      
        let bmi=weight/(height*height)
        bmi=bmi.toFixed(2)
        const js={
            id:date.getTime(),
            date:date.toLocaleDateString(),
            weight:weight,
            height:height,
            bmi:bmi
        }
        
        setrecordjson([...recordjson,js])

    }

    }
    useEffect(()=>{
        console.log(recordjson)
        localStorage.setItem("record",JSON.stringify(recordjson))
    },[recordjson])

    return(
    <div className="inputelement">
        <div className="inputContainer">
            
            <div className="weight">
                <p>Weight in kg</p>
               <input type="number" value={weight} id="weight" onChange={changehandler} placeholder="Weight"></input>
            </div>
            <div className="height">
                <p>Height in m</p>
               <input type="number" value={height} id="height" onChange={changehandler} placeholder="height"></input>
            </div>
        </div>
        
        <button onClick={handleclick} className="calculatebutton">Calculate BMI</button>
   </div>

        
    )
}

export default Input;