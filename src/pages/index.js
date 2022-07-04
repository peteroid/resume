export default function Home() {
  return (
    <div className='h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-center items-center text-white gap-8'>
      <h2 className='text-xl'>Hello world!</h2>
      <h1 className='text-xl'>
        This is <span className='italic'>Peter Chow</span> <span className='text-4xl'>🐕</span>
      </h1>
      <div className='flex flex-col text-center gap-2'>
        <a className='underline' href='https://github.com/peteroid'>
          Github
        </a>
        <a className='underline' href='https://linkedin.com/in/peteroid'>
          Linkedin
        </a>
        <a className='underline' href='https://drive.google.com/file/d/1acKX5RhWBtU51rprALCkctZ8ihFIkYcO/view?usp=sharing'>
          CV
        </a>
      </div>
    </div>
  );
}
