import { ArrowRight, Dice1 } from 'lucide-react';
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default function Home() {
  return (
    <MaxWidthWrapper className='"bg-blue-400" mb-12 mt-28 flex flex-col items-center justify-center'>
      <h1 className={`
        flex mx-auto mb-4 max-w-fit items-center justify-center
        space-x-2 overflow-hidden rounded-full borde
        border-gray-200 bg-white px-7 py-2 shadow-md
        backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50`
      }>Beta Whaat</h1>
      <Dice1 />
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dice-1"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M12 12h.01"/></svg>
      <Link className={buttonVariants()} href='/dashboard' target='_blank'>
Get Started <ArrowRight className='m1-2 h-5 w-5' />
      </Link>
    </MaxWidthWrapper> 
  );
}
