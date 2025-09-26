document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Sesuaikan dengan tinggi navbar
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Dapatkan elemen yang ingin diberi efek fade-in
    const elements = document.querySelectorAll('.fade-in');

    // Tambahkan kelas 'visible' setelah delay singkat (misalnya 100ms)
    setTimeout(() => {
        elements.forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
});

document.addEventListener('DOMContentLoaded', function() {
    // ... kode fade-in awal di sini (dari bagian 1) ...

    // Setup Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ketika elemen masuk ke viewport
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Hentikan pengamatan setelah muncul
            }
        });
    }, {
        threshold: 0.1, // Berapa banyak elemen harus terlihat (10%)
        rootMargin: "0px 0px -100px 0px" // Elemen akan muncul sebelum mencapai bagian bawah layar
    });

    // Amati semua elemen dengan kelas .animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});