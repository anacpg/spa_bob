import React, { PropTypes, Component } from 'react';
import moment from 'moment';
import styles from './usercard.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.number.isRequired,
  bags: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
}

class UserCard extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={styles.root}>
        <h3>{this.props.name} {this.props.surname}</h3>
        <div>
          <label>Username: {this.props.username}</label>
        </div>
        <div>
          <label>Bags: {this.props.bags}</label>
        </div>
      </div>
    )
  }
}

UserCard.propTypes = propTypes

export default UserCard
