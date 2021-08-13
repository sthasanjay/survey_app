import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import SurveyData from './SurveyData';


const Question = () => {
    const [result, setResult] = useState([
        {
            question:"1",
            result:'correct',
        },
        {
            question:"2",
            result:'incorrect',
            },
        {
            question:"3",
            result:'incorrect',
            },
        {
            question:"4",
            result:'correct',
            },
        {
            question:"5",
            result:'correct',
            }, {
            question:"6",
            result:'correct',
             }, {
            question:"7",
            result:'correct',
            

        }, {
            question:"8",
            result:'correct',
            

        }, {
            question:"9",
            result:'incorrect',
            

        }, {
            question:"10",
            result:'correct',
            }
    ])
     
    

   
  
    return (
        <div className = "container-fluid question">

       
              <div className = "heading">
              <h2>Survey</h2>
              </div>  
                
            {SurveyData.map((value)=>{
                return(
                    <div className = "inner-div mx-auto">
              <div><p className = "title">Question</p></div>
              
              <div className = "que">
                 <p className = "m-0">{value.question}</p>
              </div>
                    <div className = "container-fluid">
                    <div className = "row gx-4">
                    {value.options.map((result, index)=>{
                        console.log(result);
                        return <div className = "col-sm-6 "><div className = {index === 0 ? "option me-2 my-4  ": index === 2 ? "option me-2 my-4 " : "option ms-2 my-4 "}><p>{result.answer}</p></div></div>
                    })}
                    </div>
                    </div>
              <div className = "btn-div">
              <button className = "black">back</button>
                <button>Next</button>
                <button className = "btn-finish"><Link  className  = "finish" to = {{pathname:"/result", state:result}}>Finish</Link></button>
        </div>
        </div>
                )
                console.log(value);
            })}
             
      

       
        </div>
    )
}

export default Question
