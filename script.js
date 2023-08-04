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