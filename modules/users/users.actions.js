export const actions = {
  /**
   * Fetch all resources from an API.
   * 
   * @param { Object } context
   * @param { Object } payload
   * 
   * @usage this.$store.dispatch('users/FETCH_ALL')
   */
  'FETCH_ALL': async ({ dispatch, state, commit }, payload) => {
    console.log('[Users] fetch users', payload)
  },

  /**
   * Fetch a single resource from an API.
   * 
   * @param { Object } context
   * @param { Object } payload
   * 
   * @usage this.$store.dispatch('users/FETCH', {
   *  id: item.id | $route.params.id
   * })
   */
  'FETCH': async ({ dispatch, state, commit }, payload) => {
    console.log('[Users] fetch user', payload)
  },

  /**
   * Request to create a new record in API.
   * 
   * @param { Object } context
   * @param { Object } payload
   * 
   * @usage this.$store.dispatch('users/ADD', {
   *  data: this.form
   * })
   */
  'ADD': async ({ dispatch, state, commit }, payload) => {
    console.log('[Users] add user', payload)
  },

  /**
   * Request to update an existing record from an API.
   * 
   * @param { Object } context
   * @param { Object } payload
   * 
   * @usage this.$store.dispatch('users/UPDATE', {
   *  data: this.form
   * })
   */
  'UPDATE': async ({ dispatch, state, commit }, payload) => {
    console.log('[Users] update user', payload)
  },

  /**
   * Delete a resource from an API.
   * 
   * @param { Object } context
   * @param { Object } payload
   * 
   * @usage this.$store.dispatch('users/DELETE', {
   *  id: item.id | $route.params.id
   * })
   */
  'DELETE': async ({ dispatch, state, commit }, payload) => {
    console.log('[Users] delete user', payload)
  },

  /**
   * Restore a deleted resource from an API.
   * 
   * @param { Object } context
   * @param { Object } payload
   * 
   * @usage this.$store.dispatch('users/RESTORE', {
   *  id: item.id | $route.params.id
   * })
   */
  'RESTORE': async ({ dispatch, state, commit }, payload) => {
    console.log('[Users] restore user', payload)
  },

  /**
   * Permanently delete a resource from an API.
   * 
   * @param { Object } context
   * @param { Object } payload
   * 
   * @usage this.$store.dispatch('users/PERMANENTLY_DELETE', {
   *  id: item.id | $route.params.id
   * })
   */
  'PERMANENTLY_DELETE': async ({ dispatch, state, commit }, payload) => {
    console.log('[Users] permanently user', payload)
  },
}