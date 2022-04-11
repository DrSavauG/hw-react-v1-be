import filmService from '../services/film-service';

class FilmController {

    async getFilms(req, res, next) {
        try {
            const {page, limit} = req.query;
            if (page) {
                res.send(await filmService.getSome(page, limit));
            } else {
                res.type('json');
                return filmService.getFilms({_deletedAt: null}).pipe(res);
            }
        } catch (e) {
            next(e);
        }
    }

    async addFilm(req, res, next) {
        try {
            const userData = await filmService.addFilm(req.body);
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async getFilmById(req, res, next) {
        try {
            const {id} = req.params;
            const userData = await filmService.getItemById(id);
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async updateFilm(req, res, next) {
        try {
            const {id} = req.params;
            const userData = await filmService.updateFilm(id, req.body);
            res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async deleteFilm(req, res, next) {
        try {
            const {id} = req.params;
            const userData = await filmService.deleteFilm(id);
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new FilmController();