"use client"

import Image from 'next/image';
import Link from 'next/link';
import AnimatedText from './components/AnimatedText';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between pt-20 px-3'>
      <div className='w-full min-h-[calc(100vh-120px)] rounded-xl bg-zinc-900 p-24'>
        <div>
          <p className='text-white font-bold text-[97px] min-h-[calc(100px*4.7)] leading-tight mb-12'>
              <AnimatedText
                opacity={0.7}
                space={20}
                className="animated-text"
                text={
                  'Bard can list advantages and disadvantages to consider before buying a smart watch'
                }
              />
          </p>
        </div>
        <div className='flex justify-between'>
          <p className='text-white text-xl max-w-5xl'>
            Meet Bard: your creative and helpful collaborator, here to
            supercharge your imagination, boost your productivity, and bring
            your ideas to life.
            <br />
            <br />
            Bard is an experiment and may give inaccurate or inappropriate
            responses. You can help make Bard better by leaving feedback.
          </p>
          <div className='flex justify-center items-end'>
            <Link
              href='/ask'
              className='min-w-[160px] px-3 py-1.5 font-bold text-zinc-900 bg-blue-400 text-center rounded'
            >
              Try now!
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
