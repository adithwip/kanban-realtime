<template lang="html">
<div class="col">
	<div v-for="task in tasks" id="cards-todo" class="card bg-warning mb-3" style="max-width: 20rem;">
		<div class="card-header">Testing</div>
		<div class="card-body">
			<h4 class="card-title">{{ task.task }}</h4>
			<p class="card-text">{{ task.description }}</p>
		</div>
		<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#testingModal">
			Task Detail
		</button>

			<!-- Modal -->
		<div class="modal fade" id="testingModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Testing: {{ task.task }}</h5>
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
						<button @click="toWIP(task)" type="button" class="btn btn-info" data-dismiss="modal">Work in Progress</button>
						<button @click="remove(task)" type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>
						<button @click="toDone(task)" type="button" class="btn btn-success" data-dismiss="modal">Done</button>
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
			return this.$store.getters.taskTesting
		}
	},
	methods: {
		remove(task) {
			if (window.confirm('Are you sure to delete this task?')) {
				this.$store.dispatch('removeTask', task.id)
			}
		},
		toWIP (task) {
			if (window.confirm('Make this task become work in progress again?')) {
				this.$store.dispatch('toWIP', task)
			}
		},
		toDone (task) {
			if (window.confirm('Make this task become done?')) {
				this.$store.dispatch('toDone', task)
			}
		}
	}
}
</script>

<style scoped>

</style>