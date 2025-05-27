//console.log(5 > 4);//true
//console.log("ананас" > "яблуко")//false
//console.log("2" > "12")//true
//console.log(undefined == null) //true
//console.log(undefined === null)
// Які кінцеві значення всіх змінних a та x після виконання коду нижче?
//let a = 2;
//let x = 1 + (a * 2);
//let x = 1 + (a *= 2);
//console.log("a = " + a)
//console.log("x = " + x)

// Які кінцеві значення всіх змінних q, r, w та d після виконання коду нижче?
//let q = 1; 
//let r = 1;
//let w = ++q;                  
//let d = r++;                              
//console.log("q = " + q)
//console.log("r = " + r)
//console.log("w = " + w)
//console.log("d = " + d)
/* Task - 1

//Замініть цикл "for" на цикл "while"  */
//for (let i = 0; i < 8; i++) {
 // console.log( `число - ` + i);
//}
//let i = 0;
//while (i < 8) {
  //console.log(`число - ` + i);
  //i++;
//}
//let firstNumber = -100;
//let secondNumber = 250;
//let sum = 0;
//for (let i = firstNumber; i <= secondNumber; i++) {
//  sum += i;
//}
//console.log("Сума чисел від " + firstNumber + " до " + secondNumber + " = " + sum);
let i = 10;
let timer = setInterval(() => {
  console.log(i);
  i--;
  if (i < 0) {
    clearInterval(timer);
  }
}, 1000);


function checkProbabilityTheory(count) {
  var evenCount = 0;
  var oddCount = 0;

  for (var i = 0; i < count; i++) {
    var number = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    if (number % 2 === 0) {
      evenCount = evenCount + 1;
    } else {
      oddCount = oddCount + 1;
    }
  }

  var evenPercent = (evenCount / count) * 100;
  var oddPercent = (oddCount / count) * 100;

  console.log("Кількість згенерованих чисел: " + count);
  console.log("Парних чисел: " + evenCount);
  console.log("Непарних чисел: " + oddCount);
  console.log("Відсоток парних до непарних:");
  console.log("Парні: " + evenPercent.toFixed(2) + "%");
  console.log("Непарні: " + oddPercent.toFixed(2) + "%");
}


