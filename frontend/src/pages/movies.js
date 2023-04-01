import { useState } from 'react';
import data from './MovieData.json';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const mds = data.MovieData;

function Movies() {
  return (
    <div className="container">
      <h3>Joel Hilton's Movie Collection</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {mds.map((m) => (
            <tr key={m.Title}>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Movies;
