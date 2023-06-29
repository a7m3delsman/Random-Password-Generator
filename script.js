function generatePassword() {
  let length = parseInt(document.getElementById("password-length").value);
  let password = "";
  let passwordResult = document.getElementById('password-result');

  let characters = '';
  let passwordOutput = '';

  if (isNaN(length) || length < 1 || length > 30) {
    alert("Please enter a valid password length between 1 and 30.");
    passwordResult.textContent = ''; // إعادة تعيين القيمة إلى فارغة
    return;
  }

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
function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
