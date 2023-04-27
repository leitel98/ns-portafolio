import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from '<leitel>/components/Carousel'

const Woman = () => {

  const images = [
    "/car-1.png",
    "/car-2.png",
    "/car-3.png",
    "/car-4.png",
    "/car-5.png",
    "/car-6.png",
  ]

  return (
    <>
      <section id="hero-red" className='py-10 md:px-16 pink-gradient text-white'>
        <Link href={'/'}>
          <Image
            src={'/whitearrow.svg'}
            alt={''}
            width={50}
            height={50}
            className='mb-6 ml-10 md:ml-0'
          />
        </Link>
        {/* top paragraph */}
        <h1 className="font-rosario text-left hidden md:block text-sm">
          Case Study
        </h1>
        {/* title */}
        <h2 className="font-oxygen text-lg md:text-2xl text-center md:text-left uppercase mb-6">
          red mujeres
        </h2>
        {/* top content */}
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-20 space-x-0 md:space-y-10">
          {/* description */}
          <div className="flex flex-col space-y-8 md:w-2/3">
            <h1 className="font-rosario font-bold text-center md:text-left text-sm md:text-sm uppercase">
              Overview
            </h1>
            <p className="text-sm text-justify px-4 md:px-0 md:text-left md:max-w-3xl">
              As part of an intense 3 month UX/UI course by Codehouse, we worked on creating an app from scratch. The first requirement was to find a subject that you were passionate about. This drove me to work on a social network just for women, with its main purpose being sharing, supporting and taking care of each other.
            </p>
          </div>
          {/* specs */}
          <div className="flex md:flex-col flex-row mt-10 justify-around md:space-y-8 md:space-x-0 w-full md:w-1/3 ">
            <div className="flex flex-col space-y-2">
              <h1 className="text-xs text-left uppercase font-bold">
                My role
              </h1>
              <p className="text-xxs text-left">
                Sole UX/UI
              </p>
              <p className="text-xxs text-left">
                Designer
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="text-xs text-left uppercase font-bold">
                DURATION
              </h1>
              <p className="text-xxs text-left">
                3 months
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="text-xs text-left uppercase font-bold">
                tools
              </h1>
              <p className="text-xxs text-left">
                Figma
              </p>
            </div>
          </div>
        </div>
        {/* carousel */}
        <div className='flex flex-row mt-16 mb-4 space-x-4 w-fill'>
          {images.map(image => <Image src={image} width={175} height={175} alt={''} className='flex-1' />)}
        </div>
      </section>

      <section id="info" className="py-52 px-36 bg-center bg-no-repeat" style={{ backgroundImage: "url('/1-in-3.png')" }}>
        <p className="text-sm text-black">
        Did you know that one in three women suffers some kind of abuse? And that only 40% of them seek help? Mainly from friends or family. What if we could expand this circle so that our support network was bigger? Red Mujeres is a social network that aims to achieve this. The idea is to create a space where everyone can share their experiences, raise their voices on different topics and take care of each other. Through communication and mutual support we are stronger against a world that is not usually on our side.
        </p>
      </section>
    </>
  )
}

export default Woman