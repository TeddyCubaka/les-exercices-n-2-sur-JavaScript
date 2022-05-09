function valMinMax(arr) {
    arr.sort((a, b)=> a - b);
    let sum1 = 0;
    let sum2 = 0;
    for (i = 0; i < arr.length-1; i++){
      sum1 += arr[i];
    }
    for (i = 1; i < arr.length; i++){
      sum2 += arr[i];
    }
    return sum1+ ' ' + sum2;
}



function matriceCaree(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += (arr[i][i]) - arr[i][(arr.length - 1) - i];
  }
  return Math.abs(sum)
}



function camelCase(str) {
  let count = 0;
  for (i = 0; i < str.length; i++){
    if(str[i] > 'A' && str[i] < 'z'){
      count += i;
    }else if (str[o] != [^a-z])
  }
  return count;
}



function arcadeRank(top_scores, jeu) {
  // top_scores.sort((a, b) => a - b);
  // let b = 0;
  // let places = [];
  // }
  // places.push(b);
  // return places
}




module.exports = { valMinMax, matriceCaree, camelCase, arcadeRank };
