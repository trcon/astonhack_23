var stompClient = null;

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
    var socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/app', function (greeting) {
            showGreeting(JSON.parse(greeting.body).content);
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendName() {
    stompClient.send("/app/chat", {}, JSON.stringify(
        {
                'sender': 'Jose',
                'recipient': 'Celine',
                'content': $('#message').val(),
                'status': 'DELIVERED',
                'chatId': 'joseceline'
            }));
}

callback = function(message) {
    if (message.body) {
        showGreeting(message.body);
    } else {
        alert("fuck");
    }
}

function sendNames() {
    var sub = stompClient.subscribe("/messages/"+ $('#sender').val() + "/" + $('#recipient').val(), callback);
    showGreeting(sub.body);
    alert('tick');
}

function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendName(); });
    $( "#sendNames" ).click(function () { sendNames(); });
});