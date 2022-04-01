// 1) Написать функцию, которая, после промежутка в 4 секунды возвращает объект, в котором есть поле, являющееся массивом, где каждый элемент - это объект с тремя полями (Элементов
//   должно быть не менее пяти. Т.е. 5 объектов, в каждом из которых 3 поля).
//   Отловить момент выполнения этой функции и вывести в консоль сообщение - promise resolved + поле нашего объекта, которое является массивом объектов.
let p = new Promise((res) => {
  setTimeout(() => {
    let arr = [
      (home = {
        bed: 4,
        chair: 6,
        window: 12,
      }),
      (car = {
        color: "red",
        speed: 50,
        maxSpeed: 250,
      }),
      (computer = {
        motherboard: "msi",
        videoCard: 580,
        cpu: "intel",
      }),
      (shop = {
        checkout: 12,
        basket: 112,
        sellers: 26,
      }),
      (instruments = {
        hammer: 3,
        pain: 350,
        keys: 15,
      }),
    ];

    res(arr);
  }, 4000);
});

p.then((arr) => {
  console.log(arr);
});

//2) Написать функцию delay которая выполняет задержку в 3 секунды. Составить цепочку промисов, состоящую из пяти промисов. (сначала выполняется первый промис, затем второй,
//затем 3-ий и тд.)
let delay = () => {
  return new Promise((res) => {
    setTimeout(() => res(), 3000);
  });
};

delay()
  .then(() => {
    console.log("1");
    return delay();
  })
  .then(() => {
    console.log("2");
    return delay();
  })
  .then(() => {
    console.log("3");
    return delay();
  })
  .then(() => {
    console.log("4");
    return delay();
  })
  .then(() => {
    console.log("5");
    return delay();
  });

//3) Написать функцию, которая принимает на вход callback. В колбэке описать асинхронность (задержка 2 секунды), в которой в консоль выводится сообщение - this is callback.
let three = new Promise(() => {
  setTimeout(() => {
    console.log("this is callback");
  }, 2000);
});
three.then(() => {
  console.log(three);
});

// 4) Написать функцию, которая принимает на вход callback. В колбэке описать асинхронность (задержка 4 секунды). Внутри callback-функции вызвать метод resolve() и передать туда
// любое число. Когда промис выполнится, в функции, которая вызывает callback, возвести переданное число в 4 степень.
let four = new Promise((res) => {
  setTimeout(() => {
    res(5);
  }, 4000);
});
four.then((res) => {
  console.log(res ** 4);
});
