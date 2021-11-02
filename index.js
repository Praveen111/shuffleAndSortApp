let sortButton = document.getElementsByClassName('sort-btn')[0];
let shuffleButton = document.getElementsByClassName('shuffle-btn')[0];
const colorArray = ['#6f98a8', '#2b8ead', '#2f454e', '#2b8ead', '#2f454e', '#bfbfbf', '#bfbfbf', '#6e97a7', '#2f454e'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

sortButton.addEventListener('click', function (event) {
    let elementList = new Array(...document.getElementsByClassName('now'));
    elementList = elementList.sort();
    document.querySelector('.num-section').innerHTML = '';
    for (let i = 0, len = elementList.length; i < len; i++) {
        elementList[i].innerHTML = numbers[i];
        elementList[i].style = '';
        document.querySelector('.num-section').appendChild(elementList[i]);
    }
    styleContent();
});

shuffleButton.addEventListener('click', function (event) {
    let elementList = new Array(...document.getElementsByClassName('now'));
    elementList = elementList.sort(() => Math.random() - 0.5);
    for (let i = 0, len = elementList.length; i < len; i++) {
        let parent = elementList[i].parentNode;
        let detatchedItem = parent.removeChild(elementList[i]);
        parent.appendChild(detatchedItem);
    }
});

function styleContent() {
    let elementList = new Array(...document.getElementsByClassName('now'));
    document.querySelector('.num-section').innerHTML = '';
    for (let i = 0, len = elementList.length; i < len; i++) {
        elementList[i].style.backgroundColor = colorArray[i];
        elementList[i].style.borderLeft = `10px solid ${colorArray[i]}`;
        elementList[i].style.fontSize = '2rem';
        document.querySelector('.num-section').appendChild(elementList[i]);
    }
}

function loadContent() {
    let mainDiv = document.querySelector('.num-section');
    let eArray = [];
    numbers.forEach((number, i) => {
        const ele = `<div class="now">${number}</div>`
        eArray.push(ele)
    });
    mainDiv.innerHTML = eArray.join('\n');
    styleContent()
}