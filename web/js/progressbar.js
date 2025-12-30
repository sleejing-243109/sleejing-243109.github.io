gsap.registerPlugin(ScrollTrigger);

gsap.to("#progress-bar", {
    width: "100%",
    ease: "none",
    scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true
    }
});