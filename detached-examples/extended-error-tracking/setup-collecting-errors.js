window.capturedErrors = [];

window.onerror = (message, source, lineno, colno, error) => {
    window.capturedErrors.push({ message, source, lineno, colno, error, level: error.level, url: error.url });
};
