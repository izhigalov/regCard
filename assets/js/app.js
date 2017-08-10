
// var btn = document.getElementById('btn');
// btn.addEventListener('click', handler);
// function handler(e) {
//   var modalWindow = document.getElementById('modal');
//     if(e.target.tagName == 'li'){
//         modalWindow.style.display = "flex";
//     }
// }


var btn = document.getElementById('btn');
var btnPopup = document.getElementById('popup__btn');
var popup = document.getElementById('popup_content');
var btn_confirm = document.getElementById('popup_content');
var modalWindow = document.getElementById('modal');
var span = document.getElementsByClassName('close')[0];
var mainsidebar = document.getElementById('mainsidebar');
var btn_sidebar = document.querySelectorAll('.sidebar__item_link__img.btn_sidebar');
console.log(btn_sidebar);
var close_sidebar = document.getElementById('close_sidebar');

btn.onclick = function() {
    modalWindow.style.display = "block";
};
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
};
btn_sidebar[1].onclick = function() {
    mainsidebar.style.left = "-255px";
};
close_sidebar.onclick = function(){
    mainsidebar.style.left = "-255px";
};


window.onclick = function (e) {
  if(e.target == popup) {
      popup.style.display = "none";
  }
};



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gdmFyIGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4nKTtcclxuLy8gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XHJcbi8vIGZ1bmN0aW9uIGhhbmRsZXIoZSkge1xyXG4vLyAgIHZhciBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4vLyAgICAgaWYoZS50YXJnZXQudGFnTmFtZSA9PSAnbGknKXtcclxuLy8gICAgICAgICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG52YXIgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bicpO1xyXG52YXIgYnRuUG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBfX2J0bicpO1xyXG52YXIgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBfY29udGVudCcpO1xyXG52YXIgYnRuX2NvbmZpcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBfY29udGVudCcpO1xyXG52YXIgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxudmFyIHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZScpWzBdO1xyXG52YXIgbWFpbnNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbnNpZGViYXInKTtcclxudmFyIGJ0bl9zaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXJfX2l0ZW1fbGlua19faW1nLmJ0bl9zaWRlYmFyJyk7XHJcbmNvbnNvbGUubG9nKGJ0bl9zaWRlYmFyKTtcclxudmFyIGNsb3NlX3NpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2Vfc2lkZWJhcicpO1xyXG5cclxuYnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbn07XHJcbmJ0blBvcHVwLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxufTtcclxuc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcclxuICAgIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufTtcclxuYnRuX2NvbmZpcm0ub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn07XHJcblxyXG5idG5fc2lkZWJhclswXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbWFpbnNpZGViYXIuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG5cclxufTtcclxuYnRuX3NpZGViYXJbMV0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbWFpbnNpZGViYXIuc3R5bGUubGVmdCA9IFwiLTI1NXB4XCI7XHJcbn07XHJcbmNsb3NlX3NpZGViYXIub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgICBtYWluc2lkZWJhci5zdHlsZS5sZWZ0ID0gXCItMjU1cHhcIjtcclxufTtcclxuXHJcblxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgaWYoZS50YXJnZXQgPT0gcG9wdXApIHtcclxuICAgICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG4iXX0=
