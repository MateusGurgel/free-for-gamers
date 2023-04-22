export default function matrixToArray(matrix: any[][]) {
  let resultArray: any[] = [];

  matrix.forEach((array) => {
    resultArray.push(array);
  });

  return resultArray;
}
