
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProviders from './AuthProviders'

const Navbar = () => {
    const session = {}
  return (
   <nav className='flex items-center justify-between py-5 px-8 border-b border-nav-border gap-4'>
    <div className='flex items-center justify-start gap-10'>
        <Link href={'/'}>
            <Image src={'/assets/logo.svg'} width={115} height={115} alt='faceCoders' />
        </Link>
    </div>

    <div className='flex items-center gap-4'>
            {session ? (
                <>
                    UserPhoto

                    <Link href={'/create-profile'}>
                        Poste ton profile
                    </Link>
                </>
            ) : (
                <AuthProviders />
            )}
        </div>
   </nav>
  )
}

export default Navbar