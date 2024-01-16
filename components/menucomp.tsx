import React from 'react'
import ReservationForm from '@/components/reservation-form'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import Paper from '@mui/material/Paper'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));

const MenuComp = () => {
  return (
    
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Our Menu</h1>
          <p>Indulge in the delightful flavors of our upscale country dishes.</p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <h1>Appetizers</h1>
            <Item>
              <h2>Truffle Mushroom Risotto</h2>
              <p>Arborio rice cooked with truffle-infused mushrooms.</p>
              <p>$18.99</p>
            </Item>

            <Item>
              <h2>Smoked Salmon Bruschetta</h2>
              <p>House-smoked salmon served on crispy bruschetta</p>
              <p>$22.99</p>
            </Item>

            <Item>
              <h2>Truffle Mushroom Risotto</h2>
              <p>Arborio rice cooked with truffle-infused mushrooms.</p>
              <p>$18.99</p>
            </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <h1>Main Course</h1>
            <Item>
              <h2>Grilled Ribeye Steak</h2>
              <p>Prime ribeye steak grilled to perfection.</p>
              <p>$38.99</p>
            </Item>

            <Item>
              <h2>Herb-Crusted Lamb Chops</h2>
              <p>Tender lamb chops with a flavorful herb crust.</p>
              <p>$32.99</p>
            </Item>

            <Item>
              <h2>Bacon Mac & Cheese</h2>
              <p>Our 5-Cheese Gooey Mac & Cheese with Apple Smoked Bacon</p>
              <p>$17.99</p>
            </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <h1>Dessert</h1>
            <Item>
              <h2>Chocolate Bourbon Pecan Pie</h2>
                <p>Decadent pecan pie with a hint of bourbon and chocolate.</p>
                <p>$12.99</p>
            </Item>

            <Item>
              <h2>Herb-Crusted Lamb Chops</h2>
              <p>Tender lamb chops with a flavorful herb crust.</p>
              <p>$32.99</p>
            </Item>

            <Item>
              <h2>Apple Cinnamon Tiramisu</h2>
              <p>Classic tiramisu with a twist of apple and cinnamon.</p>
              <p>$14.99</p>
            </Item>
        </Grid>
      </Grid>
    </Box>
  </div>
  )
}

export default MenuComp