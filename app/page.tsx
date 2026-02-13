import Image from "next/image";
import Logo from "@/assets/logo.svg"
import LandingImg from "@/assets/main.svg"
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt='logo'/>
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-2 items-center">
        <div>
          <h1 className="capitalize text-7xl font-bold">
            job <span className="text-primary">tracking</span> app
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Keep track of your job applications and never miss a follow-up again, all in one place.
          </p>
          <Button asChild className='mt-6'>
            <Link href='/add-job'>Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt='landing' className="hidden lg:block ml-30 h-128 w-full"/>
      </section>
    </main>
  );
}
