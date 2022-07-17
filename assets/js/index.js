import { register } from "./dataset.js";

// Check data
const registerData = JSON.parse(localStorage.getItem("registers"));
if (!registerData) {
  registerData = register;
  localStorage.setItem("register", JSON.stringify(register));
}
const newRegister = {};

// Edit Form
const dataForm = document.getElementById("form_ldp");
// console.log(dataForm);
dataForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(dataForm);
  const maxId = registerData[registerData.length - 1].id;
  // get inputs by their name attribute
  const fullName = formData.get("fullName");
  const dob = formData.get("dob");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const location = formData.get("location");

  newRegister.id = maxId + 1;
  newRegister.name = fullName;
  newRegister.dob = dob;
  newRegister.email = email;
  newRegister.phone = phone;
  newRegister.location = location;
  newRegister.status = "pending";

  registerData.push(newRegister);
  localStorage.setItem("registers", JSON.stringify(registerData));
  alert("Đăng ký tư vấn thành công");
});
