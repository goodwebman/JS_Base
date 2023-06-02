// ===================== Переменные =====================

let userName = 'Марк';

console.log(userName);

userName = 'Егор';

console.log(userName);

const yearOfBirth = 1990;

/*------------------------------------*/ 



let name, age;
name = 'Yuriy';

console.log(name);


// ===================== 2.1 Типы переменных =====================


function sum () {

    var myName = 'Danil'
    console.log(myName);
}

sum()

// console.log(myName) (как в питоне крч - нельзя так)



// ===================== 2.2 Типы данных =====================


let town = 'Omsk'; // Строка


let ages = 30; // Число


let isMarried = true; // Булиан


let someVariable = 'Some value';


someVariable = 50; // Можно менять типы туда сюда


someVariable = false;


// Значение null - ничего ( НЕ 0 !!)

let number = null;


// Тип undefiend 

let userNames;

console.log(userNames);



// Определения типов данных переменных typeof



const someName = 51;

console.log(typeof someName)


// BigInt


console.log(Number.MAX_SAFE_INTEGER);
console.log(90075325234523454235234199254740991n) // Работа с больними числами (n)





// ===================== 3. Операторы сравнения и условия =====================

console.log(10 > 5); // true


// Строгое сравнение (сравнивает тип данных переменной)
/*

== - нестрогое
=== - строгое

*/

console.log('5' == 5); // true
console.log('5' === 5); //false



/* if (условие) {
    // Код
} else {
    Код если иф не true
}

*/

const time = 12;

if (time < 12) {
    console.log("Доброе утро")
} else if (time >= 12 && time < 18) {
    console.log("Добрый день!")
} else {
    console.log("Добрый вечер")
}



/*

Логические операторы

&& - и (and)

|| - или (or)

!true - не

*/




// ===================== 4. Тернарный оператор =====================


// (условие) ? (условие верно) : (условие не верно);

10 < 12 ? console.log('Условие верно') : console.log('Условие не верно!')


let num = 10;   

let year = 2023;

num === year ? console.log("Условие верно") : console.log("Условие не верно!")





let time1 = 10;
let greeting = time1 < 12 ? 'Доброе утро вам' : 'Добрый день вам';

console.log(greeting);




// ===================== 5. Любимая конкатенация =====================


console.log('Привет, Марк! Как твои дела?');



let greeetings = 'Привет, Марк!';
let howAreYou = ' Как твои дела?';

let sayHi = greeetings + howAreYou;

// Конкатенация 'строка' + 'строка'

const userName1 = 'Павел';
console.log('Привет, ' + userName1 + '! Как твои дела?');



// Шаблонные строки (f-строки в питоне)

console.log(`Привет, ${userName1}! Как твои дела?`);




// ===================== 6. Функции =====================


console.log("Привет, дорогой пользователь!");


function sayHello() {
    console.log("Привет, дорогой пользователь!");
}

sayHello();


// function decloration - так красивее  (ФУНКЦИЮ МОЖНО ВЫЗВАТЬ ДО ЕЁ ОПИСАНИЯ В КОДЕ)

call();


function call() {
    console.log('Hello!');
}


// function expression  


let SayBy = function () {
    console.log('Привет');
}

SayBy();



function sayHi1 (name1) {
    console.log(`Привет, ${name1}! Как твои дела?`);
}

sayHi1('Владос');
sayHi1('Игнат');
sayHi1('Тренер Василй');



// ===================== return =====================

function summ(a,b) {
    const result = a + b;
    console.log(result);
   
}


let res = summ(10,15);
console.log(res);



// ===================== 6.3 Функция как аргумент =====================


function summa(a,b) {
    return a + b;
}

console.log(summa(21,262));

const resultat = summa(summa(15,15), summa(20,20)); 
console.log(resultat);


function doSomething(func) {
    let x = 10;
    let y = 15;
    let result2 = func(x,y);
    console.log(result2);
}

doSomething(summa) 




// ===================== 6.5 Стрелочные функции =====================

function sayqq(name) {
    console.log(`Привет,${name}! Как твои делишки?`);
}

sayqq('Василиййййй')


const arrsayqq = (name) => {
    console.log(`Привет,${name}! Как твои делишки?`);
}

arrsayqq('Василий');



const summ2 = (a,b) => a + b;
console.log(summ2(25,51));




// ===================== 7. Массивы =====================

const autoBrand1 = 'Audi';
const autoBrand2 = 'BMW';
const autoBrand3 = 'Mazda';
const autoBrand4 = 'Toyota';

const autoBrands = ['Audi', 'BMW', 'Mazda','Toyota'];
console.log(autoBrands[0]);
console.log(autoBrands.length);


// ===================== 7.1 Методы Массивов =====================

/*

arr.push(items) - Добавить элемент в конец массива
arr.pop() - Удалить элемент из конца массива
arr.shift() - Удалить элемент из начала массива
arr.unshift(...items) Добавить элемент в начало массива
arr.splice([start], [deleteCount, newElements])

*/


let autoBrandsNew = ['Audi', 'BMW', 'Mazda', 'Toyota'];
console.log(autoBrandsNew);

autoBrandsNew.push('Nissan');
console.log(autoBrandsNew);



// ===================== 8. Циклы =====================


for (let i = 0; i < 10; i++) {
    console.log(i);
}



// ===================== 9. Обход массива циклом for =====================


let auto = ['Audi','BMW','Mazda','Toyota'];

for (i = 0; i < auto.length; i++) {
    console.log(auto[i]);
}



// ===================== 10. Обход массива циклом for (of) =====================

const food = ['Apple','Bread','Milk','Potatoe'];


for (let item of food) {     //for i in food в питоне крч
    console.log(item);
}



// ===================== 11. Обход массива циклом forEach() =====================


const spisok = ['showel','hoe','Pickaxe','sword'];

spisok.forEach(function(i,index){
    console.log(`${i} => ${index}`);
})

// console.log('Did Joffrey agree? \nHe did. He also said "I love using \\n".'); - пусть тут полежит

// BEGIN (write your solution here)
function getHiddenCard (text,num = 4) {
    
    const res = "*".repeat(num) + `${text.slice(12)}`;
    return res;
    
  }
  // END


// ===================== 12. Объекты =====================



let userN = 'Марк';
let agge = 30;
let isMarriedHe = false;

// const person = {
//     userN: 'Марк',
//     agge: 30,
//     isMarriedHe: false,
//     profession: 'Designer'
// }

// console.log(person);
// console.log(person.userN);
// console.log(person['agge']);

// let propertyName = 'profession';

// console.log(person[propertyName]);



// person.work = 'JS developer';
// console.log(person);




// ===================== 13. Методы в объектах =====================


const person = {
    userN: 'Марк',
    agge: 30,
    isMarriedHe: false,
    sayHey: function () {
        console.log("Привет");

    }
};

person.sayHey();

console.log(person);


// ===================== 14. Ключевое слово this =====================


const person2 = {
    userName: 'Марк',
    age:30,
    isMarried:false,
    sayHi: function (name) {
        console.log(this);
        console.log(`Привет,${name}! Меня зовут ${this.userName}.`);
    }
};

person2.sayHi('Юрий');



// ===================== 15. Объекты обход циклом for in (не путать с for of) =====================

const person3 = {
    userName: 'Марк',
    age:30,
    isMarried:false,
    sayHi: function (name) {
        console.log(this);
        console.log(`Привет,${name}! Меня зовут ${this.userName}.`);
    }
};

for (let key in person3) {
    
    console.log(key, ':' , person3[key] );
}



// ===================== 16. Конструктор классов =====================




class Person {
    constructor(userName, age, isMarried) {
        this.userName = userName;
        this.age = age;
        this.isMarried = isMarried;
    }
}

const person1 = new Person('Марк Твен',30,false);

console.log(person1);

for (let key in person1) {
    console.log(key, ':', person1[key]);
}   



function capitalize(text) {
    const first = text[0].toUpperCase() + text.slice(1);
    return first
    
}

capitalize('welcome')



const isPensioner = (age) => age >= 60; // true or false 

console.log(isPensioner(650));


const isMister = (text) => text === 'Mister';

console.log(isMister('Mister2'))


const isInternationalPhone = (num) => num[0] === '+';
console.log(isInternationalPhone('+79602223423'));



const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 != 0);
console.log(isLeapYear(2018));
console.log(isLeapYear(2017));
console.log(isLeapYear(2016));


/* if (условие) {
    // Код
} else {
    Код если иф не true
}

*/


const reverse = (s) => s.split('').reverse().join('');


function isNotPalindrome (word) {
    word = word.toLowerCase();
    const res = (word.split('').reverse().join('').toLowerCase());
    return res != word;
    
}


isNotPalindrome('шалаш'); // false
isNotPalindrome('ага'); // false
isNotPalindrome('хекслет'); // true


function getLetter(name, num) {
    const res = name[num-1];
    if (res === undefined) {
        return '';
    } else {
        return res;
    }
}

getLetter('Hexlet',0);
getLetter('Hexlet',4);


function guessNumber(num) {
    if (num === 42) {
        return 'You win!' 
    } else {
        return 'Try again!'
    }
}


function normalizeUrl(link) {
    if (link.startsWith('https://')) {
        return link;
    }
        return link = 'https://' + link;
}



function whoIsThisHouseToStarks(name) {
    if (name === 'Karstark' || name == 'Tally') {
        return 'friend';
    } else if (name == 'Lannister' || name == 'Frey') {
        return 'enemy';
    } else {
        return 'neutral';
    }
}



const convertText = (text) => {
    if (text === '') {
      return '';
    }
  
    const reversable = text[0] !== text[0].toUpperCase();
    return reversable ? reverse(text) : text;
  };



function getNumberExplanation(nums) {
    switch (nums) {
        case 666:
            return('devil number');
        case 42:
            return('answer for everything');
        case 7:
            return('prime number');
        default:
          return (null);
      }
}

getNumberExplanation()



const printNumbers = (lastNumber) => {
    let i = lastNumber;

    while (i >= 1) {
        console.log(i);
        i = i - 1;
    }

    console.log('finished!');
}

printNumbers(5);



const multiplyNumbersFromRange = (start,finish) => {
    let i = start;
    let div = 1;

    while (i <= finish) {   
        div = div * i;

        i = i + 1;
    }

    return div;
}

multiplyNumbersFromRange(1,5);


const joinNumbersFromRange = (start,finish) => {
    let i = start;
    let div = '';

    while (i <= finish) {   
        div = div + i;

        i = i + 1;
    }

    return(div);
}

joinNumbersFromRange(5,10);




const printReversedWordBySymbol = (word) => {
    let i = 0;
    let l = word.length;

    while (i < l ) {
        console.log(word[l-1]);

        l = l - 1;
    }
}

printReversedWordBySymbol('Hexlet');



const countChars = (str, char) => {
    str = str.toLowerCase();
    char = char.toLowerCase();
    let i = 0;
    let count = 0;
    while (i < str.length) {
      if (str[i] === char) {
        // Считаем только подходящие символы
        count = count + 1;
      }
      // Счетчик увеличивается в любом случае
      i = i + 1;
    }
  
    return count;
  };

countChars('HexlEt', 'E'); // 2



const even = (str) => {
    let i = 0;
    let res = '';
    
    while (i < str.length) {
        if (i % 2 !==0) {
            res = res + str[i];
        }
        i = i + 1;
    }
    console.log(res);
}

even('Bran');


const filterString = (str,char) => {

    let i = 0;
    let res = '';
    while (i < str.length) {
        var charId = str[i];
        if (charId !== char) {
            res = res + charId;
        }
        i = i + 1;   
    }
    return res;
}


filterString('Zebra','a');



const makeItFunny = (text,num) => {
    let i = 0;
    let res = '';

    while (i < text.length) {
        const current = text[i];
        if ((i + 1) % num === 0) {
            res = res + current.toUpperCase();
        } else {
            res = res + current;
        }

        i++;
    }
    console.log(res);
}


makeItFunny('I never look back', 3);



const hasChar = (str,char) => {
    let i = 0;
    let count = 0;
    
    while (i < str.length) {
        

        if (char === str[i]) {
            count++;
        }

        i++;
    }

    if (count > 0) {
        return true;
    } else {
        return false;
    }
}

hasChar('Hexlet','e');



console.log((0.48 + 3 / (0.2 - 0.1) + 3.14 * 2**4 )*25);

let x = 5;
let y = 10;



let res13 =(x * y);
console.log(`${res13}${res13}${res13}`);

console.log((x * y).toString().repeat(5)); // toString();



// let A = Number(prompt());  - prompt() - input()
// let B = Number(prompt());
// let C = Number(prompt());
// let resolution = (A.toString() + B.toString() + C.toString());

// console.log(Number(resolution));



// let [a, b] = prompt().split(' ').map(Number)


// N = Number(prompt());
// K = Number(prompt());
// resultat = (K / N);
// console.log(Math.floor(resultat));




// N = Number(prompt());
// console.log(Math.floor((N / 10)));

// N = Number(prompt());
// console.log(Math.floor((N % 100) / 10));


// N = Number(prompt());
// let a = (N % 10);
// let b = (Math.floor((N % 100) / 10));
// let c = (Math.floor(N / 100));
// console.log(a + b + c);



// Надоело решать задачки, хотя очень интерестно, мне понравилось!


// ===================== Выбор DOM элементов =====================

// DOM = Document Object Model

// Выбор одного элемента DOM по селектору

//document.querySelector('selecotr');

// document.querySelector('h1'); - Тег
// document.querySelector('.red'); - Класс
// document.querySelector('#red'); - id

// document.querySelector('header.header nav.nav li.link a'); - можно


document.querySelector('h2').classList.add('red'); // - Теперь с помощью css я могу работать с классом 'red;
const heading2 = document.querySelector('h2');

heading2.classList.add('red');

document.querySelector('.heading-3').classList.add('green');
const headings = document.querySelector('h2');

headings.classList.add('red-text');

document.querySelector('p').classList.add('p__font');



// ===================== ES5 Метод для выбора элементов =====================


document.getElementsByClassName('link');

document.getElementsByTagName('h2');

document.getElementById('header');



// ===================== Работа с CSS классами =====================


/*
element.classList.add()
.add()
.remove()
.toggle()  -  Переключатель (Добавляет если не было / Удаляет если был) (class);
.contains() - true / false (Проверка есть ли такой тег у данного class)
*/

const heading = document.querySelector('h2');

heading.classList.toggle('red-text');

heading.classList.contains('green');



// ===================== Работа с атрибутами =====================


document.querySelector('img').classList.add('img-size');


/*
Основные (Самые часто используемые)

    getAttribute(attrName) - возвращает значение указанного атрибута

    setAttribute(name, value) - добавляет указанные атрибуты и их значения к элементу

    hasAttribute(attrName) - возвращает true при наличии у элемента указанного атрибута

    removeAttribute(atrName) - удаляет указанный атрибут


И так (по хуйне, но пусть будут)

    toggleAttribute(attrName) - удаляет указанный атрибут

    toggleAtribute(name, force) - добавляет новый атрибут при отсутсвтии или удаляет существующий атрибут

    hasAttributes() - возвращает true, если у элемента имеются какие-либо атрибуты вообще

    getAttributesNames() - возвращает названия атрибутов элемента

*/

const img = document.querySelector('#logo');

// img.getAttribute('src');
const srcValue = img.getAttribute('alt');
console.log(srcValue);

// img.setAttribute('src','php.png'); - будет логотип php

const button = document.querySelector('#button');
button.setAttribute('value','Отправить');



// ===================== Работа с прослушкой событий =====================

const button1 = document.querySelector("#button");
const img1 = document.querySelector('#logo');
button.value = 'Удалить';


button.addEventListener('click',function () {
    console.log('Click 1!');
    img.remove();
})

button.addEventListener('click',function () {
    console.log('Click 2!');
    img.remove();
})


button.addEventListener('click',function () {
    console.log('Click 3!');
    img.remove();
})


// button.onclick = function () {
//     console.log('Click!');
//     img.remove();
// }



const inputText = document.querySelector('#input-text');
const textBlock = document.querySelector('#input-block');

inputText.addEventListener('input',function () {
    console.log(inputText.value);
    textBlock.innerText = (inputText.value);
})



const list = document.querySelector('#list');

list.addEventListener('click', (event) => {
    // console.log(this);
    // console.log(event);
    console.log(event.target);
})






// ===================== Работа с элементами =====================



// Шпоргалка


/*


// Создать элемент

document.createElment('tag-name');

// Изменить HTML содержимое внутри элемента

element.innerHTML = '' ;


// Изменить Текстовое содержимое внутри элемента

node.innerText = '' ;

// Клонирование элемента 

node.cloneNode(true)


// Вставить элемент внутрь другого элемента

element.append(nodesOrDOMStrings);


// Удалить элемент

element.remove();


*/


// Выбор контейнера


const container = document.querySelector('#elementsContainer');

// Создание заголовка

 const newHeader = document.createElement('h1');

 newHeader.innerText = 'Новый заголовок';
 container.append(newHeader);


 // Копирование шапки

 const mainHeader = document.querySelector('header');
 const headerCopy = mainHeader.cloneNode(true);
 container.append(headerCopy);  


 // Вставка разметки через строки

 const htmlExample = '<h2>Еще один заголовок</h2>';
 container.insertAdjacentHTML('beforeend', htmlExample);


 // Вставка разметки через шаблонные строки

 const title = 'Текст заголовка';
 const htmlExample2 = `<h2>${title}</h2>`;
 container.insertAdjacentHTML('beforeend', htmlExample2);






 // ToDo список задач

 const todoList = document.querySelector('#todo-list');
 const todoForm = document.querySelector('#todo-form');
 const todoInput = document.querySelector('#todo-input');

 todoForm.addEventListener('submit', formHandler);


 function formHandler(event) {
    event.preventDefault(); // чтобы страница не обновлялась при отправке формы - очень полезно


    // Получаем название задачи из инпута
    const taskText = todoInput.value;
    

    // Создаем тег li через разметку

    const li = `<li>${taskText}</li>`;
    

    // Добавляем разметку на стринцу

    todoList.insertAdjacentHTML('beforeend',li);


    // Очищаем поле ввода

    todoInput.value = '';


    // Фокус на поле ввода

    todoInput.focus();
 }



 // ===================== setInterval =====================


const timerIntervalID = setInterval(function () {
    console.log('Fired!');
 }, 1000)

 clearInterval(timerIntervalID); // конец



  // ===================== setTimeOut =====================

const timeID = setTimeout(function(){
    console.log('setTimeout Fired!');
}, 5000);

clearInterval(timeID); // setTimeOut выполнится один раз и всё





 // ===================== setInterval + setTimeOut =====================

 const timerID2 = setInterval(function() {
    console.log('setInterval Fired!');
 },1000)


 setTimeout(function(){
    clearInterval(timerID2);   // 10 выводов будет произведено
 }, 10000)




// ===================== Работа с массивами =============================


arr = ['a','b','c'];

arr.push('d','e'); // Добавляет в конец массива  ['a','b','c','d','e']
arr.unshift('z','x','y') // Добавляет в начало массива
console.log(arr)


/*
// Создание массива

let arr = new Array(); // Используется редко
let arr = [];
*/

//========================================================================================================================================================

// Значения массива
// Получение значений

/*
let arrOne = [
	'Ваня', // 0я позиция
	'Иштван', // 1я позиция
	'Оля', // 2я позиция
];
console.log(arrOne[1]);
console.log(arrOne[5]); // undefined
*/

/*
let arrTwo = [
	"Коля",
	{
		type: "JS",
		age: 36
	},
	true,
	function () {
		console.log('Привет, я Коля');
	}
];

console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);
console.log(arrTwo[2]);
arrTwo[3]();

// Многомерные массивы
let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
console.log(matrix);
console.log(matrix[0][1]);
*/
//========================================================================================================================================================

/*
// Длина массива. Свойство length

let arrOne = ['Ваня', 'Иштван', 'Оля',];
console.log(arrOne);
console.log(arrOne.length);

*/
/*
arrOne.length = 0;
console.log(arrOne);

// Таким образом, самый простой способ
// очистить массив – это arrOne.length = 0;

*/

//========================================================================================================================================================


// Доступ к массиву
/*
Напомню что массив является объектом и, следовательно,
ведёт себя как объект. Например, копируется по ссылке:
*/
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(arr);

let arrNew = arr;

arrNew.length = 2;

console.log(arr);
*/

//========================================================================================================================================================

/*
// Изменение значений
let arr = ['Ваня', 'Иштван', 'Оля',];

// Меняем существующее
arr[0] = 'Коля';
console.log(arr);

// Добавляем новое
arr[3] = 'Ваня';
console.log(arr);
*/

//========================================================================================================================================================

// МЕТОДЫ МАССИВОВ

/*
Итак с простеньким разобрались теперь перейдем к методам массивов.
Но перед этим стоит поговорить о вариантах применения для массивов.

Первый из них это очередь или упорядоченная коллекция элементов.
Очередь поддерживает два вида операций:
1. добавление элемента в конец очереди
2. удаление элемента в начале, сдвигая очередь,
	так что второй элемент становится первым.

Другой вариант применения для массивов – структура данных,
называемая стек.
Стек поддерживает два вида операций:
1. добавление элемента в конец
2. удаление последнего элемента

Массивы в JavaScript могут работать и как очередь, и как стек.
Мы можем добавлять/удалять элементы как в начало, так и в конец массива.
И в этом нам помогут следующие методы:
*/

/*
// Метод push - добавляет элемент в конец массива

let arr = ['Ваня', 'Иштван', 'Оля',];
arr.push('Вася');
console.log(arr);

arr.push('Дима', 'Катя');
console.log(arr);
*/

//------------------------

/*
// Метод shift - удаляет элемент в начале,
// так что второй элемент становится первым.

let arr = ['Ваня', 'Иштван', 'Оля',];
arr.shift();
console.log(arr);
*/

//------------------------

/*
// Метод pop  - удаляет последний элемент

let arr = ['Ваня', 'Иштван', 'Оля',];
arr.pop();
console.log(arr);
*/

//------------------------

/*
// Метод unshift  - добавляет элемент в начало массива

let arr = ['Ваня', 'Иштван', 'Оля',];
arr.unshift('Вася');
console.log(arr);

arr.unshift('Дима', 'Катя');
console.log(arr);
*/

//------------------------

/*
Методы push/pop выполняются быстро, а методы shift/unshift – медленно.

Давайте рассмотрим на примере добавления элемента
в начало массива (unshift);

Просто взять и добавить элемент с номером 0 недостаточно.
Нужно также заново пронумеровать остальные элементы.

Операция unshift должна выполнить 3 действия:
 1. Добавить элемент с индексом 0.
 2. Сдвинуть все элементы вправо, заново пронумеровать их,
	заменив 0 на 1, 1 на 2 и т.д.
 3. Обновить свойство length.

Чем больше элементов содержит массив, тем больше
времени потребуется для того, чтобы их переместить,
больше операций с памятью.

А вот что бы добавить элемент в конец массива (метод push)
не нужно ничего перемещать.
Так же не нужно заново нумеровать элементы. Достаточно
увеличить значение length.
*/

//========================================================================================================================================================

// Удаление/добавление/изменение конкретных элементов

/*
let arr = ['Ваня', 'Иштван', 'Оля',];

delete arr[1];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);
*/

// Метод splice. Позволяет добавлять, удалять и заменять элементы.
// Синтаксис arr.splice(index[, deleteCount, elem1, ..., elemN])
/*
// Удаляем элемент
let arrOne = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (Иштван), удаляем один элемент
arrOne.splice(1, 1);
console.log(arrOne);

// Удаляем элемент и возвращаем его в переменную
let arrTwo = ['Ваня', 'Иштван', 'Оля',];
let removed = arrTwo.splice(1, 1);
console.log(removed);

// Заменяем элементы
let arrThree = ['Ваня', 'Иштван', 'Оля',];
// Начиная с нулевой позиции (Ваня), заменяем один элемент
arrThree.splice(0, 1, 'Коля');
console.log(arrThree);

// Добавляем элементы
let arrFour = ['Ваня', 'Иштван', 'Оля',];
// Начиная с первой позиции (перед 'Иштван'), добавляем два элемента
arrFour.splice(1, 0, 'Коля', 'Маша');
console.log(arrFour);

// Удаляем элемент
let arrFive = ['Ваня', 'Иштван', 'Оля',];
// Начиная с последней позиции (Оля), удаляем один элемент
arrFive.splice(-1, 1);
console.log(arrFive);
*/

//========================================================================================================================================================

/*
// Метод slice.
// Cоздаёт новый массив, в который копирует часть либо весь массив
// Синтаксис arr.slice([start], [end]) Не включая [end]

// Копируем часть массива
let arrOne = ['Ваня', 'Иштван', 'Оля',];

// Начиная с 1й позиции 'Иштван',
// до 2й позиции 'Оля' (не включая)
let arrTwo = arrOne.slice(1, 2);
console.log(arrTwo);

// Начиная с предпоследней позиции 'Иштван',
// до последней 'Оля' (не включая)
let arrThree = arrOne.slice(-2, -1);
console.log(arrThree);

// Копируем весь массив
let arrFour = arrOne.slice();
console.log(arrFour);
*/


//------------------------

/*
// Метод concat.
// Cоздаёт новый массив, в который копирует данные из других массивов
// и дополнительные значения (в конец массива)
// Синтаксис arr.concat(arg1, arg2...)

let arrOne = ['Ваня', 'Иштван', 'Оля',];
let arrTwo = arrOne.concat('Петя');
console.log(arrTwo);
*/
//========================================================================================================================================================

// Поиск в массиве

// Методы indexOf/lastIndexOf и includes
// алналоги строковым методам
/*
1. arr.indexOf(item, from) ищет item, начиная с индекса from,
	и возвращает индекс, на котором был найден искомый
	элемент, в противном случае - 1.
2. arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
3. arr.includes(item, from) – ищет item, начиная с индекса from,
	и возвращает true, если поиск успешен.
*/

/*
let arr = ['Ваня', 'Иштван', 'Оля',];

// indexOf
console.log(arr.indexOf('Иштван'));
console.log(arr.indexOf('Вася'));
console.log(arr.indexOf('Иштван', 2));

// includes
console.log(arr.includes('Иштван'));
console.log(arr.includes('Вася'));
console.log(arr.includes('Иштван', 2));
*/

//------------------------

// find и findIndex
// поиск в массиве объектов с пределённым условием

/*
// Синтаксис
let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});
*/
/*
let arr = [
	{ name: 'Вася', age: 36 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
]

let resultOne = arr.find(function (item, index, array) {
	return item.age === 18;
});

//let resultOne = arr.find(item => item.age === 18);
console.log(resultOne);


//findIndex
let resultTwo = arr.findIndex(item => item.age === 18);
console.log(resultTwo);
*/

//------------------------

// filter
// Метод ищет все элементы, на которых функция-колбэк вернёт true.
/*
let results = arr.filter(function (item, index, array) {
	// если true - элемент добавляется к результату, и перебор продолжается
	// возвращается пустой массив в случае, если ничего не найдено
});
*/
/*
let arr = [
	{ name: 'Вася', age: 36 },
	{ name: 'Коля', age: 18 },
	{ name: 'Оля', age: 'Не скажу' },
]
let result = arr.filter(function (item, index, array) {
	return item.age >= 18;
});
console.log(result);
*/

//========================================================================================================================================================

// Сортировка массивов
/*
// Сотритовка слов
let arrOne = ['Иштван', 'Ваня', 'Оля'];
console.log(arrOne.sort());

// Сотритовка чисел
let arrTwo = [8, 22, 1,];
console.log(arrTwo.sort());

// По умолчанию элементы сортируются как строки.
// Для строк применяется лексикографический порядок,
// и действительно выходит, что "8" > "22".
console.log("8" > "22");
*/
//--------

// Метод sort(fn)
// сортирует массив на месте, меняя в нём порядок элементов.

/*
// Сотритовка чисел
let arrTwo = [8, 22, 1,];
console.log(arrTwo.sort());

// Функция сортировки

function compareNumeric(a, b) {
	console.log(`Сравниваем ${a} и ${b}`);
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;

	//return a - b
}

//console.log(arrTwo.sort((a, b) => a - b));

console.log(arrTwo.sort(compareNumeric));
*/

//--------

/*
// Метод reverse
// меняет порядок элементов в массиве на обратный.

let arrOne = ['Ваня', 'Иштван', 'Оля'];
console.log(arrOne.reverse());
*/


//========================================================================================================================================================

// Преобразование массивов

// Метод map.
// вызывает функцию для каждого элемента массива 
// и возвращает массив результатов выполнения этой функции.
/*
let result = arr.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
});
*/
/*
let arr = ['Ваня', 'Иштван', 'Оля',];

let result = arr.map(function (item, index, array) {
	return item[0];
});
//let result = arr.map(item => item[0]);
console.log(arr);
console.log(result);
*/

//------------------------

/*
 Метод split преобразовывает строку в
 массив по заданному разделителю
 Синтаксис: str.split(delim)
*/
/*
let str = 'Ваня,Иштван,Оля';

let arr = str.split(',');
console.log(arr);


// Можно ограничить кол-во объектов
// которые попадут в массив

let arrTwo = str.split(',', 2);
console.log(arrTwo);
*/
//----------

/*
 Метод join преобразовывает массив в
 строку c заданным разделителем
 Синтаксис: arr.join(glue)
*/
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
let srt = arr.join('.');
console.log(srt);


// Получение строки из массива
let arrTwo = ['Ваня', 'Иштван', 'Оля'];
console.log(String(arrTwo));
*/

//========================================================================================================================================================

// Проверка Array.isArray()

/*
Напомню, массивы не образуют отдельный тип данных.
Они основаны на объектах.
*/
/*
let obj = {};
let arr = [];

console.log(typeof obj);
console.log(typeof arr);
*/
// Как же нам узнать где массив а где нет?
/*
if (Array.isArray(obj)) {
	console.log('Это массив!');
} else {
	console.log('Это не массив!');
}*/

//========================================================================================================================================================

// Перебор элементов

/*
let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(arr.length);

// Цикл FOR
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
*/

//---------------------

/*
// Цикл FOR...OF
// Можно использовать для вывода значений
let arr = ['Ваня', 'Иштван', 'Оля',];

for (let arrItem of arr) {
	console.log(arrItem);
}
*/
//---------------------


// Метод перебора forEach
// Выполняет функцию для каждого элемента массива
/*
arr.forEach(function (item, index, array) {
	// ... делать что-то с item
});
*/

/*
let arr = ['Ваня', 'Иштван', 'Оля',];

arr.forEach(function (item, index, array) {
	console.log(`${item} находится на ${index} позиции в ${array}`);
});
*/
/*
// Стрелочная функция
arr.forEach((item, index, array) => {
	console.log(`${item} находится на ${index} позиции в ${array}`);
});
*/
//--------

/*
let arr = ['Ваня', 'Иштван', 'Оля',];

arr.forEach(show);

function show(item) {
	console.log(item);
}
*/

//========================================================================================================================================================

// Методы reduce/reduceRight

/*
Итак, мы выяснили что если нам нужно перебрать
массив – мы можем использовать forEach, for или for..of.
Если нам нужно перебрать массив и вернуть
данные для каждого элемента – мы используем map.

Методы arr.reduce и arr.reduceRight похожи на эти методы,
но они немного сложнее и используются для вычисления
какого-нибудь единого значения на основе всего массива.
*/
/*
// Синтаксис
let value = arr.reduce(function(previousValue, item, index, array) {
  // ...
}, [initial]);
*/
/*
К привычным нам аргументам item, index, array
добавляется previousValue:

previousValue – результат предыдущего вызова этой функции,
равен initial при первом вызове (если передан initial),
item – очередной элемент массива,
index – его индекс,
array – сам массив.

Функция применяется по очереди ко всем элементам
массива и «переносит» свой результат на следующий вызов.
*/


/*
let arrOne = [1, 2, 3, 4];
let reduceValueOne = arrOne.reduce(function (previousValue, item, index, array) {
	return item + previousValue;
}, 0);
console.log(reduceValueOne);
*/
/*
Шаг №1
previousValue = 0
item = 1
их сумма = 1

Шаг №2
previousValue = 1
item = 2
их сумма = 3

Шаг №3
previousValue = 3
item = 3
их сумма = 6

Шаг №4
previousValue = 6
item = 4
их сумма = 10
*/
//--------

/*
let arrArrow = [1, 2, 3, 4];
let reduceValueArrow = arrArrow.reduce((pValue, item) => item + pValue, 0);
console.log(reduceValueArrow);
*/


//--------

/*
let arrTwo = ['Ваня', 'Иштван', 'Оля',];

Если не указать начальное значение, то оно будет равно
первому элементу массива (previousValue=Ваня)
А работа метода начнется со второго элемента (item=Иштван)
*/
/*
let reduceValueTwo = arrTwo.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
	console.log(item);
	return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${reduceValueTwo}`);
*/


// Метод arr.reduceRight работает аналогично, 
// но проходит по массиву справа налево.


//========================================================================================================================================================


// Массив используем как массив
/*
Следует помнить, что массив является объектом и,
следовательно, ведёт себя как объект.
*/
/*
let arr = ['Ваня', 'Иштван', 'Оля',];
console.log(typeof arr);

// Добавление нечислового свойства
arr.name = "Коля";
console.log(arr);
*/
/*
Но то, что действительно делает массивы особенными – это их внутреннее
представление. Движок JavaScript старается хранить элементы
массива в непрерывной области памяти, один за другим.
Существуют и другие способы оптимизации, благодаря которым
массивы работают очень быстро.

Но все они утратят эффективность, если мы перестанем работать
с массивом как с «упорядоченной коллекцией данных» и начнём
использовать его как обычный объект.

Варианты неправильного применения массива:
1. Добавление нечислового свойства, например: arr.test = 5.
2. Создание «дыр», например: добавление arr[0],
	затем arr[1000](между ними ничего нет).
3. Заполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.
*/


//========================================================================================================================================================
//========================================================================================================================================================

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1.
// Какое число (длинну) мы получим?
let arr = ['Ваня', 'Иштван', 'Оля',];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);
*/
// Задача №2.
/*
Создайте массив users с элементами "Ваня" и "Иштван".
Добавьте "Оля" в конец.
Замените значение в "Иштван" на "Петя".
Ваш код для поиска значения должен
работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте "Маша" и "Паша" в начало массива.
*/
/*
// Задача №3.
// Удалить элемент 'Иштван' и возвратить его в переменную
let arr = ['Ваня', 'Иштван', 'Оля',];

// Задача №4.
//Сделать из строки массив
let str = 'Ваня,Иштван,Оля';

// Задача №5.
// Чему равен previousValue в начале работы метода?
let arr = [9, 2, 8,];
let reduceValue = arrTwo.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});
*/

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================







