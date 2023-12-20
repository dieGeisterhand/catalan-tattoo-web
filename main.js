
// Populate array with images
const image_arr =
  [ "1.jpeg"
  , "2.jpeg"
  , "3.jpeg"
  , "4.jpeg"
  , "5.jpeg"
  , "6.jpeg"
  , "7.jpeg"
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
