import React from 'react'


const Result = (props) => {
    return (
        <div className = "container-fluid result">
          <div className = "heading">
               <h2>Result</h2>
                {console.log(props.location.state)}
                
               
              
         </div>

          <div className = "title">
                 <h1>Total score : 7</h1>
          </div>

          <div className = "res_value">
              {props.location.state.map((value)=>{
                  return(
                    <p>question {value.question}:<img src = {`./img/${value.result}.png`} alt = ""/></p>
                  )
                  
              })}
  
          
              
          </div>
            
        </div>
    )
}

export default Result
