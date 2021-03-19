window.addEventListener('load',(event)=>{
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('.navigation');
    hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')},false);
    window.onresize = ()=>{if(window.innerWidth>760) mainnav.classList.remove('responsive')};
    const images = document.querySelectorAll('[data-src]');
    
    function preLoadImage (img){
        const src = img.getAttribute('data-src');
        if (!src) {
            return;
        };
        img.src = src;
    }
    
    const imgOptions = {
        threshold: 0,
        rootMargin: "0px 0px 200px 0px"
    };

    const imgObserver = new IntersectionObserver( (entries,imgObserver)=>{
        entries.forEach(entry=>{
            if(!entry.isIntersecting){
                return;
            }
            else{
                preLoadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })
    },imgOptions);
    images.forEach(image=>{
        imgObserver.observe(image);
    });
});       