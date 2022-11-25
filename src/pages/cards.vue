<script setup></script>

<template>
    <div>
        <h1>Cards</h1>
        <d-card>
            <template #header>User Settings</template>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            omnis nemo repudiandae aut eaque reiciendis, doloremque officia
            harum voluptas cumque deleniti ad non cum saepe eum repellendus,
            eos, voluptatem similique!
            <template #footer>
                <div class="space-x-2 items-center flex">
                    <d-button primary>Submit</d-button>
                    <d-button>Cancel</d-button>
                </div>
            </template>
        </d-card>
    </div>
</template>
