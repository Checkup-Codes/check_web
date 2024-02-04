<template>
    <div class="h-[100vh]">
        <ul class="space-y-5 px-5 pt-3 font-Prompt dark:text-primary">
            <li class="border-gray-500 border-b-2 pb-3">
                <a href="#" class="flex pl-3">
                    <HomeIcon class="text-black-500 h-6 w-6" />
                    <span class="py-auto px-3">{{ $t('sidebar.home') }}</span>
                </a>
            </li>
            <li class="">
                <a href="#" class="flex pl-3">
                    <InboxIcon class="text-black-500 h-6 w-6" />
                    <span class="py-auto px-3">{{ $t('sidebar.inbox') }}</span>
                </a>
            </li>
            <li class="">
                <a href="#" class="flex pl-3">
                    <HomeIcon class="text-black-500 h-6 w-6" />
                    <span class="py-auto px-3">{{ $t('sidebar.squat') }}</span>
                </a>
            </li>
            <li class="">
                <a href="#" class="flex pl-3">
                    <HomeIcon class="text-black-500 h-6 w-6" />
                    <span class="py-auto px-3">{{ $t('sidebar.dynamics') }}</span>
                </a>
            </li>
            <li class="">
                <a href="#" class="flex pl-3">
                    <HomeIcon class="text-black-500 h-6 w-6" />
                    <span class="py-auto px-3">{{ $t('sidebar.tactics') }}</span>
                </a>
            </li>
            <li class="">
                <a href="#" class="flex pl-3">
                    <CircleStackIcon class="text-black-500 h-6 w-6" />
                    <span class="py-auto px-3">{{ $t('sidebar.data-hub') }}</span>
                </a>
            </li>
            <li class="">
                <a href="#" class="flex pl-3">
                    <UsersIcon class="text-black-500 h-6 w-6" />
                    <span class="py-auto px-3">{{ $t('sidebar.staff') }}</span>
                </a>
            </li>
            <li class="">
                <a href="#" class="flex pl-3">
                    <HomeIcon class="text-black-500 h-6 w-6" />
                    <span class="py-auto px-3">{{ $t('sidebar.training') }}</span>
                </a>
            </li>
            <li class="border-gray-500 border-b-2 pb-5">
                <a href="#" class="flex pl-3">
                    <HomeIcon class="text-black-500 h-6 w-6" />
                    <span class="py-auto px-3">{{ $t('sidebar.medical-center') }}</span>
                </a>
            </li>
            <li class="">
                <a href="#" class="flex pl-3">
                    <PresentationChartLineIcon class="text-black-500 h-6 w-6" />
                    <span class="py-auto px-3">{{ $t('sidebar.schdule') }}</span>
                </a>
            </li>
            <li class="border-gray-500 border-b-2 pb-5">
                <a href="#" class="flex pl-3">
                    <HomeIcon class="text-black-500 h-6 w-6" />
                    <span class="py-auto px-3">{{ $t('sidebar.competitions') }}</span>
                </a>
            </li>
            <li class="">
                <a href="#" class="flex pl-3">
                    <MagnifyingGlassIcon class="text-black-500 h-6 w-6" />
                    <span class="py-auto px-3">{{ $t('sidebar.scouting') }}</span>
                </a>
            </li>
            <li class="border-gray-500 border-b-2 pb-5">
                <a href="#" class="flex pl-3">
                    <CubeTransparentIcon class="text-black-500 h-6 w-6" />
                    <span class="py-auto px-3">{{ $t('sidebar.transfers') }}</span>
                </a>
            </li>
            <li class="">
                <a href="#" class="flex pl-3">
                    <HomeIcon class="text-black-500 h-6 w-6" />
                    <span class="py-auto px-3">{{ $t('sidebar.club-info') }}</span>
                </a>
            </li>
            <li class="">
                <a href="#" class="flex pl-3">
                    <HomeIcon class="text-black-500 h-6 w-6" />
                    <span class="py-auto px-3">{{ $t('sidebar.club-vision') }}</span>
                </a>
            </li>
            <li class="border-gray-500 border-b-2 pb-5">
                <a href="#" class="flex pl-3">
                    <CurrencyDollarIcon class="text-black-500 h-6 w-6" />
                    <span class="py-auto dark:text-red-500 px-3">{{ $t('sidebar.finances') }}</span>
                </a>
            </li>
            <li class="">
                <a href="#" class="flex pl-3">
                    <HomeIcon class="text-black-500 h-6 w-6" />
                    <span class="py-auto px-3">{{ $t('sidebar.dev-centre') }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import {} from '@heroicons/vue/24/solid'
import {
    InboxIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    CubeTransparentIcon,
    CurrencyDollarIcon,
    CircleStackIcon,
    UsersIcon,
    PresentationChartLineIcon,
} from '@heroicons/vue/24/solid'
</script>
