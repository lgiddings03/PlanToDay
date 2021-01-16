// created time block
var timeobject = setInterval(displayclock, 1000);
function displayclock (){
    var currentday = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#currentday").text(currentday);
}
$(".btn-primary").on("click", function (){
    var timeblock = $(this).attr("id").split("-")[0];
    var userdata = $(`#${timeblock}-text`).val();
    console.log(timeblock, userdata);
    localStorage.setItem(timeblock, userdata);
})var currenttimeblock = moment().hour();
for (let i=9; i<=17; i++){
    $(`#${i}-text`).val(localStorage.getItem(i));
    if (currenttimeblock < i){
        $(`#${i}-text`).addClass("bg-danger");
    }
    else if (currenttimeblock === i){
        $(`#${i}-text`).addClass("bg-warning");
    }
    else {
        $(`#${i}-text`).addClass("bg-info");
    }
}
document.querySelector("#navbar-subtitle")