const nameInput = $("#productName");
const	descInput = $("#productDesc");
const	imgHrefInput = $("#imgHref");
const	audioHrefInput = $("#audioHref");
const  imgIdInput = $("#idinput")
var url = window.location.search;
var productId;
var adminId;
// Sets a flag for whether or not we're updating a post to be false initially
var updating = false;



function submitProduct(product) {
	console.log(product);
	console.log("Made it into the submit product function in product.js")
  $.post("/admin/add", product, function() {
    window.location.href = "/admin";
  });
}

function updateProduct(product) {
    $.ajax({
      method: "PUT",
      url: "/admin/update/" + product.id,
      data: product
    })
    .done(function() {
      window.location.href = "/admin";
    });
  }

const handleFormSubmitAdd = (event) => {

	event.preventDefault();
	console.log("Handle form submit called")
	// Wont submit the post if we are missing a name
	if (!nameInput.val().trim()) {
	  return;
	}
	// Constructing a newPost object to hand to the database
	var newProduct = {
	  instName: nameInput
	    .val()
	    .trim(),
	  descr: descInput
	    .val()
	    .trim(),
        // I need to find a way to add the image url in as a string after it is generated
	  img: imgHrefInput
	  	.val()
	  	.trim(),
	  audio: audioHrefInput
	  	.val()
	  	.trim(),
		id: imgIdInput
		.val()
		.trim()
	};
	console.log(newProduct);
	// If we're updating a post run updatePost to update a post
	// Otherwise run submitPost to create a whole new post


	  submitProduct(newProduct);
	
}

const handleFormSubmitEdit = (event) => {

	event.preventDefault();
	console.log("Handle form submit called")
	// Wont submit the post if we are missing a name
	if (!nameInput.val().trim()) {
	  return;
	}
	// Constructing a newPost object to hand to the database
	var newProduct = {
	  instName: nameInput
	    .val()
	    .trim(),
	  descr: descInput
	    .val()
	    .trim(),
        // I need to find a way to add the image url in as a string after it is generated
	  img: imgHrefInput
	  	.val()
	  	.trim(),
	  audio: audioHrefInput
	  	.val()
	  	.trim()
	};
	console.log(newProduct);
	// If we're updating a post run updatePost to update a post
	// Otherwise run submitPost to create a whole new post

	updateProduct(newProduct);

	
}



$("#productForm").on("submit", handleFormSubmitAdd);
$("#productForm").on("edit", handleFormSubmitEdit);