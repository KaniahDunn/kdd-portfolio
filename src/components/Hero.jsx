import { Typography } from "@material-tailwind/react";

export default function Hero() {
  return (
    <div className='text-center mb-12'>
      <Typography
        variant='h1'
        color='blue-gray'
        className="font-rubik text-center dark:text-white text-9xl md:text-6xl"
      >
        KaniahDunn
      </Typography>
      <Typography className='mt-2 text-gray-600 dark:text-gray-300'>
        Mother | Life-long Learner | Software Engineer
      </Typography>
    </div>
  );
}
