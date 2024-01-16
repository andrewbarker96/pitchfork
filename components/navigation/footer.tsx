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
                <div> Copyright &copy; 2024 <Link href = '/'> Pitchfork Eatery</Link></div>
                <div>123 Main Street, St. Louis, MO, 63011</div>
            </div>
        </div>
    )
}

export default Footer