function addUtTo(n) {
  let total = 0;
  for (let p = 1; p <= n; p++) {
    total += p;
  }
  return total;
}

let totalSum = addUtTo(7);
