'use client'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Navbar = () => {
    const path = usePathname();
    useEffect(() => {
        console.log(path)
    }, [])
    return (
        <div className='p-4 md:p-6 px-10 flex items-center justify-between shadow-sm fixed top-0 w-full z-10 bg-white gap-1'>
            <div className='flex gap-12 items-center'>
                <Image src={'/logo.svg'} width={150} height={150} alt='logo' />
                <ul className='hidden md:flex gap-10'>
                    <Link href={'/'} >  <li className={`'
                  ${path == '/' ? 'font-semibold text-[17px] text-primary' : 'nav-link'}`}>For Sale</li></Link>
                    <Link href={'/forrent'}> <li className={`'
                  ${path == '/forrent' ? 'font-semibold text-[17px] text-primary' : 'nav-link'}`}>For Rent</li></Link>
                    <Link href={'/agentfinder'}> <li className={`'
                  ${path == '/agentfinder' ? 'font-semibold text-[17px] text-primary' : 'nav-link'}`}>Agent Finder</li></Link>
                </ul>
            </div>
            <div className='flex gap-2'>
                <Button className='flex gap-2 h-8 px-2 text-sm'><Plus />Post Your Ad</Button>
                <Button variant='outline' className='h-8 px-2 text-sm'>Login</Button>
            </div>
        </div>
    )
}

export default Navbar