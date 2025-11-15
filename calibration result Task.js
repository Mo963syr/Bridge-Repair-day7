const fs = require('fs');

function canMake(target, numbers, index = 0, current = numbers[0]) {
  if (index === numbers.length - 1) {
    return current === target;
  }

  const next = numbers[index + 1];

  if (canMake(target, numbers, index + 1, current + next)) {
    return true;
  }

  if (canMake(target, numbers, index + 1, current * next)) {
    return true;
  }

  return false;
}

const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');

let total = 0;
for (const line of input) {
  if (!line.includes(':')) continue;

  let [target, nums] = line.split(':');

  if (!target || !nums) continue;

  target = parseInt(target.trim());
  nums = nums.trim().split(/\s+/).map(Number);

  if (canMake(target, nums)) {
    total += target;
  }
}

console.log('Total :', total);
