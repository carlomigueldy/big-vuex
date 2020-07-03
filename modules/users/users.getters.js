export const getters = {
  activeUsers: state => state.users,

  'archived users': state => 
    state.users.filter(user => user.deleted_at),
}