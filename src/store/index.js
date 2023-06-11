import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    profile: JSON.parse(localStorage.getItem('profile')),
    token: localStorage.getItem('token'),
    errorMessage: '',
    infoMessage: '',
    setErrorLists: []
  },
  getters: {
    isAuthenticated: state => !!state.token,    
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    getToken() {
      return localStorage.removeItem('token');
    },
    clearToken(state) {
      localStorage.removeItem('profile');
      localStorage.removeItem('token');
      state.token = null;
    },
    setErrorMessage(state, message) {
      state.errorMessage = message;
    },
    setErrorLists(state, errorLists) {
      state.setErrorLists = errorLists;
    },
    setInfoMessage(state, message) {
      state.infoMessage = message;
    }
  },
  actions: {
    logout({ commit }) {
      commit('clearToken');
      router.push('/login');
    },
    async login({commit}, { email, password } ) {
      try {
      const response = await fetch(`${process.env.VUE_APP_API_BASE_URL}/user/login`, {
          method: 'POST',
          headers: { 
            'Content-Type':'application/json',
           },
          body: JSON.stringify({
            email,
            password
          })
        });
        if (response.ok) {
          const data = await response.json();
          commit('setProfile', data);
          commit('setToken', data.token);
          localStorage.setItem('profile', JSON.stringify(data))
          router.push('/users');
        } else {
          // Store the error message in the state
          commit('setErrorMessage', 'Incorrect password or email');
        }
      } catch (error) {
        commit('setErrorMessage', 'An error occurred. Please try again later.');
      }
    },
    async userRegister({commit}, userData ) {
      try {
        console.log(userData)
        const response = await fetch(`${process.env.VUE_APP_API_BASE_URL}/user/register`, {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'Accept':'application/json',
            },
            body: JSON.stringify(userData)
          });

          if (response.ok) {
            await response.json();
            commit('setInfoMessage', 'Congratulations Registered Success');
            router.push('/login');
          } else {
            const data = await response.json();
            // Store the error message in the state
            commit('setErrorLists', data.errors);
          }
      } catch (error) {
        console.error(error);
        commit('setErrorMessage', 'An error occurred. Please try again later.');
      }
    },
    async userUpdate({commit}, userProfile ) {
      try {
        console.log(userProfile)
        const response = await fetch(`${process.env.VUE_APP_API_BASE_URL}/users/${userProfile.id}`, {
            method: 'PUT',
            headers: { 
              'Content-Type': 'application/json',
              'Accept':'application/json',
              'Authorization': `Bearer ${this.state.token}`,
            },
            body: JSON.stringify(userProfile)
          });
          if (response.ok) {
            commit('setInfoMessage', 'Success Update User');
          } else {
            commit('setErrorMessage', 'Fail to update user');
          }
      } catch (error) {
        console.error(error);
        commit('setErrorMessage', 'An error occurred. Please try again later.');
      }
    },
    async userDestroy({commit}, id) {
      try {
        const response = await fetch(`${process.env.VUE_APP_API_BASE_URL}/users/${id}`, {
            method: 'DELETE',
            headers: { 
              'Content-Type': 'application/json',
              'Accept':'application/json',
              'Authorization': `Bearer ${this.state.token}`,
            },
          });
          if (response.ok) {
            commit('setInfoMessage', 'Success deleted User');
          } else {
            // Store the error message in the state
            commit('setErrorMessage', 'Fail to deleted user');
          }
      } catch (error) {
        console.error(error);
        commit('setErrorMessage', 'An error occurred. Please try again later.');
      }
    }
  },
  modules: {
  }
})
