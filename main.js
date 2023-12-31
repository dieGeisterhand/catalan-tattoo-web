
// Populate array with images
const image_arr =
  [ "assets/1.webp"
  , "assets/2.webp"
  , "assets/3.webp"
  , "assets/4.webp"
  , "assets/5.webp"
  , "assets/6.webp"
  , "assets/7.webp"
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
