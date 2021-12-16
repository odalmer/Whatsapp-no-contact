var numInput = document.getElementById("numInput");
var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {
  var url = "https://api.whatsapp.com/send?phone=" + numInput.value;
  window.location.replace(url);
  alert("successful operation");
});
