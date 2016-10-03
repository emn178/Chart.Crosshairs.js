# Chart.Crosshairs.js
Crosshairs plugin for Chart.js.

## Demo
[Demo](http://emn178.github.io/Chart.Crosshairs.js/samples/demo/)

## Download
[Compress](https://raw.github.com/emn178/Chart.Crosshairs.js/master/build/Chart.Crosshairs.min.js)  
[Uncompress](https://raw.github.com/emn178/Chart.Crosshairs.js/master/src/Chart.Crosshairs.js)

## Installation
You can also install Chart.Crosshairs.js by using Bower.
```
bower install Chart.Crosshairs.js
```

## Usage
```
JavaScript
```JavaScript
new Chart(ctx, {
  type: type,
  data: data,
  options: {
    crosshairs: {
      // mode 'vertical', 'horizontal' or 'both', default is 'vertical'
      mode: 'vertical',

      // line color, default is 'gray'
      color: 'gray',

      // line width, default is 1
      lineWidth: 1
    }
  }
});
```

## License
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/Chart.Crosshairs.js  
Author: Chen, Yi-Cyuan (emn178@gmail.com)
