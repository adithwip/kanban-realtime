<template>
	<div>
		<navbar></navbar>
		<cards></cards>
	</div>	
</template>

<script>
import Navbar from '@/components/Navbar'
import Cards from '@/components/Cards'
export default {
	components: {
		Navbar,
		Cards
	},
	created () {
		this.$store.commit('getTasks')
	}
}
</script>

<style>

#cards-todo {
	width: 280px;
	height: auto;
}

#cards-wip {
	width: 280px;
	height: auto;
}

#cards-testing {
	width: 280px;
	height: auto;
}

#cards-done {
	width: 280px;
	height: auto;
}

.input-group {
	margin: 40px 40px;
}

.container-fluid {
	margin-top: 20px;
}

.col {
	/* width: 320px; */
	height: auto;
	padding: 10px 20px;
}

.card-header {
	color: #fff;
}

.card-body {
	color: #fff;
}

</style>
