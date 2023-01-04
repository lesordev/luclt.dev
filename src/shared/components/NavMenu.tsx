import { Menu } from '@headlessui/react';
import clsx from 'clsx';
import { m } from 'framer-motion';
import Link from 'next/link';

import { TriangleFilledIcon } from '#/assets/icons';

const navMenuItems = [
  { label: 'Writings', href: '/writings' },
  { label: 'Snippets', href: '/snippets' },
];

const listAnimation = {
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.3 },
  },
  hidden: {
    opacity: 0,
    transition: { when: 'afterChildren' },
  },
};

const itemAnimation = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1 },
  }),
  hidden: { opacity: 0, x: -100 },
};

export const NavMenu = () => {
  return (
    <div className="relative">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button
              className={clsx(
                'flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 font-bold text-blue-500 transition-all',
                'hover:bg-blue-400/30'
              )}
            >
              <span className="text-sm font-semibold">Menu</span>
              <TriangleFilledIcon
                className={clsx(
                  'text-2xs transition-all duration-500',
                  open && 'rotate-180'
                )}
              />
            </Menu.Button>

            <Menu.Items
              className={clsx(
                'absolute top-[calc(100%+0.5em)] right-0 z-40 flex min-w-[8em] flex-col gap-1 rounded-2xl border p-2 backdrop-blur-2xl transition-all duration-700',
                'border-slate-200 bg-white',
                'dark:border-slate-800 dark:bg-slate-900'
              )}
              as={m.div}
              initial="hidden"
              animate="visible"
              variants={listAnimation}
            >
              {navMenuItems.map((item, idx) => (
                <Menu.Item
                  key={item.href}
                  as={m.div}
                  custom={idx}
                  initial="hidden"
                  animate="visible"
                  variants={itemAnimation}
                >
                  <Link
                    className={clsx(
                      'flex justify-end rounded-lg p-2 text-right text-xs font-semibold text-blue-500 transition-all',
                      'hover:bg-slate-200/80 hover:pr-3 hover:text-blue-600 hover:dark:bg-slate-800 hover:dark:text-blue-300'
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
};
