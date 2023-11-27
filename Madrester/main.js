const button = document.querySelector('button');
const input = document.querySelector('input');
const resultat = document.querySelector('p')
const loadingSpan = document.querySelector('span.loading');


button.addEventListener("click", () => {
    loadingSpan.classList.remove('hidden');
    getGeneratedText(`Make 5 recipies out of these ingredients: ${input.value}. `)
        .then(generatedText => {
            resultat.innerText = generatedText
            loadingSpan.classList.add('hidden');
        });

});