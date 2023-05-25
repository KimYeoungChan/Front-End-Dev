// number 인덱스 시그니보단 Array, 튜플, ArrayLike 사용하기

// js에서 객체의 키는 string, symbol만 가능

// 숫자, 다른 타입의 값을 키로 사용하고자한다면 js 런타임 시 문자열로 변환된다.

// 배열도 인덱스로 접근할 때 x[1] 이렇게 x[['1'] 인덱스가 문자열로 변환

// 이런 혼란을 없애기 위해 ts는 숫자 키를 허용하고 문자열과 다른 것으로 인식한다.
// 따라서 타입 체크 시점에서 배열의 인덱스에 문자열을 사용하는 오류를 잡을 수 있다.

const arr = [1, 2, 3];
const arr0 = arr[0];
const arr1 = arr['1'];
// 잉? 오류 안나는데?


// 자바스크립트에서는 배열도 객체이므로 인덱스로 접근시 숫자가 문자열로 변환된다.
// 타입스크립트는 타입 체크에서 이를 확인하고 오류를 잡지만 Object.keys로 키 배열을 만들었을 때에는 예외가 발생

const a = [1, 2, 3];
const keys = Object.keys(a); // -> keys: string[]

