const fileNames = [
    "index.html", "styles.css", "script.js", "about.html",
    "contact.html", "home.html", "blog-post-1.html", "blog-post-2.html",
    "services.html", "portfolio.html", "projects.html", "gallery.html",
    "faq.html", "terms.html", "privacy-policy.html"
];

const newFileNames = fileNames.filter(el => el.endsWith('.html'));

console.log(newFileNames);

// ✅ 1. Маршрутизація веб-сервера
// Відфільтрувати масив файлів масив файлів директорії, залишивши лише публічні веб-сторінки (файли, які закінчуються строго на .html):
