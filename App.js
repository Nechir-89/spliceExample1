// syntax for writing and using splice
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

let numbers = [1, 2, 4, 6, 8, 10];
let section = document.querySelector('section.array-section');

window.addEventListener('DOMContentLoaded', () => {
  // removing elements
  // adding elements
  // replacing elements
  // from start, middle, and end of the array
  let removedElements = numbers.splice(2, 0, 3);
  console.log(removedElements)

  displayContent(numbers);
})

function displayContent(data) {
  data.forEach(item => {
    const span = document.createElement('span');
    const content = document.createTextNode(item)
    span.appendChild(content);
    span.className = "array-item";
    section.appendChild(span);
  });
}
