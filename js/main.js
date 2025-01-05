// API classını import et
import { API } from "./api.js";
import { UI } from "./ui.js";
const ui = new UI();

const api = new API();

document.addEventListener("DOMContentLoaded", () => {
  // Loaderı render et
  ui.renderLoader();

  api
    .getPopular()
    .then((data) => ui.renderCards(data))
    .catch((err) => {
      console.log("Hataaa:", err);
      alert("Üzgünüz bir hata oluştu :(");
    });
});

ui.form.addEventListener("submit", (e) => {
  e.preventDefault();
  // İnputtaki arama parametresine eriş
  const query = e.target[0].value;

  if (query.trim() === "")
    return alert("Lütfen geçerli bir arama işlemi gerçeklesştiriniz");

  // Loaderı render et
  ui.renderLoader();

  // Başlığı güncelle
  ui.updateTitle(query + " için sonuçlar");

  api
    .searchMusics(query)
    // Gelen şarkı verileriyle ekrana kartları render et
    .then((data) => ui.renderCards(data))
    // Hata varsa bunu yakala ve uyarı ver
    .catch((err) => {
      alert("İşlem gerçekleştirilemedi");
      console.log(err);
    });
});

ui.list.addEventListener("click", (e) => {
  if (e.target.className == "play") {
    const card = e.target.closest(".card");

    const data = card.dataset;

    console.log(data);

    ui.renderPlayer(data);

    console.log(ui);
  }
});
