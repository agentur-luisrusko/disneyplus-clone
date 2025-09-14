import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const TOKEN = process.env.REACT_APP_TMDB_TOKEN;

export default function useMovies() {
    const [movies, setMovies] = useState({
        recommend: [],
        newDisney: [],
        original: [],
        trending: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/discover/movie?language=de-DE&api_key=${API_KEY}`,
                    {
                        headers: {
                        Authorization: `Bearer ${TOKEN}`,
                        "Content-Type": "application/json;charset=utf-8",
                        },
                    }
                );

                if (!res.ok) {
                    throw new Error(`HTTP-Fehler: ${res.status}`);
                }

                const data = await res.json();

                const formatted = data.results.map((movie) => ({
                    id: movie.id,
                    title: movie.title,
                    image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    overview: movie.overview,
                    date: movie.release_date,
                }));

                const groups = {
                    recommend: formatted.slice(0, 4),
                    newDisney: formatted.slice(4, 8),
                    original: formatted.slice(8, 12),
                    trending: formatted.slice(12, 16),
                };

                setMovies(groups);
            } catch (err) {
                setError(err);
                console.error("Fehler beim Laden der TMDb-Daten:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchMovies();
    }, []);

    return { movies, loading, error };
}
