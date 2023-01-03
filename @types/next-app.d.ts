import type { ElementType, PropsWithChildren } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

declare module 'next/app' {
  type CustomPage<P = Record<string, unknown>> = NextPage<P> & {
    Layout?: ElementType<PropsWithChildren>;
    title?: string;
  };

  type CustomAppProps<P = Record<string, unknown>> = AppProps & {
    Component: CustomPage<P>;
  };
}
