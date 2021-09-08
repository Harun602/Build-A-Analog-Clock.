

// function abc(){
//     var time = new Date();
//     var hr = time.getHours();
//     var sec = time.getSeconds();
//     alert(hr + "hr" + min + "min" + sec + "sec");
// }
// abc();

// we get this time from your pc time.

(function(){
    var time = new Date(),
    second = time.getSeconds() / 60 * 360,
    minute = time.getMinutes() / 60 * 360 + time.getSeconds() / 60 * 6,
    hour = time.getHours() / 12 * time.getMinutes() / 60 * 30,


    animation = [
        "@keyframes sec_hand {from{transform: rotate(" + second + "deg);}to{transform:rotate("+ (second + 360) +"deg);}}",
        "@keyframes min_hand {from{transform: rotate(" + minute + "deg);}to{transform:rotate("+ (minute + 360) +"deg);}}",
        "@keyframes hr_hand {from{transform: rotate(" + hour + "deg);}to{transform:rotate("+ (hour + 360) +"deg);}}"
    ].join("");
    document.querySelector('#clock-animate').innerHTML = animation;
})();