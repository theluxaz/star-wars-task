import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Character } from "../static/types";

interface Props {
  characters: Character[];
}

const CharactersTable: React.FC<Props> = ({ characters }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>Birth Year</TableCell>
          <TableCell>Mass</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {characters.map((character, index) => (
          <TableRow key={index}>
            <TableCell>{character.name}</TableCell>
            <TableCell>{character.gender}</TableCell>
            <TableCell>{character.birth_year}</TableCell>
            <TableCell>{character.mass}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CharactersTable;
