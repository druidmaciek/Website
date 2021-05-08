<script>
	import Heading from '../components/Heading.svelte';
	import { fade } from 'svelte/transition';

	let fullName = '';
	let email = '';
	let message = '';
	let showMessage = false;
	let showError = false;
	function handleClick() {
		if (fullName && email && message) {
			showMessage = true;
			showError  = false;
			fullName = '';
			email = '';
			message = '';
		} else {
			showError = true;
		}
	}
</script>

<div class="py-12 sm:px-12">
	<Heading elementId={'contact'}
		>Start working with us today, and send us a message below for a quote</Heading
	>

	<div class="mt-12 grid sm:grid-cols-2 gap-10">
		<div class="order-3">
			<img
				class="h-56 w-full object-cover object-bottom rounded-s shadow"
				src="https://images.unsplash.com/photo-1600208669687-f19af3638cb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
				alt=""
			/>
			<div class="mt-4 max-w-lg mx-auto">
				<h3 class="text-xl font-light  text-gray-900 sm:text-3xl">Get in touch</h3>
				<p class="mt-3 text-lg leading-6 text-gray-500">
					Have a question or request? We’ll respond to you with a personal reply as soon as
					possible.
				</p>
				<dl class="mt-8 text-base text-gray-500 flex justify-start sm:items-center">
					<div>
						<dt class="sr-only">Postal address</dt>
						<dd>
							<p>136 Victoria Street Weste</p>
							<p>Auckland, CBD 1010</p>
						</dd>
					</div>
					<div class="ml-8">
						<div>
							<dt class="sr-only">Phone number</dt>
							<dd class="flex">
								<!-- Heroicon name: outline/phone -->
								<svg
									class="flex-shrink-0 h-6 w-6 text-gray-400"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								<span class="ml-3"> +64 245-5587-5</span>
							</dd>
						</div>
						<div class="">
							<dt class="sr-only">Email</dt>
							<dd class="flex">
								<!-- Heroicon name: outline/mail -->
								<svg
									class="flex-shrink-0 h-6 w-6 text-gray-400"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<span class="ml-3"> help@microaccounting.nz </span>
							</dd>
						</div>
					</div>
				</dl>
			</div>
		</div>

		<div class="order-2 p-4 sm:p-8 bg-white shadow rounded">
			<form id="contact-form" class="mt-2 grid grid-cols-1 gap-y-6">
				<div>
					<label for="full_name" class="sr-only">Full Name</label>
					<input
						type="text"
						name="full_name"
						id="full_name"
						autocomplete="name"
						required
						bind:value={fullName}
						class="block w-full py-1.5 px-4 bg-transparent placeholder-gray-500 border-b focus:ring-primary-500 focus:border-primary-500 border-gray-300"
						placeholder="Full Name"
					/>
				</div>
				<div>
					<label for="email" class="sr-only">Email</label>
					<input
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						required
						bind:value={email}
						class="block w-full bg-transparent py-1.5 px-4 placeholder-gray-500 border-b border-gray-300"
						placeholder="Email"
					/>
				</div>
				<div>
					<label for="message" class="sr-only">Message</label>
					<textarea
						id="message"
						name="message"
						rows="6"
						required
						bind:value={message}
						class="resize-none block w-full bg-transparent py-1.5 px-4 placeholder-gray-500 border-b border-gray-300"
						placeholder="Message"
					/>
				</div>
				<div>
					{#if showMessage}
						<div class="flex justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class=" text-green-500 h-6 w-6"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>

						<p class="text-green-500 text-center font-light">
							Thanks for contacting us, {fullName || 'stranger'}! We will try to reply to your
							request as soon as possible.
						</p>
					{:else}
						<button
							type="button"
							on:click={handleClick}
							class="w-full py-2 px-4 border-2 rounded border-gray-900 font-semibold hover:bg-gray-900 hover:text-white"
							>Request a Quote</button
						>
						{#if showError}
							<p  transition:fade class="h-2 mt-2 text-red-500 text-center font-light">All fields are required.</p>
						{:else}
							<div class="h-2 mt-2"></div>
						{/if}
					{/if}
				</div>
			</form>
		</div>
	</div>
</div>
