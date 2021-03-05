var maxLoadedItems = 5;
var nextItem = 1;
var listElm = document.querySelector('#imageList');

var loadMoreImages = function() {
  for (var i = 0; i < maxLoadedItems; i++) {
    var item = document.createElement('img');
    item.alt = `item # ${nextItem++}`;
    item.className = 'loading';
    item.src = 'assets/loading-image.png'
    listElm.appendChild(item);
    setImageLoaded(item, i);
  }
}

listElm.addEventListener('scroll', function() {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMoreImages();
  }
});

loadMoreImages();

function setImageLoaded(item, index) {
  setTimeout(() => {
    item.src = 'assets/paris.jpg';
    item.className = '';
  }, 500 * index)
}
