/* =============================================
   SHARED JAVASCRIPT - main.js
   Common JavaScript for all pages on jjdockins.com
   ============================================= */

/**
 * Toggle mobile navigation menu
 */
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

/**
 * Close menu when clicking on a navigation link
 * This provides a better mobile user experience
 */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#navMenu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navMenu').classList.remove('active');
        });
    });
});
