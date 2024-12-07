document.addEventListener('DOMContentLoaded', () => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const checkbox = document.getElementById('check');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                });
            }

            if (checkbox && checkbox.checked) {
                checkbox.checked = false;
            }
        });
    });
});



