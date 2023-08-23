function updateItemList() {
  const itemList = document.getElementById('contenedor');
  itemList.innerHTML = '';

  const items = JSON.parse(localStorage.getItem('items')) || [];
  items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = item;
    itemList.appendChild(li);
  });
}

function addItem() {
  const newItemInput = document.getElementById('item');
  const newItemValue = newItemInput.value.trim();

  if (newItemValue !== '') {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(newItemValue);
    localStorage.setItem('items', JSON.stringify(items));

    updateItemList();
    newItemInput.value = '';
  }
}

function clearList() {
  localStorage.removeItem('items');
  updateItemList();
}

document.getElementById('agregar').addEventListener('click', addItem);
document.getElementById('limpiar').addEventListener('click', clearList);

updateItemList();
