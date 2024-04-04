import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const PitchforkLogo = () => {
  return (
    <div>
    <Link href='/'><Image src="/Pitchfork-01.png" className='logo' alt="Pitchfork Eatery" width={200} height={100} priority /></Link>
    </div>
  )
}

export default PitchforkLogo