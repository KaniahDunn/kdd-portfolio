export default function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>
      {/* Left Section - Image */}
      <div className='relative'>
        <img
          src='/kaniah-dunn.jpg'
          alt='Kaniah Dunn at work'
          className='w-full h-full object-cover opacity-90'
        />
        {/* Vertical Text */}
        <div className='absolute left-6 top-1/2 -translate-y-1/2 rotate-90 text-white dark:text-gray-400 font-medium tracking-widest'>
          SWE
        </div>
      </div>

      {/* Right Section - Text */}
      <div className='flex flex-col justify-center items-start px-12 bg-[#F8F6F3] dark:bg-gray-900 transition-colors duration-300'>
        <h1 className='text-5xl md:text-7xl font-elegant tracking-wide text-black dark:text-white transition-colors duration-300'>
          KANIAH <br /> DUNN
        </h1>
        <p className='mt-4 text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300'>
          Software Engineer | Teacher | Mother
        </p>
      </div>
    </div>
  );
}
