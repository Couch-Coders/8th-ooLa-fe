import 'intersection-observer';
import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (callback, pageNum) => {
  const [observationTarget, setObservationTarget] = useState(null);

  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        callback(pageNum.current);
        pageNum.current += 1;
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
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [observationTarget]);

  return setObservationTarget;
};

export default useIntersectionObserver;
