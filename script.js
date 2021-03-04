var listElm = document.querySelector('#list');

var maxLoadedItems = 10;
var nextItem = 1;

var loadMore = function() {
  for (var i = 0; i < maxLoadedItems; i++) {
    var item = document.createElement('li');
    item.innerText = `this is my item # ${nextItem++}`;
    listElm.appendChild(item);
  }
}

listElm.addEventListener('scroll', function() {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMore();
  }
});

loadMore();
