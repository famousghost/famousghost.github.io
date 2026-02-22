function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        tab.style.display = 'none';
    });

    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.classList.add('active');
        activeTab.style.display = 'block';
        localStorage.setItem('selectedTab', tabId);
    }
}

window.onload = function() {
    const savedTab = localStorage.getItem('selectedTab');
    if (savedTab) {
        showTab(savedTab);
    } else {
        showTab('about');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");

    // Select all images inside cards or gallery items
    const images = document.querySelectorAll('.project-card img, .gallery-item img');

    images.forEach(img => {
        img.onclick = function(e) {
            // Check if this image is inside an <a> tag
            const parentLink = this.closest('a');

            if (parentLink) {
                // CASE 1: Image has a link. 
                // We do nothing, allowing the default link behavior to occur.
                return; 
            } else {
                // CASE 2: Image has NO link. 
                // Open fullscreen modal.
                e.preventDefault(); 
                modal.style.display = "block";
                modalImg.src = this.src;
            }
        }
    });

    // Close modal when clicking the background
    if (modal) {
        modal.onclick = function() {
            modal.style.display = "none";
        };
    }
});