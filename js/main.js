document.addEventListener('DOMContentLoaded', () => {
    // Load the saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Set toggle switch position based on the theme
    document.getElementById('mode-toggle').checked = savedTheme === 'dark';

    // Event listeners for converter boxes
    document.getElementById('length-box').addEventListener('click', () => loadConverter('length'));
    document.getElementById('mass-box').addEventListener('click', () => loadConverter('mass'));
    document.getElementById('temperature-box').addEventListener('click', () => loadConverter('temperature'));
    document.getElementById('angle-box').addEventListener('click', () => loadConverter('angle'));
    document.getElementById('time-box').addEventListener('click', () => loadConverter('time'));
    document.getElementById('area-box').addEventListener('click', () => loadConverter('area'));
    document.getElementById('volume-box').addEventListener('click', () => loadConverter('volume'));
    document.getElementById('pressure-box').addEventListener('click', () => loadConverter('pressure'));
    document.getElementById('digitalStorage-box').addEventListener('click', () => loadConverter('digitalStorage'));
    document.getElementById('base-box').addEventListener('click', () => loadConverter('base'));

    // Toggle between light and dark modes
    document.getElementById('mode-toggle').addEventListener('change', function() {
        const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Event listener for the dashboard box
    document.getElementById('dashboard-box').addEventListener('click', () => {
        location.reload();
    });

    // Hide the dashboard box on the home page
    document.getElementById('dashboard-box').style.display = 'none';
});

function setTheme(theme) {
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(`${theme}-mode`);
    document.getElementById('theme-text').textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
    localStorage.setItem('theme', theme);
}

function loadConverter(type) {
    fetch(`components/${type}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content-area').innerHTML = html;
            loadCSS(`css/components/${type}.css`);
            loadJS(`js/components/${type}.js`);

            // Show the dashboard box
            document.getElementById('dashboard-box').style.display = 'flex';
        })
        .catch(err => console.error('Failed to load converter: ', err));
}

function loadCSS(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
}

function loadJS(src) {
    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
}
