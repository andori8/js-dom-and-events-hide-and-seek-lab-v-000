const getFirstSelector = function(selector) {
  return document.querySelector(selector)
}

const nestedTarget = function() {
  return document.querySelector('#nested .target')
}

const deepestChild = function() {
  let grandNode = document.getElementById('grand-node')
  let first = grandNode.children[0]

  while (first) {
    grandNode = first
    first = grandNode.children[0]
  }

  return grandNode
}

function increaseRankBy(n) {
  let list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML, 10) + n).toString();
  }
}

}
