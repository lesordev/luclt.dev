import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

type ButtonProps = PropsWithChildren & {
  type?: 'solid' | 'ghost' | 'soft' | 'underline';
};

export const Button = ({ children, type = 'solid' }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'flex h-12 w-max  items-center justify-center gap-1.5 rounded-md border border-transparent px-4 text-center text-sm font-bold transition duration-150',
        'md:rounded-xl',
        type === 'solid' && [
          'bg-accent-600 text-white',
          'hover:bg-accent-700',
          'dark:bg-accent-600 dark:hover:bg-accent-500',
        ],
        type === 'ghost' && [
          'text-slate-600',
          'hover:text-slate-700',
          'dark:text-slate-400 dark:hover:text-slate-300',
        ]
      )}
    >
      {children}
    </button>
  );
};
