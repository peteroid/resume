import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { avatarIdAtom, avatarUriState, coinPriceQuery, coinSymbolAtom } from '../model';

export default function Home() {
  const { t } = useTranslation();

  const setAvatarId = useSetRecoilState(avatarIdAtom);
  const avatarUri = useRecoilValue(avatarUriState);

  const setCoinSymbol = useSetRecoilState(coinSymbolAtom);
  const coinPrice = useRecoilValueLoadable(coinPriceQuery);

  return (
    <div className='flex flex-col gap-4 p-4'>
      <div>{`Home, ${t('title')}`}</div>
      <div>
        <Link href='/?lng=zh'>
          <a className='underline'>View zh-lang</a>
        </Link>
        <br />
        <Link href='/?lng=en'>
          <a className='underline'>View en-lang</a>
        </Link>
        <br />
        <Link href='/api/hello'>
          <a className='underline'>API: hello</a>
        </Link>
      </div>
      <div>
        <img src={avatarUri} className='w-40' alt='avatar' />
        <button className='text-2xl' onClick={() => setAvatarId(Date.now() % 100)}>
          Random 🎲
        </button>
      </div>
      <div>
        <p>{coinPrice.state === 'hasValue' ? coinPrice.contents : coinPrice.state}</p>
        <div className='flex gap-2'>
          <button onClick={() => setCoinSymbol('BTCUSDT')}>BTC</button>
          <button onClick={() => setCoinSymbol('ETHUSDT')}>ETH</button>
          <button onClick={() => setCoinSymbol('LTCUSDT')}>LTC</button>
        </div>
      </div>
    </div>
  );
}
