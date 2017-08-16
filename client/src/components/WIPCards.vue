<template lang="html">
<div class="col">
	<div v-for="task in tasks" id="cards-todo" class="card bg-primary mb-3" style="max-width: 20rem;">
		<div class="card-header">Work in Progress</div>
		<div class="card-body">
			<h4 class="card-title">{{ task.task }}</h4>
			<p class="card-text">{{ task.description }}</p>
		</div>
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#wipModal">
			Task Detail
		</button>

			<!-- Modal -->
		<div class="modal fade" id="wipModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">WIP: {{ task.task }}</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<p class="test-center">
							<strong>Description:</strong>
							{{ task.description }}
						</p>
						<p class="test-center">
							<strong>Poin:</strong>
							{{ task.poin }}
						</p>
						<p class="test-center">
							<strong>Assigned to:</strong>
							{{ task.assignee }}
						</p>
						<button @click="toToDo(task)" type="button" class="btn btn-info" data-dismiss="modal">To-Do</button>
						<button @click="remove(task)" type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>
						<button @click="toTesting(task)" type="button" class="btn btn-warning" data-dismiss="modal">Testing</button>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
	<!-- Modal -->

	</div>

</div>
</template>

<script>
export default {
	computed: {
		tasks () {
			return this.$store.getters.taskWIP
		}
	},
	methods: {
		remove(task) {
			if (window.confirm('Are you sure to delete this task?')) {
				this.$store.dispatch('removeTask', task.id)
			}
		},
		toToDo (task) {
			if (window.confirm('Make this task become to do?')) {
				this.$store.dispatch('toToDo', task)
			}
		},
		toTesting (task) {
			if (window.confirm('Make this task become testing?')) {
				this.$store.dispatch('toTesting', task)
			}
		}
	}
}
</script>

<style scoped>

</style>