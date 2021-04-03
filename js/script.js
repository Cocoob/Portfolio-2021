const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');
const clickImage = document.querySelector('.hide-cover-text-img');

const tl = new TimelineLite({paused : true, reversed :true});


tl.to('nav', 1, {
    height : "100%",
    ease : Power2.easeOut
}, 
'-= 0.5'
)
.to('.cover-title', 1, {
    opacity : 0,
    ease : Power2.easeOut
}, 
'-= 0.5'
)
.to('.cover-subtitle', 1, {
    opacity : 0,
    ease : Power2.easeOut
}, 
'-= 0.5'
)
.fromTo('.nav-open', 0.5, {
    opacity :0,
    x : 50,
    ease : Power2.easeOut
},{
    opacity : 1,
    x : 0,
    onComplete : function(){
        navOpen.style.pointerEvents = 'auto';
        console.log('done');
    }
})
.fromTo('.hide-cover-text',0.5, {
    opacity : 0,
    display : 'none',
    x : 50,
    ease : Power2.easeOut
}, {
    opacity : 1,
    x : 0,
    display : 'block',
})


navButton.addEventListener('click',(e)=>{

    if(tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }



    toggleTween(tl)
});


function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse();
}

// const tlIntro = new TimelineLite({defaults:{ease: 'power1.out'}});

// tlIntro.to('.text', {y: '0%', duration : 1.5, stagger : 0.25});
// tlIntro.to('.slider', {y : '-100%', duration : 1.5, delay : 0.5});
// tlIntro.to('.intro', { y: '-100%', duration : 1}, '-=1' );
// tlIntro.fromTo('nav', {opacity : 0}, {opacity:1, duration : 1});
// tlIntro.fromTo('.cover-date', {opacity : 0}, {opacity:1, duration : 1});

// gsap.to('.second-part', {
//     scrollTrigger : {
//     trigger : 'header',
//     pin : true,
//     start : 'top top',
//     },
//     y : - window.innerHeight,
// });



