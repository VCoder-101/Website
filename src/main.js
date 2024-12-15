document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initMatrix();
    
    // Initialize tooltips
    const emailLink = document.querySelector('.email-link');
    const tooltip = document.querySelector('.tooltip');
    
    emailLink.addEventListener('mouseenter', () => {
        tooltip.style.opacity = '1';
        tooltip.style.visibility = 'visible';
    });
    
    emailLink.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
        tooltip.style.visibility = 'hidden';
    });
});