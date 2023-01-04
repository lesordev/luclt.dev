import type { SVGProps } from 'react';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { m, useAnimationControls } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

import { useIsMounted } from '../hooks/useIsMounted';

const SunIcon = dynamic(() => import('#/assets/icons/sun-filled.svg'));
const MoonIcon = dynamic(() => import('#/assets/icons/moon-filled.svg'));

export const SwitchThemeIcon = (props: SVGProps<SVGSVGElement>) => {
  const { resolvedTheme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  const scale = useRef(0);

  const animate = useAnimationControls();

  const isDark = resolvedTheme === 'dark';

  const onWindowResize = () => {
    scale.current =
      2 *
      Math.sqrt(
        Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)
      );
  };

  useEffect(() => {
    onWindowResize();
    window.addEventListener('resize', onWindowResize);

    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  const handleSwitchTheme = async () => {
    animate.set({ backgroundColor: isDark ? '#e2e8f0' : '#0f172a' });

    // stage 1 - scale, opaque the transition.
    await animate.start({
      borderRadius: [9999, 0],
      scale: [0, scale.current],
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    });

    // stage 2 - change theme in the background, fade out the transition.
    setTheme(isDark ? 'light' : 'dark');
    await animate.start({
      opacity: [1, 0],
      transition: {
        duration: 0.34,
      },
    });

    // stage 3 - reset scale and opacity to default property
    animate.set({ scale: 0, opacity: 1, borderRadius: 9999 });
  };

  return (
    <div className="relative">
      <m.div
        className="absolute top-1/2 left-1/2 h-px w-px origin-center -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full"
        animate={animate}
      />
      <button
        className={clsx(
          'flex h-9 w-9 items-center justify-center rounded-xl bg-slate-300/50 text-slate-800 outline-none',
          'hover:bg-slate-300/70 sm:ml-0',
          'dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-700/50'
        )}
        onClick={handleSwitchTheme}
        title="Switch theme button"
      >
        {isMounted() && isDark ? (
          <SunIcon {...props} />
        ) : (
          <MoonIcon {...props} />
        )}
      </button>
    </div>
  );
};
