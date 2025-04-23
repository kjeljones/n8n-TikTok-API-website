// website/js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Set current date for Terms of Service and Privacy Policy
    const dateElements = document.querySelectorAll('#current-date');
    if (dateElements.length > 0) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const currentDate = new Date().toLocaleDateString('en-US', options);
        
        dateElements.forEach(element => {
            element.textContent = currentDate;
        });
    }
    
    // Add animation to download button
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            this.classList.add('clicked');
            
            // Show a brief "downloading" message
            const originalText = this.innerHTML;
            this.innerHTML = '<span>Downloading...</span>';
            
            // Reset after animation
            setTimeout(() => {
                this.innerHTML = originalText;
                this.classList.remove('clicked');
            }, 2000);
        });
    }
    
    // Update copyright year automatically
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const yearRegex = /\d{4}/;
        const currentYear = new Date().getFullYear().toString();
        footerYear.innerHTML = footerYear.innerHTML.replace(yearRegex, currentYear);
    }
});