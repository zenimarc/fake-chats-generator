<script lang="ts">
	import ChatMessage from '$lib/components/ChatMessage.svelte';
	import SystemBar from '$lib/components/SystemBar.svelte';
	import WhatsappHeader from '$lib/components/WhatsappHeader.svelte';

	const messages: {
		time: string;
		text: string;
		align: 'right' | 'left';
	}[] = [
		{
			time: '08:42 am',
			text: 'Hiiooooijjojojioijoijoijoijoijoijoijiooijijooooooo!',
			align: 'right'
		},
		{
			time: '08:42 am',
			text: 'NON LO SO ma',
			align: 'left'
		},
		{
			time: '08:43 am',
			text: 'ciaoo',
			align: 'left'
		}
	];
</script>

<div class="c-font-open-sans h-dvh flex items-center">
	<div class="w-[320px] h-[600px] bg-gray-200 mx-auto">
		<div class="h-full flex flex-col">
			<SystemBar />
			<WhatsappHeader username="John Doe" />
			<section class="c-chat flex-1">
				{#each messages as message, i}
					<ChatMessage
						align={message.align}
						text={message.text}
						time={message.time}
						isSubsequent={i > 0 && messages[i - 1].align === message.align}
					/>
				{/each}
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
