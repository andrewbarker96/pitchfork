import React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles'
import PitchforkButton from '../button';
import Link from 'next/link';

const Button = styled(PitchforkButton)`
  background-color: black;
  color: black;
  border: 2px solid black;
  drop-shadow: None;
  a-hover: {color: white};
  margin: 1.15em 0em 0em 0em;
`;


interface ButtonProps {
  title: string;
  src: string;
}

const OrderButton: React.FC<ButtonProps> = ({ title, src }) => (
  <Button><Link href={src}>{title}</Link></Button>
);

interface MenuItemProps {
  title: string;
  description: string;
  price: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, description, price }) => (
  <Grid item xs={12} sm={6} md={3} className = 'menu-item'>
    <h3>{title}</h3>
    <p>{description}</p>
    <h4>${price}</h4>
    <button type="submit" className='bg-white text-black p-1 rounded-md outline outline-2' style={{margin:"1em 0em .5em 0em", padding:".25em 1.em .25em 1.em"}}>Add to Order</button>
  </Grid>
);

interface PizzaProps {
  title: string;
  description: string;
  smallPrice: string;
  mediumPrice: string;
  largePrice: string;
  xLargePrice: string;

}


const Pizza: React.FC<PizzaProps> = ({title, description, smallPrice, mediumPrice, largePrice, xLargePrice}) => (
  <Grid item xs={12} sm={6} md={3} className = 'menu-item'>
    <h3>{title}</h3>
    <h5>{description}</h5>
    <p>12-in: ${smallPrice}</p>
    <p>16-in: ${mediumPrice}</p>
    <p>20-in: ${largePrice}</p>
    <p>24-in: ${xLargePrice}</p>
    <button type="submit" className='bg-white text-black p-1 rounded-md outline outline-2' style={{margin:"1em 0em .5em 0em", padding:".25em 1.em .25em 1.em"}}>Add to Order</button>
  </Grid>
);



const FullMenu = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2>Breakfast</h2>
        <Box className='menu-box'>
          <MenuItem title="Multi-grain Pancakes" description="Start your day on a wholesome note with our Multi-grain Pancakes." price="9.99" />
          <MenuItem title="Whole Grain French Toast" description="Savor the goodness of whole grains with our Whole Grain French Toast." price="11.99" />
          <MenuItem title="Traditional" description="Two eggs, bacon or sausage, and fresh baked sourdough toast." price="9.99" />
          <MenuItem title="Avocado Toast" description="Fresh avocado, cherry tomatoes, and a sunny-side-up egg on toasted sourdough." price="12.99" />
          <MenuItem title="Egg White Omelette" description="Egg whites, spinach, mushrooms, and tomatoes." price="10.99" />
          <MenuItem title="Breakfast Burrito" description="Scrambled eggs, sausage, cheddar cheese, and salsa." price="11.99" />
          <MenuItem title="Breakfast Sandwich" description="Scrambled eggs, bacon, and cheddar cheese on a croissant." price="10.99" />
          <MenuItem title="Breakfast Tacos" description="Scrambled eggs, bacon, cheddar cheese, and salsa." price="11.99" />
        </Box>
        <hr />
        <h2>Starters</h2>
        <Box className='menu-box'>
          <MenuItem title='Handbreaded Chicken Wings' description="Indulge in the crispy perfection of our Handbreaded Chicken Wings." price='12.99' />
          <MenuItem title="Crispy Calamari" description="Lightly breaded and fried to perfection." price="14.99" />
          <MenuItem title="Spinach & Artichoke Dip" description="Creamy spinach and artichoke dip served with tortilla chips." price="10.99" />
          <MenuItem title="Mozzarella Sticks" description="Breaded and fried mozzarella cheese sticks." price="8.99" />
          <MenuItem title="Fried Pickles" description="Breaded and fried dill pickle spears." price="7.99" />
          <MenuItem title="Onion Rings" description="Beer-battered and fried to perfection." price="8.99" />
          <MenuItem title="Toasted Ravioli" description="STL Classic, breaded and fried meat ravioli." price="9.99" />
          <MenuItem title="BBQ Nachos" description="Tortilla chips topped with cheese, baked beans, pulled pork, jalapenos, sour cream, pico de gallo, and guacomole." price="14.99" />
        </Box>
        <hr />
        <h2>Main Course</h2>
        <Box className='menu-box'>
          <MenuItem title="Grilled Ribeye Steak" description="Prime ribeye steak grilled to perfection." price="38.99" />
          <MenuItem title="Herb-Crusted Lamb Chops" description="Tender lamb chops with a flavorful herb crust." price="32.99" />
          <MenuItem title="Bacon Mac & Cheese" description="Our 5-Cheese Gooey Mac & Cheese with Apple Smoked Bacon" price="17.99" />
          <MenuItem title="Grilled Chicken Cobb Salad" description="Tender grilled chicken breast is nestled on a bed of crisp mixed greens and adorned with cherry tomatoes, avocado, crispy bacon, and crumbled blue cheese." price="8.99" />
          <MenuItem title="Grilled Mac & Cheese" description="Creamy macaroni and cheese get an extra layer of flavor as they are grilled to perfection." price="13.99" />
          <MenuItem title="Spinach & Tomato Cream Salmon" description="This dish features a tender salmon fillet topped with a creamy sauce infused with spinach, tomatoes, and garlic." price="15.99" />
          <MenuItem title="Campfire Burger" description="This savory creation captures the essence of a cozy campfire meal." price="12.99" />
          <MenuItem title="Eggstatic Burger" description="Our Eggstatic Burger features a juicy, perfectly grilled patty topped with a sunny-side-up egg." price="14.99" />
        </Box>
        <hr />
        <h2>Pizza</h2>
        <h4>Made with fresh ingredients and cooked to perfection in our wood burning stone oven!</h4>
        <br />
        <h3>Specialty Pizzas</h3>
        <Box className='menu-box'>
          <Pizza title="Margherita" description="Fresh mozzarella, basil, and tomatoes." smallPrice="12.99" mediumPrice="16.99" largePrice="20.99" xLargePrice="24.99" />
          <Pizza title="Pepperoni" description="Classic pepperoni pizza." smallPrice="12.99" mediumPrice="16.99" largePrice="20.99" xLargePrice="24.99" />
          <Pizza title="Meat Lovers" description="Pepperoni, sausage, bacon, and ham." smallPrice="14.99" mediumPrice="18.99" largePrice="22.99" xLargePrice="26.99" />
          <Pizza title="Veggie" description="Mushrooms, bell peppers, onions, and olives." smallPrice="14.99" mediumPrice="18.99" largePrice="22.99" xLargePrice="26.99" />
          <Pizza title="BBQ Chicken" description="Grilled chicken, red onions, and BBQ sauce." smallPrice="14.99" mediumPrice="18.99" largePrice="22.99" xLargePrice="26.99" />
          <Pizza title="Hawaiian" description="Ham, pineapple, and bacon." smallPrice="14.99" mediumPrice="18.99" largePrice="22.99" xLargePrice="26.99" />
          <Pizza title="Buffalo Chicken" description="Grilled chicken, buffalo sauce, and ranch." smallPrice="14.99" mediumPrice="18.99" largePrice="22.99" xLargePrice="26.99" />
        </Box>
        <br />
        <br />
        <Box className='flex justify-center'>

            <button type="submit" className='justify-center bg-black text-white p-2 rounded-md outline' style={{margin:"1em 0em .5em 0em", padding:".5em 1.25em .5em 1.25em"}}>Create my Own Pizza</button>
        </Box>
        {/* <Box className='menu-box block'>
          <Grid item xs={12} sm={6} md={6} className='menu-item'>
            <h3>Choose your size</h3>
            <Item><p>12-in: $12.99</p></Item>
            <Item><p>16-in: $16.99</p></Item>
            <Item><p>20-in: $20.99</p></Item>
            <Item><p>24-in: $24.99</p></Item>
            <br />
            <h3>Choose your sauce</h3>
            <Item><p>Marinara</p></Item>
            <Item><p>Olive Oil</p></Item>
            <Item><p>BBQ</p></Item>
            <Item><p>Buffalo</p></Item>
            <br />
            <h3>Choose your cheese</h3>
            <Item><p>Mozzarella</p></Item>
            <Item><p>Cheddar</p></Item>
            <Item><p>Provolone</p></Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6} className='menu-item'>
            <h3>Choose your toppings</h3>
            <p>($1.99 /Topping)</p>
            <br/>
            <h4>Meats</h4>
            <Item>
              <p>
                Pepperoni | Sausage | Bacon | Ham | Chicken | Meatballs | Hamburger 
              </p>
              <br />
            <h4>Veggies</h4>
              <p>
                Mushrooms | Onions | Green Peppers | Black Olives | Green Olives | Tomatoes | Jalapenos | Spinach | Pineapple | Garlic | Artichokes | Broccoli | Roasted Red Peppers              
              </p>
            </Item>
          </Grid>
        </Box> */}
        <hr />
        <h2>Dessert</h2>
        <Box className='menu-box'>
          <MenuItem title="Chocolate Bourbon Pecan Pie" description="Decadent pecan pie with a hint of bourbon and chocolate." price="12.99" />
          <MenuItem title="Apple Cinnamon Tiramisu" description="Classic tiramisu with a twist of apple and cinnamon." price="14.99" />
          <MenuItem title="Chocolate Lava Cake" description="Rich chocolate cake with a molten chocolate center." price="10.99" />
        </Box>
      </Grid>
    </Grid>
  );
  };

export default FullMenu;