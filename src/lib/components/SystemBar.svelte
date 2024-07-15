<script>
	import BatteryIcon from './BatteryIcon.svelte';
</script>

<section class="bg-android-bar h-[24px] flex items-center">
	<div class="flex-1 flex flex-row justify-between px-4 text-white">
		<!-- system bar left -->
		<div class="text-xs">16:32</div>
		<!-- system bar right -->
		<div class="flex flex-row gap-2">
			<div class="text-xs">5G</div>

			<svg class="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
				><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
					fill="#ffffff"
					d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z"
				/></svg
			>

			<div class="w-5 flex items-center">
				<BatteryIcon batteryLevel={40} />
			</div>
		</div>
	</div>
</section>
