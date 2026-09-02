document.addEventListener('DOMContentLoaded', () => {
    // Generate Floating Balloons & Hearts
    const container = document.getElementById('floating-container');
    const items = ['🎈', '💖', '✨', '🌸', '💕', '☁️', '🎈'];

    for (let i = 0; i < 22; i++) {
        const el = document.createElement('div');
        el.classList.add('item');
        el.innerText = items[Math.floor(Math.random() * items.length)];
        el.style.left = `${Math.random() * 100}%`;
        el.style.animationDuration = `${6 + Math.random() * 6}s`;
        el.style.animationDelay = `${Math.random() * 5}s`;
        el.style.fontSize = `${1.4 + Math.random() * 1.5}rem`;
        container.appendChild(el);
    }

    // Interactive Button Handler
    const hugBtn = document.getElementById('hugBtn');
    const hiddenMsg = document.getElementById('hiddenMsg');

    hugBtn.addEventListener('click', () => {
        hiddenMsg.style.display = 'block';

        // Trigger Confetti Burst
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 85,
                spread: 75,
                origin: { y: 0.6 },
                colors: ['#f472b6', '#c084fc', '#fef08a', '#6ee7b7']
            });
        }
    });
});