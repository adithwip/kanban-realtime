<template lang="html">
	<div>
		<!-- Todo -->
			<div class="col">
				<div id="cards-testing" class="card text-white bg-warning mb-3" style="max-width: 20rem;">
					<div class="card-header">Testing</div>
					<div class="card-body">
						<h4 class="card-title">Testing card title</h4>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
					<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#wipModal">
						Task Detail
					</button>
				</div>
			</div>

		<!-- Modal -->
				<div class="modal fade" id="wipModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">Task Title dari Data</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<p class="test-center">
									<strong>Description:</strong>
									Ini dari data
								</p>
								<p class="test-center">
									<strong>Poin:</strong>
									Ini dari data
								</p>
								<p class="test-center">
									<strong>Assigned to:</strong>
									Ini dari data
								</p>
								<button type="button" class="btn btn-danger">Delete</button>
								<button type="button" class="btn btn-success">Next</button>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
								<button type="button" class="btn btn-primary">Add Task</button>
							</div>
						</div>
					</div>
				</div>
		<!-- Todo -->
	</div>
</template>

<script>
export default {
	
}
</script>

<style>

</style>