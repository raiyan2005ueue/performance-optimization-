var obj = {
  name: 'raiyan',
  age: 20,
  social: {
    acc: 'guest@gmail.com',
  },
};

function makedeepcopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  var copiedval = Array.isArray(obj) ? [] : {};
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    copiedval[keys[i]] = makedeepcopy(obj[keys[i]]);
  }
  return copiedval;
}

let obj2 = makedeepcopy(obj);
obj2.social.acc = 'hjjhjhjhj';
console.log(obj);
console.log(obj2);
