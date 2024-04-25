<script>
export default {
    props: {
        sach: { type: Object, required: true },
    },
};
</script>

<template>
    <div>
        <div class="p-1">
            <strong>Tên:</strong>
            {{ sach.name }}
        </div>
        <div class="p-1">
            <strong>Mật khẩu:</strong>
            {{ sach.price }}
        </div>
        <div class="p-1">
            <strong>Vị trí:</strong>
            {{ sach.quantity }}
        </div>
        <div class="p-1">
            <strong>Địa chỉ:</strong>
            {{ sach.year }}
        </div>
        <div class="p-1">
            <strong>Điện thoại:</strong>
            {{ sach.publisher }}
        </div>
        <div class="p-1">
            <strong>Tac gia:</strong>
            {{ sach.author }}
        </div>
    </div>
</template>