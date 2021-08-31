import React from "react";

class Navigation extends React.Component {
  render() {
    const { data, onChangePage } = this.props;
    const list = [];
    data.forEach((content) => {
      list.push(
        <li key={content.id}>
          <a
            href="/"
            id={content.id}
            onClick={(event) => {
              event.preventDefault();
              onChangePage(event);
            }}>
            {content.title}
          </a>
        </li>
      );
    });

    return (
      <nav>
        <ul>{list}</ul>
      </nav>
    );
  }
}

export default Navigation;
