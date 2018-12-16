document.addEventListener('DOMContentLoaded', function(){
	var plan = document.getElementById('userId1');
	plan.style.width = '80%';
	plan.style.margin = 'auto';
	plan.style.outline = 'solid black 1.5px';
	plan.style.textAlign = 'center';
	
	var card = document.querySelector('.card');
	card.style.width = '20%';
	card.style.backgroundColor = 'pink';	
	card.style.border = 'dashed 1px';
	card.style.margin = '3px';
	card.style.display = 'block';
}); //The above eventListener code is to hold all User Id 1 TODO cards.

var userId1Card = document.getElementById('todo');
var plan = document.getElementById('userId1');
plan = document.addEventListener('DOMContentLoaded', function(){
	var askURL = 'https://jsonplaceholder.typicode.com/todos';
	var ask =  new XMLHttpRequest();
	ask.open('GET', askURL);
	ask.onload = function(){
	//console.log(ask.responseText);
	var todoCard = JSON.parse(ask.responseText);
	//console.log(todoCard[0]);
	userId1(todoCard);
}
ask.send();
});

function userId1(card){
	var creatCard = '';
	
	for (i = 0; i < card.length; i++){
		var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');
	
	myH2.textContent = card[i].userId;
    myPara1.textContent = 'Id: ' + card[i].id;
    myPara2.textContent = 'Title: ' + card[i].title;
    myPara3.textContent = 'Completed:' + card[i].completed;
	
	var cardList = card[i].userId;
    for (var j = 0; j < cardList.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = cardList[j];
      myList.appendChild(listItem);
    }
	
	 myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
	myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);
	
	todo.appendChild(myArticle);
    }
	
	userId1Card.insertAdjacentHTML('beforeend', creatCard);
}