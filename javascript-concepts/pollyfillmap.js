if (!Array.prototype.mymap) {
  Array.prototype.mymap = function (callack) {
    let newarr = [];
    for (let i = 0; i < this.length; i++) {
      newarr.push(callack(this[i]));
    }
    return newarr;
  };
}

let arr = [1, 2, 3, 4, 5];
let final = arr.mymap((i) => i);
console.log(final);
