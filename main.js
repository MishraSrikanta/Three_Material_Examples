import "./style.css";
import { particlesCursor } from 'threejs-toys'
import VanillaTilt from 'vanilla-tilt';

// neonCursor({
//   el: document.getElementById('app'),
//   shaderPoints: 16,
//   curvePoints: 80,
//   curveLerp: 0.5,
//   radius1: 5,
//   radius2: 30,
//   velocityTreshold: 10,
//   sleepRadiusX: 100,
//   sleepRadiusY: 100,
//   sleepTimeCoefX: 0.0025,
//   sleepTimeCoefY: 0.0025
// })
const pc = particlesCursor({
  el: document.getElementById('app'),
  gpgpuSize: 256,
  colors: [0x00ff00, 0x0000ff],
  color: 0xff0000,
  coordScale: 1.5,
  noiseIntensity: 0.0035,
  noiseTimeCoef: 0.001,
  pointSize: 5,
  pointDecay: 0.001,
  sleepRadiusX: 500,
  sleepRadiusY: 1200,
  sleepTimeCoefX: 0.001,
  sleepTimeCoefY: 0.001,
})

document.body.addEventListener('click', () => {
  pc.uniforms.uColor.value.set(Math.random() * 0xffffff)
  pc.uniforms.uCoordScale.value = 0.01 + Math.random() * 2
  pc.uniforms.uNoiseIntensity.value = 0.001 + Math.random() * 0.001
  pc.uniforms.uPointSize.value = 1 + Math.random() * 10
})

VanillaTilt.init(document.querySelector(".card"), {
  max: 25,
  speed: 400
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".card"));

// fishesBackground({
//   el: document.getElementById('app'),
//   gpgpuSize: 96,
//   background: 0x031F48,
//   fogDensity: 0.025,
//   texture: '/fishes.png',
//   textureCount: 8,
//   material: 'phong',
//   materialParams: {
//     transparent: true,
//     alphaTest: 0.5
//   },
//   fishScale: [1, 1, 1],
//   fishWidthSegments: 8,
//   fishSpeed: 1.5,
//   noiseCoordScale: 0.01,
//   noiseTimeCoef: 0.0005,
//   noiseIntensity: 0.0005,
//   attractionRadius1: 50,
//   attractionRadius2: 150,
//   maxVelocity: 0.1
// })


// animate();
