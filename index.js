$(document).ready(function() {
    const productContainers = [...document.querySelectorAll('.slides')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
            if(i>4){
                document.querySelector(".dot2").classList.add("active");
            }
            if(i>8){
                document.querySelector(".dot3").classList.add("active");
            }
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
            if(i<=4){
                document.querySelector(".dot1").classList.add("active");
            }
        })
    })

    let currentGroup = 0;
    const slides = $('.slide');
    const dots = $('.dot');
    const slidesPerGroup = 4;

    function showGroup(index) {
        currentGroup = index;
        const offset = -currentGroup * 100 + '%';
        const translateXValue = -currentGroup * (slidesPerGroup * 100) + '%';
        $('.slides').css('transform', 'translateX(' + translateXValue + ')');
        dots.removeClass('active');
        $(dots[currentGroup]).addClass('active');
        console.log(currentGroup);
    }

    dots.on('click', function() {
        const index = $(this).data('slide-group');
        showGroup(index);
    });

    showGroup(currentGroup); // Show the first group initially
    setInterval(nextGroup, 5000); // Change group every 5 seconds

});

    $('#contact-us').on('click', function() {
        $('#popup-form').css('display', 'block');
    });

    $('#close-form').on('click', function() {
        $('#popup-form').css('display', 'none');
    });

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        var formData = new FormData(this);

        fetch('https://getform.io/f/lak', {
            method: 'POST',
            body: formData
        }).then(response => {
            if (response.ok) {
                alert('Form submitted successfully!');
                $('#popup-form').css('display', 'none');
            } else {
                alert('Failed to submit the form.');
            }
        }).catch(error => {
            console.error('Error submitting the form:', error);
            alert('An error occurred. Please try again later.');
        });
    });

    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.image-section');
        const totalSlides = slides.length;
        slides.forEach((slide, i) => {
            slide.classList.remove('activee');
            if(i===index){
                slide.classList.remove('activee');
            }
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    setInterval(nextSlide, 3000); // Change image every 3 seconds
    
    document.addEventListener('DOMContentLoaded', () => {
        showSlide(currentSlide);
    });
