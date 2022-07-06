export default function Home() {
  const links = [
    {
      name: 'Gtihub',
      emoji: '🐱',
      url: 'https://github.com/peteroid',
    },
    {
      name: 'Linkedin',
      emoji: '💼',
      url: 'https://linkedin.com/in/peteroid',
    },
    {
      name: 'Résumé',
      emoji: '📇',
      url: 'https://drive.google.com/file/d/1acKX5RhWBtU51rprALCkctZ8ihFIkYcO/view?usp=sharing',
    },
    {
      name: 'CV',
      emoji: '🔮',
      url: '/cv',
    },
  ];

  return (
    <div className='h-full bg-gradient-to-br from-cyan-500 via-sky-500 to-indigo-500 flex flex-col justify-center items-center'>
      <div className='bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center gap-4 p-8 md:p-16 md:gap-8'>
        <h1 className='text-xl flex items-center gap-2'>
          <span className='italic'>Peter Chow</span>{' '}
          <span className='text-3xl animate-bounce'>🐕</span>
        </h1>
        <div className='flex flex-col text-center gap-2'>
          {links.map((link) => (
            <a key={link.name} href={link.url} target='_blank' rel='noreferrer'>
              <span className='underline'>{link.name}</span>
              <span className='ml-2 text-xl'>{link.emoji}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
