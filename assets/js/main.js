(function() {
    const toggleTPS = document.querySelectorAll('#toggle');
    
    toggleTPS.forEach(toggle => {
        toggle.addEventListener('click', function() {
            let parentElement = this.parentElement;
            let parentElement2 = parentElement.parentElement;
            let parentElement3 = parentElement2.parentElement;

            if (parentElement3.classList.contains('active')) {
                this.innerHTML = `<i class="uil uil-minus"></i>`;
            } else {
                this.innerHTML = `<i class="uil uil-plus"></i>`;
            }

            parentElement3.classList.toggle('active');
        })
    })

    const togleFaq = document.querySelectorAll('#toggle-faq');

    togleFaq.forEach(toggle => {
        toggle.addEventListener('click', function() {
            let parentElement = this.parentElement;
            let parentElement2 = parentElement.parentElement;
            let parentElement3 = parentElement2.parentElement;

            if (parentElement3.classList.contains('active')) {
                this.innerHTML = `<i class="uil uil-minus"></i>`;
            } else {
                this.innerHTML = `<i class="uil uil-plus"></i>`;
            }

            parentElement3.classList.toggle('active');
        })
    })
})();