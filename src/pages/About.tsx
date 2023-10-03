import React from "react";
import Sidebar from "../components/Sidebar";
import {
  Box,
  CssBaseline,
  Container,
} from "@mui/material";

import "./About.css";

const About: React.FC = () => {
  return (
    <Box className="content">
      <CssBaseline />
      <Sidebar />
      <Container maxWidth={false}>
        <h1>About Star Wars</h1>
        <p>
          Star wars is an American epic space opera multimedia franchise created
          by George Lucas, which began with the eponymous 1977 film and quickly
          became a worldwide pop culture phenomenon. The franchise has been
          expanded into various films and other media, including television
          series, video games, novels, comic books, theme park attractions, and
          themed areas, comprising an all-encompassing fictional universe. Star
          Wars is one of the highest-grossing media franchises of all time.
        </p>

        <p>
          The original 1977 film, retroactively subtitled episode iv: a new
          hope, was followed by the sequels episode v: the empire strikes back
          (1980) and episode vi: return of the jedi (1983), forming the original
          star wars trilogy. Lucas later returned to the series to direct a
          prequel trilogy, consisting of episode i: the phantom menace (1999),
          episode ii: attack of the clones (2002), and episode iii: revenge of
          the sith (2005). In 2012, lucas sold his production company to disney,
          relinquishing his ownership of the franchise. This led to a sequel
          trilogy, consisting of episode vii: the force awakens (2015), episode
          viii: the last jedi (2017), and episode ix: the rise of skywalker
          (2019).
        </p>

        <p>
          All nine films, collectively referred to as the "skywalker saga", were
          nominated for academy awards, with wins going to the first two
          releases. Together with the theatrical live action "anthology" films
          rogue one (2016) and solo (2018), the combined box office revenue of
          the films equated to over us$10 billion, making star wars the
          third-highest-grossing film franchise of all time.
        </p>
      </Container>
    </Box>
  );
};

export default About;
