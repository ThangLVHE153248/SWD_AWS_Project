const profileData = JSON.parse(localStorage.getItem("profiles"));
const id = sessionStorage.getItem("profileId");
if (!id || !profileData) {
  window.location.href = "http://127.0.0.1:5500/profiles.html";
}
let profileForm = document.getElementById("profile-detail-form");
let profileInfo = profileData.filter((e) => {
  if (e.profileId == id) {
    return e;
  }
})[0];

let template = `
<div class="col-md-3 d-flex align-items-center flex-column">
              <img
                src="${profileInfo.image}"
                width="200px"
                style="margin: 0"
                class="image-profile rounded"
              />
            </div>
<div class="col-md-9" id="profile-detail-form">
<div>
<form class="mt-4">
  <div class="form-group row">
    <div class="col-md-6">
      <label for="fullName">Full Name</label>
      <input
        type="text"
        class="form-control"
        id="fullName"
        value="${profileInfo.name}"
        readonly
      />
    </div>
    <div class="col-md-6">
      <label for="dob">Date of birth</label>
      <input
        type="string"
        class="form-control"
        id="dob"
        value="${profileInfo.dob}"
        readonly
      />
    </div>
  </div>
  <div class="form-group row">
    <div class="col-md-6">
      <label for="email">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        value="${profileInfo.email}"
        readonly
      />
    </div>
    <div class="col-md-6">
      <label for="phone">Phone</label>
      <input
        type="text"
        class="form-control"
        id="phone"
        value="${profileInfo.phone}"
        readonly
      />
    </div>
  </div>
  <div class="form-group row">
    <div class="col-md-12">
      <label for="shool">School</label>
      <input
        type="text"
        class="form-control"
        id="shool"
        value="${profileInfo.school}"
        readonly
      />
    </div>
  </div>
  <div class="form-group row">
    <div class="col-md-12">
      <label for="location">Location</label>
      <input
        type="text"
        class="form-control"
        id="location"
        value="${profileInfo.location}"
        readonly
      />
    </div>
  </div>
  <div class="form-group row">
    <div class="col-md-12">
      <label for="id">ID Number</label>
      <input
        type="text"
        class="form-control"
        id="id"
        value="${profileInfo.idNumber}"
        readonly
      />
    </div>
  </div>
  <div class="form-group row">
    <div class="col-md-12">
      <label for="id">Gender</label>
      <input
        type="text"
        class="form-control"
        id="id"
        value="${
          profileInfo.gender == "M"
            ? "Nam"
            : profileInfo.gender == "F"
            ? "Nữ"
            : "Khác"
        }"
        readonly
      />
    </div>
  </div>
  
  </div>
  <div class="row mt-5">
                    <div class="col">
                      <a
                        href="edit-profile.html"
                        type="button"
                        class="btn btn-primary btn-block fw-bold"
                        style="color: #fff"
                      >
                        Edit
                      </a>
                    </div>
                    <div class="col">
                      <div
                        type="button"
                        class="btn btn-danger btn-block"
                        style="color: #fff"
                        id="profile-delete"
                      >
                        Delete
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              </div>`;

profileForm.innerHTML = template;

// Delete profile
const deleteButton = document.getElementById("profile-delete");
deleteButton.addEventListener("click", () => {
  var newProfiles = profileData.filter((p) => {
    return p.profileId != id;
  });
  localStorage.setItem("profiles", JSON.stringify(newProfiles));
  window.location.href = "http://127.0.0.1:5500/profiles.html";
});
