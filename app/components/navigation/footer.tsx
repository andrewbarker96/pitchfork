import React from 'react'

const Footer = () => {
    return (
        <div>
                <div className='footer md:flex-auto gap-6 '>
                    <div className='footer-item '>
                        <p><a href="#">Menu</a></p>
                        <p><a href="#">Contact Us</a></p>
                        <p><a href="#">Reservations</a></p>
                    </div>
                    <div className='footer-item'>
                        <p><a href="#">Terms of Use</a></p>
                        <p><a href="#">Privacy Policy</a></p>
                        <p><a href="#">Cookie Policy</a></p>
                    </div>
                </div>
            <div className='footer footer-item align-middle text-center justify-center'>
            <p> Copyright &copy; <a href = '/'>2024 Pitchfork Eatery</a></p>
        </div>
        </div>
    )
}

export default Footer