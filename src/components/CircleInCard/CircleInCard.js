import React from 'react'

import './CircleInCard.css'

const CircleInCard = ({ data, checked, hover }) => {
   return (
      <>
            {/* описываем два состояния для последующей логики */}
         {!data.disabled 
         ?  <div className={"weight" +
               // добавляем и убираем классы при клике и наведении
            (!checked 
            ? (hover
               ?  " weight-default-hover"
               :  " weight-default")
             
            : (hover
               ?  " weight-selected"
               :  " weight-selected-hover")
               )}
            >
               <div className="weight-number" >{data.weight.number}</div> 
               <div className="weight-text" >{data.weight.text}</div>            
            </div>
         :  <div className={"weight weight-disabled"}>
               <div className="weight-number" >{data.weight.number}</div> 
               <div className="weight-text" >{data.weight.text}</div>            
            </div>
         }
      </>
   )
}

export default CircleInCard
