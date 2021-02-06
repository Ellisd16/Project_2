var nameInput = $("#tripName"),
	destinationInput = $("#autocomplete"),
	methodOfTransportInput = $("#methodOfTransport"),
	arrivalDateInput = $("#datepicker");

var url = window.location.search;
var productId;
var adminId;
// Sets a flag for whether or not we're updating a post to be false initially
var updating = false;



function submitProduct(product) {
  $.post("/product/add", product, function() {
    window.location.href = "/inventory";
  });
}

function updateProduct(product) {
    $.ajax({
      method: "PUT",
      url: "/product/change",
      data: trip
    })
    .done(function() {
      window.location.href = "/trips";
    });
  }

function handleFormSubmit(event) {
	event.preventDefault();
	// Wont submit the post if we are missing a name
	if (!nameInput.val().trim()) {
	  return;
	}
	// Constructing a newPost object to hand to the database
	var newProduct = {
	  name: nameInput
	    .val()
	    .trim(),
	  description: descriptionInput
	    .val()
	    .trim(),
        // I need to find a way to add the image url in as a string after it is generated
	  img: imageURLInput
	  	.val()
	  	.trim(),
	  audio: audioInput
	  	.val()
	  	.trim()
	};

	// If we're updating a post run updatePost to update a post
	// Otherwise run submitPost to create a whole new post
	if (updating) {
	  newProduct.id = productId;
	  updateTrip(newProduct);
	}
	else {
	  submitTrip(newTrip);
	}
}

$("#productForm").on("submit", handleFormSubmit);