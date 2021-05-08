<script>
    import Review from '../components/Review.svelte';
    import Heading from "../components/Heading.svelte";
</script>

<Heading elementId={"testimonials"}>Just Ask Our Happy Customers</Heading>
<div class="mt-12 space-y-4 divide-y-2">
    <Review name={'Leo Selby'} image={'images/f4.jpeg'}>
        A great team with an amazing service. They make you feel like your part of the team. They have helped grow our business in many. Truly blessed to have meet them.
    </Review>
    <Review name={'Edna Silva'} image={'images/f2.jpeg'} left={false}>
        MicroAccounting go beyond financial development, and connects you to the essence of your business. It has been a pleasurable experience and we look forward to building on this relationship.
    </Review>
    
    <Review name={'Adam Corey'} city={'Christchurch'} image={'images/f3.jpeg'}>
        Fantastic to work with. No stress, great communication. Highly recommended for property and personal tax returns.
    </Review>
    <Review name={'Owen Creswell'} city={'Whangarei'} image={'images/f1.jpeg'} left={false}>
        Our experience working with MicroAccounting over 10+ years has been excellent. Professional in delivery, Timely in advice. A pleasure to have them as our Accountants and Business Advisers.
    </Review>
    
</div>