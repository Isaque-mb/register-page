document.getElementById("username").focus(); // focuses on username 

const button = document.getElementById("register-bttn"); // defines button
button.addEventListener("click", bttnClicked); // listens for button press


function bttnClicked() {
  const username = document.getElementById("username").value; // declares username
  const age = document.getElementById("age").value;
  const password = document.getElementById("password").value;
  const passwordc = document.getElementById("passwordc").value;
  const email = document.getElementById("email").value;
  const emailc = document.getElementById("emailc").value;
  const radio = document.querySelector('input[name="gender"]:checked').value;
    
  // Validation
  
  if (username < 5) {
    
  }
}