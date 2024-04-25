<template>
    <div v-if="muonsach" class="page">
        <h4>Hiệu chỉnh thon tin nhan vien</h4>
        <MuonSachForm
            :muonsach="muonsach"
            @submit:muonsach="updateMuonSach"
            @delete:muonsach="deleteMuonSach"
        />
        <p>{{ message }}</p>
    </div>
</template>/

<script>
    import MuonSachForm from "../components/MuonSachForm.vue";
    import MuonSachService from "../services/muonsach.service";

    export default {
        components: {
            MuonSachForm,
        },
        props: {
            id: { type: String, required: true },
        },
        data() {
            return {
                muonsach: null, 
                message: "",
            };
        },
        methods: {
            async getMuonSach(id) {
                try {
                    this.muonsach = await MuonSachService.get(id);
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

            async updateMuonSach(data) {
                try {
                    await MuonSachService.update(this.muonsach._id, data);
                    this.message = "Thẻ mượn được cập nhật thành công.";
                } catch (error) {
                    console.log(error);
                }
            },

            async deleteMuonSach() {
                if (confirm("Bạn muốn xóa thẻ mượn này?")) {
                    try {
                        await MuonSachService.delete(this.muonsach._id);
                        this.$router.push({ name: "muonsach" });
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
        },
        created() {
            this.getMuonSach(this.id);
            this.message = "";
        },
    };
</script>
