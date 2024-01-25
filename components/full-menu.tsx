import React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { Box } from '@mui/material';



interface MenuItemProps {
  title: string;
  description: string;
  price: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, description, price }) => (
  <Item>
    <h2>{title}</h2>
    <p>{description}</p>
    <h3>${price}</h3>
  </Item>
);

const FullMenu = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6}>
        <h1>Breakfast</h1>
        <h4>(Served Daily from 7:00 am to 11:00 am)</h4>
        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between">        
          <MenuItem title="Multi-grain Pancakes" description="Start your day on a wholesome note with our Multi-grain Pancakes." price="9.99" />
          <MenuItem title="Whole Grain French Toast" description="Savor the goodness of whole grains with our Whole Grain French Toast." price="11.99" />
        </Box>
     </Grid>
      <Grid item xs={12}>
        <hr />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <h1>Starters</h1>
        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between">
          <MenuItem title="Smoked Salmon Bruschetta" description="House-smoked salmon served on crispy bruschetta" price="22.99" />
          <MenuItem title="Truffle Mushroom Risotto" description="Arborio rice cooked with truffle-infused mushrooms." price="18.99" />
          <MenuItem title='Handbreaded Chicken Wings' description="Indulge in the crispy perfection of our Handbreaded Chicken Wings." price='12.99' />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <hr />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <h1>Main Course</h1>
        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between">
          <MenuItem title="Grilled Ribeye Steak" description="Prime ribeye steak grilled to perfection." price="38.99" />
          <MenuItem title="Herb-Crusted Lamb Chops" description="Tender lamb chops with a flavorful herb crust." price="32.99" />
          <MenuItem title="Bacon Mac & Cheese" description="Our 5-Cheese Gooey Mac & Cheese with Apple Smoked Bacon" price="17.99" />
          <MenuItem title="Grilled Chicken Cobb Salad" description="Tender grilled chicken breast is nestled on a bed of crisp mixed greens and adorned with cherry tomatoes, avocado, crispy bacon, and crumbled blue cheese." price="8.99" />
          <MenuItem title="Grilled Mac & Cheese" description="Creamy macaroni and cheese get an extra layer of flavor as they are grilled to perfection." price="13.99" />
          <MenuItem title="Spinach & Tomato Cream Salmon" description="This dish features a tender salmon fillet topped with a creamy sauce infused with spinach, tomatoes, and garlic." price="15.99" />
          <MenuItem title="Campfire Burger" description="This savory creation captures the essence of a cozy campfire meal." price="12.99" />
          <MenuItem title="Eggstatic Burger" description="Our Eggstatic Burger features a juicy, perfectly grilled patty topped with a sunny-side-up egg." price="14.99" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <hr />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <h1>Dessert</h1>
        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between">
          <MenuItem title="Chocolate Bourbon Pecan Pie" description="Decadent pecan pie with a hint of bourbon and chocolate." price="12.99" />
          <MenuItem title="Apple Cinnamon Tiramisu" description="Classic tiramisu with a twist of apple and cinnamon." price="14.99" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default FullMenu;