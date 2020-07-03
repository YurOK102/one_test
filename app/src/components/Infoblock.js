import React, { useState } from 'react'

import InfoText from "../components/InfoText";


const Infoblock = () => {

  const [visibleText, setVisibleText] = useState(false);

  const onOpen = () => {
    setVisibleText(true);
  };
  const onClose = () => {
    setVisibleText(false);
  }

  return (
    <div className="infoblock">
      <div className="specifications">
        <div className="specifications-items">
          <div className="name">Класс:</div>
          <div className="number numder-official">Standart</div>
        </div>
        <div className="specifications-items">
          <div className="name">Потребляемая мощность:</div>
          <div className="number number-plus">59 Вт.</div>
        </div>
        <div className="specifications-items">
          <div className="name name-plus">Сила света:</div>
          <div className="number">
            3459 Люмен = 7,5 ламп накаливания по 40 Вт.
          </div>
        </div>
        <div className="specifications-items">
          <div className="name">Гарантия:</div>
          <div className="number">3 года</div>
        </div>
        <div className="specifications-items">
          <div className="name">Монтаж:</div>
          <div className="number">Да</div>
        </div>
        <div className="specifications-items">
          <div className="name">Итого сумма:</div>
          <div className="number">2594 рублей</div>
        </div>
      </div>

      <div className="info-color">
        <button className="info-btn" onClick={onOpen}>
          i
        </button>
        <div className="info-text">Выберите цвет свечения</div>
      </div>

      {visibleText && <InfoText onClose={onClose} />}
    </div>
  );
}

export default Infoblock
