const button = document.querySelector('#getQuote');
const list = document.querySelector('#quote');

const getQuote = async () => {
    try {
        const res = await axios.get('https://api.quotable.io/random');
        const quoteBody = res.data.content;
        const quoteAuthor = res.data.author;
        return `${quoteBody} - ${quoteAuthor}`;
    } catch(e) {
        return 'No Quotes Available'
    }
}

const addQuote = async() => {
    const quoteText = await getQuote();
    const newLI = document.createElement('LI');
    newLI.append(quoteText);
    list.append(newLI)
}

button.addEventListener('click', () => {
    list.innerText = "";
    addQuote();
})