/**
 * Math Rendering with KaTeX
 * Handles automatic rendering of LaTeX-like expressions
 */

document.addEventListener("DOMContentLoaded", () => {
    renderMathInElement(document.body, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
        ],
        throwOnError: false
    });
});
