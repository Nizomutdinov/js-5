//1 exercise

let user = {}

for(let i = 1; i <= 10; i++){
    let name = prompt('Введите имя')
    let age = +prompt('Введите возраст')
       console.log('Пользователь ' + i);
       console.log('Ваше имя '+ name);
       console.log('Ваше возраст '+ age);
       user[i] = {
        name,
        age
    }
}

console.log(user);

//2 exercise

let cart = receipt();

console.log(cart);

let d = 9000;

let result = "Вы заказали ";

for (let key in cart) {
  result = result +  key + ' ' + cart[key].info + ", " ;
  d = d + cart[key].price
}


console.log(result + ' | ','Общая стоимость ' + String(d) + ' сумм с доставкой (9000)');
