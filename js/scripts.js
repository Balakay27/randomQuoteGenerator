function generateQuote() {
    const quotes = [
        {
        quote: "Power comes in response to a need, not a desire. You have to create that need.",
        author: "Son Goku, Dragon ball Z episode 178"
        },
        {
            quote: "Come on Kakarot, find a way, I've entrusted everything to you, my pride, my promise, EVERYTHING. I WONT TOLERATE FAILURE. Trespass into the domain of the Gods and use that might to conquer Jiren!",
            author: "Prince Vegeta, Dragon Ball Super episode 129"
        },
        {
            quote: "I am the warrior you've heard of in legends, pure of heart and awakened by fury, that's what I am. I am the Super Saiyan, Son Goku!",
            author: "Son Goku, Dragon Ball Z episode 95"
        }
            
        
        
        
    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotation").innerHTML = "&quot;" + quotes[arrayIndex].quote + "&quot;";
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
}

window.onload = function () {
    generateQuote();
}

document.getElementById("generate").addEventListener('click', generateQuote());