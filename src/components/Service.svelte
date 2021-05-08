<script>
    export let name;
    export let desc;
    export let image;
</script>

<div class="relative bg-gray-900 rounded-sm">
    <div class="absolute z-10 left-0 bottom-0 text-white p-10">
        <h3 class="font-light text-3xl sm:text-4xl">{name}</h3>
        <p class="mt-2 sm:mt-4 text-sm sm:text-base">{desc}</p>
        <a class="mt-2 sm:mt-4 underline" href="">Tell Me More</a>
    </div>
    <img
        class="filter drop-shadow opacity-40"
        src="{image}"
        alt="{name}"
    />
</div>