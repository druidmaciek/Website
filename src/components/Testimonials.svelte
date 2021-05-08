<script>
    import Review from '../components/Review.svelte';
    import Heading from "../components/Heading.svelte";
</script>

<Heading elementId={"testimonials"}>Read What our Satisfied clients have to say</Heading>
<div class="mt-12 space-y-4">
    <Review name={'Diego Rivera'} image={'images/f4.jpeg'}>
        Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis
        voluptatem. Minus quidem ipsam quia iusto.
    </Review>
    <Review name={'Edna Silva'} image={'images/f2.jpeg'} left={false}>
        Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis
        voluptatem. Minus quidem ipsam quia iusto.
    </Review>
    
    <Review name={'Adam Wathan'} image={'images/f3.jpeg'}>
        Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis
        voluptatem. Minus quidem ipsam quia iusto.
    </Review>
    <Review name={'Adam Wathan'} image={'images/f1.jpeg'} left={false}>
        Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis
        voluptatem. Minus quidem ipsam quia iusto.
    </Review>
    
</div>