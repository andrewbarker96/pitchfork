import React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

interface NewMenuItemProps {
  title: string;
  desc: string;
  price: string;
  imgSrc: string;
}

const NewMenuItem: React.FC<NewMenuItemProps> = ({ title, desc, price, imgSrc }) => (
  <>
    <Grid item xs={12} sm={7} md={8}>
      <Item>
        <h2>{title}</h2>
        <p>{desc}</p>
        <h3>${price}</h3>
      </Item>
    </Grid>
    <Grid item xs={12} sm={5} md={4}>
      <Item className = 'NewMenuItemImage'>
        <img src={imgSrc} alt={title}/>
      </Item>
    </Grid>
    <Grid item xs={12}>
        <hr />
    </Grid>
  </>
);

const NewMenuItems = () => (
  <Grid container spacing={2}>
    <NewMenuItem 
    title="Handbreaded Chicken Wings" 
    imgSrc="chicken-wings.jpg" 
    desc='Indulge in the crispy perfection of our Handbreaded Chicken Wings. Each wing is meticulously coated in a secret blend of spices and golden breadcrumbs, ensuring a tantalizing crunch with every bite. Paired with your choice of savory sauces, these wings are a flavor explosion that will leave you craving more.' 
    price="12.99"/>
    
    <NewMenuItem 
    title="Multi-grain Pancakes" 
    imgSrc="pancakes.jpg" 
    desc='Start your day on a wholesome note with our Multi-grain Pancakes. Crafted from a blend of nutritious grains, these fluffy pancakes offer a delightful medley of textures and flavors. Drizzle them with pure maple syrup or top them with fresh fruit for a breakfast that not only satisfies your taste buds but also nourishes your body.' 
    price="9.99"/>
    
    <NewMenuItem 
    title="Eggstatic Burger" 
    imgSrc="egg-burger.jpg" 
    desc="Get ready for a burger experience that will make you eggstatic! Our Eggstatic Burger features a juicy, perfectly grilled patty topped with a sunny-side-up egg. The rich, runny yolk adds a luscious creaminess to every bite, creating a burger that's a true delight for egg lovers." 
    price="14.99"/>

    <NewMenuItem 
    title='Campfire Burger' 
    imgSrc='campfire-burger.jpg' 
    desc="Embark on a culinary adventure with our Campfire Burger. This savory creation captures the essence of a cozy campfire meal. Imagine a flame-grilled patty topped with melted cheddar cheese, crispy bacon, and a smoky barbecue sauce. It's a burger that brings the warmth and flavors of the great outdoors to your plate." 
    price="12.99"/>

    <NewMenuItem 
    title='Whole Grain French Toast' 
    imgSrc='french-toast.jpg' 
    desc="Savor the goodness of whole grains with our Whole Grain French Toast. Thick slices of hearty bread are dipped in a cinnamon-infused batter, then grilled to golden perfection. Topped with a dusting of powdered sugar and a drizzle of maple syrup, this French toast is a wholesome and delicious breakfast option." 
    price="11.99"/>
   
    <NewMenuItem 
    title='Grilled Chicken Cobb Salad' 
    imgSrc='grilled-chicken-salad.jpg' 
    desc="Elevate your salad game with our Grilled Chicken Cobb Salad. Tender grilled chicken breast is nestled on a bed of crisp mixed greens and adorned with cherry tomatoes, avocado, crispy bacon, and crumbled blue cheese. Served with a zesty vinaigrette, it's a satisfying and flavorful salad that's both hearty and healthy." 
    price="8.99"/>  
    
    <NewMenuItem 
    title='Grilled Mac & Cheese' 
    imgSrc='mac-burger.jpg' 
    desc="Experience the ultimate comfort food with a twist! Creamy macaroni and cheese get an extra layer of flavor as they are grilled to perfection. The result is a delightful combination of gooey cheese, crispy edges, and a smoky essence that takes classic mac and cheese to new heights." 
    price="13.99"/>

    <NewMenuItem
    title='Spinach & Tomato Cream Salmon'
    imgSrc='spinach-tomato-salmon.jpg'
    desc="Experience a taste of the Mediterranean with our Spinach & Tomato Cream Salmon. This dish features a tender salmon fillet topped with a creamy sauce infused with spinach, tomatoes, and garlic. Served with a side of rice pilaf, it's a light and flavorful meal that's sure to satisfy."
    price="15.99"    
    />
    </Grid>
);

export default NewMenuItems;