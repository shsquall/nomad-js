const quotes = [
  {
    quote:
      "Laughter is timeless, Imagination has no age, and Dreams are forever.",
    author: "Walt Disney",
  },
  {
    quote:
      "In the end, it’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Licnoln",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote: "Despite the forecast, live like it’s spring.",
    author: "Lilly Pulitzer",
  },
  {
    quote:
      "There is always some madness in love. But there is also always some reason in madness.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Love asks me no questions, and gives me endless support.",
    author: "William Shakespeare",
  },
  {
    quote:
      "Success is going from failure to failure without a loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Try not to become a man of success but rather try to become a man of value.",
    author: "Albert Einstein",
  },
  {
    quote:
      "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney",
  },
];


function randomQuote() {
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const toDayQuotes = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = toDayQuotes.quote;
  author.innerText = toDayQuotes.author;

  
}
randomQuote();
setInterval(randomQuote, 7000);

