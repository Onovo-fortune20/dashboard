
const resetPasswordButton = document.querySelector('.edit-button');
const saveButton = document.querySelector('.save-button');
const passwordInput = document.querySelector('input[type="password"]');
const deleteButton = document.querySelector('.block-button');


// Add event listener to the button
resetPasswordButton.addEventListener('click', function () {
  // Toggle the disabled attribute of the password input field
  passwordInput.disabled = !passwordInput.disabled;
});

saveButton.addEventListener('click', function () {
  // Disable the password input field
  passwordInput.disabled = true;

  // Display a success message
  Swal.fire({
    icon: 'success',
    title: 'Success',
    text: 'User data updated',
    confirmButtonText: 'OK'
  });
});
deleteButton.addEventListener('click', function () {
  // Get the parent row element
  const row = deleteButton.parentNode.parentNode;

  // Remove the row from the table
  row.parentNode.removeChild(row);
});

function red() {
  window.location.href = "index.html";
}

function red() {
  window.location.href ="index.html";
}