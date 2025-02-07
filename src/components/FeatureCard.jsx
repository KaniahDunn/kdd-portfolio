import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function FeatureCard({
  title,
  description,
  buttonText,
  isSocialCard,
  projectList
}) {
  return (
    <Card className='max-w-sm w-full bg-white shadow-lg rounded-2xl dark:bg-gray-800 p-6'>
      <CardBody className='flex flex-col items-center'>
        <Typography
          variant='h5'
          color='blue-gray'
          className='text-center font-bold dark:text-white'
        >
          {title}
        </Typography>

        <Typography className='mt-2 text-gray-600 dark:text-gray-300 text-center break-words'>
          {description}
        </Typography>

        {projectList && (
          <ul className='mt-4 space-y-2'>
            {projectList.map((project, index) => (
              <li key={index} className='text-blue-500 hover:underline'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
        )}

        {isSocialCard ? (
          <div className='flex space-x-4 mt-4'>
            <a
              href='https://github.com/KaniahDunn'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub className='text-gray-900 w-8 h-8 hover:text-gray-700 dark:text-white' />
            </a>
            <a
              href='https://www.linkedin.com/in/kaniahdunn/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='text-blue-600 w-8 h-8 hover:text-blue-800' />
            </a>
            <a
              href='https://x.com/KaniahDunn'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter className='text-blue-400 w-8 h-8 hover:text-blue-600' />
            </a>
          </div>
        ) : (
          <Button color='blue' className='mt-4'>
            {buttonText}
          </Button>
        )}
      </CardBody>
    </Card>
  );
}
