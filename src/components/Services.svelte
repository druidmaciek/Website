<script>
	import Service from './Service.svelte';
	import Heading from '../components/Heading.svelte';
	import Header from './Header.svelte';
</script>

<div class="mt-12">
	<Heading elementId={'services'}
		>MicroAccounting is a business services company offering financial advice and
		management to Auckland businesses great and small.</Heading
	>
</div>

<div class="my-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
	<Service
		name={'Tax Advice and Management'}
		desc={'The burden of managing finances can stop a small business in its tracks - that’s where MicroAccounting comes in.'}
		image="https://images.unsplash.com/photo-1590650589327-3f67c43ad8a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
	>
	<li>Accounting & Bookkeeping:  Manage monthly business transactions</li>
	<li>Payroll: Management of payroll and taxes monthly and quarterly</li>
	<li>State Sales Tax: Reporting and advice on sales tax issues</li>
	</Service>

	<Service
		name={'Compliance and Reporting'}
		desc={'We assist you to achieve growth by carefully planning a dynamic business strategy plan.'}
		image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
	>
		<li>Taxes: Personal, Business, and Corporate</li>
		<li>Quarterly Payroll Reporting and Accounting </li>
		<li>Legally Required Corporate Documentation and Bookkeeping</li>
	</Service>
</div>
