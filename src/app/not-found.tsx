import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col bg-[#e3e3e3] min-h-screen justify-between'>
      <div className='relative z-20'>
        <div className='relative flex flex-col items-center justify-center scrn-900:justify-normal scrn-1000:justify-center bg-[#e3e3e3]'>

          {/*  Text Section */}
          <div className='text-center z-40 mt-40 scrn-500:mt-32 scrn-1000:mt-20 scrn-1300:mt-24'>
            <p className='text-gray-800 px-4 flex flex-col'>
              <span className='text-gray-800 text-9xl scrn-700:text-10xl scrn-900:font-extrabold scrn-900:text-gray-900 scrn-900:text-12xl scrn-1000:text-[16rem]'>404</span> <br />
              <span className='text-red-600 font-bold text-3xl scrn-500:text-4xl scrn-700:text-5xl scrn-900:text-7xl scrn-1100:text-8xl'>Page Not Found</span> <br />
              <span className='text-xl scrn-700:text-2xl'>The page you&apos;re looking for does not exist.</span>
            </p>
            <Link
              href="/"
              className='mt-6 tracking-wide inline-block px-4 py-1 rounded-2xl outline outline-red-600 text-gray-700 text-lg scrn-1500:text-2xl hover:text-white hover:bg-red-600 hover:scale-105 transform transition duration-300'
            >
              RETURN TO HOMEPAGE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
