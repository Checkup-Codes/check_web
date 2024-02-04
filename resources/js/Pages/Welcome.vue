<script setup>
import { Head, Link } from '@inertiajs/vue3'
import GuestLayout from '@/Layouts/GuestLayout.vue'

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <Head title="Home" />

    <GuestLayout>
        <!--<div v-if="canLogin" class="">
            <Link
                v-if="$page.props.auth.user"
                :href="route('dashboard')"
                class=""
                >Dashboard</Link>
           
            <template v-else>
                <Link
                    :href="route('login')"
                    class=""
                    >Log in</Link
                >
               
                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >Register</Link
                >
            </template>
        </div> -->
        <div class="p-5 dark:text-primary">
            <div class="py-6 text-lg">
                Site yapma aşaması tatlı tatlı devam etmekte. Open source kodlamaya devam ediyorum. Contributor olmak
                için {{ $t('register.submit') }}
                <a href="https://discord.gg/9C4JHVjjcd" class="text-pink-700"> DC</a>
                gel
            </div>

            <article class="lg:prose-xl prose-neutral">
                <h1>Garlic bread with cheese: What the science tells us</h1>
                <p>
                    For years parents have espoused the health benefits of eating garlic bread with cheese to their
                    children, with the food earning such an iconic status in our culture that kids will often dress up
                    as warm, cheesy loaf for Halloween.
                </p>
                <p>
                    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
                    springing up around the country.
                </p>
                <!-- ... -->
            </article>
        </div>
    </GuestLayout>
</template>

<style></style>
