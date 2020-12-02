export const part1 = (inputs: string[]) => {
  const nums = inputs.map(Number);
  return nums.reduce((result, num) => {
    if (nums.indexOf(2020 - num) !== -1) {
      return num * (2020 - num);
    }
    return result;
  }, 0);
};

export const part2 = (inputs: string[]) => {
  const nums = inputs.map(Number);

  return nums.reduce((result, firstValue) => {
    const tuple = nums.reduce(
      (valueTuple, secondValue) => {
        if (nums.indexOf(2020 - firstValue - secondValue) !== -1) {
          return [firstValue, secondValue, 2020 - firstValue - secondValue];
        }
        return valueTuple;
      },
      [0, 0, 0],
    );
    if (tuple[0] + tuple[1] + tuple[2] !== 0) {
      return tuple[0] * tuple[1] * tuple[2];
    }
    return result;
  }, 0);
};
