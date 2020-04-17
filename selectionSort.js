const unsortedArr = [5, 3, 6, 2, 10];

const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

const selectionSort = (arr) => {
  const arrCpy = [...arr];
  const len = arr.length;
  let sortedArr = [];

  for (let i = 0; i < len; i++) {
    let smallest = findSmallest(arrCpy);
    
    sortedArr.push(arrCpy[smallest]);
    arrCpy.splice(smallest, 1);
  }


  return sortedArr;
};

console.log(
  selectionSort(unsortedArr)
);
