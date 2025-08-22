// UI helper functions for the Rubik's Cube app
(function () {
    function showSolved(targetSelector = '.map-parent') {
        const el = document.querySelector(targetSelector) || document.body;
        el.classList.add('cube-solved');
        // remove after animation
        setTimeout(() => el.classList.remove('cube-solved'), 1400);
    }

    function showLoading(show = true, text = 'Solving...') {
        const wrapper = document.getElementById('loading-wrapper');
        if (!wrapper) return;
        wrapper.style.display = show ? 'flex' : 'none';
        const h3 = wrapper.querySelector('h3');
        if (h3) h3.textContent = text;
    }

    // small ripple effect for buttons
    function setupButtonRipples() {
        document.addEventListener('click', function (e) {
            const btn = e.target.closest('.btn');
            if (!btn) return;
            const rect = btn.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'btn-ripple';
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    }

    window.UI = {
        showSolved,
        showLoading,
        setupButtonRipples
    };

    // auto-init ripples
    if (document.readyState !== 'loading') setupButtonRipples();
    else document.addEventListener('DOMContentLoaded', setupButtonRipples);
})();
