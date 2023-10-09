function sortString(str) {
    let sortedStr = str.split('').sort().join('');
    return sortedStr;
  }


var rev = sortString("cba")
console.log(rev)