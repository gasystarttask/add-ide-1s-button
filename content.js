createLink = function() {
    var link = document.createElement('a');
    link.setAttribute('href', `https://github1s.com${window.location.pathname}`);
    link.setAttribute('target', '_blank');
    link.innerHTML = 'IDE';
    link.setAttribute('class', 'btn btn-sm btn-primary');
    return link;
}

var ul = document.getElementsByClassName('pagehead-actions')[0]
var li = document.createElement('li');
li.appendChild(createLink());

if (ul) {
    ul.appendChild(li);
}