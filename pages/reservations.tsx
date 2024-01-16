import React from 'react'
import RootLayout from '@/layout'
import ReservationForm from '@/components/reservation-form'
import Link from 'next/link'

const reservations = () => {
  return (
    <RootLayout>
      <div>
        <h1>Make a Reservation!</h1>
        <ReservationForm />
      </div>
      <br></br>
      <div>
        <h1>No times available?</h1>
        <h2>Call us at <Link href="tel:+15555555555" style = {{color: 'blue'}}>555-555-5555</Link> to make a reservation!</h2>
      </div>
    </RootLayout>
  )
}

export default reservations