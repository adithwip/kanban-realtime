<template lang="html">
	<!-- Cards -->
	<div class="container-fluid">
		<div class="row">
			
			<!-- Todo -->
			<TodoCards></TodoCards>

			<!-- WIP -->
			<WIPCards></WIPCards>

			<!-- Testing -->
			<TestingCards></TestingCards>

			<!-- Done -->
			<DoneCards></DoneCards>

		</div>
	</div>
</template>

<script>
import TodoCards from '@/components/TodoCards'
import WIPCards from '@/components/WIPCards'
import TestingCards from '@/components/TestingCards'
import DoneCards from '@/components/DoneCards'
export default {
	components: {
		TodoCards,
		WIPCards,
		TestingCards,
		DoneCards
	}
}
</script>

<style>

</style>