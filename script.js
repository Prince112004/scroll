
// var maindiv=document.querySelector("#maindiv")
// var div1h1 = document.querySelector(".div1 h1");
// var div2h1 = document.querySelector(".div2 h1");
// var div3h1 = document.querySelector(".div3 h1");
// var tl=gsap.timeline();
// tl.to("#workpage",{
//     scrollTrigger:{
//         trigger:"#workpage",
//         pin:true,
//     }
// })
// tl.to(maindiv,{
//     top:"50%",
//     left:"50%",
//     duration:1.5,
//     transform:"translate(-50%,-50%)",

// })
// gsap.to(div1h1, {
//     delay:1.5,
//     width: "40vw",
//     duration: 1,
//     ease: "power1.inOut"
// },)

// gsap.to(div2h1, {
//     delay:1.1,
//     x:"6vw",
//     width: "40vw",
//     duration: 1,
//     ease: "power1.inOut"
// })
// gsap.to(div3h1, {
//     delay:1,
//     x:"18vw",
//     width: "40vw",
//     duration: 1,
//     ease: "power1.inOut"
//     }); 

document.addEventListener("DOMContentLoaded", function() {
    var maindiv = document.querySelector("#maindiv");
    var div1h1 = document.querySelector(".div1 h1");
    var div2h1 = document.querySelector(".div2 h1");
    var div3h1 = document.querySelector(".div3 h1");

    // Create a timeline for the animations
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#workpage",
            start: "top 0%",
            end: "top -50%",
            pin: true, // Pin the workpage element
            scrub: 1 // Smooth scroll effect
        }
    });

    // Animate maindiv
    tl.to(maindiv, {
        top: "50%",
        left: "50%",
        duration: 3,
        transform: "translate(-50%, -50%)",
    });

    tl.to(div1h1, {
        delay:3,
        width: "40vw",
        duration: 1,
        ease: "power1.inOut"
    }, "-=2.5"); 
    // Animate div2h1 position and width
    tl.to(div2h1, {
        delay:4,
        x: "6vw",
        width: "40vw",
        duration: 1,
        ease: "power1.inOut"
    }, "-=2"); // Starts when div1h1 width animation is 1 second away from ending

    // Animate div3h1 position and width
    tl.to(div3h1, {
        delay:5,
        x: "18vw",
        width: "40vw",
        duration: 1,
        ease: "power1.inOut"
    }, "-=1.5"); // Starts when div2h1 animation is 0.5 seconds away from ending
});



