import React from 'react'
import FullMenu from '@/components/menu/full-menu'
import RootLayout from '@/app/layout'
import NewMenuItems from '@/components/menu/new-menu-items'

const Menu = () => {
  return (
    <RootLayout>
      <>
        <div className='menu-border' id='new-items'>
          <div className='text-center'>
            <h1>New Seasonal Menu Items</h1>
            <h4>(Only available for a limited time)</h4>
          </div>
          <hr />
          <div>
            <NewMenuItems />
          </div>
        </div>
        <br />
        <div className='menu-border' id='full-menu'>
          <div className='text-center' style={{ marginTop: '5%' }}>
            <h1>Full Menu</h1>
            <h4>(Breakfast, Lunch, & Dinner, Served All Day!)</h4>
          </div>
          <hr />
          <FullMenu />
        </div>
      </>
    </RootLayout>
  )
}

export default Menu