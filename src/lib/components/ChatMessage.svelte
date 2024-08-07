<script lang="ts">
	import MessageBubbleLeft from './MessageBubbleLeft.svelte';
	import MessageBubbleRight from './MessageBubbleRight.svelte';
	import { cn } from './utils';

	const {
		align,
		text,
		isSubsequent = false,
		time
	}: { align: 'right' | 'left'; text: string; isSubsequent?: boolean; time: string } = $props();

	const color = $derived(align === 'right' ? 'wp-message' : 'white');
</script>

<!--Chat row-->
<div
	class={cn(
		'flex flex-row',
		align === 'right' ? 'justify-end' : 'justify-start',
		isSubsequent ? 'mt-1.5' : 'mt-2.5'
	)}
>
	<!-- msg wrapper (rect + svg path) -->
	<div class={cn('flex-1 min-h-4 pr-5 flex', align === 'right' ? 'justify-end' : 'justify-start')}>
		<!-- message rect wrapper (needed to create a new stacking context relative) -->
		<div class={cn('relative', align === 'left' && 'ml-5', 'max-w-[75%]')}>
			<!-- message svg bubble right -->
			{#if !isSubsequent && align === 'right'}
				<span class="absolute top-0 -right-2 w-[12px] h-[21px] z-0">
					<MessageBubbleRight />
				</span>
			{:else if !isSubsequent && align === 'left'}
				<span class="absolute top-0 -left-2 w-[12px] h-[21px] z-0">
					<MessageBubbleLeft />
				</span>
			{/if}
			<!-- message rect  -->
			<div
				class={cn(
					{
						'rounded-tl-[10px] rounded-tr-0 rounded-br-[10px] rounded-bl-[10px]':
							align === 'right' && !isSubsequent,
						'rounded-tl-0 rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]':
							align === 'left' && !isSubsequent,
						'rounded-[10px]': isSubsequent
					},
					'pt-[4px] pr-[5px] pb-[6px] pl-[7px]',
					`flex flex-row flex-wrap max-w-[280px]`,
					`bg-${color}`,
					'relative z-20',
					'hyphenate',
					'c-wp-message'
				)}
			>
				<p class="pl-1">{text}</p>
				<i class="fa fa-pencil" aria-hidden="true"></i>
				<span class="w-[84px]"></span>
				<div class="absolute right-[10px] bottom-[2px] flex flex-row items-center text-xs gap-1">
					<span class="text-black/45" data-time={time}>{time}</span>
					<div class="message-status msg-status" data-status="read">
						<svg
							viewBox="0 0 16 11"
							height="11"
							width="16"
							fill="#53bdeb"
							preserveAspectRatio="xMidYMid meet"
						>
							<path
								d="M11.0714 0.652832C10.991 0.585124 10.8894 0.55127 10.7667 0.55127C10.6186 0.55127 10.4916 0.610514 10.3858 0.729004L4.19688 8.36523L1.79112 6.09277C1.7488 6.04622 1.69802 6.01025 1.63877 5.98486C1.57953 5.95947 1.51817 5.94678 1.45469 5.94678C1.32351 5.94678 1.20925 5.99544 1.11192 6.09277L0.800883 6.40381C0.707784 6.49268 0.661235 6.60482 0.661235 6.74023C0.661235 6.87565 0.707784 6.98991 0.800883 7.08301L3.79698 10.0791C3.94509 10.2145 4.11224 10.2822 4.29844 10.2822C4.40424 10.2822 4.5058 10.259 4.60313 10.2124C4.70046 10.1659 4.78086 10.1003 4.84434 10.0156L11.4903 1.59863C11.5623 1.5013 11.5982 1.40186 11.5982 1.30029C11.5982 1.14372 11.5348 1.01888 11.4078 0.925781L11.0714 0.652832ZM8.6212 8.32715C8.43077 8.20866 8.2488 8.09017 8.0753 7.97168C7.99489 7.89128 7.8891 7.85107 7.75791 7.85107C7.6098 7.85107 7.4892 7.90397 7.3961 8.00977L7.10411 8.33984C7.01947 8.43717 6.97715 8.54508 6.97715 8.66357C6.97715 8.79476 7.0237 8.90902 7.1168 9.00635L8.1959 10.0791C8.33132 10.2145 8.49636 10.2822 8.69102 10.2822C8.79681 10.2822 8.89838 10.259 8.99571 10.2124C9.09304 10.1659 9.17556 10.1003 9.24327 10.0156L15.8639 1.62402C15.9358 1.53939 15.9718 1.43994 15.9718 1.32568C15.9718 1.1818 15.9125 1.05697 15.794 0.951172L15.4386 0.678223C15.3582 0.610514 15.2587 0.57666 15.1402 0.57666C14.9964 0.57666 14.8715 0.635905 14.7657 0.754395L8.6212 8.32715Z"
							></path>
						</svg>
					</div>
				</div>

				<div class="edit-delete-popup" data-messageboxid="1" data-type="sent">
					<i class="fa fa-trash delete-msg btn-remove" aria-hidden="true"></i>
					<i class="fa fa-reply reply-msg btn-remove" aria-hidden="true"></i>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.c-wp-message {
		box-shadow: 0 1px 1px rgb(0 0 0/13%);
	}
	.hyphenate {
		overflow-wrap: break-word;
		word-break: break-word;
		hyphens: auto;
		-webkit-hyphens: auto; /* For Safari and older versions of browsers */
		-moz-hyphens: auto; /* For Firefox */
		-ms-hyphens: auto; /* For IE/Edge */
	}
</style>
