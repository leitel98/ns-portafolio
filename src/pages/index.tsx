import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicole Smith</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='flex-flex-col tracking-normal'>
        <section id='#hero' className="flex flex-col">
          <div className="flex flex-col md:flex-row pt-32 pb-36 px-20 justify-between">
            <h1 className="font-oxygen text-xl text-blackole max-w-lg md:w-1/2">Hi ! I’m <span className='inline-block text-pinkole'>Nicole</span>, UX/UI Designer, Problem solver, Artist and Crazy cat lady.</h1>
            <Image
              src={'/work-from-home.gif'}
              alt={''}
              width={100}
              height={100}
              className='w-auto md:w-1/2 mt-20 md:mt-0'
            />
          </div>
        </section>

        <section id="about" className="flex flex-col px-20 py-28 space-y-16 bg-cream bg-opacity-50 text-blackole">
          <h1 className="text-2xl font-oxygen">This is Me!</h1>
          <p className="text-sm">
            <span className="text-sm font-bold">I am</span> a UX/UI designer, an artist and a natural problem solver. With a background in culinary arts and services, <span className="text-sm font-bold">I pride myself</span> in my ability to work as part of a  team with colleagues from diverse backgrounds. This has helped me develop an ease at sharing my ideas in a quick and simple way, in order to maintain a dynamic and synchronized work environment. <span className="text-sm font-bold">I believe</span> active listening is the first step to problem solving and effective communication. How can you find a solution if you don’t understand the problem? Ask the right questions, add some creativity and teamwork and you can deliver results that will make a lasting impact on people.
          </p>
        </section>

        <section id="work" className='pt-20 pb-36 px-10 md:px-20'>
          <h1 className="text-xl mb-12 text-center md:text-left">
            My Progress
          </h1>
          <div className=" grid gap-10 grid-cols-1 md:grid-cols-2 text-blackole">
            {/* card 1 */}
            <div className="flex flex-col relative pt-8 px-6 pb-6 bg-pinkole bg-opacity-50 rounded-md shadow-lg">
              <Image
                src={'/woman-1.png'}
                alt={''}
                width={500}
                height={100}
                className='w-full'
              />
              {/* <div className="absolute right-3 top-1/3 w-full">
                <div className="relative ">
                  <Image
                    src={'/cel-1.png'}
                    alt={''}
                    width={105}
                    height={105}
                    className='absolute right-24'
                  />
                  <Image
                    src={'/cel-2.png'}
                    alt={''}
                    width={75}
                    height={75}
                    className='absolute '
                  />
                  <Image
                    src={'/cel-3.png'}
                    alt={''}
                    width={85}
                    height={85}
                    className=''
                  />
                </div>
              </div> */}
              <div className='px-6'>
                <h1 className="mt-10 font-rosario text-lg uppercase">
                  red mujeres
                </h1>
                <p className="text-md mt-4">
                  UX/UI design of a social network app just for women.
                </p>
              </div>
              <div className="w-full flex flex-row justify-end space-x-4 mt-6">
                <p className="text-sm">Case study</p>
                <Image
                  src={'/arrow.svg'}
                  alt={''}
                  width={25}
                  height={100}
                  className=''
                />
              </div>
            </div>
            {/* card 2  */}
            <div className="flex flex-col pt-8 px-6 pb-6 bg-cream bg-opacity-50 rounded-md shadow-lg">
              <div className="flex flex-row px-4">
                <Image
                  src={'/pastel-1.png'}
                  alt={''}
                  width={500}
                  height={100}
                  className='w-1/2'
                />
                <Image
                  src={'/pastel-2.png'}
                  alt={''}
                  width={500}
                  height={100}
                  className='w-1/2'
                />
              </div>
              <div className='px-6'>
                <h1 className="mt-10 font-oxygen text-lg">
                  ART and HOBBIES
                </h1>
                <p className="text-md mt-4 font-rosario">
                  Paintings, drawings, cakes and more.
                </p>
              </div>
              <div className="w-full flex flex-row justify-end space-x-4 mt-6">
                <p className="text-sm">Photo gallery</p>
                <Image
                  src={'/arrow.svg'}
                  alt={''}
                  width={25}
                  height={100}
                  className=''
                />
              </div>
            </div>
            {/* card 3 */}
            <div className="flex flex-col md:flex-row md:col-span-2 p-12 bg-swampole bg-opacity-50 rounded-md shadow-lg">
              <div className=' relative'>
                <h1 className="font-rosario font-bold absolute text-white text-lg top-32 left-24">Coming Soon</h1>
                <Image
                  src={'/comming-soon.png'}
                  alt={''}
                  width={600}
                  height={100}
                  className=''
                />
              </div>
              <div className='flex flex-col mt-10 md:ml-20 justify-center items-left'>
                <h1 className=" font-oxygen text-lg text-left uppercase">
                  CHILD OF WAR
                </h1>
                <p className="text-md mt-4 font-rosario">
                  UX/UI design in a videogame demo. Available July 2023
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="flex flex-col space-y-12 items-center py-10 px-20 bg-cream bg-opacity-60">
          <h1 className="font-oxygen text-lg md:text-xl">
            Get in contact with me
          </h1>
          <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-20">
            <div className="flex flex-row space-x-4">
              <Image
                src={'/mail.svg'}
                alt={''}
                width={25}
                height={100}
                className=''
              />
              <p className="font-oxygen text-sm">
                nsmithb95@gmail.com
              </p>
            </div>
            <div className="flex flex-row space-x-4">
              <Image
                src={'/cel.svg'}
                alt={''}
                width={25}
                height={100}
                className=''
              />
              <p className="font-oxygen text-sm">
                +56 9 8838 3751
              </p>
            </div>
            <div className="flex flex-row space-x-4">
              <Image
                src={'/Linkedin.svg'}
                alt={''}
                width={25}
                height={100}
                className=''
              />
              <p className="font-oxygen text-sm">
                /nsmithb
              </p>
            </div>
          </div>
          <Image
            src={'/arrow.svg'}
            alt={''}
            width={40}
            height={100}
            className='-rotate-90'
          />
        </footer>
      </main>
    </>
  )
}
