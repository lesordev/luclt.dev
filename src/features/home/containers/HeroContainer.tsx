import { useEffect } from 'react';
import clsx from 'clsx';
import { m, useAnimationControls } from 'framer-motion';
import Link from 'next/link';

import { ResumeOutlineIcon } from '#/assets/icons';
import { Button } from '#/shared/components/Button';

export const HeroContainer = () => {
  const animate = useAnimationControls();

  useEffect(() => {
    animate.start((i) => ({
      x: [-32, 0],
      opacity: [0, 1],
      transition: {
        delay: 0.1 * i,
      },
    }));
  }, [animate]);

  return (
    <section className="px-3 pt-28">
      <div>
        <m.div
          className={clsx('text-2xl text-slate-600', 'dark:text-slate-400')}
          initial={{ opacity: 0 }}
          animate={animate}
          custom={0}
        >
          <span>hello, </span>
          <span>👋</span>
        </m.div>

        <m.div
          className="text-5xl font-bold"
          initial={{ opacity: 0 }}
          animate={animate}
          custom={1}
        >
          <span>I&apos;m </span>
          <span className="text-accent-600">Luc </span>
          <span>Le,</span>
        </m.div>

        <m.div
          className={clsx('mt-3 text-slate-600', 'dark:text-slate-400')}
          initial={{ opacity: 0 }}
          animate={animate}
          custom={2}
        >
          Just a guy tends to be handsome gradually over the years…
        </m.div>

        <div className="mt-10 flex gap-2 text-sm font-semibold">
          <m.div initial={{ opacity: 0 }} animate={animate} custom={3}>
            <Link href="/works/contact">
              <Button>Contact me</Button>
            </Link>
          </m.div>

          <m.div initial={{ opacity: 0 }} animate={animate} custom={4}>
            <Link href="/">
              <Button type="ghost">
                <ResumeOutlineIcon className="text-lg" />
                <span>Resume</span>
              </Button>
            </Link>
          </m.div>
        </div>
      </div>
    </section>
  );
};
