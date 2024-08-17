
var apiKey = "nWtpCuLqeQ/NZjBVxIEBIw==18OWUbvatlvmfxEa";
let jokeBox = document.getElementById("joke");
let btn = document.getElementById("btn");
console.log(btn)
console.log(jokeBox)

btn.addEventListener('click', () => {
    jokeBox.innerText="Updating..."
    btn.disabled=true;
    btn.innerText="Loading";

    async function fetchJoke() {
        try{
            let jokes = await fetch(
                'https://api.api-ninjas.com/v1/dadjokes?',
                {
                    method: "GET",
                    headers: {
                        "X-Api-Key": apiKey,
                    },
                })
            let result = await jokes.json();
            jokeBox.innerText=result[0].joke;
            btn.disabled=false;
            btn.innerText="Tell Me a Joke";

          

        }
        catch(err)
        {
            jokeBox.innerText="Something went wrong...";
            btn.disabled=false;
            btn.innerText="Tell Me a Joke";

        }
    }
    fetchJoke();
})







