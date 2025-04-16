document.getElementById('search').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        if (link.textContent.toLowerCase().includes(filter)) {
            link.parentElement.style.display = '';
        } else {
            link.parentElement.style.display = 'none';
        }
    });
});
