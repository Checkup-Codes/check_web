<template>
    <td><img src="{{ ('public/checkupcodes-logo.png') }}" alt="Logo" /></td>
    <td>
        <div class="text-xl font-semibold">{{ name }}</div>
        <div class="flex gap-3 text-sm">
            <div class="bg-primary-tag_light my-2 w-36 rounded-lg p-1 text-center">{{ tag }}</div>
        </div>
        <div class="bg-primary-percent_progress rounded-md px-5 py-1 text-right text-primary-light">
            {{ precent }}
        </div>
    </td>
    <td class="m-2">
        <button class="rounded-md bg-primary-light p-1">Detaylar</button>
    </td>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
    name: String,
    tag: String,
    precent: String,
})

console.log(props.name)
</script>
