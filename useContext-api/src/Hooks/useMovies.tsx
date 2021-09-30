import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from '../services/api';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface MoviesProviderProps {
  children: ReactNode
}
interface MovieContextData {
  genres: GenreResponseProps[]
  selectedGenreId: number
  selectedGenre: GenreResponseProps
  movies: MovieProps[]
  handleClickButton: (id: number) => void;
}

export const MoviesContext = createContext<MovieContextData>({} as MovieContextData)

export function MoviesProvider(props: MoviesProviderProps){
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <MoviesContext.Provider value={{
      genres,
      selectedGenreId,
      selectedGenre,
      movies,
      handleClickButton
    }}>
      {props.children}
    </MoviesContext.Provider>
  )
}

export function useMovies() {
  const context = useContext(MoviesContext)
  return context
}