const arr = [1, 3, 5, 7, 9];

const binarySearch = (arr, val) => {
  let low = 0;
  let high = arr.length - 1;

  let  i = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];
    
    if (guess === val) {
      return mid;
    }
    
    if (guess > val) {
      high = mid - 1;
    }
    
    else {
      low = mid + 1;
    }
    
    i++;
  }
  
  return null;
};

console.log(
  binarySearch(arr, 3)
);
