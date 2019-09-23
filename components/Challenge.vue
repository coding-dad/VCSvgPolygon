<template>
	<div class="challenge">
		<svg height="500" width="500">
			<polygon :points="myPolygon" fill="none" style="stroke:purple;stroke-width:1" />
		</svg>
		{{numPoints}}
		<input
			v-model="numPoints"
			class="slider is-fullwidth is-lage is-circle is-info"
			step="1"
			min="3"
			max="69"
			value="3"
			type="range"
		/>
	</div>
</template>

<script>
export default {
	name: "Challenge",

	data: () => ({
		numPoints: 3
	}),

	computed: {
		myPolygon() {
			const points = [];
			const radius = 125;
			const angle = (Math.PI * 2) / this.numPoints;

			for (let a = 0; a < Math.PI * 2; a += angle) {
				let x = 250 + Math.cos(a) * radius;
				let y = 250 + Math.sin(a) * radius;
				points.push(`${x}, ${y}`);
			}

			return points.join(" ");
		}
	}
};
</script>

<style scoped>
	.challenge {
		text-align: center;
	}
</style>
