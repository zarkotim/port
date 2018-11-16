console.log("poz od skripte")
quotes = [{
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in sem sollicitudin, scelerisque ante vitae, cursus turpis",
    author: "- Author "
}, {
	content: "Normal size of the qute",
	author: "Author"
}
]




setInterval(function(){
    var quote = quotes[Math.floor(Math.random()*quotes.length)];


             document.getElementById("content-quote").innerHTML=quote.content;
             document.getElementById("content-author").innerHTML=quote.author;



}, 5000);




