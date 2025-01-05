// Api URL
const url =
  "https://shazam.p.rapidapi.com/search?term=adele&locale=en-US&offset=0&limit=5";
// Headers ==> Api'ın bizi tanıyıp verileri iletmesi için gerekli obje
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "41a96a88f1mshf674b4ae150e12dp1aa775jsnbb0ca3dde5c4",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

// Apı Clası
export class API {
  
  async getPopular() {
    //     // Fetch ile api'dan verileri aldık
    //     const res = await fetch(url, options);
    //     // Veriyi js nesnesine çevirdik
    //     const data = await res.json();
    //     // Verinin içerisinde bulunan katmanlı yapıyı düzenledik ve şarkı verisine eriştik
    //     const formatted = data.tracks.hits.map((item) => item.track);

    //     return formatted;

    const data = await this.searchMusics("neffex");
    const data1 = await this.searchMusics("eminem");

    return [...data, ...data1];
  }

  async searchMusics(query) {
    const url = `https://shazam.p.rapidapi.com/search?term=${query}&locale=en-US`;

    const res = await fetch(url, options);

    const data = await res.json();

    const formatted = data.tracks.hits.map((item) => item.track);

    return formatted;
  }
}
