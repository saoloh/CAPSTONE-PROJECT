import React from 'react';
import greekSaladImage from '../assets/images/08c5772c481233a30a46aeca552132053604e2a8.png';
import bruchettaImage from '../assets/images/3ca412176fe4306326b04a78b51fa148c49f99c1.png';
import lemonDessertImage from '../assets/images/b64f988f077b50ffdab0afee9de4d701e4a9d5da.png';

const menuItems = [
  {
    name: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: greekSaladImage
  },
  {
    name: 'Bruchetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: bruchettaImage
  },
  {
    name: 'Lemon Dessert',
    price: '$5.00',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    image: lemonDessertImage
  }
];

const Menu = () => {
  return (
    <section id="menu">
      <h2>This week's specials!</h2>
      <button>Online Menu</button>
      <div className="menu-items">
        {menuItems.map(item => (
          <div key={item.name} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}<span>{item.price}</span></h3>
            <p>{item.description}</p>
            <a href="/order">Order a delivery</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
