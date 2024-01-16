import React from 'react'
import RootLayout from '@/layout'
import ReservationForm from '@/components/reservation-form'

const reservations = () => {
  return (
    <RootLayout>
      <div>
        <ReservationForm />
      </div>
    </RootLayout>
  )
}

export default reservations