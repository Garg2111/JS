# Projects related to Async JS

## Projects Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-zyujrul3?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# Solution code

## Project 1


```javascript
// generate a random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalID;
const startChangingColor = function () {
  if (!intervalID) {
    intervalID = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null;
};

document.getElementById('start').addEventListener('click', startChangingColor);

document.getElementById('stop').addEventListener('click', stopChangingColor);
```

## Project 2
```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `<div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table> 
</div>`;
});
```



