import { useTheme } from 'next-themes';

export const SwitchThemeIcon = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return <div>SwitchThemeIcon</div>;
};
