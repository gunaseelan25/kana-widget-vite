import { lazy, Suspense } from 'react';

const Widget = lazy(() => import('./components/Widget'));

export default function Home() {
  return (
    <div className="absolute inset-0 flex flex-col place-items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Widget />
      </Suspense>
    </div>
  );
}