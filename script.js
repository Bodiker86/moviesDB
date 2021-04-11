"Use strict";

const options = {
    name: 'test',
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

// console.log (options.name);
// console.log(options);

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options [key]) {
            console.log(`Свойства ${key} имеит значения ${options [key] [i]}`);
         }
    }  else  {
        console.log(`Свойства ${key} имеит значения ${options [key]}`);
    }
    
}
  
  