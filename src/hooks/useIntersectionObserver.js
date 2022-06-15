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
        console.log(filterVal.current);
        callback(pageNum.current, filterVal.current);
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
