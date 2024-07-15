<script lang="ts">
	export let batteryLevel: number;

	function getBatteryColor(level: number) {
		if (level > 50) {
			return 'green';
		} else if (level > 20) {
			return 'yellow';
		} else {
			return 'red';
		}
	}
</script>

<div class="battery">
	<div
		class="battery-level"
		style="width: {batteryLevel}%; background: {getBatteryColor(batteryLevel)}"
	></div>
</div>

<style>
	.battery {
		position: relative;
		width: 100%;
		padding-bottom: 40%; /* for aspect ratio  */
		border: 1px solid #fff;
		border-radius: 3px;
	}

	.battery::after {
		content: '';
		position: absolute;
		top: 25%;
		right: -4%;
		width: 4%;
		height: 50%;
		background: #fff;
		border-radius: 1px;
	}

	.battery-level {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		border-radius: 2px;
	}
</style>
