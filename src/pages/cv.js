import { GlobeIcon, LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline';

const iconEndpoint = {
  material:
    'https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/%slug%.svg',
  vs: 'https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_%slug%.svg',
  icon8: 'https://img.icons8.com/color/344/%slug%.png',
};
const iconMap = {
  puppeteer:
    'https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png',
  electron:
    'https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg',
  strapi: 'https://cdn.worldvectorlogo.com/logos/strapi-2.svg',
  rabbitmq: 'https://seeklogo.com/images/R/rabbitmq-logo-25641A76DE-seeklogo.com.png',
  amp: 'https://seeklogo.com/images/A/amp-logo-6C8CA951C7-seeklogo.com.png',
  spark: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg',
  keras: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg',
};
const getIconUrl = (name) => {
  let endpoint = iconEndpoint.material;
  let slug = String(name).toLowerCase();
  if (slug.includes('c++')) slug = 'c';
  if (slug.includes('react native')) slug = 'react';
  if (slug.includes('shell')) slug = 'shell';
  if (slug.includes('c#')) slug = 'csharp';
  if (slug.includes('elastic')) slug = 'elastic';
  if (slug.includes('redux')) slug = 'redux-action';
  if (slug.includes('github')) slug = 'github';
  if (slug.includes('mongo')) slug = 'mongo';
  if (slug.includes('postgresql')) slug = 'postgreesql';
  if (slug.includes('hadoop')) slug = 'hadoop-distributed-file-system';

  if (/(flutter)|(java$)|(shell)|(elastic)|(aws)|(mongo)|(sqlite)/.test(slug))
    endpoint = iconEndpoint.vs;
  if (/(unity)|(wordpress)|(shopify)|(github)|(redis)|(sql$)|(hadoop)|(tensorflow)/.test(slug))
    endpoint = iconEndpoint.icon8;

  if (slug.includes('mysql')) slug = 'mysql-logo';

  return iconMap[slug] || endpoint.replace('%slug%', slug);
};

const TechIcon = ({ name, ...props }) => (
  <div {...props}>
    <div className='flex items-center bg-gray-50 px-2 py-1 rounded-full'>
      {!name.startsWith('_') && (
        <img
          className='mr-1 max-w-5 h-5'
          src={getIconUrl(name)}
          onError={() => console.log('ddasd')}
          alt={`${name} icon`}
        />
      )}
      <span className='text-sm'>{name.replace(/\_/, '')}</span>
    </div>
  </div>
);

const Progress = ({ value }) => (
  <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
    <div className='bg-blue-600 h-2.5 rounded-full' style={{ width: value + '%' }}></div>
  </div>
);

const Cv = () => {
  const data = {
    name: 'Peter Chow',
    title: 'Software Engineer',
    avatarUrl: 'https://avatars.githubusercontent.com/u/12689188?v=4',
    infoBlocks: [
      {
        title: 'Contact',
        items: [
          {
            icon: MailIcon,
            content: 'selllfocard@gmail.com',
            href: 'mailto:selllfocard@gmail.com',
          },
          {
            icon: PhoneIcon,
            content: '(+81) 080-4188-4109',
            href: 'tel:+8108041884109',
          },
          {
            icon: GlobeIcon,
            content: 'www.peteroid.com',
            href: 'https://www.peteroid.com',
          },
          {
            icon: LocationMarkerIcon,
            content: 'Tokyo 🇯🇵',
          },
        ],
      },
      {
        title: 'On the Web',
        items: [
          {
            icon: 'https://img.icons8.com/ios-glyphs/344/github.png',
            content: 'Gtihub',
            href: 'https://www.github.com/peteroid',
          },
          {
            icon: 'https://img.icons8.com/ios-glyphs/344/linkedin.png',
            content: 'LinkedIn',
            href: 'https://www.linkedin.com/in/peteroid',
          },
          {
            icon: 'https://img.icons8.com/ios/344/stackoverflow.png',
            content: 'Stack Overflow',
            href: 'https://www.stackoverflow.com/u/5233592',
          },
          {
            icon: 'https://img.icons8.com/ios-glyphs/344/google-maps.png',
            content: 'Local guide',
            href: 'https://www.google.com/maps/contrib/106712643885038662625/photos/',
          },
        ],
      },
    ],

    skills: {
      title: 'Skills & Tools',
      items: [
        {
          title: 'Languages',
          items: [
            'JavaScript',
            'Shell',
            'Java',
            'TypeScript',
            'C#',
            'C/C++',
            'Python',
            'Haskell',
            'Scala',
            'Rust',
            'Lua',
            'PHP',
            'HTML',
            'CSS',
          ],
        },
        {
          title: 'Frameworks',
          items: [
            'NodeJS',
            'Next',
            'React',
            'Redux',
            'Vue',
            'Gatsby',
            'Flutter',
            'React Native',
            'Android',
            'Unity',
            'Tauri',
            'Electron',
            'Elastic Search',
            'Puppeteer',
            'TailwindCSS',
            'AMP',
            'Cypress',
            'Strapi',
            'Shopify',
            'Wordpress',
          ],
        },
        {
          title: 'DB / Infra / Devops',
          items: [
            'Docker',
            'Travis',
            'Jest',
            'Github Actions',
            'Firebase',
            'AWS',
            'GCP',
            'Nginx',
            'Git',
            'MongoDB',
            'MySQL',
            'SQLite',
            'PostgreSql',
            'RabbitMQ',
            'Redis',
          ],
        },
        {
          title: 'AI / Big Data',
          items: ['Tensorflow', 'Keras', 'Spark', 'Hadoop', '_scikit-learn', '_OpenAI Gym'],
        },
      ],
    },
    languages: {
      title: 'Languages',
      items: [
        {
          name: 'Chinese',
          level: 'Native',
        },
        {
          name: 'English',
          level: 'Fluent',
        },
        {
          name: 'Japanese',
          level: 'Intermediate',
        },
      ],
    },
    profile: `An energetic, optimistic and motivated geek, who is enthusiastic about techs, hacks and dogs.`,
  };

  return (
    <div className='relative sm:p-12'>
      <div className='bg-pattern-zigzag absolute inset-0' />
      <main className='flex flex-col sm:flex-row-reverse shadow-2xl z-10 relative'>
        <div className='w-full sm:max-w-xs px-6 py-8 relative'>
          <div className='bg-pattern-polka absolute inset-0' />
          <div className='relative'>
            <div className='px-2 mb-8'>
              <img
                src={data.avatarUrl}
                alt='Profile Picture'
                className='rounded-full w-40 mx-auto mb-2'
              />
              <h1 className='text-center text-3xl font-semibold mb-2'>{data.name}</h1>
              <h2 className='text-center text-xl font-light'>{data.title}</h2>
            </div>

            {data.infoBlocks.map(({ title, items }) => (
              <div key={title} className='font-light text-lg px-2 mb-8'>
                <h2 className='font-semibold mb-2'>{title}</h2>
                {items.map(({ icon: Icon, content, href }) => (
                  <div key={content} className='flex items-center my-2'>
                    {typeof Icon === 'string' ? (
                      <img className='inline w-6 mr-2' src={Icon} alt={content} />
                    ) : (
                      <Icon className='inline w-6 mr-2' />
                    )}
                    {href ? (
                      <a href={href} target='_blank' rel='noreferrer'>
                        {content}
                      </a>
                    ) : (
                      <p>{content}</p>
                    )}
                  </div>
                ))}
              </div>
            ))}

            <div className='font-light text-lg px-2 mb-8'>
              <h2 className='text-xl font-semibold mb-2'>{data.skills.title}</h2>
              {data.skills.items.map(({ title, items }) => (
                <div key={title} className='mb-4'>
                  <h3>{title}</h3>
                  <div className='flex gap-1 flex-wrap'>
                    {items.map((name) => (
                      <TechIcon key={name} className='inline-block' name={name} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className='font-light text-lg px-2 mb-8'>
              <h2 className='text-xl font-semibold mb-2'>{data.languages.title}</h2>
              {data.languages.items.map(({ name, level }) => (
                <div key={name} className='mb-2 flex items-center'>
                  <h3 className='w-24'>{name}</h3>
                  <p className='bg-gray-50 px-2 rounded-full text-sm'>{level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='w-full p-12 overflow-auto bg-white'>
          <div id='profile' className='prose'>
            <h2 className='section-headline'>Profile</h2>
            <p>{data.profile}</p>
          </div>
          <hr className='mt-8 mb-8' />
          <div id='experience' className='prose'>
            <h2 className='section-headline'>Experience</h2>
            <div>
              <h3>Example Inc</h3>
              <section className='mb-6'>
                <div className='lg:inline-block lg:w-3/12 lg:align-top italic mb-2'>
                  Jul.&nbsp;2019:
                </div>
                <div className='lg:inline-block lg:w-8/12 w-full'>Fullstack Developer</div>
              </section>
              <section className='mb-6'>
                <div className='lg:inline-block lg:w-3/12 lg:align-top italic mb-2'>Task:</div>
                <div className='lg:inline-block lg:w-8/12 w-full'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </section>
              <section className='mb-6'>
                <div className='lg:inline-block lg:w-3/12 lg:align-top italic mb-2'>
                  Description:
                </div>
                <div className='lg:inline-block lg:w-8/12 w-full'>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </section>
              <section className='mb-6'>
                <div className='lg:inline-block lg:w-3/12 lg:align-top italic mb-2'>Tools:</div>
                <div className='lg:inline-block lg:w-8/12 w-full'>
                  <span className='rounded-xl bg-gray-300 px-3'>Vue</span>
                  <span className='rounded-xl bg-gray-300 px-3'>Vuex</span>
                  <span className='rounded-xl bg-gray-300 px-3'>Bootstrap</span>
                  <span className='rounded-xl bg-gray-300 px-3'>Docker</span>
                  <span className='rounded-xl bg-gray-300 px-3'>Git</span>
                  <span className='rounded-xl bg-gray-300 px-3'>Bitbucket</span>
                  <span className='rounded-xl bg-gray-300 px-3'>Jira</span>
                </div>
              </section>
            </div>
          </div>
          <hr className='mt-8 mb-8' />
          <div id='projects' className='prose'>
            <h2 className='section-headline'>Projects</h2>
            <div className='mb-16'>
              <h3 id='chrisko-headline'>Chrisko.io</h3>
              <section className='mb-6'>
                <div className='lg:inline-block lg:w-3/12 lg:align-top italic mb-2'>
                  Personal blog:
                </div>
                <div className='lg:inline-block lg:w-8/12 w-full'>
                  {`My blog is the center of my online presence. Here, I share posts about what I've
                  learnt, tutorials and my thoughts on web development in general.`}
                </div>
              </section>
              <section className='mb-6'>
                <div className='lg:inline-block lg:w-3/12 lg:align-top italic mb-2'>
                  Deployed to:
                </div>
                <div className='lg:inline-block lg:w-8/12 w-full'>
                  <a href='https://chrisko.io' target='_blank' rel='noopener noreferrer'>
                    chrisko.io
                  </a>
                </div>
              </section>
              <section className='mb-6'>
                <div className='lg:inline-block lg:w-3/12 lg:align-top italic mb-2'>Code on:</div>
                <div className='lg:inline-block lg:w-8/12 w-full'>
                  <a
                    href='https://github.com/christiankozalla/nextjs-blog'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    GitHub/nextjs-blog
                  </a>
                </div>
              </section>
              <section className='mb-6'>
                <div className='lg:inline-block lg:w-3/12 lg:align-top italic mb-2'>Features:</div>
                <div className='lg:inline-block lg:w-8/12 w-full'>
                  <ul>
                    <li>Static generation</li>
                    <li>Blog content written in Markdown</li>
                    <li>Counter for pageviews and likes</li>
                    <li>My latest tweets</li>
                    <li>Featured images made with Inkscape</li>
                    <li>SEO</li>
                  </ul>
                </div>
              </section>

              <section className='mb-6'>
                <div className='lg:inline-block lg:w-3/12 lg:align-top italic mb-2'>
                  Built with:
                </div>
                <div className='lg:inline-block lg:w-8/12 w-full'>
                  <span className='rounded-xl bg-gray-300 px-3'>Next.js</span>
                  <span className='rounded-xl bg-gray-300 px-3'>CSS</span>
                  <span className='rounded-xl bg-gray-300 px-3'>styled-jsx</span>
                  <span className='rounded-xl bg-gray-300 px-3'>DynamoDB</span>
                  <span className='rounded-xl bg-gray-300 px-3'>Vercel</span>
                </div>
              </section>
            </div>
          </div>
          <hr className='mt-8 mb-8' />
          <div id='projects' className='prose'>
            <h2 className='section-headline'>Expand my skills</h2>
            <div className='mb-16'>
              <h4 id='expand-knowledge-headline'>
                {`I'd like to expand my skills and knowledge in several fields`}
              </h4>
              <ul>
                <li>TypeScript</li>
                <li>Testing, e.g. with Mocha, Chai, Jest</li>
                <li>Web Components, e.g. with StencilJS, LitElement</li>
                <li>Prototyping and Wireframing, e.g. with Figma, Adobe XD</li>
                <li>Scalable Vector Graphics</li>
                <li>Databases</li>
                <li>Mobile development</li>
                <li>
                  Backend development, e.g. learn additional language like Go, Python, PHP, Ruby,
                  Java, Rust
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cv;
