
  var currentDay = moment().format('dddd, MMMM DD, YYYY  h:mm a')
  $('#currentDay').text(currentDay)
  var hour =  moment().format('H')
  var timeBlock = $(".time-block");
  var saveBtn = $(".saveBtn")
  var event = $("description").innerText

console.log('$("description").text():', $(".description").text())


console.log(saveBtn.prev().text());

// saveBtn.click(function() {
//   $(this).prev().text()
// })


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