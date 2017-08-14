
// var btn = document.getElementById('btn');
// btn.addEventListener('click', handler);
// function handler(e) {
//   var modalWindow = document.getElementById('modal');
//     if(e.target.tagName == 'li'){
//         modalWindow.style.display = "flex";
//     }
// }



var btnPopup = document.getElementById('popup__btn');
var popup = document.getElementById('popup_content');
var btn_confirm = document.getElementById('popup_content');
var modalWindow = document.getElementById('modal');
var span = document.getElementsByClassName('close')[0];
var mainsidebar = document.getElementById('mainsidebar');
var sidebar = document.querySelector('.sidebar');
console.log(sidebar);
var btn_sidebar = document.querySelectorAll('.sidebar__item_link__img.btn_sidebar');
console.log(btn_sidebar);
var close_sidebar = document.getElementById('close_sidebar');
var accauntInfo = document.getElementById('accauntInfo');
var logo = document.getElementById('logo');
var closeAccaunt = document.getElementById('closeAccaunt');
var btn = document.getElementsByClassName('btn');

for (var index = 0; index < btn.length; index++) {
    var button = btn[index];
    button.onclick = function() {
        var dataMail = this.firstElementChild.innerHTML;
        var modalDataMail = modalWindow.querySelector('.accaunts__mail');
        modalWindow.style.display = "block";
        modalDataMail.innerHTML = dataMail;
    }
}

btnPopup.onclick = function() {
    popup.style.display = "block"
};
span.onclick = function(){
    modalWindow.style.display = "none";
};
btn_confirm.onclick = function(){
    popup.style.display = "none";
};

btn_sidebar[0].onclick = function() {
        mainsidebar.style.left = "0";
        sidebar.style.left = "-60px";

};
btn_sidebar[1].onclick = function() {
    mainsidebar.style.left = "-255px";
    sidebar.style.left = "0";
};
close_sidebar.onclick = function(){
    mainsidebar.style.left = "-255px";
    sidebar.style.left = "0";
};

logo.onclick = function() {
    accauntInfo.style.display = "flex"
};
closeAccaunt.onclick = function(){
    accauntInfo.style.display = "none";
};


window.onclick = function (e) {
  if(e.target == popup) {
      popup.style.display = "none";
  }
};



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIHZhciBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuJyk7XHJcbi8vIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpO1xyXG4vLyBmdW5jdGlvbiBoYW5kbGVyKGUpIHtcclxuLy8gICB2YXIgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuLy8gICAgIGlmKGUudGFyZ2V0LnRhZ05hbWUgPT0gJ2xpJyl7XHJcbi8vICAgICAgICAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbnZhciBidG5Qb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cF9fYnRuJyk7XHJcbnZhciBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cF9jb250ZW50Jyk7XHJcbnZhciBidG5fY29uZmlybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cF9jb250ZW50Jyk7XHJcbnZhciBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG52YXIgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nsb3NlJylbMF07XHJcbnZhciBtYWluc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluc2lkZWJhcicpO1xyXG52YXIgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcbmNvbnNvbGUubG9nKHNpZGViYXIpO1xyXG52YXIgYnRuX3NpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhcl9faXRlbV9saW5rX19pbWcuYnRuX3NpZGViYXInKTtcclxuY29uc29sZS5sb2coYnRuX3NpZGViYXIpO1xyXG52YXIgY2xvc2Vfc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZV9zaWRlYmFyJyk7XHJcbnZhciBhY2NhdW50SW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NhdW50SW5mbycpO1xyXG52YXIgbG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvJyk7XHJcbnZhciBjbG9zZUFjY2F1bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VBY2NhdW50Jyk7XHJcbnZhciBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidG4nKTtcclxuXHJcbmZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBidG4ubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICB2YXIgYnV0dG9uID0gYnRuW2luZGV4XTtcclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGRhdGFNYWlsID0gdGhpcy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUw7XHJcbiAgICAgICAgdmFyIG1vZGFsRGF0YU1haWwgPSBtb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKCcuYWNjYXVudHNfX21haWwnKTtcclxuICAgICAgICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIG1vZGFsRGF0YU1haWwuaW5uZXJIVE1MID0gZGF0YU1haWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmJ0blBvcHVwLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxufTtcclxuc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcclxuICAgIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufTtcclxuYnRuX2NvbmZpcm0ub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn07XHJcblxyXG5idG5fc2lkZWJhclswXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbWFpbnNpZGViYXIuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG4gICAgICAgIHNpZGViYXIuc3R5bGUubGVmdCA9IFwiLTYwcHhcIjtcclxuXHJcbn07XHJcbmJ0bl9zaWRlYmFyWzFdLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIG1haW5zaWRlYmFyLnN0eWxlLmxlZnQgPSBcIi0yNTVweFwiO1xyXG4gICAgc2lkZWJhci5zdHlsZS5sZWZ0ID0gXCIwXCI7XHJcbn07XHJcbmNsb3NlX3NpZGViYXIub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgICBtYWluc2lkZWJhci5zdHlsZS5sZWZ0ID0gXCItMjU1cHhcIjtcclxuICAgIHNpZGViYXIuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG59O1xyXG5cclxubG9nby5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBhY2NhdW50SW5mby5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcclxufTtcclxuY2xvc2VBY2NhdW50Lm9uY2xpY2sgPSBmdW5jdGlvbigpe1xyXG4gICAgYWNjYXVudEluZm8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59O1xyXG5cclxuXHJcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICBpZihlLnRhcmdldCA9PSBwb3B1cCkge1xyXG4gICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbiJdfQ==
