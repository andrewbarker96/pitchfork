import React from 'react'
import MenuComp from '@/components/full-menu'
import RootLayout from '@/app/layout'

const Menu = () => {
  return (
    <RootLayout>
      <div>
        <MenuComp />
      </div>
    </RootLayout>
  )
}

export default Menu