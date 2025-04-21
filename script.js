function changeText() {
    const desc = document.getElementById('description');
    desc.textContent = 'Global warming';
  }
  
  function toggleStyle() {
    const title = document.getElementById('main-title');
    title.classList.toggle('highlight');
  }
  
  function addItem() {
    const ul = document.getElementById('item-list');
    const li = document.createElement('li');
    li.textContent = `Item ${ul.children.length + 1}`;
    ul.appendChild(li);
  }
  
  function removeItem() {
    const ul = document.getElementById('item-list');
    if (ul.lastElementChild) {
      ul.removeChild(ul.lastElementChild);
    }
  }
  