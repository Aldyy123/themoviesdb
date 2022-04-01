import API, {sapaan} from './API.js'
import {urlImage} from '../index.js'

class RenderComponent extends API {
  constructor(apiKey) {
    super(apiKey);
    console.log(sapaan)
  }

  async render(data) {
    let htmlRender = document.querySelector(".render");
    console.log(data.results);
    data.results.forEach((result) => {
      const html = `
            <div class="col-md-4 mt-3">
                    <div class="card" style="width: 18rem;">
                      <img src="${
                        urlImage + result.poster_path
                      }" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${result.title}</h5>
                        <p class="card-text">${result.overview}</p>
                        <a href="/detail.html?id=${
                          result.id
                        }" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>
            `;
      htmlRender.innerHTML += html;
    });
  }

  detailMovie(data) {
    let htmlRender = document.querySelector(".render");
    console.log(data);
    htmlRender.innerHTML = `
      <div class="col-md-12 mt-3">
      <h1>${data.title}</h1>
        <img src="${urlImage + data.backdrop_path}"
        <div>
          <p>${data.overview}</p>
        </div>
      </div>
      `;
  }

  searchBtn() {
    document
      .querySelector(".search-btn")
      .addEventListener("click", async () => {
        const value = document.getElementById("form-input").value;
        document.querySelector(".render").innerHTML = "";
        this.render(`${urlApi}search/movie?query=${value}&`);
      });
  }
}

const btnAlert = (event) => {
    alert('Halooo')
}

export {
    RenderComponent,
    btnAlert
}