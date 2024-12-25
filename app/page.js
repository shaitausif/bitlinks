import Image from "next/image";
import localFont from "next/font/local"
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight:"100 200"
});

export default function Home() {
  return (
   <main className="bg-purple-100">
    <section className="grid grid-cols-2 h-[50vh]">
      <div className=" flex flex-col gap-3 justify-center items-center">
        <p className={`${poppins.className} font-bold text-2xl`}>
          The best URL shortener in the Market.
        </p>
        <p className="text-center px-12">
          We are the most straightforward URL shortener in the world. Most of the url shortener will ask track you or ask you to give your details for login. We understand your need and hence we've created this url shortener.
        </p>
        <div className='flex gap-3'>
                <Link href="/shorten"><button className='font-bold rounded-xl px-3 py-1 bg-purple-500 shadow-2xl text-white'>Try Now</button></Link>
                <Link href="/github"><button className='font-bold rounded-xl px-3 py-1 bg-purple-500 shadow-2xl text-white'>Github</button></Link>
            </div>
      </div>  
      <div className=" flex justify-start relative">
        <Image alt="An image of a Vector" src="/vector.png" className="absolute object-cover mix-blend-darken" fill={true}/>
      </div>

    </section>
   </main>
  );
}
