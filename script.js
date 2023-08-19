const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

// creating the mouse followng function 

function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#backcircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    })
}

//running the mouse track function
circleMouseFollower();


//intro animation 
function introanimaton(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })

    .to(".elems",{
        y:0,
        ease:Expo.easeInOut,
        delay:0,
        duration:2,
        stagger:.2
    })
}
introanimaton();