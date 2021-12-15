var numInput = document.getElementById("numInput");
var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {
  window.location = "https://api.whatsapp.com/send?phone=" + numInput.value;

  // alert("operation successfully");
});
