function mymap(arr, cb) {
  let newarr = [];
  for (i = 0; i < arr.length; i++) {
    newarr.push(cb(arr[i]));
  }
  return newarr;
}

let ans = mymap([1, 2, 3, 4, 5], (item) => item * item);
console.log(ans);

/// this is very importand and usefull
// we call it custom map function
