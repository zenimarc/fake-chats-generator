<script lang="ts">
	import WhatsappAvatar from './WhatsappAvatar.svelte';
	const { username }: { username: string } = $props();
</script>

<section class="flex items-center bg-android-bar h-14 px-2">
	<div class="flex-1 flex flex-row justify-between">
		<div class="flex flex-row gap-1">
			<div class="flex items-center">
				<img src="/icons/telegram-back-icon.webp" alt="back arrow" />
			</div>
			<div>
				<WhatsappAvatar {username} />
			</div>
		</div>
		<div class="w-24 flex items-center pr-2">
			<img src="icons/whatsapp-android-header-icon.webp" alt="actions" />
		</div>
	</div>
</section>
