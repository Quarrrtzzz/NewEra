let numberOfFilms ;

function start() {
     numberOfFilms = prompt('Сколько фильмов вы смотрели?', "");
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
} ;
      
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ""),
              b = prompt('На сколько оцените его?', "");

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            } 
            
      }

      if (personalMovieDB.count < 10) {
        console.log(`просмотрено довольно мало фильмов`);
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log(`Вы классический зритель`);
      } else if(personalMovieDB.count >= 30) {
        console.log(`Вы киноман`);
      } else {
        console.log(`Произошла Ошибка`);
      }

        console.log(personalMovieDB); 

/* let num = 20;

function showFirstMesaage(text) {
    console.log(text);
     num = 21;
} */
 
/* showFirstMesaage(`Hello Gaben!`);
console.log(num); */

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(8, 1));
console.log(calc(311, 16));

function ret() {
    let num = 50;
    return num;

}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log(`Hello`);
};
logger ();

const calcc = (a, b) => {
    console.log('1');
    return a + b;
};

const usdCurr = 28;
const discount = 0.8;

function convert(amount, curr) {
    return curr * amount;
}
function promotion (result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

/* function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i ===3 ) return;
    }
    console.log(`done`);
}
test(); */


function returnNeighboringNumbers(num) {
    return num-1, num, num+1;
}
returnNeighboringNumbers(5);

/* const logg = `Hello Gabe Petuh`;
console.log(logg.slice(6, 13));
console.log(logg.substring(6, 13));
console.log(logg.substr(6, 10)); */

/* const num = 12.2;

console.log(Math.round(num));

const test = `12.2px`; */
/* console.log(parseInt(test));
console.log(parseFloat(test)); */
