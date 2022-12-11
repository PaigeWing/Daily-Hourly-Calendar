    var displayDay = document.getElementById("currentDay");
    var displayTime = document.getElementById("currentTime");
    var currentDay = dayjs()    
    var currentTime = dayjs()
    displayDay.textContent = currentDay.format("dddd, MMMM D, YYYY")
    displayTime.textContent = currentTime.format("h:mm A")
   
    //Set past, present, future colors on time blocks
    var currentHour = dayjs().format('H')

    var nine = 9;
    var ten = 10;
    var eleven = 11;
    var twelve = 12;
    var one = 13;
    var two = 14;
    var three = 15;
    var four = 16;
    var five = 17;
   
    if (currentHour < nine) {
        $("#9am").addClass("future");
    } else if (currentHour > nine) {
        $("#9am").addClass("past");
    } else {
        $("#9am").addClass("present");
    }
    
    if (currentHour < ten) {
        $("#10am").addClass("future");
    } else if (currentHour > ten) {
        $("#10am").addClass("past");
    } else {
        $("#10am").addClass("present");
    }
    
    if (currentHour < eleven) {
        $("#11am").addClass("future");
    } else if (currentHour > eleven) {
        $("#11am").addClass("past");
    } else {
        $("#11am").addClass("present");
    }
    
    if (currentHour < twelve) {
        $("#12pm").addClass("future");
    } else if (currentHour > twelve) {
        $("#12pm").addClass("past");
    } else {
        $("#12pm").addClass("present");
    }
    
    if (currentHour < one) {
        $("#1pm").addClass("future");
    } else if (currentHour > one) {
        $("#1pm").addClass("past");
    } else {
        $("#1pm").addClass("present");
    }
    
    if (currentHour < two) {
        $("#2pm").addClass("future");
    } else if (currentHour > two) {
        $("#2pm").addClass("past");
    } else {
        $("#2pm").addClass("present");
    }
    
    if (currentHour < three) {
        $("#3pm").addClass("future");
    } else if (currentHour > three) {
        $("#3pm").addClass("past");
    } else {
        $("#3pm").addClass("present");
    }
    
    if (currentHour < four) {
        $("#4pm").addClass("future");
    } else if (currentHour > four) {
        $("#4pm").addClass("past");
    } else {
        $("#4pm").addClass("present");
    }
    
    if (currentHour < five) {
        $("#5pm").addClass("future");
    } else if (currentHour > five) {
        $("#5pm").addClass("past");
    } else {
        $("#5pm").addClass("present");
    };
    

    //Save to local storage
    $(".saveBtn").on('click', function (e) {
        e.preventDefault();
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, input);       
        console.log("Pushed to local storage")

    });

    //Retrieve from local storage
  $("#9am").val(localStorage.getItem("hour-9"));
  $("#10am").val(localStorage.getItem("hour-10"));
  $("#11am").val(localStorage.getItem("hour-11"));
  $("#12pm").val(localStorage.getItem("hour-12"));
  $("#1pm").val(localStorage.getItem("hour-1"));
  $("#2pm").val(localStorage.getItem("hour-2"));
  $("#3pm").val(localStorage.getItem("hour-3"));
  $("#4pm").val(localStorage.getItem("hour-4"));
  $("#5pm").val(localStorage.getItem("hour-5"));

















