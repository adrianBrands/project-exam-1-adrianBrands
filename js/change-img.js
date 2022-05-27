const url = "https://mywebsite.no/wp-json/wp/v2/posts?_embed&per_page=12";


async function getResults() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results[0], results[1], results[2]);
    displayresults(results);
  } catch (error) {
    console.log(error);
  }
}

function displayresults(results) {







}