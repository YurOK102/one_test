import React from 'react'

import "./CardProduct.css";
import DefaultBackgraund from '../../img/bg-default.png';
import DefaultHoverBackgraund from '../../img/bg-default-hover.png';
import SelectedBackgraund from '../../img/bg-selected.png';
import SelectedHoverBackgraund from '../../img/bg-selected-hover.png';
import DisabledBackgraund from '../../img/bg-disabled.png';

import ProductName from '../ProductName/ProductName';
import ProductPortions from '../MainPortions/ProductPortions';
import CircleInCard from '../CircleInCard/CircleInCard';

const CardProduct = (props) => {
   const [checked, setChecked] = React.useState(false);
   const [hover, setHover] = React.useState(false);   

      // меняем bg с окантовкой
   const changeBg = () => {
      switch (checked) {
         case false:
            return DefaultBackgraund
         case true:
            return SelectedBackgraund

         default:
            break;
      }
   };   
   
   return (
      <div className="main-content">
             {/* описываем два состояния для последующей логики */}
         {!props.data.disabled
         ?  <div
               className="product-card product-card-default"
               onClick={() => {setChecked(!checked)}}
               onMouseEnter={() => setHover(true)}
               onMouseLeave={() => setHover(false)}
            >
                  {/* меняем bg c окантовкой при обычном наведении и наведении при выполненом клике*/}
               {!checked 
               ?  (hover
                  ?  <img className="default" src={DefaultHoverBackgraund} alt="" />
                  :  <img className="default" src={changeBg()} alt="" />)
               :  (hover
                  ?  <img className="default" src={changeBg()} alt="" />
                  :  <img className="default" src={SelectedHoverBackgraund} alt="" />)}

               <div className="card-title">
                  {/* меняем title при отводе курсора с эелемента после клика на него */}
                  {checked 
                  ? (hover 
                     ? (<h3 className="product-title">{props.data.title}</h3>) 
                     : (<h3 className="product-question">{props.data.titleQuestion}</h3>)) 
                  : (<h3 className="product-title">{props.data.title}</h3>)}
                  <ProductName data={props.data} />
                  <ProductPortions data={props.data} />
               </div>
               <div className="cat-images">
                  <img className="cat" src={props.data.images} alt="" />
               </div>
               <CircleInCard data={props.data} checked={checked} hover={hover} />
               <div className="text-container">
                  {/* меняем нижний текст после клика на него и на продукт*/}
                  {!checked 
                  ?  <div className="text-buy">{props.data.textBuy}
                        <button className="buy-btn" onClick={() => {setChecked(!checked)}}>
                           <p>купи</p> .
                        </button>
                     </div>
                  : <div className="text-discription">{props.data.textDiscription}</div>}
               </div>
            </div>
         :  <div
               className="product-card product-card-default"
               onClick={() => {setChecked(!checked)}}
            >
               <img className="default" src={DisabledBackgraund} alt="" />
               <div className="main-disabled"></div>
               <div className="card-title">
                  <h3 className="product-title">{props.data.title}</h3>
                  <ProductName data={props.data} />
                  <ProductPortions data={props.data} />
               </div>
               <div className="cat-images">
               <img className="cat" src={props.data.images} alt="" />
               </div>
               <CircleInCard data={props.data} checked={checked} />
               <div className="text-container">
                  <div className="text-disabled">{props.data.textDisabled}</div>
               </div>
            </div>}
     </div>
   );
};

export default CardProduct
