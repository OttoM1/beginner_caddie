document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("nextt");

    const observerOptions = {
        root: null, 
        threshold: 0.32
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); }
        });
    }, observerOptions);

    observer.observe(target);
}); 





document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelectorAll('#step1, #step2, #step3, #step4, #step5, #step6, #step7');

    const observerOptions = {
        root: null,
        threshold: 0.4
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visiblepg");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    target.forEach(el => observer.observe(el));
});



