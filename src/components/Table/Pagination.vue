<script setup></script>

<template>
    <div>
        <nav
            class="isolate d-inline-flex d--space-x-px d-rounded-md d-shadow-sm"
            aria-label="Pagination"
        >
            <a
                href="#"
                class="d-relative d-inline-flex d-items-center d-rounded-l-md d-border d-border-gray-300 d-bg-white d-px-2 d-py-2 d-text-sm d-font-medium d-text-gray-500 hover:d-bg-gray-50 focus:d-z-20"
            >
                <span class="d-sr-only">Previous</span>
                <!-- Heroicon name: mini/chevron-left -->
                <svg
                    class="d-h-5 d-w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clip-rule="evenodd"
                    />
                </svg>
            </a>
            <!-- Current: "d-z-10 d-bg-primary-50 d-border-primary-500 d-text-primary-600", Default: "d-bg-white d-border-gray-300 d-text-gray-500 hover:d-bg-gray-50" -->
            <a
                href="#"
                aria-current="page"
                class="d-relative d-z-10 d-inline-flex d-items-center d-border d-border-primary-500 d-bg-primary-50 d-px-4 d-py-2 d-text-sm d-font-medium d-text-primary-600 focus:d-z-20"
                >1</a
            >
            <a
                href="#"
                class="d-relative d-inline-flex d-items-center d-border d-border-gray-300 d-bg-white d-px-4 d-py-2 d-text-sm d-font-medium d-text-gray-500 hover:d-bg-gray-50 focus:d-z-20"
                >2</a
            >
            <a
                href="#"
                class="d-relative d-hidden d-items-center d-border d-border-gray-300 d-bg-white d-px-4 d-py-2 d-text-sm d-font-medium d-text-gray-500 hover:d-bg-gray-50 focus:d-z-20 md:d-inline-flex"
                >3</a
            >
            <span
                class="d-relative d-inline-flex d-items-center d-border d-border-gray-300 d-bg-white d-px-4 d-py-2 d-text-sm d-font-medium d-text-gray-700"
                >...</span
            >
            <a
                href="#"
                class="d-relative d-hidden d-items-center d-border d-border-gray-300 d-bg-white d-px-4 d-py-2 d-text-sm d-font-medium d-text-gray-500 hover:d-bg-gray-50 focus:d-z-20 md:d-inline-flex"
                >8</a
            >
            <a
                href="#"
                class="d-relative d-inline-flex d-items-center d-border d-border-gray-300 d-bg-white d-px-4 d-py-2 d-text-sm d-font-medium d-text-gray-500 hover:d-bg-gray-50 focus:d-z-20"
                >9</a
            >
            <a
                href="#"
                class="d-relative d-inline-flex d-items-center d-border d-border-gray-300 d-bg-white d-px-4 d-py-2 d-text-sm d-font-medium d-text-gray-500 hover:d-bg-gray-50 focus:d-z-20"
                >10</a
            >
            <a
                href="#"
                class="d-relative d-inline-flex d-items-center d-rounded-r-md d-border d-border-gray-300 d-bg-white d-px-2 d-py-2 d-text-sm d-font-medium d-text-gray-500 hover:d-bg-gray-50 focus:d-z-20"
            >
                <span class="d-sr-only">Next</span>
                <!-- Heroicon name: mini/chevron-right -->
                <svg
                    class="d-h-5 d-w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clip-rule="evenodd"
                    />
                </svg>
            </a>
        </nav>
    </div>
</template>
