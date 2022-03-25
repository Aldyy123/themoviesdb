/**
 1. Harus punya akun https://www.themoviedb.org, Access kode API
*/
const urlApi =
  "https://api.themoviedb.org/3/";
const urlImage = 'https://image.tmdb.org/t/p/w500'

// Isi API key temen - temen yang sudah mendaftar dithemovie db ya
const api_key = 'isi apikeynya!!'

const fecthApi = async (url) => {
  try {
    let api = await fetch(url);
    api = await api.json();
    return api;
  } catch (error) {
    console.log(error);
  }
};


const renderDataCard = (data) => {
    console.log(data.results)
    let htmlRender = document.querySelector('.render')
    data.results.forEach((result) => {
        const html =  `
          <div class="col-md-4 mt-3">
                  <div class="card" style="width: 18rem;">
                    <img src="${urlImage + result.poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${result.title}</h5>
                      <p class="card-text">${result.overview}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
          `;
          htmlRender.innerHTML += html
    })
};


document.querySelector('.search-btn').addEventListener('click', async () => {
    const value = document.getElementById('form-input').value
    const movies = await fecthApi(`${urlApi}search/movie?api_key=${api_key}&query=${value}`)
    console.log(movies)
    document.querySelector('.render').innerHTML = ''
    renderDataCard(movies)
})
window.addEventListener("load", async () => {
  const data = await fecthApi(urlApi + 'movie/popular?api_key='+api_key);
  renderDataCard(data)
});
