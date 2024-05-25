let but_cat = document.querySelector('.a_bg_yel');
but_cat.onclick = function() {
    console.log('aaa');
    document.querySelector('aside').style.display = 'block';
}

document.addEventListener('click', function(event) {
    // Проверяем, был ли клик вне панели
    if (!asidePanel.contains(event.target) && event.target !== but_cat) {
        asidePanel.style.display = 'none';
    }
});