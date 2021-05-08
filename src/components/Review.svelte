<script>
	export let name = 'Joe Smith';
	export let city = "Auckland";
	export let image = 'https://thispersondoesnotexist.com/image';
	export let left = true;
</script>

<div class="p-2 sm:px-12 sm:py-6">
    <div class="block sm:hidden">
        <div class="flex items-center">
            <img class="testimonial-image" src={image} alt="" />
            <div class="ml-4">
				<p >
                    “<slot />”
                </p>
                <h4 class="mt-1 text-lg font-bold">{name}, {city}</h4>
                
            </div>
        </div>
    </div>
	<div class="hidden sm:block">
		{#if left}
			<div class="sm:flex sm:items-center">
				<div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
					<img class="testimonial-image" src={image} alt="" />
				</div>
				<div>
					<p >
						“<slot />”
					</p>
					<h4 class="mt-1 text-lg font-bold">{name}, {city}</h4>
					
				</div>
			</div>
		{:else}
			<div class="sm:flex sm:items-center">
				<div class="text-right">
					<p>
						“<slot />”
					</p>
					<h4 class="mt-1 text-lg font-bold">{name}, {city}</h4>
				
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
