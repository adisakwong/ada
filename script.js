document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.link-card');
    
    // Staggered entrance animation
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });

    // Add a subtle click ripple effect logic (optional enhancement)
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Logic for visual feedback on mobile
            this.style.background = 'rgba(255, 255, 255, 0.15)';
            setTimeout(() => {
                this.style.background = '';
            }, 200);
        });
    });
});
