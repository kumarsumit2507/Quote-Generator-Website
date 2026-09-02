const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote-txt")
const author = document.getElementById("reference")

async function getqoute(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;

}


getqoute(api_url);


copyquote.addEventListener("click", async () => {
    const textToCopy = `"${quote.textContent}" — ${author.textContent}`;

    try {
        await navigator.clipboard.writeText(textToCopy);
        console.log("Copied to clipboard:", textToCopy);
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
});

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML,
        "Tweet Window", "width=600, height=300");
}