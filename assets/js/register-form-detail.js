const registerData = JSON.parse(localStorage.getItem("registers"));
const id = sessionStorage.getItem("registerId");
if (!id || !registerData) {
  window.location.href = "http://127.0.0.1:5500/register-forms.html";
}

let registerForm = document.getElementById("register-detail-form");
let registerInfo = registerData.filter((e) => {
  if (e.id == id) {
    return e;
  }
})[0];
const index = registerData.indexOf(registerInfo);
let statuses = ["accept", "pending", "decline"];
let statusList = statuses.filter((s) => {
  if (s != registerInfo.status) {
    return s;
  }
});

// Display Form
let template = `
            <div>
                <form class="mt-4">
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="fullName">Full Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="fullName"
                        value="${registerInfo.name}"
                        readonly
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="dob">Date of birth</label>
                      <input
                        type="string"
                        class="form-control"
                        id="dob"
                        value="${registerInfo.dob}"
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
                        value="${registerInfo.email}"
                        readonly
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="phone">Phone</label>
                      <input
                        type="text"
                        class="form-control"
                        id="phone"
                        value="${registerInfo.phone}"
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
                        value="${registerInfo.location}"
                        readonly
                      />
                    </div>
                  </div>
                </form>
              </div>
`;

registerForm.innerHTML += template;

// Display Action Button
let registerAction = document.getElementById("register-action");
statusList.forEach((status) => {
  let templateButton = `
                <div class="col">
                  <div
                    type="button"
                    class="btn btn-primary btn-block fw-bold text-capitalize border-0"
                    id="register-${status}"
                  >
                    ${status}
                  </div>
                </div>
    `;
  registerAction.innerHTML += templateButton;
});

// Accept profile
const acceptButton = document.getElementById("register-accept");
if (acceptButton) {
  acceptButton.addEventListener("click", () => {
    registerData[index].status = "accept";
    localStorage.setItem("registers", JSON.stringify(registerData));
    window.location.href = "http://127.0.0.1:5500/register-forms.html";
  });
}
// Accept profile
const pendingButton = document.getElementById("register-pending");
if (pendingButton) {
  pendingButton.addEventListener("click", () => {
    console.log("pending");
    registerData[index].status = "pending";
    localStorage.setItem("registers", JSON.stringify(registerData));
    window.location.href = "http://127.0.0.1:5500/register-forms.html";
  });
}
// Accept profile
const declineButton = document.getElementById("register-decline");
if (declineButton) {
  declineButton.addEventListener("click", () => {
    console.log("decline");
    registerData[index].status = "decline";
    localStorage.setItem("registers", JSON.stringify(registerData));
    window.location.href = "http://127.0.0.1:5500/register-forms.html";
  });
}
