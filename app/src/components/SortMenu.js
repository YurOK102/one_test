import React, { useState } from 'react'

const sortMenu = () => {
	const [visibleMenu, setVisibleMenu] = useState(false);
	const dataMenu = [
		{ name: "Обучающее видео", id: 1 },
		{ name: "Оформление заказа", id: 2 },
		{ name: "Оплата", id: 3 },
		{ name: "Доставка", id: 4 },
		{ name: "Гарантия", id: 5 },
		{ name: "Возраст", id: 6 },
		{ name: "Контакты", id: 7 },
		{ name: "Партнерам", id: 8 }
	];
  

	const toggleMenu = () => {
    setVisibleMenu(!visibleMenu)    
	};

	return (
    <>
      <div>
        <span className="shopping-cart">
          <img src="/images/shopping-cart.svg" className="icon-cart" />
        </span>
        <span className="btn-menu" onClick={toggleMenu}>
          {visibleMenu 
            ? <img src="/images/close.svg" className="icon-close" />
            : <img src="/images/hamburger-menu.svg" className="icon-hamburger" />
          }
        </span>
      </div>

      {visibleMenu && (
        <div className="header-menu">
          <ul className="menu">
            {dataMenu.map((item) => (
              <li className="menu-items" key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default sortMenu
