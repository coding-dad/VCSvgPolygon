<template>
	<div class="workbench">
		<Challenge />
	</div>
</template>

<script>
export const data = {
	title: "",
	layout: "page"
};

import Challenge from "../components/Challenge";

export default {
	name: "Workbench",
	components: { Challenge }
};
</script>

<style scoped>
	.workbench {
		border: 1px solid orange;
		padding: 0.6rem;
	}
</style>
