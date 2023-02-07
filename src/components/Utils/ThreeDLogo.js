import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

function Box() {
  return (
    <mesh>
      <boxGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='hotpink' wireframe />
    </mesh>
  );
}

function ThreeDLogo() {
  return (
    <Canvas>
      {/* This tag "Canvas" tag removes from react rendering to react three fiber rendering */}
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Box />
    </Canvas>
  );
}

export default ThreeDLogo;
