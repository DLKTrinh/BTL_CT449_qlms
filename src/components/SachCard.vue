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
            <strong>Price:</strong>
            {{ sach.price }}
        </div>
        <div class="p-1">
            <strong>So luong:</strong>
            {{ sach.quantity }}
        </div>
        <div class="p-1">
            <strong>Nam xuat ban:</strong>
            {{ sach.year }}
        </div>
        <div class="p-1">
            <strong>Nha xuat ban:</strong>
            {{ sach.publisher }}
        </div>
        <div class="p-1">
            <strong>Tac gia:</strong>
            {{ sach.author }}
        </div>
    </div>
</template>