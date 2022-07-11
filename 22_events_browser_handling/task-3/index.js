export function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}
getItemsList();

export function getItemsArray() {
  const NodeList = document.querySelectorAll('.tool');
  const elementsArray = Array.from(NodeList);
  console.dir(elementsArray);
  return elementsArray;
}
getItemsArray();
