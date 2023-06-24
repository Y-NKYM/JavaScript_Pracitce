/*
let str1 = "Hello";
let str2 = "World";
let hello = `${str1} ${str2}`;
alert(hello);

let num1 = 5;
let num2 = 3;

let plus = `${num1} + ${num2} = ${num1 + num2}`;
let minus = `${num1} - ${num2} = ${num1 - num2}`;
let times = `${num1} * ${num2} = ${num1 * num2}`;
let divide = `${num1} / ${num2} = ${num1 / num2}`;

alert(`${plus}\n${minus}\n${times}\n${divide}`);

if(true) {
  var name = 'Luke';
}
console.log(name);

var str = "webcamp";
function foo() {
  console.log(str);
  var str = "dmm webcamp";
  console.log(str);
}
foo();
*/

// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }
// let alertString;
// alertString = addString("WebCamp");
// alert(alertString);

// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// alert('あなたの選んだ手は' + user_hand + 'です。');

// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while (user_hand != "グー" && user_hand != "チョキ" && user_hand != "パー" && user_hand != null){
    alert("グー・チョキ・パーのいずれかを入力してくださいね");
    user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
  }
// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  } else if(user == null){
    alert("またチャレンジしてね")
  }

  return winLoseStr;
}