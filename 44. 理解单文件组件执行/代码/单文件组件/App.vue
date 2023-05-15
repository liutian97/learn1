<template>
	<div>
		<School />
		<Student />
	</div>

</template>

<script>

  // 引入子组件
  import School from "./School.vue"
  import Student from "./Student.vue"


	export default {
		name: 'App',

		// data () {
		// 	return {

		// 	}

		// },
		components: {
			School,
			Student
		}

	}
</script>

<style>
</style>