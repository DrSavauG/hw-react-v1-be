import FilmSchema from "../models/film-model";
const JsonStreamStringify = require( "json-stream-stringify");

class FilmService {
    async getSome(page,limit=10) {
        return FilmSchema.find({ _deletedAt: null })
            .skip(page > 0 ? (page * 1 - 1) * limit : 0)
            .limit(+limit);
    }

     getFilms(arg) {
        return new JsonStreamStringify(FilmSchema.find(arg).stream());
    }

    async addFilm(arg) {
        const createFilm = new FilmSchema(arg);
        return await createFilm.save();
    }

    async getItemById(id) {
        return FilmSchema.find({_id: id});
    }

    async updateFilm(id, params) {
        return FilmSchema.updateOne({_id: id}, params);
    }

    async deleteFilm(id, params) {
        return FilmSchema.updateOne({_id: id}, {_deletedAt: Date.now()});
    }

}

export default new FilmService();