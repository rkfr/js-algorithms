
const quickSort = (arr) => {
  if (arr.length < 3) {
    return arr;
  } else {
    const pivot = arr[0];

    const less = arr.filter((e) => e < pivot);
    const more = arr.filter((e) => e > pivot);
    
    return [...quickSort(less), pivot, ...quickSort(more)];
  }
};
