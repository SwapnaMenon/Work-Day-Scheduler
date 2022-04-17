var currentdate = moment().format("MMMM Do YYYY") //creating variable using moment.js to format the dates.//
console.log(currentdate)
//using j query to call a variable, add $ at the beg //
$("#currentDay").text(currentdate)

$(".description").each(function(){
    var currenthour=moment().hour()
    console.log(currenthour)
    //creating timeblock variable//
    var timeblockhour //"element this"- take all of the data in the specific element//
    timeblockhour= $(this).parent().attr("id") //.parent//
    console.log (timeblockhour) 
    //compare the cuurent to timeblock hour//
    if(currenthour===timeblockhour){
        $(this).addClass("present")
    }
    if(currenthour>timeblockhour){
        $ (this).addClass("past")
    }
    if(currenthour<timeblockhour){
        $ (this).addClass("future")
    }
})

$(".saveBtn").on("click", function(){//.on instead of add event listener//
    var timeblockls= $(this).parent().attr("id")  
    var siblingsBtn= $(this).siblings("textarea").val()
    console.log(siblingsBtn)
    localStorage.setItem(timeblockls,siblingsBtn)
    gettasks()
}) 
function gettasks(){
    $("#9 .description").val(localStorage.getItem("9"))
    $("#10 .description").val(localStorage.getItem("10"))
    $("#11 .description").val(localStorage.getItem("11"))
    $("#12 .description").val(localStorage.getItem("12"))
    $("#13 .description").val(localStorage.getItem("13"))
    $("#14 .description").val(localStorage.getItem("14"))
    $("#15 .description").val(localStorage.getItem("15"))
    $("#16 .description").val(localStorage.getItem("16"))
    $("#17 .description").val(localStorage.getItem("17"))
}
gettasks()
