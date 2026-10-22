/*let numbers = [2, 3, 4, 5, 6, 'eight', true];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers.length);
numbers[0] = 1;
console.log(numbers[0]);
let newNumbers = [...numbers];
newNumbers = newNumbers.push(7);
console.log(newNumbers);*/
//objects
/*
let operation = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b
};
console.log(operation.add(1,4))
let fruits  =  {name:'Apple',
                color:['Red', 'Yellow', 'Green'],
                calories: 56
};
let key = 'color'
console.log(fruits[key])
fruits.type = 'type of apple';
fruits.calories = 134;
console.log(fruits)
console.log(fruits.color[2]) */
/*let student = {
    name: 'Amy',
    greet: function(){return `Welcome ${this.name}`}
};
console.log(student.greet(student.name));*/
/*let fruits = [{name: 'Apple', color: 'Red', calories: 95},
              {name: 'Orange', color: 'Orange', calories: 65},
              {name: 'Banana', color: 'Yellow', calories: 195}
            ];
let key = 'color'
//console.log(fruits[1][key]);


for (let fruit of fruits){
    for (let key in fruit) {
        console.log(fruit[key])
    }
}*/
let numbers = [1, 2, 3, 4];
numbers.forEach(item => console.log(item *2));

let doubleNumber = numbers.map(item => (item *2));
console.log(doubleNumber);

let findNumber = numbers.find(item => item > 3);
console.log(findNumber);

let filterNumber = numbers.filter(item => item > 2);
console.log(filterNumber);