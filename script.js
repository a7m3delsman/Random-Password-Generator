function generatePassword() {
  let length = parseInt(document.getElementById("password-length").value);
  let password = "";
  let passwordResult = document.getElementById('password-result');

  let characters = '';
  let passwordOutput = '';

  if (isNaN(length) || length < 4 || length > 30) {
    alert("Please enter a valid password length between 4 and 30.");
    passwordResult.textContent = ''; 
    hideButton("copy-password");
    hidepre("password-result");
    return;
  }
  nohideButton("copy-password") ;
  nohidepre("password-result");
  if (document.getElementById('numbers').checked) {
    characters += '0123456789';
  }
  if (document.getElementById('letters').checked) {
    characters += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (document.getElementById('symbols').checked) {
    characters += '!@#$%^&*()_+~|}{[]\\:;?><,./-=';
  }

  for (let i = 0; i < length; i++) {
    passwordOutput += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  passwordResult.textContent = passwordOutput;
}

function addClickEvent() {
  let generatePassword = document.getElementById('generate-password');
  generatePassword.addEventListener('click', generatePassword);
}

function removeClickEvent() {
  let generatePassword = document.getElementById('generate-password');
  generatePassword.removeEventListener('click', generatePassword);
}

addClickEvent();

function copyPassword() {
  let passwordOutput = document.getElementById("password-result");
  
  // تحديد النص في عنصر pre ونسخه إلى الحافظة
  let range = document.createRange();
  range.selectNode(passwordOutput);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  
  // تغيير نص الزرار للإشارة إلى أن النص تم النسخ
  let copyButton = document.getElementById("copy-password");
  copyButton.textContent = "Copied!";
  setTimeout(function() {
    copyButton.textContent = "Copy Password";
  }, 2000);
}
function updateTime() {
  var d = new Date();
  var n = d.toLocaleString();
  document.getElementById("datetime").innerHTML = n;
}
setInterval(updateTime, 1000);
function nohidepre(preId) {
  var pre = document.getElementById(preId);
  if (pre) {
    pre.style.display = "block";
  }
}
function nohideButton(buttonId) {
  var button = document.getElementById(buttonId);
  if (button) {
    button.style.display = "block";
  }
}

function hidepre(preId) {
  var pre = document.getElementById(preId);
  if (pre) {
    pre.style.display = "none";
  }
}
function hideButton(buttonId) {
  var button = document.getElementById(buttonId);
  if (button) {
    button.style.display = "none";
  }
}
var audio = new Audio('button-click.mp3');
function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
  }
  
