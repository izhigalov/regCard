
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
var btn_sidebar = document.getElementById('btn_sidebar');
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

btn_sidebar.onclick = function() {
    mainsidebar.style.left = "0";
};
close_sidebar.onclick = function(){
    mainsidebar.style.left = "-255px";
};


window.onclick = function (e) {
  if(e.target == popup) {
      popup.style.display = "none";
  }
};


var pxEm = require('px-em');

pxEm(16, 24, true)
    .then(function(em) {
        console.log(em); // 0.667em
    })
    .catch(function(err) {
        console.log(err.message);
    });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gdmFyIGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4nKTtcclxuLy8gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XHJcbi8vIGZ1bmN0aW9uIGhhbmRsZXIoZSkge1xyXG4vLyAgIHZhciBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4vLyAgICAgaWYoZS50YXJnZXQudGFnTmFtZSA9PSAnbGknKXtcclxuLy8gICAgICAgICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG52YXIgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bicpO1xyXG52YXIgYnRuUG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBfX2J0bicpO1xyXG52YXIgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBfY29udGVudCcpO1xyXG52YXIgYnRuX2NvbmZpcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBfY29udGVudCcpO1xyXG52YXIgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxudmFyIHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZScpWzBdO1xyXG52YXIgbWFpbnNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbnNpZGViYXInKTtcclxudmFyIGJ0bl9zaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9zaWRlYmFyJyk7XHJcbnZhciBjbG9zZV9zaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlX3NpZGViYXInKTtcclxuXHJcbmJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59O1xyXG5idG5Qb3B1cC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbn07XHJcbnNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn07XHJcbmJ0bl9jb25maXJtLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xyXG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59O1xyXG5cclxuYnRuX3NpZGViYXIub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbWFpbnNpZGViYXIuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG59O1xyXG5jbG9zZV9zaWRlYmFyLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xyXG4gICAgbWFpbnNpZGViYXIuc3R5bGUubGVmdCA9IFwiLTI1NXB4XCI7XHJcbn07XHJcblxyXG5cclxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gIGlmKGUudGFyZ2V0ID09IHBvcHVwKSB7XHJcbiAgICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbn07XHJcblxyXG5cclxudmFyIHB4RW0gPSByZXF1aXJlKCdweC1lbScpO1xyXG5cclxucHhFbSgxNiwgMjQsIHRydWUpXHJcbiAgICAudGhlbihmdW5jdGlvbihlbSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtKTsgLy8gMC42NjdlbVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICB9KTsiXX0=
