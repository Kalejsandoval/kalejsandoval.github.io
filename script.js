document.addEventListener('DOMContentLoaded', (event) => {
    const link = document.getElementById('animateLink');

    link.addEventListener('click', (event) => {
       
        event.preventDefault();
        
        link.classList.add('animated');

        
        setTimeout(() => {
            link.classList.remove('animated');
            
            window.location.href = link.getAttribute('href');
        }, 300);
    });
});

});
