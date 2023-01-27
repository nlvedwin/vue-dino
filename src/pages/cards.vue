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
                <div class="d-space-x-2 d-items-center d-flex">
                    <d-button primary>Submit</d-button>
                    <d-button>Cancel</d-button>
                </div>
            </template>
        </d-card>

        <div class="d-mt-4">
            <d-card title="Edwin Encomienda"> Edwin </d-card>
        </div>
    </div>
</template>
