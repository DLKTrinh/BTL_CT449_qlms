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
            <strong>Đơn Giá:</strong>
            {{ sach.price }}
        </div>
        <div class="p-1">
            <strong>Số Lượng:</strong>
            {{ sach.quantity }}
        </div>
        <div class="p-1">
            <strong>Năm Xuất Bản:</strong>
            {{ sach.year }}
        </div>
        <div class="p-1">
            <strong>Nhà Xuất Bản:</strong>
            {{ sach.publisher }}
        </div>
        <div class="p-1">
            <strong>Tác Giả:</strong>
            {{ sach.author }}
        </div>
    </div>
</template>