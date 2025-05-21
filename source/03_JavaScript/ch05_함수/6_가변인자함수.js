// 가변인자함수 : 매개변수의 갯수에 따라 변하는 함수. 화살표 함수에서는 불가
// 내장함수 Array() : 매개변수의 갯수가 변할 수 있는 함수
var arr1 = [1, 2, '삼'];
var arr2 = Array(1, 2, '삼');
var arr3 = [, ,]; // 방의 갯수가 2인 빈 배열(자바스크립트,파이썬에서는 컴마 뒤에 아무것도 안오면 마지막 컴마 무시됨)
var arr4 = Array(2); // Array함수는 매개변수가 하나오면 그 하나 갯수만큼 비어있는 배열
var arr5 = []; // 방의 갯수가 0인 배열
var arr6 = Array();
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);