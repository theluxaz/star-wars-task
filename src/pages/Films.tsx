import React, { useEffect, useState } from "react";
import axios from "axios";
import FilmBox from "../components/FilmBox";
import CharactersTable from "../components/CharactersTable";
import films_json from "../static/films.json";
import Sidebar from "../components/Sidebar";
import {
  Container,
  CircularProgress,
  Box,
  Alert,
  AlertTitle,
  CssBaseline,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  fetchFilmsLoading,
  fetchFilmsSuccess,
  fetchFilmsFailure,
} from "../redux/filmsSlice"; // Updated import
import "./Films.css";
import { fetchCharactersSuccess } from "../redux/characterSlice";
import { Film, Character } from "../static/types";

const TESTING = true;

interface CharacterList {
  episode_id: number;
  characters: Character[];
}

const Films: React.FC = () => {
  const [characterList, setCharacterList] = useState<CharacterList>({
    episode_id: 0,
    characters: [],
  });
  const [selected_film, setFilm] = useState<Film>({
    title: "",
    episode_id: 0,
    release_date: "",
    characters: [],
  });
  const dispatch = useAppDispatch();
  const films: Film[] = useAppSelector((state) => state.films.films);
  const status_films = useAppSelector((state) => state.films.status_films);
  const characterLists: CharacterList[] = useAppSelector(
    (state) => state.characters.character_lists
  );
  const [status_characters, setLoadingCharacters] = useState<string>("");

  useEffect(() => {
    if (TESTING) {
      dispatch(fetchFilmsSuccess(films_json.results));
    } else if (status_films !== "fulfilled" && films.length === 0) {
      dispatch(fetchFilmsLoading());
      axios
        .get("https://swapi.dev/api/films/")
        .then((response) => {
          dispatch(fetchFilmsSuccess(response.data.results));
        })
        .catch(() => {
          dispatch(fetchFilmsFailure());
        });
    }
  }, [dispatch]);

  const showPeople = async (selected_film: Film, character_urls: string[]) => {
    setFilm(selected_film);
    setLoadingCharacters("loading");
    if (
      characterList.characters.length > 0 &&
      characterList.episode_id === selected_film.episode_id
    ) {
    } else if (
      characterLists.find(
        (character_list_item) =>
          selected_film.episode_id === character_list_item.episode_id
      )
    ) {
      const foundCharacterList = characterLists.find(
        (character_list_item) =>
          selected_film.episode_id === character_list_item.episode_id
      );
      if (foundCharacterList) {
        setCharacterList(foundCharacterList);
        setLoadingCharacters("fulfilled");
      }
    } else {
      const characterData = await Promise.all(
        character_urls.map(async (url) => {
          const response = await axios.get<Character>(url); //"https://cors-anywhere.herokuapp.com/"+
          return response.data;
        })
      ).catch((error) => {
        console.error(error);
        setLoadingCharacters("failed");
      });

      if (characterData && characterData.length > 0) {
        setCharacterList({
          episode_id: selected_film.episode_id,
          characters: characterData,
        });
        dispatch(
          fetchCharactersSuccess({
            episode_id: selected_film.episode_id,
            characters: characterData,
          })
        );
        setLoadingCharacters("fulfilled");
      }
    }
  };

  return (
    <Box className="content">
      <CssBaseline />
      <Sidebar />

      <Container maxWidth={false}>
        <h1>Star Wars Films</h1>

        {status_films === "failed" ? (
          <Alert severity="error">
            <AlertTitle>Unexpected Error</AlertTitle>
            Something went wrong. Please try to refresh the page or try again
            later.
          </Alert>
        ) : (
          ""
        )}

        {status_films === "loading" ? (
          <CircularProgress />
        ) : (
          <Box className="films-container">
            {films.map((film) => (
              <FilmBox film={film} showPeople={showPeople} />
            ))}
          </Box>
        )}
      </Container>

      <Container maxWidth={false}>
        {selected_film.episode_id !== 0 ? (
          <>
            <h1>People in {selected_film.title}</h1>
            {status_characters === "loading" ? (
              <CircularProgress />
            ) : (
              <>
                <Box className="films-container">
                  <CharactersTable characters={characterList.characters} />
                </Box>
              </>
            )}
          </>
        ) : status_films === "loading" ? (
          ""
        ) : (
          <h1>Choose a film...</h1>
        )}

        {status_characters === "failed" ? (
          <Alert severity="error">
            <AlertTitle>Unexpected Error</AlertTitle>
            Something went wrong. Please try to refresh the page or try again
            later.
          </Alert>
        ) : (
          ""
        )}
      </Container>
    </Box>
  );
};

export default Films;
