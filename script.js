function showTab(tabId) {
    // 1. Hide all tabs and remove 'active' class
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        tab.style.display = 'none'; // Ensure they are hidden
    });

    // 2. Show the selected tab
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.classList.add('active');
        activeTab.style.display = 'block'; // Or however your CSS handles display
        
        // 3. Save the current tab ID to localStorage
        localStorage.setItem('selectedTab', tabId);
    }
}

// 4. Run this when the page loads
window.onload = function() {
    const savedTab = localStorage.getItem('selectedTab');
    
    if (savedTab) {
        showTab(savedTab);
    } else {
        // Default tab if nothing is saved
        showTab('about');
    }
};