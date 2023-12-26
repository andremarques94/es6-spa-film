import { getFilm, getFilms } from "../service/filmService.js";
import filmView from "../view/filmView.js";

const init = async () => {
  
  const films = await getFilms();
  filmView.render(films);
};

export default { init };
