"use strict"
let numbersOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "Введите число");

while (!numbersOfFilms || !+numbersOfFilms) {
    numbersOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "Введите число");
}

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

infoFilms: for(let i = 0; i < 2; i++) {
    if(personalMovieDB.count < 1) {
        break infoFilms;
    }
    let questFilms = prompt("Один из последних просмотренных фильмов?", "Название фильма");
    while (!questFilms || questFilms.length > 50) {
        questFilms = prompt("Один из последних просмотренных фильмов?", "Название фильма");
    }
    let questScore = +prompt("На сколько оцените его?", "Введите от 1 до 10");
    while (!questScore || !+questScore) {
        questScore = +prompt("На сколько оцените его?", "Введите от 1 до 10");
    }
    personalMovieDB.movies[questFilms] = questScore;
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else {
    alert("Вы киноман");
}