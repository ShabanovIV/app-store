import React, { useEffect, useRef, useCallback, useState } from 'react';
import { IRenderItem } from './IRenderItem';
import { RenderList } from './RenderList';

export interface IRenderListObserverProps {
  items: IRenderItem[];
  onLastItem: () => void;
}

const RenderListObserver: React.FC<IRenderListObserverProps> = ({ items, onLastItem }) => {
  const [lastItemKey, setLastItemKey] = useState('');
  const prevLastItemKey = useRef('');
  const lastItemRef = useRef<HTMLLIElement | null>(null);
  const hasCalledOnLastItem = useRef(false);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry?.isIntersecting && !hasCalledOnLastItem.current) {
        hasCalledOnLastItem.current = true;
        onLastItem();
      }
    },
    [onLastItem],
  );

  useEffect(() => {
    if (lastItemKey === prevLastItemKey.current) {
      return;
    } else {
      prevLastItemKey.current = lastItemKey;
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    const currentLastItem = lastItemRef.current;
    if (currentLastItem) {
      observer.observe(currentLastItem);
    }

    return () => {
      if (currentLastItem) {
        observer.unobserve(currentLastItem);
      }
    };
  }, [handleIntersection, lastItemKey]);

  useEffect(() => {
    hasCalledOnLastItem.current = false;
  }, [lastItemKey]);

  return <RenderList items={items} lastItemRef={lastItemRef} onLastItemChanged={setLastItemKey} />;
};

export default RenderListObserver;
