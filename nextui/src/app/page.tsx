import { ArrowRight} from 'lucide-react';
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default function Home() {
    return (
        <MaxWidthWrapper className='"bg-blue-400" mb-12 mt-28 flex flex-col items-center justify-center'>
            <h1 className='max-w-4xl text-5xl font-bold md:text-6cl lg:text-7xl p-8'>Welcome to <span className='text-gray-400'>Beta Board</span></h1>
            <Link className={buttonVariants({
                size: 'lg',
                className: 'mt-5'
            })}
                href='/dashboard'
                target='_blank'>
                This way <ArrowRight className='m1-2 h-5 w-5' />
            </Link>
        </MaxWidthWrapper>
    );
}
