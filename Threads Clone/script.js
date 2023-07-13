// Follower Buttons
let flw1 = document.getElementsByClassName('follow')[0];
let flw2 = document.getElementsByClassName('follow')[1];
let flw3 = document.getElementsByClassName('follow')[2];

function followBtnChange(e) {
  e.classList.toggle('clicked');
}

// Pop-Ups
let body = document.getElementsByTagName('body')[0];
let main = document.getElementsByTagName('main')[0];
let postW = document.getElementsByClassName('pop-up')[0];
let caption = document.getElementById('caption');
let postBtn = document.getElementsByClassName('post')[0];
function post(e) {
  e.classList.toggle('pop-show');
  main.classList.toggle('main-block');
}

caption.addEventListener('keyup', function () {
  if (caption.value) {
    postBtn.classList.add('post-valued');
  } else {
    postBtn.classList.remove('post-valued');
  }
});


function linky(text) {
  var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
  return text.replace(urlRegex, function (url, b, c) {
    var url2 = (c == 'www.') ? 'http://' + url : url;
    return '<a href="' + url2 + '" target="_blank">' + url + '</a>';
  })
}

let pstForm = document.getElementById('post-form');
function posted() {
  let text = linky(caption.value);
  let username = document.getElementById('post-user').value;

  document.getElementsByClassName(".usernameD").innerHTML = username;

  pstForm.reset();
  postBtn.classList.remove('post-valued');


  let postContainer = '\
<div class="post-container">\
<div class="post-header">\
    <img class="post-profile-img" src="../img/profile-img/elon.jpg" alt="Elon Musk">\
    <div class="post-info">\
        <div class="post-title flex"><span class="usernameD">' + username + '</span> added a post on <div\
                class="time">' + time + '</div>\
        </div>\
        <div class="profile-name">@elonmusk</div>\
    </div>\
</div>\
<div class="post-body">\
    <p class="caption-text">' + text + '</p>\
</div>\
<div class="post-bottom flex">\
<div class="post-icons">\
<svg role="img" xmlns="http://www.w3.org/2000/svg" class="post-icon" fill="none" viewBox="0 0 24 24" aria-label="Like icon"stroke="currentColor" stroke-width="2">\
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />\
        <title>Like</title>\
</svg>\
</div>\
<div class="post-icons">\
<svg xmlns="http://www.w3.org/2000/svg" class="post-icon" width="16" height="16" fill="none" class="bi bi-chat" viewBox="0 0 16 16">\
    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>\
      <title>Comment</title>\
</svg>\
</div>\
<div class="post-icons">\
<svg xmlns="http://www.w3.org/2000/svg" width="16" class="post-icon" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">\
    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>\
    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>\
  </svg>\
      <title>Repost</title>  \
</svg>\
</div>\
<div class="post-icons">\
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="post-icon" fill="currentColor" class="bi bi-send" viewBox="0 0 18 18">\
    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>\
      <title>Share</title>  \
</svg>\
</div>\
</div>\
</div>\
'
  document.getElementsByClassName('mid-col')[0].innerHTML += postContainer;
}

let current = new Date();
let options = { hour: 'numeric', minute: 'numeric', hour12: true };
let time = current.toLocaleTimeString(undefined, options);
console.log(time);
document.getElementsByClassName('time')[0].innerHTML = time;