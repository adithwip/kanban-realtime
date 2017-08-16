<template lang="html">
	<div class="container">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">Kanban Realtime</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
				</ul>
				<form class="form-inline my-2 my-lg-0">
					<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addTaskModal">
						Add Task
					</button>

					<!-- Modal -->
					<div class="modal fade" id="addTaskModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLabel">Add some Task</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form>
										<div class="input-group">
											<span class="input-group-addon" id="basic-addon1">Task</span>
											<input v-model="task" type="text" class="form-control" placeholder="Task title?" aria-label="Username" aria-describedby="basic-addon1">
										</div>
										<div class="input-group">
											<span class="input-group-addon" id="basic-addon1">Description</span>
											<input v-model="description" type="text" class="form-control" placeholder="Just a short one" aria-label="Username" aria-describedby="basic-addon1">
										</div>
										<div class="input-group">
											<span class="input-group-addon" id="basic-addon1">Assign</span>
											<input v-model="assignee" type="text" class="form-control" placeholder="Assign to who?" aria-label="Username" aria-describedby="basic-addon1">
										</div>
										<div class="input-group">
											<span class="input-group-addon" id="basic-addon1">Poin</span>
											<input v-model="poin" type="text" class="form-control" placeholder="How much poin?" aria-label="Username" aria-describedby="basic-addon1">
										</div>
									</form>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
									<button @click="addTask" type="button" data-dismiss="modal" class="btn btn-primary">Add Task</button>
								</div>
							</div>
						</div>
					</div>

				</form>
			</div>
		</nav>
  </div>
</template>

<script>
export default {
	data () {
		return {
			task: '',
			description: '',
			assignee: '',
			poin: ''
		}
	},
	methods: {
		addTask (event) {
			event.preventDefault()
			if (this.task && this.assignee && !isNaN(this.poin)) {
				let payload = {
					task: this.task,
					description: this.description,
					assignee: this.assignee,
					poin: this.poin,
					status: 'tasktodo'
				}

				this.task = ''
				this.description = ''
				this.assignee = ''
				this.poin = ''
				
				this.$store.dispatch('addTasks', payload)
			} else {
				console.log("ERROR: Poin is not a number")
			}
		}
	}
}
</script>

<style>

</style>
