function showSection(sectionId) {
    try {
        // Get all sections
        const sections = document.querySelectorAll('.section');
        if (!sections.length) {
            console.warn('No sections found.');
            return;
        }

        // Hide all sections
        sections.forEach(sec => sec.classList.remove('active'));

        // Show the requested section if it exists
        const target = document.getElementById(sectionId);
        if (target) {
            target.classList.add('active');
        } else {
            console.error(`Section with ID "${sectionId}" not found.`);
        }
    } catch (err) {
        console.error('Error in showSection:', err);
    }
}

// Show Section 1 by default on page load
document.addEventListener('DOMContentLoaded', () => {
    showSection('section1');
});
