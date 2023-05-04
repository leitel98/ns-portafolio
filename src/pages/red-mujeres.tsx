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

      <section id="research" className="py-40 px-8 md:px-20 relative">
        <Image
          src={'/phones.png'}
          alt={''}
          width={550}
          height={550}
          className='absolute right-8 -top-44'
        />

        <h1 className="font-oxygen font-bold text-lg md:text-xl uppercase text-center mb-16 md:mb-24">
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

        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:justify-between md:space-x-8 md:px-8 mb-16 md:mb-24">
          <div className="flex flex-row space-x-4 justify-center md:items-start">
            <div className='h-4 w-4 rounded-full bg-pinkole mt-4' />
            <h1 className="font-oxygen font-bold text-sm md:text-md uppercase">
              Inspiration
            </h1>
          </div>
          <p className="text-xs md:text-sm text-justify md:max-w-lg">
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

      <section id="question-band" className="py-8 px-4 md:px-32 bg-pinkole text-white text-md md:text-lg">
        <h1 className="mx-auto text-center">
          So what if we could build a place were we could safely have these conversations?
        </h1>
      </section>

      <section id="interviews" className="py-40 md:py-28 px-4 md:px-16 text-black flex flex-col space-y-16">
        {/* header */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:justify-between md:px-8">
          <h1 className="font-rosario font-bold text-md text-center md:items-start">Interviews</h1>
          <p className="text-sm text-justify md:w-1/2">
            I conducted five remote user interviews to get to know my users, their frustrations, motivations, what they do and how they feel. With this information I created an empathy map in order to better guide the creation of my user persona and overall project. Some of the most important answers are shown next.
          </p>
        </div>
        {/* interviews */}
        <div className="flex flex-col px-8 space-y-40 md:space-y-16">
          {/* chat left */}
          <div className="flex flex-row relative">
            <Image
              src={'/int-1.png'}
              alt={''}
              width={100}
              height={100}
              className='rounded-full absolute top-48 md:top-28'
            />
            <p className="p-8 bg-chat-left bg-pinkole bg-opacity-70 text-xs md:text-sm md:max-w-2xl ml-28 text-justify shadow-xl">
              “There is a special bond between women, we share similar experiences just because of it”.
            </p>
          </div>
          {/* chat right */}
          <div className="flex flex-row relative justify-end">
            <p className="p-8 bg-chat-right bg-swampole bg-opacity-70 text-xs md:text-sm md:max-w-2xl mr-28 text-justify shadow-xl">
              “It’s very different to explain some experiences  to men. With women it feels like they understand and believe you”.
            </p>
            <Image
              src={'/int-2.png'}
              alt={''}
              width={100}
              height={100}
              className='rounded-full absolute top-48 md:top-28 right-0'
            />
          </div>
          {/* chat left */}
          <div className="flex flex-row relative">
            <Image
              src={'/int-3.png'}
              alt={''}
              width={100}
              height={100}
              className='rounded-full absolute top-40 md:top-32'
            />
            <p className="p-8 bg-chat-left bg-pinkole bg-opacity-70 text-xs md:text-sm md:max-w-2xl ml-28 text-justify shadow-xl">
              “Now a days we mostly use Instagram, Tik Tok and other apps to express our feelings and share with our friends”.
            </p>
          </div>
          {/* chat right */}
          <div className="flex flex-row relative justify-end">
            <p className="p-8 bg-chat-right bg-swampole bg-opacity-70 text-xs md:text-sm md:max-w-2xl mr-28 text-justify shadow-xl">
              “It becomes so frustrating when people don’t listen, invalidate your opinions, question everything you say and in general make you feel insecure. And this usually comes from men”.
            </p>
            <Image
              src={'/int-4.png'}
              alt={''}
              width={100}
              height={100}
              className='rounded-full absolute top-60 md:top-48 right-0'
            />
          </div>
        </div>
      </section>

      <section id="benchmarking" className="pt-0 pb-16 px-8 bg-lightCream text-black flex flex-col space-y-16 relative">
        <div className="absolute blurball bg-white right-80 top-8" />
        <div className="absolute blurball bg-pinkole right-0 top-96" />
        <div className="absolute blurball bg-pinkole left-0 top-96 scale-75" />
        <h1 className="font-rosario font-bold text-md md:text-[36px] ml-40">
          Benchmarking: <span className='font-rosario font-normal'> What do we have available now?</span>
        </h1>
        {/* white box */}
        <div className="pt-12 pb-10 px-6 md:px-32 bg-white bg-opacity-60 relative flex flex-col shadow-xl">
          {/* dot */}
          <div className="hidden md:block absolute h-4 w-4 bg-black rounded-full top-32 left-12" />
          {/* line */}
          <div className="hidden md:block absolute h-[31rem] z-10 w-1 bg-black rounded-full top-[8.2rem] left-[3.4rem]" />
          {/* head */}
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between items-center md:space-x-8 mb-16">
            <Image
              src={'/contigo.png'}
              alt={''}
              width={250}
              height={100}
              className=''
            />
            <p className="text-xs md:text-sm max-w-2xl">
              The main idea is to share your location with close contacts and put out alerts for the other women in your area.
            </p>
          </div>
          {/* strengths and weaknesses */}
          <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:justify-between md:space-x-24 px-10">
            {/* str */}
            <div className="flex flex-col space-y-4">
              <h1 className="text-sm font-bold">
                Strengths
              </h1>
              <ul className='text-xs px-2 flex flex-col space-y-1 max-w-md items-start'>
                <div className="flex flex-row space-x-4 items-center justify-center">
                  <div className="h-1 w-1 bg-black rounded-full" />
                  <p>Easy verifying process that you are a woman.</p>
                </div>
                <div className="flex flex-row space-x-4 items-center justify-between">
                  <div className="h-1 w-1 bg-black rounded-full" />
                  <p>It’s simple and quick to put out an alert, with each category being intuitively depicted by an icon. </p>
                </div>
                <div className="flex flex-row space-x-4 items-center justify-center">
                  <div className="h-1 w-1 bg-black rounded-full" />
                  <p>The design is clean and visually attractive.</p>
                </div>
              </ul>
            </div>
            {/* wk */}
            <div className="flex flex-col space-y-4">
              <h1 className="text-sm font-bold">
                Weaknesses
              </h1>
              <ul className='text-xs px-2 flex flex-col space-y-1 max-w-md items-start'>
                <div className="flex flex-row space-x-4 items-center justify-center">
                  <div className="h-[4px] w-[4px] bg-black rounded-full" />
                  <p>There are some extra functions that are not very clear to use.</p>
                </div>
                <div className="flex flex-row space-x-4 items-center justify-center">
                  <div className="h-[4px] w-[4px] bg-black rounded-full" />
                  <p>The line of communication is limited to your contacts or women in the immediate area. </p>
                </div>
                <div className="flex flex-row space-x-4 items-center justify-center">
                  <div className="h-[4px] w-[4px] bg-black rounded-full" />
                  <p> The information that is being shared is not saved.</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
        {/* white box 2 */}
        <div className="pt-12 pb-10 px-6 md:px-32 bg-white bg-opacity-60 relative flex flex-col shadow-xl">
          {/* dot */}
          <div className="hidden md:block absolute h-4 w-4 bg-black rounded-full top-20 left-12" />
          {/* head */}
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between items-center md:space-x-8 mb-16">
            <Image
              src={'/ig.png'}
              alt={''}
              width={250}
              height={100}
              className=''
            />
            <p className="text-xs md:text-sm max-w-2xl">
              Wildly known and used. It’s a social media platform that specializes in sharing pictures with your followers.
            </p>
          </div>
          {/* strengths and weaknesses */}
          <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:justify-between md:space-x-24 px-10">
            {/* str */}
            <div className="flex flex-col space-y-4">
              <h1 className="text-sm font-bold">
                Strengths
              </h1>
              <ul className='text-xs px-2 flex flex-col space-y-1 max-w-md items-start'>
                <div className="flex flex-row space-x-4 items-center justify-center">
                  <div className="h-1 w-1 bg-black rounded-full" />
                  <p>Very well known and commonly used in day to day life.</p>
                </div>
                <div className="flex flex-row space-x-4 items-center justify-between">
                  <div className="h-1 w-1 bg-black rounded-full" />
                  <p>Highly intuitive design.</p>
                </div>
                <div className="flex flex-row space-x-4 items-center justify-center">
                  <div className="h-1 w-1 bg-black rounded-full" />
                  <p> It grabs and keeps your attention through images.</p>
                </div>
                <div className="flex flex-row space-x-4 items-center justify-center">
                  <div className="h-1 w-1 bg-black rounded-full" />
                  <p> It’s easy to find, add and chat with different people.</p>
                </div>
              </ul>
            </div>
            {/* wk */}
            <div className="flex flex-col space-y-4">
              <h1 className="text-sm font-bold">
                Weaknesses
              </h1>
              <ul className='text-xs px-2 flex flex-col space-y-1 max-w-md items-start'>
                <div className="flex flex-row space-x-4 items-center justify-center">
                  <div className="h-[4px] w-[4px] bg-black rounded-full" />
                  <p>The size and importance of the text is very small.</p>
                </div>
                <div className="flex flex-row space-x-4 items-center justify-center">
                  <div className="h-[4px] w-[4px] bg-black rounded-full" />
                  <p>The “Like” and “Follow” functions create competition between users and has been known to affect mental health in young people. </p>
                </div>
                <div className="flex flex-row space-x-4 items-center justify-center">
                  <div className="h-[4px] w-[4px] bg-black rounded-full" />
                  <p> The amount and variety of people that use it make it easier to encounter bad intentioned people.</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="conceptualization" className="py-20 md:pt-40 pb-32 px-8 md:px-32">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-28 justify-center">
          <div className="flex flex-row space-x-4 items-start">
            <div className="w-4 h-4 mt-4 rounded-full bg-pinkole" />
            <h1 className="font-oxygen font-bold text-sm md:text-md uppercase">
              conceptualization
            </h1>
          </div>
          <p className="text-xs md:text-sm max-w-xl">
            With the information recovered by the inspiration phase, I was able to create a user persona and define the MVP of this project.
          </p>
        </div>
      </section>

      <section id="user" className="px-8 py-8 md:px-12 md:py-16 bg-pinkole text-white bg-opacity-[85%]">
        <div className="flex flex-col space-y-8 justify-center items-center md:flex-row md:space-y-0 md:space-x-28">
          <Image
            src={'/user.png'}
            alt={''}
            width={300}
            height={300}
            className='rounded-full border border-white'
          />
          <div className="flex flex-col space-y-16 justify-center">
            <h1 className="font-rosario font-bold text-sm md:text-md ml-8">
              User Persona
            </h1>
            <div className="flex flex-col space-y-12 justify-center items-left">
              <div className="flex flex-row space-x-8 items-center">
                <Image
                  src={'/person.svg'}
                  alt={''}
                  width={30}
                  height={30}
                  className=''
                />
                <p className="text-xs md:text-sm">
                  <span className="font-bold"> Camila</span> is a 28 y/o living in Santiago, Chile.
                </p>
              </div>
              <div className="flex flex-row space-x-8 items-center">
                <Image
                  src={'/case.svg'}
                  alt={''}
                  width={30}
                  height={30}
                  className=''
                />
                <p className="text-xs md:text-sm max-w-xl">
                  Working as an mining engineer, she has to deal with men’s ideas of her in a day to day basis. Some women have been incorporating to her team, but there is still a long way to go in order to feel comfortable.
                </p>
              </div>
              <div className="flex flex-row space-x-8 items-center">
                <Image
                  src={'/media.svg'}
                  alt={''}
                  width={30}
                  height={30}
                  className=''
                />
                <p className="text-xs md:text-sm max-w-xl">
                  As her job requires a lot of traveling, she uses a lot of social media to kill time. Some of these are Instagram, Tik Tok, Twitter and Reddit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* mvp */}
      <section id="mvp" className="py-8 px-6 md:px-32 md:pt-4 md:pb-28 relative flex flex-col space-y-28 items-start">
        <div className="absolute blurball bg-pinkole top-24 right-80"/>
        <div className="absolute blurball bg-cream bottom-24 right-48 scale-125"/>
        <Image 
          className="hidden md:block absolute right-28 top-40" 
          src={'/duphones.png'} 
          alt={''}
          width={450}
          height={100}
        />
        <div className="flex flex-col space-y-8">
          <h2 className="font-rosario font-bold text-md md:text-lg text-center">
            MVP
          </h2>
          <h1 className="font-bold text-xs md:text-sm">
            The basic functions for the app to serve its purpose are:
          </h1>
          <ul className="flex flex-col space-y-1 pl-4">
            <div className="flex flex-row space-x-2 items-center">
              <div className="h-1 w-1 rounded-full bg-black" />
              <p className="text-xxs md:text-xs">
                To be able to register and verify that you are a woman.
              </p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <div className="h-1 w-1 rounded-full bg-black" />
              <p className="text-xxs md:text-xs">
                Make a post with an image and/or text.
              </p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <div className="h-1 w-1 rounded-full bg-black" />
              <p className="text-xxs md:text-xs">
                Interact with the community through chats and comments.
              </p>
            </div>
          </ul>
        </div>
        <div className="flex flex-col space-y-8">
          <h2 className="font-rosario font-bold text-md md:text-lg text-center">
            Full version
          </h2>
          <h1 className="font-bold text-xs md:text-sm">
            In future updates the objective is to add these features:
          </h1>
          <ul className="flex flex-col space-y-1 pl-4">
            <div className="flex flex-row space-x-2 items-center">
              <div className="h-1 w-1 rounded-full bg-black" />
              <p className="text-xxs md:text-xs">
                To have colors that indicate the category of posts.
              </p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <div className="h-1 w-1 rounded-full bg-black" />
              <p className="text-xxs md:text-xs">
                Being able to publish anonymously.
              </p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <div className="h-1 w-1 rounded-full bg-black" />
              <p className="text-xxs md:text-xs">
                Adding your location to your post.
              </p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <div className="h-1 w-1 rounded-full bg-black" />
              <p className="text-xxs md:text-xs">
                Saving posts and assort them into folders
              </p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <div className="h-1 w-1 rounded-full bg-black" />
              <p className="text-xxs md:text-xs">
                Trigger warnings for posts
              </p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <div className="h-1 w-1 rounded-full bg-black" />
              <p className="text-xxs md:text-xs">
                Adding friends to your circle
              </p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <div className="h-1 w-1 rounded-full bg-black" />
              <p className="text-xxs md:text-xs">
                Answer posts with other posts in order to have chain reactions
              </p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <div className="h-1 w-1 rounded-full bg-black" />
              <p className="text-xxs md:text-xs">
                Search filters and recommendations
              </p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <div className="h-1 w-1 rounded-full bg-black" />
              <p className="text-xxs md:text-xs">
                Moderators and the possibility to report posts that go against the community
              </p>
            </div>
          </ul>
        </div>

      </section>
    </>
  )
}

export default Woman