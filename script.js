// script.js dosyasına JavaScript kodları ekleyin

// Örnek: Arşiv sayfasına yönlendirme işlevi
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const oneWeekAgo = new Date(today.getTime() - (7 * 24 * 60 * 60 * 1000));
    
    // Haberlerin tarihlerini kontrol etme
    document.querySelectorAll('.news-item').forEach(item => {
        const dateStr = item.getAttribute('data-date');
        const newsDate = new Date(dateStr);
        
        if (newsDate < oneWeekAgo) {
            item.classList.add('archived');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
    });

    sidebarOverlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });
});
