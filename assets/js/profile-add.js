// Check data
const profileData = JSON.parse(localStorage.getItem("profiles"));
const id = sessionStorage.getItem("profileId");
if (!id || !profileData) {
  window.location.href = "http://127.0.0.1:5500/profiles.html";
}
const newProfile = {};
// Edit Image
document.getElementById("img-file").addEventListener("change", (e) => {
  // Load image
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(e.target.files[0]);
  // Save image
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    newProfile.image = reader.result;
  });
  reader.readAsDataURL(e.target.files[0]);
});

// Edit Form
const dataForm = document.getElementById("data-form");
dataForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(dataForm);
  const maxId = profileData[profileData.length - 1].profileId;
  // get inputs by their name attribute
  const fullName = formData.get("fullName");
  const dob = formData.get("dob");
  const gender = formData.get("gender");
  const idNumber = formData.get("id");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const school = formData.get("school");
  const location = formData.get("location");

  newProfile.profileId = maxId + 1;
  newProfile.name = fullName;
  newProfile.dob = dob;
  newProfile.gender = gender;
  newProfile.idNumber = idNumber;
  newProfile.email = email;
  newProfile.phone = phone;
  newProfile.school = school;
  newProfile.location = location;
  if (!newProfile.image) {
    newProfile.image =
      "https://www.shareicon.net/data/512x512/2016/05/26/771204_man_512x512.png";
  }

  profileData.push(newProfile);
  localStorage.setItem("profiles", JSON.stringify(profileData));
  window.location.href = "http://127.0.0.1:5500/profiles.html";
});
