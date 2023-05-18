const quotes = [
    "If you can dream it, you can do it.  Walt Disney",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.  Albert Einstein",
    "The journey of a thousand miles begins with a single step.  Lao Tzu",
    "That which does not kill us makes us stronger. Friedrich Nietzsche",
    "Be the change that you wish to see in the world. Mahatma Gandhi",
    "Don’t cry because it , s over, smile because it happened. Dr. Seuss",
    "It is never too late to be what you might have been. George Eliot",
    "You only live once, but if you do it right, once is enough. Mae West"
  ]
  
  
  function random() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  function button() {
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = random();
  }
  
  const quoteButton = document.getElementById("random-quote");
  quoteButton.addEventListener("click", button);
  
  
  button();
  