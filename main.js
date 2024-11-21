
var quotes = [
          {
            text: "Be yourself; everyone else is already taken.",
            author: "Oscar Wild"
          },
          {
            text: "Success is not the key to happiness. Happiness is the key to success.",
            author: "Albert Schweitzer"
          },
          {
            text: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
          },
          {
            text: "It always seems impossible until it's done.",
            author: "Nelson Mandela"
          },
          {
            text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate.",
            author: "Ralph Waldo Emerson"
          }
        ];

          
           var QuoteIndex = 0;
    
          
           function updateQuote() {
             
             
             QuoteIndex = (QuoteIndex + 1) % quotes.length;
       
            
             var newQuote = quotes[QuoteIndex];
             document.getElementById('quote').textContent = `"${newQuote.text}"`;
             document.getElementById('author').textContent = `- ${newQuote.author}`;
           }
       
        

//         Another solution
    
     
// var quoteTxt = document.querySelector(".quote");
// var btnQuote = document.querySelector(".btn-quote");
// var authorEl = document.querySelector(".author");
// var speechEl = document.querySelector(".speach");
// var copyEl = document.querySelector(".copy");
// var messageEl = document.querySelector(".message");

// async function randomQuote() {
//   btnQuote.textContent = "loading";
//   var data = await fetch("https://quotes-api-self.vercel.app/quote");
//   var result = await data.json();
//   // var{ content , author } = result;
//   var { quote, author } = result;
//   quoteTxt.textContent = quote;
//   authorEl.textContent = author;
//   btnQuote.textContent = "new Quote";
//   // quoteTxt.textContent = author;con
//   // console.log(result);
// }

// function speechTxt() {
//   var speechText = new SpeechSynthesisUtterance();
//   speechText.text = `${quoteTxt.textContent}`;
//   speechText.voice = window.speechSynthesis.getVoices()[0];
//   window.speechSynthesis.speak(speechText);
// }
// copyEl.addEventListener('click', ()=>{
//   navigator.clipboard.writeText(quoteTxt.innerText);
//   messageEl.classList.add('active');
//   setInterval(() => {
//           messageEl.classList.remove('active');
//   }, 2500);
// });

// speechEl.addEventListener("click", speechTxt);
// btnQuote.addEventListener("click", randomQuote);
