import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <div className='footer md:flex-auto gap-6 '>
                <div className='footer-item flex flex-col'>
                    <Link href="/menu">Menu</Link>
                    <Link href="/contact">Contact Us</Link>
                    <Link href="/reservations">Reservations</Link>
                </div>
                <div className='footer-item flex flex-col'>
                    <Link href="#">Terms of Use</Link>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Cookie Policy</Link>
                </div>
            </div>
            <div className='footer footer-item align-middle text-center justify-center'>
                <p> Copyright &copay; <a href = '/'>2024 Pitchfork Eatery</a></p>
            </div>
        </div>
    )
}

export default Footer