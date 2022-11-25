<template>
    <div class="bg-white rounded-md shadow inline-block">
        <div
            v-if="$slots.header"
            class="px-4 py-3 border-b text-lg font-semibold"
        >
            <slot name="header"></slot>
        </div>
        <div class="px-4 py-3">
            <slot></slot>
        </div>
        <div v-if="$slots.footer" class="px-4 py-2 border-t">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
