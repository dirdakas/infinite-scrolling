var listElm = document.querySelector('#imageContainer');

var maxLoadedItems = 10;
var nextItem = 1;

var loadMore = function() {
  for (var i = 0; i < maxLoadedItems; i++) {
    var item = document.createElement('img');
    item.src = 'assets/paris.jpg'
    item.alt = `this is my item # ${nextItem++}`;
    listElm.appendChild(item);
  }
}

listElm.addEventListener('scroll', function() {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMore();
  }
});

loadMore();
