import React from "react";

class Header extends React.Component {
  render() {
    const { onChangePage } = this.props;
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              onChangePage();
            }}>
            WEB
          </a>
        </h1>
      </header>
    );
  }
}

export default Header;
