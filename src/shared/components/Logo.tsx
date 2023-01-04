import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ArrowLeftIcon } from '#/assets/icons';

export const Logo = () => {
  const { pathname } = useRouter();

  return (
    <div>
      <Link className="flex items-center gap-2" href="/">
        <ArrowLeftIcon
          className={clsx(
            'rounded-lg border-[3px] border-accent-600 text-2xl text-accent-600',
            pathname === '/' && 'bg-accent-600 text-white'
          )}
        />
        <div className="text-xl font-extrabold">
          <span>sajken</span>
          <span className="text-accent-600">dev</span>
        </div>
      </Link>
    </div>
  );
};
