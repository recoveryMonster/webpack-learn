export function getEle () {
  const element = document.createElement('div');
  element.innerHTML = 'hello world';
  document.body.appendChild(element);
}