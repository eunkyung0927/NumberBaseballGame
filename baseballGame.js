var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var number = [];
for (var i = 0; i < 4; i++) {
  var select = Math.floor(Math.random() * list.length);
  //console.log('list',list,'number',number,list.length);
  number[i] = list.splice(select, 1)[0];
  //console.log('number', number);
}
var count = 0;
var strike = 0;
var ball = 0;
while (count < 10) {
  var input = prompt('숫자를 입력하세요.');
  strike = 0;
  ball = 0;
  count++;
  if (input == null) {
    alert("취소");
    break;
  } else {
    var inputArray = input.split('');
    //inputArray에 동일한 숫자를 입력했을 경우 경고 출력 & count-1
    function checkIfArrayIsUnique(array){
      array.sort();
      for (var i = 1; i < array.length; i++) {
        if (array[i - 1] == array[i])
          return alert("입력하신 배열에 동일한 숫자가 있습니다.");
      }
    }
    checkIfArrayIsUnique(inputArray);
    for (var j = 0; j < 4; j++) {
      for (var k = 0; k < 4; k++) {
        if (number[j] == inputArray[k]) {
          if (j === k) {
            strike++;
          } else {
            ball++;
          }
          break;
        }
      }
    }

    if (strike === 4) {
      console.log('홈런!!' + (count - 1) + '번 만에 맞추셨습니다.');
      break;
    } else if (count >= 10) {
      console.error('시도횟수를 초과하였습니다.');
    } else {
      console.info(inputArray.join('') + ": " + strike + '스트라이크' + ball + '볼');
    }
  }
}