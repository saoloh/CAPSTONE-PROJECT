import React from 'react';
import greekSaladImage from '../assets/images/08c5772c481233a30a46aeca552132053604e2a8.png';
import bruchettaImage from '../assets/images/3ca412176fe4306326b04a78b51fa148c49f99c1.png';
import lemonDessertImage from '../assets/images/b64f988f077b50ffdab0afee9de4d701e4a9d5da.png';

/**
 * Menu item data structure definition.
 */
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

/**
 * Menu component that displays a list of the restaurant's weekly specials.
 * Uses grid layout for cards and includes a call to action for the online menu.
 */
const Menu = () => {
  return (
    <section id="menu" aria-labelledby="menu-title">
      <h2 id="menu-title">This week's specials!</h2>
      <button aria-label="Explore our full online menu">Online Menu</button>
      <div className="menu-items">
        {menuItems.map(item => (
          <article key={item.name} className="menu-item" aria-labelledby={`item-${item.name.replace(/\s+/g, '-').toLowerCase()}`}>
            <img src={item.image} alt={`Photo of ${item.name}`} />
            <h3 id={`item-${item.name.replace(/\s+/g, '-').toLowerCase()}`}>
              {item.name}<span>{item.price}</span>
            </h3>
            <p>{item.description}</p>
            <a href="/order" aria-label={`Order delivery for ${item.name}`}>Order a delivery</a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Menu;
