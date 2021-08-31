import React from "react";

class Article extends React.Component {
  render() {
    const { title, desc } = this.props;
    return (
      <header>
        <h2>{title}</h2>
        <p>{desc}</p>
      </header>
    );
  }
}

export default Article;
