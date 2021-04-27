
  var currentDay = moment().format('dddd, MMMM DD, YYYY  h:mm a')
  $('#currentDay').text(currentDay)
  var hour =  moment().format('H')
  var timeBlock = $(".time-block");
  var saveBtn = $(".saveBtn")
  var event = $("description").innerText
  



console.log(saveBtn.prev().text());



saveBtn.click(function() {
  // description = $(this).prev().text()
  console.log($(this).prev().text().val())
  // localStorage.setItem('Decription:', description);
})


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