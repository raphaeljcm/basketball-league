import { ReactNode, useEffect, useState } from 'react';

import * as S from './styles';

interface DelayedProps {
  children: ReactNode;
  wait?: number;
}

function Delayed({ children, wait = 500 }: DelayedProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), wait);

    return () => clearTimeout(timeout);
  }, [wait]);

  if (!show) return null;

  return <>{children}</>;
}

export function Loading() {
  return (
    <Delayed>
      <S.Loading />
    </Delayed>
  );
}
