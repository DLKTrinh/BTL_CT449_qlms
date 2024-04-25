<script>
export default {
    props: {
        muonsach: { type: Object, required: true },
    },
};
</script>

<template>
    <div>
        <div class="p-1">
            <strong>Tên quyển sách:</strong>
            {{ muonsach.name }}
        </div>
        <div class="p-1">
            <strong>Tên người mượn:</strong>
            {{ muonsach.reader }}
        </div>
        <div class="p-1">
            <strong>Ngày mượn:</strong>
            {{ muonsach.borrow }}
        </div>
        <div class="p-1">
            <strong>Ngày trả:</strong>
            {{ muonsach.returns }}
        </div>
    </div>
</template>