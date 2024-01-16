import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className ='container'>
      <section>
        <h2>Featured Dishes</h2>
        <p>Explore our chef's special dishes crafted with passion and expertise.</p>
        {/* Add images and descriptions of featured dishes */}
      </section>

      <section>
        <h2>Our Menu</h2>
        <p>Discover a variety of mouth-watering dishes on our menu.</p>
        {/* Add a link to the full menu page */}
        <Link href="/menu">View Full Menu</Link>
      </section>

      <section>
        <h2>About Us</h2>
        <p>Learn about the history and mission of Your Restaurant.</p>
        {/* Add a link to the about us page */}
        <Link href="/about">About Us</Link>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>Have questions or feedback? Reach out to us!</p>
        {/* Add a link to the contact page */}
        <Link href="/contact">Contact Us</Link>
      </section>
    </div>
  )
}

export default page