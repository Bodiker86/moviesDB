 "Use strict";

const  options = {
    name: 'test',
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors;

// console.log(Object.keys(options));

// console.log (options.name);

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options [key]) {
//             console.log(`Свойства ${key} имеит значения ${options [key] [i]}`);
//          }
//     }  else  {
//         console.log(`Свойства ${key} имеит значения ${options [key]}`);
//         counter++;
//     }
    
// }
//   console.log (counter);
  