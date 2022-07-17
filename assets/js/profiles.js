import { profile } from "./dataset.js";

let profileData = JSON.parse(localStorage.getItem("profiles"));
if (!profileData) {
  profileData = profile;
  localStorage.setItem("profiles", JSON.stringify(profile));
}
let profileList = document.getElementById("profiles");

profileData.forEach((e) => {
  let template = `<div class="card profile-item px-4 py-3 cursor-pointer" data-id="${e.profileId}">
<div class="d-flex flex-row gap-3 align-items-center pe-none">
  <div class="col-4">
    <img
      src="${e.image}"
      class="w-100 rounded"
      style="object-fit: cover"
    />
  </div>
  <div class="col-8 lh-lg text-dark">
    <div class="fs-5 fw-bold profile-name">${e.name}</div>
    <div>
      <i class="bi bi-calendar"></i>
      <div class="profile-card-des d-inline-block">${e.dob}</div>
    </div>
    <div>
      <i class="bi bi-envelope"></i>
      <div class="profile-card-des d-inline-block">${e.email}</div>
    </div>
    <div>
      <i class="bi bi-telephone"></i>
      <div class="profile-card-des d-inline-block">${e.phone}</div>
    </div>
  </div>
</div>
</div>`;
  profileList.innerHTML += template;
});

let profileItemList = document.querySelectorAll(".profile-item");

profileItemList.forEach((e) => {
  e.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    sessionStorage.setItem("profileId", id);
    window.location.href = "http://127.0.0.1:5500/profile-detail.html";
  });
});
