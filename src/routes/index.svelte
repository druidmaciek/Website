<script>
	import Header from '../components/Header.svelte';
	import Layout from '../components/Layout.svelte';
	import Testimonials from '../components/Testimonials.svelte';
	import Footer from '../components/Footer.svelte';
	import Contact from '../components/Contact.svelte';
	import Services from '../components/Services.svelte';
	import About from "../components/About.svelte";
</script>

<svelte:head>
	<title>MicroAccounting.nz</title>
</svelte:head>

<Header />

<Layout>
	<Services />
</Layout>

<div class="bg-gray-100 py-12">
	<Layout>
		<Testimonials />
	</Layout>
</div>

<Layout>
	<Contact />
</Layout>

<div class="bg-gray-100 py-12">
	<Layout>
		<About/>
	</Layout>
</div>
<Footer />
