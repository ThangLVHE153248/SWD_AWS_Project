// Check data
const profileData = JSON.parse(localStorage.getItem("profiles"));
const id = sessionStorage.getItem("profileId");
if (!id || !profileData) {
  window.location.href = "http://127.0.0.1:5500/profiles.html";
}

// Display profile
let profileForm = document.getElementById("profile-detail-form");
let profileInfo = profileData.filter((e) => {
  if (e.profileId == id) {
    return e;
  }
})[0];
const index = profileData.indexOf(profileInfo);

let template = `
<div class="col-md-3 d-flex align-items-center flex-column">
  <p>
    <input
        type="file"
        accept="image/png"
        name="image"
        id="img-file"
        style="display: none"
    />
  </p>
  <p><img id="output" src="${profileInfo.image}" width="300" /></p>
  <p>
    <label for="img-file" class="btn btn-primary">Chỉnh sửa ảnh</label>
  </p>
</div>
<div class="col-md-8 ml-5" id="profile-detail-form">
  <div>
    <form class="mt-4" id="data-form" method="post">
      <div class="form-group row pe-none">
        <div class="col-md-6">
          <label for="fullName">Full Name</label>
          <input
            type="text"
            class="form-control"
            id="fullName"
            name="fullName"
            value="${profileInfo.name}"
          />
        </div>
        <div class="col-md-6">
          <label for="dob">Date of birth</label>
          <input
            type="string"
            class="form-control"
            id="dob"
            name="dob"
            value="${profileInfo.dob}"
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
            name="email"
            value="${profileInfo.email}"
          />
        </div>
        <div class="col-md-6">
          <label for="phone">Phone</label>
          <input
            type="text"
            class="form-control"
            id="phone"
            name="phone"
            value="${profileInfo.phone}"
          />
        </div>
    </div>
    <div class="form-group row">
      <div class="col-md-12">
        <label for="shool">School</label>
        <input
          type="text"
          class="form-control"
          id="school"
          name="school"
          value="${profileInfo.school}"
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
          name="location"
          value="${profileInfo.location}"
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
          name="id"
          value="${profileInfo.idNumber}"
        />
      </div>
    </div>
    <div class="form-group row">
      <div class="col-md-12">
                      <label>Gender</label><br />
                      <input
                        type="radio"
                        id="male"
                        value="M"
                        name="gender"
                        ${profileInfo.gender == "M" ? "checked" : ""}
                      />
                      <label for="male" >Nam</label><br/>
                      <input
                        type="radio"
                        id="female"
                        value="F"
                        name="gender"
                        ${profileInfo.gender == "F" ? "checked" : ""}
                      />
                      <label for="female" >Nữ</label><br/>
                      <input
                        type="radio"
                        id="other"
                        value="O"
                        name="gender"
                        ${profileInfo.gender == "O" ? "checked" : ""}
                      />
                      <label for="female">Khác</label><br/>
                    </div>
  </div>
  <div class="row mt-5">
                    <div class="col">
                      <button
                        type="submit"
                        class="btn btn-primary btn-block fw-bold"
                        style="color: #fff"
                      >
                        Edit
                      </button>
                    </div>
                    <div class="col">
                      <a
                        type="button"
                        href="http://127.0.0.1:5500/profile-detail.html"
                        class="btn btn-danger btn-block"
                        style="color: #fff"
                        id="profile-cancel"
                      >
                        Cancel
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              </div>`;

profileForm.innerHTML = template;

// Edit Image
document.getElementById("img-file").addEventListener("change", (e) => {
  // Load image
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(e.target.files[0]);
  // Save image
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    profileData[index].image = reader.result;
    localStorage.setItem("profiles", JSON.stringify(profileData));
  });
  reader.readAsDataURL(e.target.files[0]);
});

// Edit Form
const dataForm = document.getElementById("data-form");
dataForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(dataForm);
  // get inputs by their name attribute
  const fullName = formData.get("fullName");
  const dob = formData.get("dob");
  const gender = formData.get("gender");
  const idNumber = formData.get("id");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const school = formData.get("school");
  const location = formData.get("location");

  profileData[index].name = fullName;
  profileData[index].dob = dob;
  profileData[index].gender = gender;
  profileData[index].idNumber = idNumber;
  profileData[index].email = email;
  profileData[index].phone = phone;
  profileData[index].school = school;
  profileData[index].location = location;

  localStorage.setItem("profiles", JSON.stringify(profileData));
  window.location.href = "http://127.0.0.1:5500/profiles.html";
});
