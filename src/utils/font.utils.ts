import {
  JetBrains_Mono as JetBrainsMono,
  Plus_Jakarta_Sans as PlusJakartaSans,
} from '@next/font/google';

export const jetbrainsMono = JetBrainsMono({
  preload: true,
  subsets: ['latin'],
  variable: '--font-mono',
});

export const plusJakartaSans = PlusJakartaSans({
  preload: true,
  subsets: ['latin'],
  variable: '--font-sans',
});
