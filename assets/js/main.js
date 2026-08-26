const quotes = [
    {
        "quote": " “Be yourself; everyone else is already taken.” ",
        "Author": "Oscar Wilde"
    },
    {
        "quote": " “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
        "Author": "Marilyn Monroe"
    },
    {
        "quote": " “So many books, so little time.” ",
        "Author": "Frank Zappa"
    },
    {
        "quote": " “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
        "Author": "Albert Einstein"
    },
    {
        "quote": " “A room without books is like a body without a soul.” ",
        "Author": "Marcus Tullius Cicero"
    },
    {
        "quote": " “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
        "Author": "Bernard M. Baruch"
    },
    {
        "quote": " “You've gotta dance like there's nobody watching,\
                    Love like you'll never be hurt,\
                    Sing like there's nobody listening,\
                    And live like it's heaven on earth.” ",
        "Author": "William W. Purkey"
    },
    {
        "quote": " “You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ",
        "Author": "Dr. Seuss"
    },
    {
        "quote": " “You only live once, but if you do it right, once is enough.” ",
        "Author": "Mae West"
    },
    {
        "quote": " “Be the change that you wish to see in the world.” ",
        "Author": "Mahatma Gandhi"
    },
    {
        "quote": " “In three words I can sum up everything I've learned about life: it goes on.” ",
        "Author": "Robert Frost"
    },
    {
        "quote": " “If you tell the truth, you don't have to remember anything.” ",
        "Author": "Mark Twain"
    },
    {
        "quote": " “To live is the rarest thing in the world. Most people exist, that is all.” ",
        "Author": "Oscar Wilde"
    },
    {
        "quote": " “Always forgive your enemies; nothing annoys them so much.” ",
        "Author": "Oscar Wilde"
    },
    {
        "quote": " “A friend is someone who knows all about you and still loves you.” ",
        "Author": "Elbert Hubbard"
    }
]

function getNewQuote() {
    const randomIndex = Math.floor( Math.random() * quotes.length );
    const randomQuote = quotes[randomIndex];

    const quoteText = document.querySelector('.quote-text');
    const authorName = document.querySelector('.author');
    console.log(quoteText)
    quoteText.innerText = `"${randomQuote.quote}"`;
    authorName.innerText = `— ${randomQuote.Author}`;
}


window.onload = getNewQuote();