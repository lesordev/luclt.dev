import { JetBrains_Mono as JetBrainsMono, Montserrat } from '@next/font/google';

export const fontMono = JetBrainsMono({
  preload: true,
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'block',
});

export const fontSans = Montserrat({
  preload: true,
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'block',
});
