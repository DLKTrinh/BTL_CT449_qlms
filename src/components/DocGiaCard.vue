<script>
export default {
    props: {
        docgia: { type: Object, required: true },
    },
};
</script>

<template>
    <div>
        <div class="p-1">
            <strong>Tên:</strong>
            {{ docgia.name }}
        </div>
        <div class="p-1">
            <strong>E-mail:</strong>
            {{ docgia.email }}
        </div>
        <div class="p-1">
            <strong>Địa chỉ:</strong>
            {{ docgia.address }}
        </div>
        <div class="p-1">
            <strong>Điện thoại:</strong>
            {{ docgia.phone }}
        </div>
        <div class="p-1">
            <strong>Liên hệ yêu thích:&nbsp;</strong>
            <font-awesome-icon v-if="docgia.favorite" icon="check" />
            <font-awesome-icon v-else icon="xmark" />
        </div>
    </div>
</template>