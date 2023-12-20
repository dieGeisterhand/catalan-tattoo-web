
// Populate array with images
const image_arr =
  [ "https://static.zerochan.net/Touhou.full.467303.jpg"
  , "https://i.pinimg.com/originals/b7/c2/42/b7c24261e7e37c0bdfd58307fb199891.jpg"
  , "https://pixelz.cc/wp-content/uploads/2018/12/touhou-reimu-hakurei-uhd-4k-wallpaper.jpg"
  , "https://images6.fanpop.com/image/photos/40500000/Sakuya-Izayoi-touhou-40555313-1010-1400.jpg"
  , "https://images4.alphacoders.com/230/230284.jpg"
  , "https://static.zerochan.net/Touhou.full.878183.jpg"
  , "https://images6.alphacoders.com/762/762217.jpg"
  , "https://images2.alphacoders.com/871/thumb-1920-871561.jpg"
  , "https://static.zerochan.net/Touhou.full.1241244.jpg"
    ];
const image_count = image_arr.length;

// Set initial image
document.getElementById("gallery-main-image").src = image_arr[0];

// Add thumbnails
var thumbnails_html = "";
for (let i = 0; i < image_count; i++) {
  thumbnails_html += '<img class="gallery-image thumbnail" src="' + image_arr[i]
                   + '" id="thumbnail-' + i + '">';
};
document.getElementById("thumbnails").innerHTML = thumbnails_html;

// Add on-click event handlers
for (let i = 0; i < image_count; i++) {
  document.getElementById("thumbnail-" + i).addEventListener("click", function()
    { document.getElementById("gallery-main-image").src = image_arr[i];
      });
};
