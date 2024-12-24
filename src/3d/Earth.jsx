import React, { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

const Home = () => {
  return (
    <main className="flex items-center justify-center w-full h-screen bg-gray-100">
      <Suspense fallback={<div>Loading 3D Scene...</div>}>
        <Spline
          scene="https://prod.spline.design/SXa-XkS0vRp7DN5T/scene.splinecode"
          className="w-full h-full"
        />
      </Suspense>
    </main>
  );
};

export default Home;
