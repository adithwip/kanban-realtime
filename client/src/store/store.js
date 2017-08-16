import * as firebase from 'firebase'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const config = {
    apiKey: "AIzaSyAAhIKrSdiu8aNfy9LLuBvp36dNLZlze_0",
    databaseURL: "https://kanban-realtime.firebaseio.com",
    projectId: "kanban-realtime"
	}
	
const db = firebase.initializeApp(config).database()
const taskRef = db.ref('tasks')

export const store = new Vuex.Store({
	state: {
		tasks: []
	},
	mutations: {
		getTasks: function(state) {
			taskRef.on('value', snapshot => {
				state.tasks = []

				for (var prop in snapshot.val()) {
					state.tasks.push(snapshot.val()[prop])
				}
			})
		}
	},
	actions: {
		addTasks (store, context) {
			if (store.state.tasks.length > 0) {

				let ids = store.state.tasks[store.state.tasks.length - 1].id + 1

				db.ref(`tasks/${ids}`).set({
					id: ids,
					task: context.task,
					description: context.description,
					assignee: context.assignee,
					poin: context.poin,
					status: context.status
				})
			} else {
				db.ref(`tasks/1`).set({
					id: 1,
					task: context.task,
					description: context.description,
					assignee: context.assignee,
					poin: context.poin,
					status: context.status
				})
			}
		},
		removeTask (state, context) {
			db.ref(`tasks/${context}`).remove()
		},
		toWIP (state, context) {
			db.ref(`tasks/${context.id}`).set({
				id: context.id,
				task: context.task,
				description: context.description,
				assignee: context.assignee,
				poin: context.poin,
				status: 'wip'
			})
		},
		toToDo (state, context) {
			db.ref(`tasks/${context.id}`).set({
				id: context.id,
				task: context.task,
				description: context.description,
				assignee: context.assignee,
				poin: context.poin,
				status: 'tasktodo'
			})
		},
		toTesting (state, context) {
			db.ref(`tasks/${context.id}`).set({
				id: context.id,
				task: context.task,
				description: context.description,
				assignee: context.assignee,
				poin: context.poin,
				status: 'testing'
			})
		},
		toDone (state, context) {
			db.ref(`tasks/${context.id}`).set({
				id: context.id,
				task: context.task,
				description: context.description,
				assignee: context.assignee,
				poin: context.poin,
				status: 'done'
			})
		}
	},
	getters: {
		taskTodo (state) {
			return state.tasks.filter(task => {
				return task.status === "tasktodo"
			})
		},
		taskWIP (state) {
			return state.tasks.filter(task => {
				return task.status === "wip"
			})
		},
		taskTesting (state) {
			return state.tasks.filter(task => {
				return task.status === "testing"
			})
		},
		taskDone (state) {
			return state.tasks.filter(task => {
				return task.status === "done"
			})
		}
	}
})