let thumbnails = document.getElementsByClassName('lil-image');
thumbnails.innerHTML = 'jfio';
let TN1 = document.getElementById('thumbnail1');
let TN2 = document.getElementById('thumbnail2');
let TN3 = document.getElementById('thumbnail3');
let TN4 = document.getElementById('thumbnail4');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let counter = document.getElementById('counter');
let lightBoxImg = document.getElementById('lightbox-img');
let addToCart = document.getElementById('add-button');
let notification = document.getElementById('badge');
// let notification = document.querySelectorAll('badge::after');
let notificationCount = 0;
let count = 0;



function showImage(imgPath) {
  // let ggg = document.getElementById('lightbox-img');
  let bigImg = document.getElementById('large-image');
  bigImg.src = imgPath;
  lightBoxImg.src = imgPath;
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


function addProduct(target) {
  // this is just a product placeholder
  var productAdded = '<li class="cd-cart__product"><div class="cd-cart__image"><a href="#0"><img src="assets/img/product-preview.png" alt="placeholder"></a></div><div class="cd-cart__details"><h3 class="truncate"><a href="#0">Product Name</a></h3><span class="cd-cart__price">$25.99</span><div class="cd-cart__actions"><a href="#0" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-'+ productId +'">Qty</label><span class="cd-cart__select"><select class="reset" id="cd-product-'+ productId +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
  cartList.insertAdjacentHTML('beforeend', productAdded);
};

  let started;

   function showLightBox() { 
    if (started) return;
    started = setTimeout(function(){
        Lightbox.start(document.getElementById('firstImage'));
        started;
    },500);
   }


  function stopShowLightBox(){
    if (started) {
        clearTimeout(started)
        started = 0;
    }
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

function openModal() {
  // ggg.src = 
  document.getElementById("myModal").style.display = "block";
  
}
addToCart.addEventListener('click', () => {
  notificationCount++;
  // document.getElementById('#badge:after').style.display = "none";
  notification.style.background = "blue";
  let num = notification.getAttribute('data-count');
  num = notificationCount;
  console.log(notification, "num:", num);
  console.log("Updated:",notification.getAttribute('data-count'));
})
