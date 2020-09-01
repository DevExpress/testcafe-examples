window.unhandledErrors = [];
window.onerror = (message, source, lineno, colno, error) => {
    window.unhandledErrors.push({ message, source, lineno, colno, error, level: error.level, url: error.url });
}
