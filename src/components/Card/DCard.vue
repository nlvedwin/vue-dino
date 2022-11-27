<template>
    <div class="bg-white rounded-md shadow inline-block">
        <div
            v-if="$slots.header"
            class="px-5 py-4 border-b text-lg font-semibold"
        >
            <slot name="header"></slot>
        </div>
        <div class="px-5 py-4">
            <slot></slot>
        </div>
        <div v-if="$slots.footer" class="px-5 py-4 border-t">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
