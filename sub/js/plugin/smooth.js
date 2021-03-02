$.fn.queueAddClass = function(className) {
  this.queue('fx', function(next) {
    $(this).addClass(className);
    next();
  });
  return this;
};
$.fn.queueRemoveClass = function(className) {
  this.queue('fx', function(next) {
    $(this).removeClass(className);
    next();
  });
  return this;
};
$.fn.queuetoggleClass = function(className) {
  this.queue('fx', function(next) {
    $(this).toggleClass(className);
    next();
  });
  return this;
};


var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.querySelector("#scroll-container"),
  ease: 0.1, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};



var requestId = null;

TweenLite.set(scroller.target, {
  rotation: 0.01,
  force3D: true
});




function updateScroller() {


  var resized = scroller.resizeRequest > 0;

  if (resized) {
    var height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;

  }

  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;


  // console.log(scrollY);


  scroller.endY = scrollY;




  scroller.y += (scrollY - scroller.y) * scroller.ease;



  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }

  TweenLite.set(scroller.target, {
    y: -scroller.y
  });

  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}



function onScroll() {


  let value = scroller.y;



  if( value >= 2900){
    $('.bubble.b_01').addClass('on');
    $('.bubble.b_02').delay(1000).queueAddClass('on');
    $('.bubble.b_03').addClass('on');
    $('.bubble.b_04').addClass('on');
  }
  //
  if( value >= 3400){
    $('.bubble.b_05').addClass('on');
    $('.bubble.b_06').addClass('on');
  }

  if( value >= 3900){
    $('.bubble.b_07').addClass('on');
    $('.bubble.b_08').addClass('on');
  }

  if( value >= 4400){
    $('.bubble.b_09').addClass('on');
    $('.bubble.b_10').addClass('on');
    $('.bubble.b_11').addClass('on');
  }

  if( value >= 6000){
    $('.bubble.b2_01').addClass('on');
    $('.bubble.b2_02').addClass('on');
    $('.bubble.b2_03').addClass('on');
    $('.bubble.b2_04').addClass('on');
  }
  if( value >= 6500){
    $('.bubble.b2_05').addClass('on');
  }

  if( value >= 6700){
    $('.bubble.b2_06').addClass('on');
  }

  if( value >= 8500){
    $('.bubble.b2_07').addClass('on');
  }

  if( value >= 9900){
    $('.bubble.b3_01').addClass('on');
  }

  if( value >= 10300){
    $('.bubble.b3_02').addClass('on');
    $('.bubble.b3_03').addClass('on');
  }

  if( value >= 10800){
    $('.bubble.b3_04').addClass('on');
    $('.bubble.b3_05').addClass('on');
  }

  if( value >= 11300){
    $('.bubble.b3_06').addClass('on');
    $('.bubble.b3_07').addClass('on');
    $('.bubble.b3_08').addClass('on');
    $('.bubble.b3_09').addClass('on');
  }
    
  if( value >= 12000){
    $('.bubble.b4_01').addClass('on');
    $('.bubble.b4_02').addClass('on');
    $('.bubble.b4_03').addClass('on');
    $('.bubble.b4_04').addClass('on');
    $('.bubble.b4_05').addClass('on');
    $('.bubble.b4_06').addClass('on');
    $('.bubble.b4_07').addClass('on');
    $('.bubble.b4_08').addClass('on');
    $('.bubble.b4_09').addClass('on');
    $('.bubble.b4_10').addClass('on');
    $('.bubble.b4_11').addClass('on');
  }
    
  if( value >= 15000){
    $('.bubble.b5_01').addClass('on');
    $('.bubble.b5_02').addClass('on');
    $('.bubble.b5_03').addClass('on');
    $('.bubble.b5_04').addClass('on');
    $('.bubble.b5_05').addClass('on');
    $('.bubble.b5_06').addClass('on');
    $('.bubble.b5_07').addClass('on');
    $('.bubble.b5_08').addClass('on');
  }


  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}



function onLoad() {

  updateScroller();
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll);
}

window.addEventListener("load", onLoad);
