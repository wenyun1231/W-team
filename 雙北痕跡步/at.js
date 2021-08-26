/*$('Document').ready(function(){
    $('body').mousemove(function(e){
      
      var xp = e.clientX/ $('body').width() * 30;
      var yp = e.clientY/ $('body').outerHeight() * 30;
      
      var xx = ((xp - 10) * 2)/30;
      var yy = ((yp - 10) * 2)/30;
      
      var xx_f = xx;
      var yy_f = yy * -1;
      xx_f = xx_f * -1;
      yy_f = yy_f * -1;
      
      var abs_o = Math.abs(xx) + Math.abs(yy);
      var abs = abs_o * 50;
      var br = (abs_o * 2);
      br = (((2 + br) / 3) + 2) /2
      
      $('.square').css({
        'transform': 'rotate3d(' + yy_f + ',' + xx_f + ',' + 0 +',' + abs + 'deg) scale(' + br + ')'
      });
    });
});*/