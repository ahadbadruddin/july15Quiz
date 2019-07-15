import React from 'react';
import './Boxes.css'


function Boxes(){
    return(

     <body>
          <button onClick={(event)=>{
             var cell1 = document.getElementById("cell1")
             cell1.innerHTML+= Math.ceil(Math.random() * Math.ceil(6))

             var cell2 = document.getElementById("cell2")
             cell2.innerHTML+= Math.ceil(Math.random() * Math.ceil(6))

             var cell3 = document.getElementById("cell3")
             cell3.innerHTML+= Math.ceil(Math.random() * Math.ceil(6))

             var cell4 = document.getElementById("cell4")
             cell4.innerHTML+= Math.ceil(Math.random() * Math.ceil(6))

             var cell5 = document.getElementById("cell5")
             cell5.innerHTML+= Math.ceil(Math.random() * Math.ceil(6))

             var cell6 = document.getElementById("cell6")
             cell6.innerHTML+= Math.ceil(Math.random() * Math.ceil(6))

                }}>
            Roll Dice
        </button>
        <div className="wrapper">

            <div className="Row1">
                <div id="cell1">  </div>
                <div id="cell2"></div>
                <div id="cell3"></div>
            </div> 

            <div className="Row2">
                <div id="cell4"></div>
                <div id="cell5"></div>
                <div id="cell6"></div>
            </div>
        </div>
    </body>

    )
}

export default Boxes;