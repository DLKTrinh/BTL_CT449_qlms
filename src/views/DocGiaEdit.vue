<template>
    <div v-if="docgia" class="page">
        <h4>Hiệu Chỉnh Đọc Giả</h4>
        <DocGiaForm
            :docgia="docgia"
            @submit:docgia="updateDocGia"
            @delete:docgia="deleteDocGia"
        />
        <p>{{ message }}</p>
    </div>
</template>/

<script>
    import DocGiaForm from "../components/DocGiaForm.vue";
    import DocGiaService from "../services/docgia.service";

    export default {
        components: {
            DocGiaForm,
        },
        props: {
            id: { type: String, required: true },
        },
        data() {
            return {
                docgia: null,
                message: "",
            };
        },
        methods: {
            async getDocGia(id) {
                try {
                    this.docgia = await DocGiaService.get(id);
                } catch (error) {
                    console.log(error);
                    this.$router.push({
                        name: "notfound",
                        params: {
                            pathMatch: this.$route.path.split("/").slice(1)
                        },
                        query: this.$route.query,
                        hash: this.$route.hash,
                    });
                }
            },

            async updateDocGia(data) {
                try {
                    await DocGiaService.update(this.docgia._id, data);
                    this.message = "Đọc giả được cập nhật thành công.";
                } catch (error) {
                    console.log(error);
                }
            },

            async deleteDocGia() {
                if (confirm("Bạn muốn xóa đọc giả này?")) {
                    try {
                        await DocGiaService.delete(this.docgia._id);
                        this.$router.push({ name: "docgia" });
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
        },
        created() {
            this.getDocGia(this.id);
            this.message = "";
        },
    };
</script>
