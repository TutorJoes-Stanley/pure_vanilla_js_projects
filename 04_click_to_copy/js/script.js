var text=document.querySelector('.code').innerText;

var button=document.createElement("button");
button.innerHTML="Copy to Clipboard";

button.addEventListener("click",function(){
  var textarea=document.createElement("textarea");
  textarea.value=text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("copied to clipboard!");
});

document.querySelector('.container').appendChild(button);