<script>
	export let name = 'Joe Smith';
	export let image = 'https://thispersondoesnotexist.com/image';
	export let left = true;
</script>

<div class="border border-gray-300 bg-white rounded-sm p-3 sm:px-16 sm:py-6">
    <div>
        <div class="flex items-start">
            <img class="testimonial-image" src={image} alt="" />
            <div class="ml-4">
                <h4 class="text-lg font-bold">{name}</h4>
                <p class="mt-1">
                    <slot />
                </p>
            </div>
        </div>
    </div>
	<div class="hidden sm:block">
		{#if left}
			<div class="sm:flex">
				<div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
					<img class="testimonial-image" src={image} alt="" />
				</div>
				<div>
					<h4 class="text-lg font-bold">{name}</h4>
					<p class="mt-1">
						<slot />
					</p>
				</div>
			</div>
		{:else}
			<div class="sm:flex">
				<div class="text-right">
					<h4 class="text-lg font-bold">{name}</h4>
					<p class="mt-1">
						<slot />
					</p>
				</div>
				<div class="mb-4 flex-shrink-0 sm:mb-0 sm:ml-4">
					<img class="testimonial-image" src={image} alt="" />
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.testimonial-image {
		@apply h-32 w-32 rounded-full shadow border border-gray-400;
	}
</style>
