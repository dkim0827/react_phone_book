import React, { Component } from "react";
import "./components/css/App.css";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  // Never use. (push, splice, unshift, pop) mutates
  // Better use. (concat, slice, map, filter) do not mutate
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: "Daniel Kim",
        phone: "778-111-1111"
      },
      {
        id: 1,
        name: "Dohee Lee",
        phone: "778-222-2222"
      }
    ]
  };

  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  };

  handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  };

  render() {
    const { information } = this.state;
    return (
      <div>
        <div className="welcome__header">
          <h1>REACT CONTACT BOOK</h1>
          <PhoneForm onCreate={this.handleCreate} />
        </div>
        <PhoneInfoList data={information} onRemove={this.handleRemove} />
      </div>
    );
  }
}

export default App;
