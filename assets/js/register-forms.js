import { register } from "./dataset.js";

let registerData = JSON.parse(localStorage.getItem("registers"));
if (!registerData) {
  registerData = register;
  localStorage.setItem("registers", JSON.stringify(register));
}
let registerList = document.getElementById("registers");

registerData.forEach((e) => {
  let template = `
        <div
            class="card profile-item px-4 py-3"
            data-id="${e.id}"
        >
            <div class="d-flex flex-row gap-3 align-items-center pe-none">
              <div class="col-12 lh-lg text-dark">
                <div class="fs-3 fw-bold profile-name">${e.name}</div>
                <div>
                  <i class="bi bi-envelope"></i>
                  ${e.email}
                </div>
                <div>
                  <i class="bi bi-telephone"></i>
                  ${e.phone}
                </div>
                <div>
                <i class="bi bi-geo-alt-fill"></i>
                  ${e.location}
                </div>
                <div class="text-capitalize">
                <i class="bi bi-bookmark-fill ${e.status}"></i>
                  ${e.status}
                </div>
              </div>
            </div>
          </div>`;
  registerList.innerHTML += template;
});

let registerItemList = document.querySelectorAll(".profile-item");

registerItemList.forEach((e) => {
  e.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    sessionStorage.setItem("registerId", id);
    window.location.href = "http://127.0.0.1:5500/register-form-detail.html";
  });
});
