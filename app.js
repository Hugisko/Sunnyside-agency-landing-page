const hamburger = document.querySelector('.hamburger'),
      navigation = document.querySelector('nav'),
      cards = document.querySelectorAll('.card'),
      testimonials = document.querySelectorAll('.testimony'),
      gallery = document.querySelectorAll('.gallery picture');

const option = {
    root: null,
    threshold: 0.8,
    rootMargin: "0px",
};

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {  
        if(entry.isIntersecting) {    
            entry.target.classList.add('show');                        
            observer.unobserve(entry.target);
        }        
    });
}, option);

cards.forEach(card => {
    observer.observe(card);
});


testimonials.forEach(testimony => {
    observer.observe(testimony);
});


gallery.forEach(img => {
    observer.observe(img);
});

const Oneobserver = new IntersectionObserver(entries => {
    console.log(entries);
});


hamburger.addEventListener('click', (e) => {
    e.target.classList.toggle('open');
    navigation.classList.toggle('open');
});



