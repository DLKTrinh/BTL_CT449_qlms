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
            <strong>Họ lót:</strong>
            {{ docgia.surname }}
        </div>
        <div class="p-1">
            <strong>Tên:</strong>
            {{ docgia.name }}
        </div>
        <div class="p-1">
            <strong>Ngày sinh:</strong>
            {{ docgia.birthday }}
        </div>
        <div class="p-1">
            <strong>Giới tính:</strong>
            {{ docgia.sex }}
        </div>
        <div class="p-1">
            <strong>Địa chỉ:</strong>
            {{ docgia.address }}
        </div>
        <div class="p-1">
            <strong>Điện thoại:</strong>
            {{ docgia.phone }}
        </div>
    </div>
</template>