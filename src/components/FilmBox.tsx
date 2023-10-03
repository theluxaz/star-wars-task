import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import "./FilmBox.css";
import { Film } from "../static/types";

interface FilmBoxProps {
  film: Film;
  showPeople: (selected_film: Film, character_urls: string[]) => Promise<void>;
}

const FilmBox: React.FC<FilmBoxProps> = (FilmBoxProps) => {
  const { title, episode_id, release_date, characters } = FilmBoxProps.film;
  return (
    <Card variant="outlined" className="film-card">
      <CardActionArea
        data-testid={`show-people-button-${episode_id}`}
        onClick={() => FilmBoxProps.showPeople(FilmBoxProps.film, characters)}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={require(`../static/episode${episode_id}.jpg`)}
          title={`Episode ${episode_id}`}
        />
        <CardContent>
          <h2>{title}</h2>
          <p>Episode: {episode_id}</p>
          <p>Released: {release_date}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FilmBox;
