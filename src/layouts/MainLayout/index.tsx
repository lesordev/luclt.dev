import type { PropsWithChildren } from 'react';
import { useTheme } from 'next-themes';

type MainLayoutProps = PropsWithChildren & {
  className?: string;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleSwitchTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <header className="fixed h-16 w-full border border-green-300">
        <div className="mx-auto flex h-full max-w-7xl items-center px-2">
          <button onClick={handleSwitchTheme}>Toggle</button>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};
