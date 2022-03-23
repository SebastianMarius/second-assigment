import React from 'react'
import { mockData } from './mockData'
import FirstAndSecCol from './FirstAndSecCol'
import TheLast2Col from './TheLast2Col'

export default function HomePage() {
  return (
      <>
        <div className="data-card">
            <div className="table-head">
                < FirstAndSecCol/>   
                 <TheLast2Col/>
               
            </div>
            <div className="table-row">
                < FirstAndSecCol/>   
                 <TheLast2Col/>
               
            </div>

            {/* <div className="big-row-div">
                < FirstAndSecCol/>   
                 <TheLast2Col/>
               
            </div> */}



        </div>  
        {console.log(mockData)}
      </>
    
  )
}
