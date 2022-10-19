

import { useContext } from "react";
import AppContext from "../context/AppContext";

const PastRecords=()=>{
    const {recordjson,setrecordjson}=useContext(AppContext);

    const deleterecord=(e)=>{
         const id=e.target.id;
         const index=recordjson.findIndex(i=>i.id==id)
        //  console.log(index)
         const js=recordjson
         js.splice(index,1)
         console.log(js)
         setrecordjson([...js])
    }

    return(
        <div className="pastrecordcontainer">
        {recordjson.length?(
            recordjson.map(i=>{
                return (<div key={i.id} className="record">  
                      <div className="delete" id={i.id} onClick={deleterecord}>×</div>
                              <div>BMI:{i.bmi}</div>
                              <div className="otherdetail">
                                <p>Weight: {i.weight} Kg</p>
                                <p>Height: {i.height} m</p>
                                <p>Date: {i.date}</p>
                              </div>
                         </div>
                )})):<div class="empty">Add record <span style={{color:"red"}}>!</span></div>
        }
        </div>
    )
}

export default PastRecords;