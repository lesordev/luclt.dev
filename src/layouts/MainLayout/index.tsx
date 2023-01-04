import type { PropsWithChildren } from 'react';

import { SwitchThemeIcon } from '#/shared/components/SwitchThemeIcon';

type MainLayoutProps = PropsWithChildren & {
  className?: string;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <header className="fixed h-16 w-full border border-green-300">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-2">
          <div>brand</div>
          <SwitchThemeIcon className="text-xl text-slate-600" />
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};
