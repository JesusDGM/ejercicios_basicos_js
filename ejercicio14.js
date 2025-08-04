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
  for (let i = 0; i < list.length; i++) {
    const word = list[i];
    counts[word] = (counts[word] || 0) + 1;
  }
  return counts;
}
