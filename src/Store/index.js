/* eslint-disable */

import Vuex from 'vuex'
import axios from '@/axios'

export default Vuex.createStore({

    modules: {},

    state: {
        item: null,
        items: [],
        editingItem: {
            item: {},
            edit: false
        },
        error: "",
        loading: {
            id: null,
            stat: false
        },
    },
    getters: {
        item: state => state.item,
        items: state => state.items,
        editingItem: state => state.editingItem,
        error: state => state.error,
        loading: state => state.loading,
    },
    mutations: {

        addItem(state, item) {
            item.id = Math.random(1).toString().substring(1, 4)
            state.items.unshift(item)
            state.item = ''
        },

        setItem(state, item) {
            state.item = item
        },

        setItems(state, items) {
            state.items = items
        },

        removeItem(state, removedItem) {
            const itemIndex = state.items.findIndex(item => item.title == removedItem.title)
            state.items.splice(itemIndex, 1)
        },

        markCompleteItem(state, { id, checked }) {
            const itemIndex = state.items.findIndex(item => item.id == id)
            const item = state.items[itemIndex]
            checked ? item.completed_at = new Date() : item.completed_at = null
        },

        setItemEditing(state, { item, edit }) {
            state.editingItem = {
                item: item || {},
                edit
            }
        },

        updateTodo(state, {itemIndex, editedItem}) {
            state.items[itemIndex].title = editedItem
        },

        setError(state, error) {
            state.error = error
        },

        setLoading(state, { stat, id }) {
            state.loading.id = id || null
            state.loading.stat = stat
        }

    },
    actions: {

        async addItem({ state, commit, dispatch }) {
            
            if(state.item == null || state.item == '') {
                commit('setError', 'Item field is required')
                return
            }

            if(state.items.find(item => item.title.toLowerCase() == state.item.toLowerCase())) {
                commit('setError', 'Item already exists')
                return false
            }
            
            try {
                const item = {
                    title: state.item,
                    description: 'this is a description',
                    color: 'red',
                    icon: 'pen',
                    completed_at: null
                }
    
                commit('addItem', item)
                commit('setLoading', { id: 'add', stat: true })
                const { data } = await axios.post('item/store', item)
                dispatch('updateItemId', data)
            }
            catch(e) {
                throw e
                commit('removeItem', dbItem)
                commit('setError', 'Item could not be added')
            }
            finally {
                commit('setLoading', { id: 'add', stat: true })
            }
            
        },

        updateItemId({state}, dbItem) {
            const itemIndex = state.items.findIndex(item => item.title == dbItem.title)
            state.items[itemIndex].id = dbItem.id
        },

        async updateTodo({ state, commit }, editedItem) {
            
            const itemId = state.editingItem.item.id
            const itemIndex = state.items.findIndex(item => itemId == item.id)
            const oldItem = { ...state.items[itemIndex] }

            commit('updateTodo', { itemIndex, editedItem })
            commit('setItemEditing', { edit: false })
            
            const item = {
                title: editedItem                
            }

            try {
                commit('setLoading', { id: 'edit', stat: true })
                await axios.put(`item/edit/${itemId}`, item)
            }
            catch(e) {
                throw e
                commit('updateTodo', { itemIndex, editedItem: oldItem.title })
                commit('setError', 'Could not update item')
            }
            finally {
                commit('setLoading', { id: 'edit', stat: false })
            }
        },

        async getItems({ commit }) {
            try {
                commit('setLoading', { id: 'items', stat: true })
                const { data } = await axios.get('items')
                commit('setItems', data)
            }
            catch(e) {
                commit('setError', 'Items could not be fetched')
            }
            finally {
                commit('setLoading', { stat: false })
            }
        },

        async markCompleteItem({ commit }, { id, checked }) {
            try {
                commit('setLoading', { id: 'update', stat: true })
                commit('markCompleteItem', { id, checked })
                axios.put(`item/complete/${id}`)
            }
            catch(e) {
                throw e
                commit('markCompleteItem', { id, checked: false })
                commit('setError', 'Items could not be marked completed')
            }
            finally {
                commit('setLoading', { stat: false })
            }
        }

    }

})
