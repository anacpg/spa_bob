import React, { PropTypes } from 'react';

import UserCard from '../UserCard';
import styles from './user-list.css';

const propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
}

function UserList ({ users }) {
  return (
    <div className={styles.root}>
      {users.map(user => {
        return (
          <UserCard
            key={user.id}
            name={user.name}
            surname={user.surname}
            bags={user.bags}
            username={user.username}
          />
        )
      })}
    </div>
  )
}

UserList.propTypes = propTypes

export default UserList
