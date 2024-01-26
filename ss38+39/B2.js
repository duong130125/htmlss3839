document.getElementById('searchIcon').addEventListener('click', function () {
    var input = document.getElementById('searchInput');
    var icon = document.getElementById('searchImage');

    if (input.style.width === '150px') {
        input.style.width = '0';
        input.style.opacity = '0';
        icon.style.transform = 'rotate(0deg)';
    } else {
        input.style.width = '150px';
        input.style.opacity = '1';
        input.focus();
        icon.style.transform = 'rotate(0deg)';
    }
});
