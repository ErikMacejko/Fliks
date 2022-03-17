import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});
 // instance.get()  bude https://api.themoviedb.org/3/ plus nieco v get().

export default instance;