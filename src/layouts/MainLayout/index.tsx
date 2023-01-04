import type { PropsWithChildren } from 'react';

import { Logo } from '#/shared/components/Logo';
import { NavMenu } from '#/shared/components/NavMenu';
import { SwitchThemeIcon } from '#/shared/components/SwitchThemeIcon';

type MainLayoutProps = PropsWithChildren & {
  className?: string;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <header className="fixed z-50 h-16 w-full">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-3">
          <div className="flex items-center gap-4">
            <Logo />
          </div>
          <div className="flex items-center gap-4">
            <NavMenu />
            <SwitchThemeIcon className="text-xl text-slate-600 dark:text-white" />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};
