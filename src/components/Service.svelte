<script>
    export let name;
    export let image;
</script>

<div class="cursor-default relative bg-gray-900 rounded-sm">
    <div class="absolute z-10 left-0 top-0 sm:mt-6 text-white px-8 py-4 sm:py-10">
        <h3 class="mr-12 font-light text-3xl sm:text-4xl">{name}</h3>
        <ul class="ml-5 list-disc list-outside mt-2 sm:mt-4 text-sm sm:text-base">
            <slot></slot>
        </ul>
        <!-- <a class="mt-2 sm:mt-4 underline" href="">Tell Me More</a> -->
    </div>
    <img
        class="filter drop-shadow opacity-40"
        src="{image}"
        alt="{name}"
    />
</div>