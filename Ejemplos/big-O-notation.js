function addUtTo(n) {
  let total = 0;
  for (p = 1; p <= n; p++) {
    total += p;
  }
  return total;
}

function addUtTo2(n) {
  return (n * (n + 1)) / 2;
}

addUtTo(7);
addUtTo2(7);
