<script>
	import ChatMessage from '$lib/components/ChatMessage.svelte';
	import SystemBar from '$lib/components/SystemBar.svelte';
	import WhatsappHeader from '$lib/components/WhatsappHeader.svelte';
</script>

<div class="c-font-open-sans h-dvh flex items-center">
	<div class="w-[320px] h-[600px] bg-gray-200 mx-auto">
		<div class="h-full flex flex-col">
			<SystemBar />
			<WhatsappHeader />
			<section class="c-chat flex-1 pt-2">
				<ChatMessage align="right" />
			</section>
		</div>
	</div>
</div>

<style>
	.c-chat {
		background: var(--whatsapp-bg-light);
	}
	.c-font-open-sans {
		font-family: 'Open Sans', sans-serif;
	}
</style>
