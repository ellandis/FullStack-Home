var button = document.querySelector('#btn1');
var title = document.querySelector('#title');

button.addEventListener('click', function() {
    console.log("you clicked it")
    title.style.backgroundColor = 'pink';
});

var listParent = document.querySelector('ul');
listParent.addEventListener('click', function() {
    console.log('Ul clicked');
    listParent.style.backgroundColor = 'blue';
});

var listItems = document.querySelectorAll('.smlist');
console.log('listItems', listItems);

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function() {
        this.style.color = 'white';
    })
}

var toggleIt = document.querySelector('#freelunch');

function toggleBackground() {
    toggleIt.classList.toggle('toggleBackground');
}

toggleIt.addEventListener('click', toggleBackground);

var mouseOver = document.querySelector('#title');

mouseOver.addEventListener("mouseover", function(event){
    event.target.style.color = "orange"

    setTimeout(function(){
        event.target.style.color = "";
    },500);
});

var savingTipper = document.querySelectorAll('.listitems');

for (let i = 0; i < savingTipper.length; i++) {
    savingTipper[i].addEventListener('mouseover', function () {
        this.style.backgroundColor = 'pink';
        this.style.color = 'white';
    })

    savingTipper[i].addEventListener('mouseout', function () {
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
    })

    savingTipper[i].addEventListener('click', function (){
        this.classList.add('okay');
    })
    
}