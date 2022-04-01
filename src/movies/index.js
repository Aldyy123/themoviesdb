/**
 1. Harus punya akun https://www.themoviedb.org, Access kode API
*/
import {RenderComponent, btnAlert} from './script/Render.js'
const urlApi = "https://api.themoviedb.org/3/";
const urlImage = "https://image.tmdb.org/t/p/w500";

// Isi API key temen - temen yang sudah mendaftar dithemovie db ya
const api_key = "0d12dc45d21e4ed7e110b9ad8d1e293e";

// document.querySelector(".search-btn").addEventListener("click", async () => {
//   const value = document.getElementById("form-input").value;
//   const movies = await fecthApi(
//     `${urlApi}search/movie?api_key=${api_key}&query=${value}`
//   );
//   console.log(movies);
//   document.querySelector(".render").innerHTML = "";
//   renderDataCard(movies);
// });


Window.addEventListener("load", async () => {
  const renderComponent = new RenderComponent(api_key);
  if(window.location.pathname.substring(1) === 'index.html'){
    const data = await renderComponent.fetchApi(urlApi + "movie/popular?");
    renderComponent.render(data);
    console.log(chalk.bgMagenta('Loading'))
  }else{
    btnAlert()
    const parameter = new URLSearchParams(window.location.search)
    const data = await renderComponent.fetchApi(`${urlApi}movie/${parameter.get('id')}?`);
    renderComponent.detailMovie(data);
  }
  renderComponent.searchBtn()
});

export{
  urlImage
}