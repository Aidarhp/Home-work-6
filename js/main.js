let base = [
    {id:1, img:"./images/image 1.png", title: 'Syltherine',subtitle:"Stylish cafe chair",price:"Rp 2.500.000",delete:"button_1"},
    {id:2, img:"./images/image 2.png", title: 'Leviosa',subtitle:"Stylish cafe chair",price:"Rp 2.500.000",delete:"button_2"},
    {id:3, img:"./images/image 3.png", title: 'Lolito',subtitle:"Luxury big sofa",price:"Rp 7.000.000",delete:"button_3"},
    {id:4, img:"./images/image 4.png", title: 'Respira',subtitle:"Minimalist fan",price:"Rp 500.000",delete:"button_4"},
    {id:5, img:"./images/image 9.png", title: 'Grifo',subtitle:"Night lamp",price:"Rp 1.500.000",delete:"button_5"},
    {id:6, img:"./images/image 6.png", title: 'Muggo',subtitle:"Small mug",price:"Rp 150.000",delete:"button_6"},
    {id:7, img:"./images/image 7.png", title: 'Pingky',subtitle:"Cute bed set",price:"Rp 7.000.000",delete:"button_7"},
    {id:8, img:"./images/image 8.png", title: 'Potty',subtitle:"Minimalist flower pot",price:"Rp 500.000",delete:"button_8"},
]

let container = document.querySelector(".container")
let row = document.querySelector(".row")
const addCardsInRow = () => {
    base.forEach((item)=> {
        row.innerHTML += `<div class="card" id="${item.id}">
            <img src="${item.img}", alt="${item.subtitle}">
            <h2 class="card_title">${item.title}</h2>
            <p class="card_subtatle">${item.subtitle}</p>
            <p class="price">${item.price}</p>
            <p class="${item.delete} dred">Delete</p>
            </div>`
    })
}
addCardsInRow()

const but_1 = document.querySelector('.button_1');
but_1.addEventListener('click', del => {
  const div = document.getElementById('1');
  if (div) {
    div.remove();
  }
});


const but_2 = document.querySelector('.button_2');
but_2.addEventListener('click', del => {
  const div = document.getElementById('2');
  if (div) {
    div.remove();
  }
});

const but_3 = document.querySelector('.button_3');
but_3.addEventListener('click', del => {
  const div = document.getElementById('3');
  if (div) {
    div.remove();
  }
});

const but_4 = document.querySelector('.button_4');
but_4.addEventListener('click', del => {
  const div = document.getElementById('4');
  if (div) {
    div.remove();
  }
});

const but_5 = document.querySelector('.button_5');
but_5.addEventListener('click', del => {
  const div = document.getElementById('5');
  if (div) {
    div.remove();
  }
});

const but_6 = document.querySelector('.button_6');
but_6.addEventListener('click', del => {
  const div = document.getElementById('6');
  if (div) {
    div.remove();
  }
});

const but_7 = document.querySelector('.button_7');
but_7.addEventListener('click', del => {
  const div = document.getElementById('7');
  if (div) {
    div.remove();
  }
});

const but_8 = document.querySelector('.button_8');
but_8.addEventListener('click', del => {
  const div = document.getElementById('8');
  if (div) {
    div.remove();
  }
});