import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useRef } from 'react';
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import MainLayout from '../layouts/MainLayout'
import "../styles/index.scss";

export type NextPageWithLayout = NextPage & {
  noLayout: Boolean
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  const ComponentLayout = () => {
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    )
  }

  return (
    <Provider store={storeRef.current}>
      <Head>
        <title>Bababos Dashboard</title>
        <meta
          name="title"
          content="bababos dashboard"
        />
        <meta name="author" content="@gagaadilesmanaputra" />
        <meta
          property="og:title"
          content="bababos dahsboard"
          key="ogtitle"
        />{' '}
        <link rel="icon" href="/images/bababos-logo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <ComponentLayout />
    </Provider>
  )
}

export default MyApp
