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
            <p className="text-sm text-justify px-8 md:px-0 md:text-left md:max-w-3xl">
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
        <div className='grid grid-cols-3 md:grid-cols-6 mt-16 mb-4 gap-4 mx-4 md:mx-auto'>
          {images.map(image => <Image key={image} src={image} width={175} height={175} alt={''} className='object-cover w-full h-full' />)}
        </div>
      </section>

      <section id="info" className="py-32 md:py-52 px-8 md:px-36 bg-center bg-no-repeat" style={{ backgroundImage: "url('/1-in-3.png')" }}>
        <p className="text-sm text-black">
          Did you know that one in three women suffers some kind of abuse? And that only 40% of them seek help? Mainly from friends or family. What if we could expand this circle so that our support network was bigger? Red Mujeres is a social network that aims to achieve this. The idea is to create a space where everyone can share their experiences, raise their voices on different topics and take care of each other. Through communication and mutual support we are stronger against a world that is not usually on our side.
        </p>
      </section>

      <section id="problem" className="pt-20 pb-48 px-8 md:px-20 relative bg-cream bg-opacity-50 text-black flex flex-col space-y-28">
        {/* problem */}
        <div className="flex flex-col space-y-6">
          {/* title */}
          <div className="flex flex-row space-x-6 items-center">
            <div className="flex flex-col space-y-0 items-center">
              <div className="rounded-full h-4 w-4 bg-black" />
              <div className="absolute w-1 h-[29em] md:h-[22em] xl:h-80 bg-black" />
            </div>
            <h1 className="font-rosario text-md md:text-lg">
              The Problem
            </h1>
          </div>
          {/* paragraph */}
          <p className="mx-4 pl-12 text-sm max-w-4xl xl:max-w-6xl">
            In Latin America and the world there are still many cases of violence against women, in most cases by family members or acquaintances. Less than 40% of the victims seek some kind of help and less than 10% go to the police, generating a huge deficit of information in this regard.
          </p>
        </div>

        {/* <div className="absolute w-1 h-96 bg-black" /> */}

        {/* solution */}
        <div className="flex flex-col space-y-6">
          {/* title */}
          <div className="flex flex-row space-x-6 items-center">
            <div className="rounded-full h-4 w-4 bg-black"></div>
            <h1 className="font-rosario text-md md:text-lg">
              The Solution
            </h1>
          </div>
          {/* paragraph */}
          <p className="mx-4 pl-12 text-sm max-w-4xl xl:max-w-6xl">
            To create a line of communication between women. In this social network the community can share information on personal experiences, things that make them uneasy, men that make them uncomfortable and find other women with similar stories. This in order to find the support that is not always available, create a safe space to speak out and eventually prevent future abuse by identifying the people around you who have previously been accused of it.
          </p>
        </div>
      </section>

      <section id="research" className="py-48 px-8 md:px-20 relative">
        <Image
          src={'/phones.png'}
          alt={''}
          width={550}
          height={550}
          className='absolute right-8 -top-44'
        />

        <h1 className="font-oxygen font-bold text-xl uppercase text-center mb-16 md:mb-24">
          ux Research
        </h1>
        <div className="hidden md:block px-8 mb-10">
          <div className="relative mx-auto">
            <div className="flex flex-row items-center justify-between">
              <div className="h-5 w-5 bg-pinkole rounded-full" />
              <div className="h-5 w-5 bg-pinkole rounded-full left" />
              <div className="h-5 w-5 bg-pinkole rounded-full" />
              <div className="h-5 w-5 bg-pinkole rounded-full" />
              <div className="h-5 w-5 bg-pinkole rounded-full" />
              <div className="h-5 w-5 bg-pinkole rounded-full" />
            </div>
            <div className="absolute w-full h-1 bg-pinkole top-2 " />
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-8 items-center justify-center md:flex md:flex-row md:justify-between mb-8">
          <p className="flex justify-center font-rosario text-sm">
            Understand
          </p>
          <p className="flex justify-center font-rosario text-sm">
            Observe
          </p>
          <p className="flex justify-center font-rosario text-sm">
            POV
          </p>
          <p className="flex justify-center font-rosario text-sm">
            Ideate
          </p>
          <p className="flex justify-center font-rosario text-sm">
            Prototype
          </p>
          <p className="flex justify-center font-rosario text-sm">
            Test
          </p>
        </div>
        <div className="flex flex-row space-x-12 md:space-x-24 items-center mb-10">
          <div className='h-[1px] w-1/3 bg-black' />
          <div className='h-[1px] w-1/3 bg-black' />
          <div className='h-[1px] w-1/3 bg-black' />
        </div>

        <div className="flex flex-row justify-around font-rosario text-xxs md:text-sm uppercase mb-16 md:mb-40">
          <h1>Inspiration</h1>
          <h1>Conceptualization</h1>
          <h1>Iteration</h1>
        </div>

        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-60 md:px-8 mb-16 md:mb-24">
          <div className="flex flex-row space-x-4 justify-center md:items-start">
            <div className='h-4 w-4 rounded-full bg-pinkole mt-4' />
            <h1 className="font-oxygen font-bold text-sm md:text-md uppercase">
              Inspiration
            </h1>
          </div>
          <p className="text-xs md:text-sm text-justify">
            For the first part of the investigation I focused on the viability of the idea. Could it help? Would women use it? Would they feel safe sharing their stories online? Getting those answers through research and interviews. After this I benchmarked possible competitors to understand what they did properly and what i could improve through my design.
          </p>
        </div>

        <div className="flex flex-row justify-center space-x-4 items-center -mx-8 md:mx-0 mb-12">
          <h1 className="font-rosario font-bold text-sm md:text-md">Research:</h1>
          <p className="font-rosario text-sm md:text-md">The importance of communication</p>
        </div>
        {/* podcast */}
        <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-10">
          <Link 
            href={'https://open.spotify.com/episode/5qovZgEaFe58ux64M2u7hu?si=07960ec46ccd4c7e'}
            className='w-full flex justify-center'>
            <Image
              src={'/podcast.png'}
              alt={''}
              width={400}
              height={400}
              className=''
            />
          </Link>

          <div className="flex flex-col space-y-8 justify-end xl:justify-center">
            <h1 className="text-sm md:text-md font-rosario font-bold text-center md:text-left">
              Something Was Wrong Podcast
            </h1>
            <p className="text-sm text-justify max-w-7xl xl:max-w-full">
              This is one clip from a podcast that is full of real life examples of how women have worked together to stand up against an abuser. Once they started talking to each other, putting the pieces together and going public, they realized the extent of the damage this person caused. Other women managed to get away from this man on time thanks to their stories. It also helped to gather enough evidence and proof to try and get him arrested. This case is still on going.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Woman