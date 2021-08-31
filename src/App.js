import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Article from "./Article";
import data from "./data";

class App extends React.Component {
  state = {
    mode: "welcome",
    welcome: { title: "Welcome", desc: "Hello, Web!" },
    selectedContent_id: 1,
    data,
  };
  render() {
    const { mode, welcome, data, selectedContent_id } = this.state;
    let _title = null;
    let _desc = null;
    if (mode === "welcome") {
      _title = welcome.title;
      _desc = welcome.desc;
    } else if (mode === "read") {
      for (let i = 0; i < data.length; i++) {
        const id = data[i].id;
        if (id === selectedContent_id) {
          _title = data[i].title;
          _desc = data[i].desc;
          break;
        }
      }
    }

    return (
      <div>
        <Header
          onChangePage={() => {
            this.setState({ mode: "welcome" });
          }}
        />
        <Navigation
          data={data}
          onChangePage={(event) => {
            this.setState({
              mode: "read",
              selectedContent_id: Number(event.target.id),
            });
          }}
        />
        <Article title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
