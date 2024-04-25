<script>
export default {
    props: {
        nxb: { type: Object, required: true },
    },
};
</script>

<template>
    <div>
        <div class="p-1">
            <strong>Tên:</strong>
            {{ nxb.name }}
        </div>
        <div class="p-1">
            <strong>Địa Chỉ:</strong>
            {{ nxb.address }}
        </div>
    </div>
</template>