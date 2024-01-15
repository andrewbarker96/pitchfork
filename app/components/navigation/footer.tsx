import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
                <div className='footer gap-6 '>
                    <div className='footer-item '>
                        <Link href="/menu">Menu</Link><br></br>
                        <Link href="/contact">Contact Us</Link><br></br>
                        <Link href="/reservations">Reservations</Link>
                    </div>
                    <div className='footer-item'>
                        <Link href="#">Terms of Use</Link>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Cookie Policy</Link>
                    </div>
                </div>
            <div className='footer footer-item align-middle text-center justify-center'>
            <p> Copyright &copy; <a href = '/'>2024 Pitchfork Eatery</a></p>
        </div>
        </div>
    )
}

export default Footer