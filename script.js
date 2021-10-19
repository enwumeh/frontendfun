let thumbnails = document.getElementsByClassName('lil-image');
thumbnails.innerHTML = 'jfio';
let TN1 = document.getElementById('thumbnail1');
let TN2 = document.getElementById('thumbnail2');
let TN3 = document.getElementById('thumbnail3');
let TN4 = document.getElementById('thumbnail4');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let counter = document.getElementById('counter');
let count = 0;



function showImage(imgPath) {
  let bigImg = document.getElementById('large-image');
  bigImg.src = imgPath;
}

[TN1, TN2, TN3, TN4].forEach((thumbnail) => {
  thumbnail.addEventListener('click', (e) => {
    showImage(e.target.src);

  })
})

plus.addEventListener('click', () => {
  // e.preventDefault();
  count++;
  counter.innerHTML = count;
  // updateCounter();
})

minus.addEventListener('click', () => {
  // console.log(e.target.innerHTML);
  // e.preventDefault();/
  count--;
  counter.innerHTML = count;
  // updateCounter();
})

// TN1.addEventListener('click', (e) => {
//   e.preventDefault();
//   showImage(e.target.src)
//   console.log("OOGABOOGA", e.target.src);
// })


