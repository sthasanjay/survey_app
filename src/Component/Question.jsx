import React, {useState} from 'react';
import { Link } from 'react-router-dom';

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
                
              <div className = "inner-div mx-auto">
              <div><p className = "title">Question</p></div>
              <div className = "que">
                 <p className = "m-0"> Who is the best Player in the world??</p>
              </div>

              <div className = "ans">
              <div className="row justify-content-between">
                     <div className="col-6 one">
                       <p> Mbappe</p>
                    </div>
                    <div className="col-6 one">
                     Neymar
                 </div>
              </div>

              <div className="row justify-content-between my-4">
                     <div className="col-4 one">
                       <p> Cristiano Ronaldo</p>
                    </div>
                    <div className="col-4 one">
                     <p>Lionel Messi </p>
                 </div>
              </div>
              </div>  

              <div className = "btn-div">
              <button className = "black">back</button>
            <button>Next</button>
            
            <button><Link to = {{pathname:"/result", state:result}}>Finish</Link></button>
        </div>
        </div>

       
        </div>
    )
}

export default Question
