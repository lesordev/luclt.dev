import clsx from 'clsx';
import {
  domAnimation,
  LazyMotion,
  MotionConfig as MotionProvider,
} from 'framer-motion';
import type { CustomAppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import { MainLayout } from '#/layouts/MainLayout';
import { fontMono, fontSans } from '#/shared/utils/font.utils';

import '../styles/globals.css';

export default function App({ Component, pageProps }: CustomAppProps) {
  const { Layout = MainLayout } = Component;

  return (
    <>
      <Head>
        <title>Luc Le</title>
      </Head>

      <ThemeProvider attribute="class" disableTransitionOnChange>
        <MotionProvider reducedMotion="user">
          <LazyMotion strict features={domAnimation}>
            <div
              className={clsx([
                fontMono.variable,
                fontSans.variable,
                'font-sans',
              ])}
            >
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </div>
          </LazyMotion>
        </MotionProvider>
      </ThemeProvider>
    </>
  );
}
