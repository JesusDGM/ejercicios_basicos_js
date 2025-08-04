const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  const counts = {};
  for (const word of list) {
    counts[word] = (counts[word] || 0) + 1;
  }
  return counts;
}
