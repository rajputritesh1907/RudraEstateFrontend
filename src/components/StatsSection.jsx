'use client';

import React, { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target]);

  const startAnimation = () => {
    const duration = 2000; // Standardize duration for a consistent premium feel
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing: easeOutCubic (premium fast-start, slow-settle feel)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCountVal = easeProgress * target;
      
      if (progress < 1) {
        if (target < 10) {
          // For small numbers, showing decimals makes the progress look extremely smooth
          setCount(currentCountVal.toFixed(1));
        } else {
          setCount(Math.floor(currentCountVal));
        }
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      label: 'Dholera SIR Area',
      target: 920,
      suffix: '+',
      description: 'Spanning across 920+ sq km of smart development.',
    },
    {
      id: 2,
      label: 'Planned Population',
      target: 2,
      suffix: 'M+',
      description: 'Capacity to accommodate 2 million people by 2040.',
    },
    {
      id: 3,
      label: 'Happy Customers',
      target: 5000,
      suffix: '',
      description: 'Over 5,000 satisfied investors and land owners.',
    },
    {
      id: 4,
      label: 'Greenfield Smart City',
      target: 1,
      suffix: 'st',
      description: "India's first greenfield industrial smart city project.",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/40 transition-colors border-b border-slate-200/60 dark:border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
          {stats.map((stat, index) => {
            return (
              <div 
                key={stat.id} 
                className={`p-6 flex flex-col items-center text-center group transition-all duration-300 ${
                  index !== stats.length - 1 
                    ? 'lg:border-r lg:border-slate-200/60 lg:dark:border-slate-800/40' 
                    : ''
                }`}
              >
                <h4 className="text-5xl sm:text-6xl font-serif font-medium text-blue-600 dark:text-blue-500 tracking-tight mb-3 transition-transform duration-300 group-hover:scale-105">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </h4>
                <div>
                  <p className="text-xs font-bold text-slate-800 dark:text-gold-400 uppercase tracking-widest">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed max-w-[220px]">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
