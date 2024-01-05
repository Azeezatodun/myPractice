const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTitle = form.elements.query.value;
  const config = { params: { q: searchTitle } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  makeImage(res.data);
  console.log(res.data);
  form.elements.query.value = "";
});

const makeImage = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
