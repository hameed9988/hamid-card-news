// api url
const api_url = "https://hamid-news-api.herokuapp.com/news";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  //console.log(data);
  show(data);
}
// Calling that async function
getapi(api_url, api_url2);
// Function to define innerHTML for HTML table
function show(data) {
  let tab = ``;

  for (let r of data) {
    tab += ` <div class="container">
      <div class="card">
        <div class="card__header">
          <img
            src="${r.url}"
            alt="${r.url}"
            class="card__image"
            width="600"
          />
        </div>
        <div class="card__body">
          <span class="tag tag-blue">${r.source}</span>
          <h3> ${r.title}</h3>
        </div>

      </div>
    </div>`;
  }

  // Setting innerHTML as tab variable
  document.getElementById("employees").innerHTML = tab;
}
