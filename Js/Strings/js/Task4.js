const stringsHref = [
    'http://example.com', 'https://openai.com', 'ftp://website.com', 'http://google.com',
    'https://stackoverflow.com', 'http://github.com', 'http://youtube.com', 'https://wikipedia.org',
    'ftp://server.net', 'http://facebook.com', 'https://amazon.com', 'http://twitter.com',
    'https://linkedin.com', 'ftp://host.com', 'http://reddit.com', 'https://medium.com'
]

const OLD_PROTOCOLS = ['http://', 'ftp://']; 

// const oldStringsHref = stringsHref.filter(el => el.toLowerCase().startsWith('http://') || el.toLowerCase().startsWith('ftp://'));
// const oldStringsHref = stringsHref.filter(el => /^(http|ftp):\/\//i.test(el));
const oldStringsHref = stringsHref.filter(el => OLD_PROTOCOLS.some(prefix => el.toLowerCase().startsWith(prefix)));
console.log(oldStringsHref);


// 4. Модуль безпеки
// Знайти у масиві та повернути лише незахищені або застарілі URL-адреси (ті, що починаються на http:// або ftp://).
//  Функція має бути нечутливою до регістру (обробляти й HTTP:// або Ftp://).