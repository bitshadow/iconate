// (function() {

//   // var logoImg = new Image();
//   // logoImg.src = 'housing.png';

//   // var canvas = document.getElementById('canvas');
//   // var ctx = canvas.getContext('2d');

//   // logoImg.onload = function() {
//   //   ctx.drawImage(logoImg, 0, 0);
//   //   logoImg.style.display = 'none';
//   // };

//   // var imgData = ctx.getImageData(0,0,1,1).data;
//   // console.log('image data:', imgData);


//   var img = new Image();
//   img.src = 'housing.png';
//   var canvas = document.getElementById('canvas');
//   var ctx = canvas.getContext('2d');
//   img.onload = function() {
//     ctx.drawImage(img, 0, 0);
//     img.style.display = 'none';
//   };
//   var color = document.getElementById('color');
//   function pick(event) {
//     var x = event.layerX;
//     var y = event.layerY;
//     var pixel = ctx.getImageData(x, y, 1, 1);
//     var data = pixel.data;
//     var rgba = 'rgba(' + data[0] + ',' + data[1] +
//                ',' + data[2] + ',' + data[3] + ')';
//     color.style.background =  rgba;
//     color.textContent = rgba;
//   }
//   canvas.addEventListener('mousemove', pick);

// })();

(function() {
  var iconWrapper = document.querySelector('.icon-wrapper');
  iconWrapper.addEventListener('click', function(e) {
    this.classList.toggle('icon-asterisk');
    this.classList.toggle('icon-plus');
  });
})();