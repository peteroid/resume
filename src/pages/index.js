import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className='p-4 border border-black inline-block rounded m-4'>
      <div>{`Home, ${t('title')}`}</div>
      <div>
        <a className='underline' href='/?lng=zh'>
          View zh-lang
        </a>
        <br />
        <a className='underline' href='/?lng=en'>
          View en-lang
        </a>
        <br />
        <a className='underline' href='/api/hello'>
          API: hello
        </a>
      </div>
      <div>
        
      </div>
    </div>
  );
}
