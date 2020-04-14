export const particlesConfig = {
  num: [2, 18],
  rps: 0.5,
  radius: [0.5, 1.5],
  life: [1.5, 3],
  v: [0.01, 0.6],
  tha: [-2, 40],
  // body: "./img/icon.png", // Whether to render pictures
  rotate: [0, 20],
  alpha: [0.6, 0],
  scale: [0.1, 0.6],
  position: 'all', // all or center or {x:1,y:1,width:100,height:100}
  color: ['#e5ddeb', '#e01930', '#c25993'],
  cross: 'dead', // cross or bround
  random: 15, // or null,
  g: 0.01, // gravity
  //f: [2, -1], // force
  onParticleUpdate: (ctx, particle) => {
    ctx.beginPath();
    ctx.rect(
      particle.p.x,
      particle.p.y,
      particle.radius * 2,
      particle.radius * 2
    );
    ctx.fillStyle = particle.color;
    ctx.fill();
    ctx.closePath();
  },
};

export default particlesConfig;
