<template>
	<div class="challenge">
		<svg height="500" width="500">
			<polygon :points="myPolygon" fill="none" style="stroke:purple;stroke-width:1" />
		</svg>
		{{numPoints}}
		<input
			class="slider is-fullwidth is-lage is-circle is-info"
			step="1"
			min="3"
			max="69"
			value="8"
			type="range"
		/>
	</div>
</template>

<script>
export default {
	name: "Challenge",

	data: () => ({
		numPoints: 8,
		myPolygon:
			"375, 250 338, 338 250, 375 161, 338 125, 250 161, 161 249, 125 338, 161"
	})
};
</script>

<style scoped>
	.challenge {
		text-align: center;
	}
</style>
