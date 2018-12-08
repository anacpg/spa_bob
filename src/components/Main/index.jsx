import React, { Component } from 'react';

import UserList from '../UserList';

class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {
      users: [
        {name: 'Rosa', surname: 'Roman', bags:10, username: 'rosar'},
        {name: 'Maria', surname: 'Santos', bags:4, username: 'marias'}
      ]
    }
  }

  render () {
    return (
      <div>
        <UserList
          users={this.state.users}
        />
      </div>
    )
  }
}

export default Main
