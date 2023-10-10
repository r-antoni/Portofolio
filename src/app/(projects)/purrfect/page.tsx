import React from 'react'
import { p2 } from '../../../../public/assets'
import Image from 'next/image'
import Button from '@/components/shared/button'

type Props = {}

const Globetix = (props: Props) => {
  const styles = {
    imageWrapper: "w-full xl:w-1/2 h-auto relative group",
    image: " rounded-lg",
    listItem: "flex items-center gap-3",
        logo: "w-6 lg:w-8 rounded-lg"
  }

  return (
    <>
    <div className='relative flex flex-col lg:flex-row justify-start gap-20 min-h-screen py-20 px-20 text-white'>
      <div className={styles.imageWrapper}>
        <Image src={p2} alt="Globetix" className={styles.image} />
      </div>
      <div className='flex flex-col w-full lg:w-1/2 justify-start gap-5'>
        <h2 className='text-2xl uppercase'>Globetix</h2>
        <h4>Status: <Button title='In Progress' textSize='text-xs'/></h4>
        <h3>Tech Stack:</h3>
        <ul className='flex flex-col lg:flex-row gap-3'>
        <li>
          <Button title='React JS' textSize='text-xs' />
        </li>
        <li>
          <Button title='Next JS' textSize='text-xs' />
        </li>
        <li>
        <Button title='Tailwind CSS' textSize='text-xs' />
        </li>
        <li>
        <Button title='Express JS' textSize='text-xs' />
        </li>
        <li>
        <Button title='MySQL' textSize='text-xs' />
        </li>
        <li>
        <Button title='Netlify' textSize='text-xs' />
        </li>
        </ul>
        <p className='pt-5 pb-10'>GlobeTix is a fullstack travel booking website, with several destination to choose in Indonesia. It is created using Next.js 13 with Next.js app router and TailwindCSS, it is also using Stripe for payment checkout.</p>
        <div className='flex justify-center items-center'>
        <a href="https://globetix.vercel.app/">
          <Button title='Visit Website' textSize='text-sm' />
        </a>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Globetix