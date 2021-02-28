const quotes = [{
    text: "You never really understand a person until you consider things from his point of view. Until you climb inside of his skin and walk around in it.", 
    author: "HARPER LEE"
  }, {
    text: "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
    author: "ERNEST HEMINGWAY"
  }, {
    text: "I was never afraid of failure; for I would sooner fail than not be among the greatest.",
    author: "JOHN KEATS"
  }, {
    text: "If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.", 
    author: "HENRY DAVID THOREAU"
  }, {
    text: "It is what you read when you don’t have to that determines what you will be when you can’t help it.", 
    author: "OSCAR WILDE"
  }, {
    text: "Tomorrow we will run faster, stretch out our arms farther…", 
    author: "F. SCOTT FITZGERALD"
  }, {
    text: "If you’re always trying to be normal you will never know how amazing you can be.", 
    author: "MAYA ANGELOU"
  }, {
    text: "If you can feel that staying human is worthwhile, even when it can’t have any result whatever, you’ve beaten them.", 
    author: "GEORGE ORWELL"
  }, {
    text: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all – in which case, you fail by default.", 
    author: "J. K. ROWLING"
  }, {
    text: "Integrity is doing the right thing, even when no one is watching.", 
    author: "C.S. LEWIS"
  }, {
    text: "All we have to decide is what to do with the time that is given us.", 
    author: "J. R. R. TOLKIEN"
  }]
  
  const textDiv = document.getElementById('text');
  const authorDiv = document.getElementById('author');
  
  function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
   textDiv.innerHTML = quotes[randomNumber].text;
    authorDiv.innerHTML = quotes[randomNumber].author;
  }
       (function() {
    newQuote();
  })();
      
  