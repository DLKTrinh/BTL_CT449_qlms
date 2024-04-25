<script>
export default {
    props: {
        nhanvien: { type: Object, required: true },
    },
};
</script>

<template>
    <div>
        <div class="p-1">
            <strong>Tên:</strong>
            {{ nhanvien.name }}
        </div>
        <div class="p-1">
            <strong>Mật khẩu:</strong>
            {{ nhanvien.password }}
        </div>
        <div class="p-1">
            <strong>Vị trí:</strong>
            {{ nhanvien.position }}
        </div>
        <div class="p-1">
            <strong>Địa chỉ:</strong>
            {{ nhanvien.address }}
        </div>
        <div class="p-1">
            <strong>Điện thoại:</strong>
            {{ nhanvien.phone }}
        </div>
    </div>
</template>