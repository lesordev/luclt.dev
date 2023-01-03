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
    <div>
      <header>
        <button onClick={handleSwitchTheme}>Toggle</button>
      </header>
      {children}
    </div>
  );
};
