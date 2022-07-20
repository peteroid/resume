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

const ExperienceBlock = ({ logo, title, company, description, utilized, date, location }) => (
  <div className='mb-8'>
    <section className='mb-4'>
      <div className='flex items-center flex-row'>
        <img className='md:w-10 w-12 mr-4' src={logo} alt='icon' />
        <div className='flex flex-col md:flex-row items-start md:justify-between flex-1'>
          <div>
            <h2 className='font-semibold'>{title}</h2>
            <h3 className=''>{company}</h3>
          </div>
          <p className='text-sm flex flex-row flex-wrap md:items-end md:flex-col'>
            <span className='whitespace-nowrap mr-4 md:mr-0'>{location}</span>
            <span className='whitespace-nowrap'>{date}</span>
          </p>
        </div>
      </div>
    </section>
    <section className='mb-4'>
      <p className='whitespace-pre-wrap break-words'>{description}</p>
    </section>
    {!!utilized && (
      <section className='mb-4 flex text-sm items-start'>
        <h4 className='mr-2 italic'>Utilized:</h4>
        <div className='flex items-start flex-wrap'>
          {utilized.map((name) => (
            <span key={name} className='rounded-full bg-gray-100 px-2 mr-2 mb-2'>
              {name}
            </span>
          ))}
        </div>
      </section>
    )}
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
            'Github Actions',
            'Travis',
            'Jest',
            'Git',
            'AWS',
            'GCP',
            'Nginx',
            'Firebase',
            'MongoDB',
            'MySQL',
            'SQLite',
            'Redis',
            'PostgreSql',
            'RabbitMQ',
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
          name: 'Cantonese',
          level: 'Native',
        },
        {
          name: 'English',
          level: 'Fluent',
        },
        {
          name: 'Mandarin',
          level: 'Fluent',
        },
        {
          name: 'Japanese',
          level: 'Intermediate',
        },
      ],
    },
    profile: `An energetic, optimistic and motivated geek, who is enthusiastic about techs, hacks and dogs.`,
    experiences: {
      title: 'Experience',
      items: [
        {
          logo: `https://media-exp1.licdn.com/dms/image/C560BAQFKQPQFNQrIVg/company-logo_100_100/0/1608545550416?e=1665014400&v=beta&t=3PnWxTIFVB_UhCiyOBcbAjtiGk3IK_vomReaUMx-fgw`,
          date: 'Feb 2022',
          title: 'Software Engineer',
          company: 'Woven Planet Holdings, Toyota Group',
          location: 'Tokyo, Japan',
          description: `• Engineered the CMDB system and GWS integrations which will be used by 200k+ users
• Developed the PoC on Cloud Search connectors to facilitate internal business decisions
• Reviewed the system designs and proposed technical solutions to support internal business usage`,
          utilized:
            'AWS, Azure, Java, Rust, Chrome extension, Typescript, WebAssembly, Puppet'.split(', '),
        },
        {
          logo: `https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1519856215226?e=1665014400&v=beta&t=P_p1SZO88uxyjWSg5HDYpxCQeLhzGg9XhXDbDFProYQ`,
          date: 'Jul 2019 - Jan 2022',
          title: 'Technical Solutions Engineer',
          company: 'Google',
          location: 'Tokyo, Japan',
          description: `• Led a functional group of 7+ people; Expertized in Apps Script and helped prioritize feature requests
• Resolved escalations and debug for various Google Workspace products used by millions of users
• Reviewed 4+ products’ supportability before launching to the general public`,
          utilized:
            'Google internal magic, GCP, Big Query, SQL, JavaScript, Java, Bash, Apps Scripts'.split(
              ', '
            ),
        },
        {
          logo: `https://media-exp1.licdn.com/dms/image/C560BAQHcnlt77EM_3g/company-logo_100_100/0/1610965985718?e=1665014400&v=beta&t=Cs5ck6jGELinWPr-RtAz8a2ka1AKHWQ1SP4Vpm9it1U`,
          date: 'Jun 2017 - Dec 2021',
          title: 'Co-founder & CTO',
          company: 'GRAVITONS LIMITED',
          location: 'Hong Kong',
          description: `• Joined MIT Sandbox (Boston), Lair East Labs (New York) and Cyberport Incubation Programme (HK)
• Built the Gööp app with React Native and serverless architecture serving 12k+ DAU and 50k+ MAU
• Built the Pastels app with native iOS and bridged with Unity to provide interactive exp. with celebrities`,
          utilized: 'React Native, Redux, Firebase, Elastic Search, GCP, Unity, Fastlane'.split(
            ', '
          ),
        },
        {
          logo: `https://media-exp1.licdn.com/dms/image/C560BAQE1IlqYF_4Z5A/company-logo_100_100/0/1519907582139?e=1665014400&v=beta&t=YGmalo2lnU65TAy5TG6NhqO5ds2LuT65jp_Qoa6XDOs`,
          date: 'Nov 2016 - Jun 2017',
          title: 'Web & QA Engineer Intern',
          company: '9GAG, Inc',
          location: 'Hong Kong',
          description: `• Integrated E2E tests on the iOS, Android and React Native apps using Bash scripts and Appium
• Reduced total build & delivery time in the CI/CD automation by 30% by refactoring the build scripts
• Decreased post page size by ~70% by utilizing AMP; Researched the feasibility of implementing PWA`,
          utilized:
            'Appium, CircleCI, Xcode, React Native, AMP, PWA, JavaScript, Webpack, PHP, Laravel'.split(
              ', '
            ),
        },
      ],
    },
    educations: {
      title: 'Education',
      items: [
        {
          logo: `https://media-exp1.licdn.com/dms/image/C4D0BAQEubCTgcfA2sQ/company-logo_100_100/0/1519910081555?e=1665014400&v=beta&t=yXaXq4KUXYjbhmPzeFcWh6NCufkV_BNe2FCwzvqsD7E`,
          date: 'Sep 2012 - Jun 2017',
          title: 'Bachelor of Computer Engineering',
          company: 'The University of Hong Kong (HKU)',
          location: 'GPA: 3.27/4.30',
          description: `• Coursework: Algorithms & Data Structures, Operating Systems, Networks, Computer Architecture, Artificial Intelligence, Databases, Functional Programming, Digital Systems & Circuits`,
        },
        {
          logo: `https://media-exp1.licdn.com/dms/image/C560BAQEuZlXAuo608Q/company-logo_100_100/0/1570207210620?e=1665014400&v=beta&t=FKXl0H7vjuFjLAXxHflMDZeamXl-KVTtMZYN09pU1no`,
          date: 'Jan 2016 - Jun 2016',
          title: 'Bachelor of Computer Science and Engineering',
          company: 'University of California, Irvine (UCI)',
          location: 'Dean list - GPA: 3.95/4.00',
          description: `• Coursework: Machine Learning & Data Mining, Compilers, Embedded Systems`,
        },
      ],
    },
  };

  return (
    <div className='relative sm:p-8 md:p-12'>
      <div className='bg-pattern-zigzag absolute inset-0' />
      <main className='flex flex-col sm:flex-row-reverse shadow-2xl z-10 relative md:max-w-6xl mx-auto'>
        <div className='bg-white w-full sm:max-w-xs px-6 py-8 relative'>
          <div className='bg-pattern-polka absolute inset-0' />
          <div className='relative'>
            <div className='px-2 mb-8'>
              <img
                src={data.avatarUrl}
                alt='Profile Picture'
                className='rounded-full w-40 mx-auto mb-2'
              />
              <h1 className='text-center text-3xl font-semibold'>{data.name}</h1>
              <h2 className='text-center text-xl font-light'>{data.title}</h2>
            </div>

            {data.infoBlocks.map(({ title, items }) => (
              <div key={title} className='font-light px-2 mb-8'>
                <h2 className='font-semibold mb-2 text-lg'>{title}</h2>
                {items.map(({ icon: Icon, content, href }) => (
                  <div key={content} className='flex items-center my-2 text-base'>
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

            <div className='font-light px-2 mb-8'>
              <h2 className='text-lg font-semibold mb-2'>{data.skills.title}</h2>
              {data.skills.items.map(({ title, items }) => (
                <div key={title} className='mb-4'>
                  <h3 className='mb-2'>{title}</h3>
                  <div className='flex gap-1 flex-wrap'>
                    {items.map((name) => (
                      <TechIcon key={name} className='inline-block' name={name} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className='font-light px-2 mb-8'>
              <h2 className='text-lg font-semibold mb-2'>{data.languages.title}</h2>
              {data.languages.items.map(({ name, level }) => (
                <div key={name} className='mb-2 flex items-center'>
                  <h3 className='w-24'>{name}</h3>
                  <p className='bg-gray-50 px-2 rounded-full text-sm'>{level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='w-full p-8 overflow-auto bg-white'>
          <div className=''>
            <h2 className='font-semibold text-lg'>Short bio</h2>
            <p>{data.profile}</p>
          </div>
          <hr className='my-4' />
          <div className=''>
            <h2 className='font-semibold text-lg mb-4'>{data.experiences.title}</h2>
            {data.experiences.items.map((exp) => (
              <ExperienceBlock key={exp.company} {...exp} />
            ))}
          </div>
          <div className=''>
            <h2 className='font-semibold text-lg mb-4'>{data.educations.title}</h2>
            {data.educations.items.map((exp) => (
              <ExperienceBlock key={exp.company} {...exp} />
            ))}
          </div>
          <hr className='mt-8 mb-8' />
          {/* <div id='projects' className='prose'>
            <h2 className='font-semibold text-lg'>Projects</h2>
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
            <h2 className='font-semibold text-lg'>Expand my skills</h2>
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
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default Cv;
