function solution(a, b, c, d) {
  const dice = [a,b,c,d]
  
  const smallest = Math.min(...dice);
  const diceAsInt = dice.map(item=>Number(item))
  const uniqueDice = new Set(diceAsInt)
  if (uniqueDice.size === 1) {
      return 1111 * diceAsInt[0];
  }else if(uniqueDice.size === 2){
      const p = diceAsInt.find(num => diceAsInt.filter(x => x === num).length === 3);
      if(p !== undefined){
          const q = diceAsInt.find(num => num !== p);
          return (10 * p + q) ** 2;
      }else{
          const [p, q] = [...uniqueDice];
          return (p + q) * Math.abs(p - q);
      }
  }else if(uniqueDice.size === 3){
      const p = diceAsInt.find(num => diceAsInt.filter(x => x === num).length === 2);
      const others = diceAsInt.filter(num => num !== p)
      const [q, r] = others;
      return q * r
  }else if (uniqueDice.size === 4){
      return smallest
  }
}

// 또는
// function solution(a, b, c, d) {
//   const dice = [a, b, c, d];
//   const smallest = Math.min(...dice);
//   const diceAsInt = dice.map(item => Number(item));
//   const uniqueDice = new Set(diceAsInt);

//   switch (uniqueDice.size) {
//       case 1:
//           return 1111 * diceAsInt[0];
      
//       case 2: {
//           const p = diceAsInt.find(num => diceAsInt.filter(x => x === num).length === 3);
//           if (p !== undefined) {
//               const q = diceAsInt.find(num => num !== p);
//               return (10 * p + q) ** 2;
//           } else {
//               const [p, q] = [...uniqueDice];
//               return (p + q) * Math.abs(p - q);
//           }
//       }

//       case 3: {
//           const p = diceAsInt.find(num => diceAsInt.filter(x => x === num).length === 2);
//           const others = diceAsInt.filter(num => num !== p);
//           const [q, r] = others;
//           return q * r;
//       }

//       case 4:
//           return smallest;

//       default:
//           return 0; 
//   }
// }
