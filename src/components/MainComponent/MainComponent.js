import React from 'react'

import background from '../../img/bg.png';
import './MainComponent.css'
import Header from '../Header/Header';
import CardProduct from "../CardProduct/CardProduct";


const MainComponent = () => {

   const app = [
      {
         id: 1,
         title: "Сказочное заморское яство",
         titleQuestion: "Котэ не одобряет?",
         productName: "Нямушка",
         productNameDiscription: "с фуа-гра",
         productPortions: "10 порций",
         productPresent: "мышь в подарок",
         customer: "",
         weight: { number: "0,5", text: "кг" },
         disabled: false,
         images: require("../../img/cat.png"),
         textBuy: "Чего сидишь? Порадуй котэ,",
         textDiscription: "Печень утки разварная с артишоками.",
         textDisabled: "Печалька, с фуа-гра закончился."
      },
      {
         id: 2,
         title: "Сказочное заморское яство",
         titleQuestion: "Котэ не одобряет?",
         productName: "Нямушка",
         productNameDiscription: "с рыбой",
         productPortions: "40 порций",
         productPresent: "2 мыши в подарок",
         customer: "",
         weight: { number: "2", text: "кг" },
         disabled: false,
         images: require("../../img/cat.png"),
         textBuy: "Чего сидишь? Порадуй котэ,",
         textDiscription: "Головы щучьи с чесноком да свежайшая сёмгушка.",
         textDisabled: "Печалька, с рыбой закончился."
      },
      {
         id: 3,
         title: "Сказочное заморское яство",
         titleQuestion: "Котэ не одобряет?",
         productName: "Нямушка",
         productNameDiscription: "с курой",
         productPortions: "100 порций",
         productPresent: "5 мышей в подарок",
         customer: "заказчик доволен",
         weight: { number: "5", text: "кг" },
         disabled: true,
         images: require("../../img/cat.png"),
         textBuy: "Чего сидишь? Порадуй котэ,",
         textDiscription: "Филе из цыплят с трюфелями в бульоне.",
         textDisabled: "Печалька, с курой закончился."
      },
   ];
    
   return (
      <div
         className="main-component"
         style={{ backgroundImage: `url("${background}")` }}
      >
         <div className="zzz">
            <Header />
            <div className="main-wraper">
               {app.map((item) =>
                  <CardProduct
                     key={item.id}
                     data={item}
                     id={item.id}             
                  />
               )}
            </div>
         </div>
      </div>
   );
};

export default MainComponent