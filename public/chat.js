var socket = io.connect("https://chatfer.herokuapp.com/");

var message = document.getElementById("message");
var user = document.getElementById("user");
var btn = document.getElementById("send");
var display_msg = document.getElementById("display_msg");
var feedback = document.getElementById("feedback");


btn.addEventListener("click", function(){
    socket.emit("chat", {
        "message":message.value,
        "user": user.value
    })
});

message.addEventListener("keypress", function(){
    socket.emit("typing", user.value);
})

socket.on("chat", function(data){
    feedback.innerHTML = "";
    display_msg.innerHTML += "<p><strong>"+ data.user + ": </strong>" + data.message + "</p>"
})

socket.on("typing", function(data){
    feedback.innerHTML += "<p><em>"+data+" is typing a message..." + "</em></p>"
})