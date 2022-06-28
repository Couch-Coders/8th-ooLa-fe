/* eslint-disable react-hooks/exhaustive-deps */
import 'intersection-observer';
import { useEffect, useRef, useState, useContext } from 'react';
import { StudyListContext } from '../context/StudyList.context';

const useIntersectionObserver = callback => {
  const { pageNum, filterVal } = useContext(StudyListContext);
  const [observationTarget, setObservationTarget] = useState(null);

  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        callback(pageNum.current, filterVal.current);
      },
      { threshold: 0.5 },
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
        pageNum.current += 1;
      }
    };
  }, [observationTarget]);

  return setObservationTarget;
};

export default useIntersectionObserver;
