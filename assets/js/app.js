
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
        var dataMail = this.innerHTML;
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


var trigger = document.querySelectorAll('.trigger');
for (var i = 0; i < trigger.length; i++) {
    var triggerItem = trigger[i];
    triggerItem.onclick = function() {
        this.style.display = "none";
        this.nextElementSibling.classList.toggle('trigger-active');
    };


}
// Array.from(panelItem).forEach(function(item, i, panelItem) {
//     item.addEventListener('click', function(e) {
//         if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
//             active[0].classList.remove('trigger-active'); // убрать класс panel-active
//         // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
//         this.classList.toggle('trigger-active');
//     });
// });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyB2YXIgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bicpO1xyXG4vLyBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKTtcclxuLy8gZnVuY3Rpb24gaGFuZGxlcihlKSB7XHJcbi8vICAgdmFyIG1vZGFsV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XHJcbi8vICAgICBpZihlLnRhcmdldC50YWdOYW1lID09ICdsaScpe1xyXG4vLyAgICAgICAgIG1vZGFsV2luZG93LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcblxyXG52YXIgYnRuUG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBfX2J0bicpO1xyXG52YXIgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBfY29udGVudCcpO1xyXG52YXIgYnRuX2NvbmZpcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBfY29udGVudCcpO1xyXG52YXIgbW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxudmFyIHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZScpWzBdO1xyXG52YXIgbWFpbnNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbnNpZGViYXInKTtcclxudmFyIHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG5jb25zb2xlLmxvZyhzaWRlYmFyKTtcclxudmFyIGJ0bl9zaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXJfX2l0ZW1fbGlua19faW1nLmJ0bl9zaWRlYmFyJyk7XHJcbmNvbnNvbGUubG9nKGJ0bl9zaWRlYmFyKTtcclxudmFyIGNsb3NlX3NpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2Vfc2lkZWJhcicpO1xyXG52YXIgYWNjYXVudEluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjYXVudEluZm8nKTtcclxudmFyIGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpO1xyXG52YXIgY2xvc2VBY2NhdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlQWNjYXVudCcpO1xyXG52YXIgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnRuJyk7XHJcblxyXG5mb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYnRuLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgdmFyIGJ1dHRvbiA9IGJ0bltpbmRleF07XHJcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkYXRhTWFpbCA9IHRoaXMuaW5uZXJIVE1MO1xyXG4gICAgICAgIHZhciBtb2RhbERhdGFNYWlsID0gbW9kYWxXaW5kb3cucXVlcnlTZWxlY3RvcignLmFjY2F1bnRzX19tYWlsJyk7XHJcbiAgICAgICAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBtb2RhbERhdGFNYWlsLmlubmVySFRNTCA9IGRhdGFNYWlsO1xyXG4gICAgfVxyXG59XHJcblxyXG5idG5Qb3B1cC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbn07XHJcbnNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgICBtb2RhbFdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn07XHJcbmJ0bl9jb25maXJtLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xyXG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59O1xyXG5cclxuYnRuX3NpZGViYXJbMF0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1haW5zaWRlYmFyLnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICAgICAgICBzaWRlYmFyLnN0eWxlLmxlZnQgPSBcIi02MHB4XCI7XHJcblxyXG59O1xyXG5idG5fc2lkZWJhclsxXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBtYWluc2lkZWJhci5zdHlsZS5sZWZ0ID0gXCItMjU1cHhcIjtcclxuICAgIHNpZGViYXIuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG59O1xyXG5jbG9zZV9zaWRlYmFyLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xyXG4gICAgbWFpbnNpZGViYXIuc3R5bGUubGVmdCA9IFwiLTI1NXB4XCI7XHJcbiAgICBzaWRlYmFyLnN0eWxlLmxlZnQgPSBcIjBcIjtcclxufTtcclxuXHJcbmxvZ28ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgYWNjYXVudEluZm8uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXHJcbn07XHJcbmNsb3NlQWNjYXVudC5vbmNsaWNrID0gZnVuY3Rpb24oKXtcclxuICAgIGFjY2F1bnRJbmZvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufTtcclxuXHJcblxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgaWYoZS50YXJnZXQgPT0gcG9wdXApIHtcclxuICAgICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG52YXIgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmlnZ2VyJyk7XHJcbmZvciAodmFyIGkgPSAwOyBpIDwgdHJpZ2dlci5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIHRyaWdnZXJJdGVtID0gdHJpZ2dlcltpXTtcclxuICAgIHRyaWdnZXJJdGVtLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCd0cmlnZ2VyLWFjdGl2ZScpO1xyXG4gICAgfTtcclxuXHJcblxyXG59XHJcbi8vIEFycmF5LmZyb20ocGFuZWxJdGVtKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGksIHBhbmVsSXRlbSkge1xyXG4vLyAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuLy8gICAgICAgICBpZiAoYWN0aXZlLmxlbmd0aCA+IDAgJiYgYWN0aXZlWzBdICE9PSB0aGlzKSAvLyDQtdGB0LvQuCDQtdGB0YLRjCDQsNC60YLQuNCy0L3Ri9C5INGN0LvQtdC80LXQvdGCLCDQuCDRjdGC0L4g0L3QtSDRgtC+0YIg0L/QviDQutC+0YLQvtGA0L7QvNGDINC60LvQuNC60L3Rg9C70LhcclxuLy8gICAgICAgICAgICAgYWN0aXZlWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3RyaWdnZXItYWN0aXZlJyk7IC8vINGD0LHRgNCw0YLRjCDQutC70LDRgdGBIHBhbmVsLWFjdGl2ZVxyXG4vLyAgICAgICAgIC8vINC40LfQvNC10L3QuNGC0Ywg0YHQvtGB0YLQvtGP0L3QuNC1INC60LvQsNGB0YHQsCBwYW5lbC1hY3RpdmUg0L3QsCDRgtC10LrRg9GJ0LXQvCDRjdC70LXQvNC10L3RgtC1OiDQtNC+0LHQsNCy0LjRgtGMINC10YHQu9C4INC90LUg0LHRi9C70L4sINGD0LHRgNCw0YLRjCDQtdGB0LvQuCDQsdGL0LvQvi5cclxuLy8gICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ3RyaWdnZXItYWN0aXZlJyk7XHJcbi8vICAgICB9KTtcclxuLy8gfSk7Il19
