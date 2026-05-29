'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title: string;
  category?: string;
  description: string;
  tags?: string[];
  href?: string;
  hrefExternal?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'image',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  category,
  description,
  tags = [],
  href,
  hrefExternal = false,
  children,
}: ScrollExpandMediaProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const mediaWidth = useTransform(scrollYProgress, [0, 1], [860, 1360]);
  const mediaHeight = useTransform(scrollYProgress, [0, 1], [520, 760]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.2]);
  const contentOpacity = useTransform(scrollYProgress, [0.18, 0.35], [0, 1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.18]);

  return (
    <section ref={sectionRef} className="relative h-[155vh] overflow-x-hidden bg-black">
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <motion.div className="absolute inset-0 z-0" style={{ opacity: bgOpacity }}>
          <img
            src={bgImageSrc}
            alt={`${title} background`}
            className="h-full w-full scale-105 object-cover blur-md md:blur-lg"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4">
          <motion.div
            className="relative overflow-hidden bg-black"
            style={{ width: mediaWidth, height: mediaHeight, maxWidth: '96vw', maxHeight: '86vh' }}
          >
            {mediaType === 'video' ? (
              <video
                src={mediaSrc}
                poster={posterSrc}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <img src={mediaSrc} alt={title} className="h-full w-full object-cover" loading="lazy" />
            )}
            <motion.div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
          </motion.div>

        </div>
      </div>

      <motion.div style={{ opacity: contentOpacity }} className="relative z-30 bg-black pb-10 pt-6">
        <div className="container-wide">
          {category ? <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/70">{category}</p> : null}
          <p className="text-xl leading-relaxed text-white md:text-2xl">{description}</p>

          {tags.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={`${title}-${tag}`}
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/85"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {href ? (
            <div className="mt-8">
              {hrefExternal ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black"
                >
                  View Project
                  <ArrowUpRight size={17} />
                </a>
              ) : (
                <Link
                  to={href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black"
                >
                  View Project
                  <ArrowUpRight size={17} />
                </Link>
              )}
            </div>
          ) : null}

          {children}
        </div>
      </motion.div>
    </section>
  );
};

export default ScrollExpandMedia;
