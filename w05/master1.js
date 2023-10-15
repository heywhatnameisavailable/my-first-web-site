function linksSetColor(color){
    var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length) {
        alist[i].style.color = color;
        i = i + 1;
      }
  }  
function bodySetColor(color){
  document.querySelector('body').style.color=color;  
}
function bodyBgSetColor(color){
  document.querySelector('body').style.backgroundColor = color;
}
function nightDayHandler(self){
    var target = document.querySelector('body');      
    if(self.value == 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('powderblue')
      self.value = 'day';
      document.querySelector('#night_day_2').value = 'night';
      var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length) {
        alist[i].style.color = 'blue';
        i = i + 1;
      } 
    } else {
      bodyBgSetColor('black');
      target.style.backgroundColor = 'black';
      target.style.color = 'white';
      self.value = 'day';
      var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length) {
        alist[i].style.color = 'powderblue';
        i = i + 1;
      }
    } else {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night';
    
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
          alist[i].style.color = 'blue';
          i = i + 1;
      }
      document.querySelector('#night_day_2').value = 'day';
      var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length) {
        alist[i].style.color = 'powderblue';
        i = i + 1;
      } 
    }
  }