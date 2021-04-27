
  var currentDay = moment().format('dddd, MMMM DD, YYYY  h:mm a')
  $('#currentDay').text(currentDay)
  var hour =  moment().format('H')
  var timeBlock = $(".time-block");
  var saveBtn = $(".saveBtn")

saveBtn.click(function() {
  plan = ($(this).prev()).val()
  blockNum = $(this).parent().attr('id');
  localStorage.setItem(blockNum, plan);
})

/* get  key from local storage
use that key to apend the value to the correct text block
fill the block upon some event... refresh? load?*/

function fillEvent(){
  
}

  function timeTracker(){
    timeBlock.each(function(){
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