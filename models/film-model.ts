import { Schema, model }  from 'mongoose';
const FilmSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    genre: {
        type: Array,
        required: true,
    },
    release_date: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    runtime: {
        type: String,
        required: true,
    },
    overview: {
        type: String,
        required: true,
    },
    _deletedAt: {
        type: String,
        default: null,
    },
});

export default model('Film', FilmSchema);
