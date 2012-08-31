zeroFill = function(n, fill) {
  n = n + "";

  while (n.length < fill) n = "0" + n;

  return n;
};

$(function() {
  var tseconds = 1000;
  var tminutes = tseconds * 60;
  var thours = tminutes * 60;
  var tdays = thours * 24;
  var counterHolder = $("#counter");

  var endTime = (new Date(2012, 8, 6, 13, 0, 0)).getTime();

  setInterval(function() {
    var currentTime = (new Date()).getTime();
    var delta = endTime - currentTime;
    console.log(delta / tdays);

    var days = Math.floor(delta / tdays);
    var hours = Math.floor(delta / thours) % 60;
    var minutes = Math.floor(delta / tminutes) % 60;
    var seconds = Math.floor(delta / tseconds) % 60;
    var mili = delta % 1000;

    var stringData = days + " dias " +  zeroFill(hours, 2) + ":" + zeroFill(minutes, 2) + ":" + zeroFill(seconds, 2) + " " + zeroFill(mili, 3);

    counterHolder.html(stringData);
  }, 100);
});
