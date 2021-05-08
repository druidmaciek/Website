<script>
    import Review from '../components/Review.svelte';
</script>

<h2 class="sm:mx-40 text-2xl text-center text-gray-900 font-light">
    Read What our Satisfied clients have to say
</h2>
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