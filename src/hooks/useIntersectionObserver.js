import { useEffect, useRef, useState } from 'react';
import 'intersection-observer';

export const useIntersectionObserver = callback => {
  const [observationTarget, setObservationTarget] = useState(null);
  // const [pageNum, setPageNum] = useState(0);
  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        callback();
        // call(undefined, pageNum, 15);
      },
      { threshold: 1 },
    ),
  );

  useEffect(() => {
    const currentTarget = observationTarget;
    const currentObserver = observer.current;
    if (currentTarget) {
      currentObserver.observe(currentTarget);
    }
    return () => {
      if (currentTarget) {
        // setPageNum(state => state + 1);
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [observationTarget]);

  return setObservationTarget;
};
