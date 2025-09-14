  // Add some interactive effects
        document.addEventListener('DOMContentLoaded', function() {
            // Glitch effect on logo
            const logo = document.querySelector('.logo');
            setInterval(() => {
                logo.classList.add('glitch');
                setTimeout(() => {
                    logo.classList.remove('glitch');
                }, 300);
            }, 3000);

            // Animated typing effect for hero subtitle
            const subtitle = document.querySelector('.hero-subtitle');
            const originalText = subtitle.textContent;
            
            // Random color changes for particles
            const particles = document.querySelectorAll('.particle');
            setInterval(() => {
                particles.forEach(particle => {
                    const colors = ['#00f5ff', '#ff10f0', '#b300ff', '#39ff14'];
                    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                });
            }, 2000);

            // Mouse movement effect
            document.addEventListener('mousemove', (e) => {
                const cursor = document.createElement('div');
                cursor.style.position = 'fixed';
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
                cursor.style.width = '2px';
                cursor.style.height = '2px';
                cursor.style.background = '#00f5ff';
                cursor.style.borderRadius = '50%';
                cursor.style.pointerEvents = 'none';
                cursor.style.zIndex = '9999';
                cursor.style.opacity = '0.8';
                document.body.appendChild(cursor);

                setTimeout(() => {
                    cursor.style.opacity = '0';
                    cursor.style.transform = 'scale(3)';
                    cursor.style.transition = 'all 0.5s ease';
                }, 100);

                setTimeout(() => {
                    document.body.removeChild(cursor);
                }, 600);
            });
        });