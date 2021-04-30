var currentDay = moment().format("dddd, MMMM DD, YYYY  h:mm a");
$("#currentDay").text(currentDay);
var hour = parseInt(moment().format('H'));
var timeBlock = $(".time-block");
var saveBtn = $(".saveBtn");
    
saveBtn.click(function () {
  plan = $(this).prev().val();
  blockNum = $(this).prev().attr("id");
  localStorage.setItem(blockNum, plan);
});

$(document).ready(function () {
  for (var i = 9; i < 18; i++) {
   var savedPlan = document.getElementById(i)
    $(savedPlan).text(localStorage.getItem(i));
    console.log('savedPlan:', savedPlan)
  }
});

function timeTracker() {
  timeBlock.each(function() {
    var thisBlock = $(this);
    var thisBlockHr = parseInt(thisBlock.attr("data-hr"));

    if (thisBlockHr === hour) {
      thisBlock.addClass("present").removeClass("past future");
    }
    if (thisBlockHr < hour) {
      thisBlock.addClass("past").removeClass("present future");
    }
    if (thisBlockHr > hour) {
      thisBlock.addClass("future").removeClass("past present");
    }
  });
}
timeTracker();
