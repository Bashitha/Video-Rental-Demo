import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    { label: "Title", path: "title" },
    { label: "Genre", path: "genre.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Rate", path: "dailyRentalRate" },
    {
      key: "Like",
      content: (movie) => (
        <Like
          isLiked={movie.isLiked}
          onLike={() => this.props.onLike(movie)}
        ></Like>
      ),
    },
    {
      key: "Delete",
      content: (movie) => (
        <button
          className="btn btn-sm btn-danger"
          onClick={() => this.props.onDelete(movie)}
        >
          DELETE
        </button>
      ),
    },
  ];
  render() {
    const { movies, sortColumn, onSort } = this.props;
    return (
      <Table
        data={movies}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
