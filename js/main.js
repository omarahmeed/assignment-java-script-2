var quotes = [
    'Be yourself everyone else is already taken.  Oscar Wilde',
    'Two things are infinite the universe and human stupidity and Iam not sure about the universe . Albert Einstein',
    'So many books, so little time. Frank Zappa',
    'If you tell the truth, you dont have to remember anything. Mark Twain',
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "It always seems impossible until it's done. - Nelson Mandela",
    'A friend is someone who knows all about you and still loves you.Elbert Hubbard'
]


function generateQuote() {

    var randomIndex = Math.trunc(Math.random() * quotes.length);
    var quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[randomIndex];
}
