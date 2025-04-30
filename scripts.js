// Simple scroll effect for the header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.background = window.scrollY > 50 
        ? 'linear-gradient(45deg, #a18cd1, #fbc2eb)'
        : 'linear-gradient(45deg, #ff9a9e, #fad0c4)';
});

// Email spam protection (optional)
document.addEventListener('DOMContentLoaded', () => {
    const email = 'misousou203' + '@' + 'gmail.com';
    document.querySelector('.email-link span').textContent = email;
    document.querySelector('.email-link').href = 'mailto:' + email;
});