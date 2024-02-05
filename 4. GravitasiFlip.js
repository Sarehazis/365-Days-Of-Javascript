// const flip = (d, a) => {
//   const sorted = d === 'L' ? a.slice().sort((b, a) => a - b) : a.slice().sort((b,a ) => b - a);
//   return sorted;
// }

const flip = (d, a) => a.sort((a, b) => d === 'R' ? a - b : b - a);
  
  console.log(flip('R', [3, 2, 1, 2]));
  console.log(flip('L', [1, 4, 5, 3, 5]));