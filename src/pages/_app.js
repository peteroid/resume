import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import { initI18n } from '../utilities/i18n';
import GATag from '../components/GATag';
import FbPixel from '../components/FbPixel';
import '../styles/globals.css';

const config = {
  enableRecoil: false,
};

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  useEffect(() => {
    initI18n();
  });

  let appElem = (
    <Layout>
      <Head>
        <GATag />
        <FbPixel />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );

  if (config.enableRecoil) {
    appElem = <RecoilRoot>{appElem}</RecoilRoot>;
  }

  return appElem;
}

export default MyApp;
