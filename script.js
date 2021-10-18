let thumbnails = document.getElementsByClassName('lil-image');
thumbnails.innerHTML = 'jfio';
let TN1 = document.getElementById('thumbnail1');
let TN2 = document.getElementById('thumbnail2');
let TN3 = document.getElementById('thumbnail3');
let TN4 = document.getElementById('thumbnail4');

function showImage(imgPath) {
  let bigImg = document.getElementById('large-image');
  bigImg.src = imgPath;
}
[TN1, TN2, TN3, TN4].forEach((thumbnail) => {
  thumbnail.addEventListener('click', (e) => {
    showImage(e.target.src);

  })
})
// TN1.addEventListener('click', (e) => {
//   e.preventDefault();
//   showImage(e.target.src)
//   console.log("OOGABOOGA", e.target.src);
// })


