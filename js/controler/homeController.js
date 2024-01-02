import homeView from '../view/homeView.js';
import { getFilm } from '../service/filmService.js';

const init = () => {
    homeView.render(getFilm);
};

export default { init };
