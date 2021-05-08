<script>
	import Header from '../components/Header.svelte';
	import Layout from '../components/Layout.svelte';
  import Testimonials from "../components/Testimonials.svelte";
  import Footer from "../components/Footer.svelte";
  import Contact from "../components/Contact.svelte";
  import Services from "../components/Services.svelte";
</script>

<svelte:head>
	<title>MicroAccounting.co.uk</title>
</svelte:head>

<Header />

<Layout>
	<Services/>
</Layout>

<div id="testimonials" class="bg-gray-100 py-12">
	<Layout>
		<Testimonials/>
	</Layout>
</div>

<Layout>
	<Contact/>
</Layout>



<Footer/>