import React from 'react'

function Choice() {
  
  const dataMenu = [
    { name: "Вариант кухни", id: 1 },
    { name: "Размеры", id: 2 },
    { name: "Сенсор", id: 3 },
    { name: "Питающий кабель", id: 4 },
    { name: "Блок питания", id: 5 },
    { name: "Цвет свечения", id: 6 },
    { name: "Монтаж", id: 7 },
    { name: "Корзина", id: 8 }
  ]

  return (
    <div className="footer-menu">
      <ul className="choice">
        {dataMenu.map((item) => 
          <li 
            className="choice-items"
            key={item.id}
          >
            {item.name}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Choice
