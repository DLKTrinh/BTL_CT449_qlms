<template>
    <div class="page row">
        <div class="col-md-10">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-6">
            <h4>
                Danh bạ
                <i class="fas fa-address-book"></i>
            </h4>

            <DocGiaList
                v-if="filteredDocGiasCount > 0"
                :docgias="filteredDocGias"
                v-model:activeIndex="activeIndex"
            />
            <p v-else>Không có liên hệ nào.</p>

            <div class="mt-3 row justify-content-around align-items-center">
                <button class="btn btn-sm btn-primary" @click="refreshList()">
                    <font-awesome-icon icon="rotate-right" /> Làm mới
                </button>

                <button class="btn btn-sm btn-success" @click="goToAddDocGia">
                    <i class="fas fa-plus"></i> Thêm mới
                </button>

                <button
                    class="btn btn-sm btn-danger"
                    @click="removeAllDocGias"
                >
                <font-awesome-icon icon="trash" /> Xóa tất cả
                </button>
            </div>
        </div>
        <div class="mt-3 col-md-6">
            <div v-if="activeDocGia">
                <h4>
                    Chi tiết Liên hệ
                    <i class="fas fa-address-card"></i>
                </h4>
                <DocGiaCard :docgia="activeDocGia" />
                <router-link
                    :to="{
                        name: 'docgia.edit',
                        params: { id: activeDocGia._id },
                    }"
                >
                <span class="mt-2 badge badge-warning">
                    <i class="fas fa-edit"></i> Hiệu chỉnh</span
                >
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import DocGiaCard from "../components/DocGiaCard.vue";
import InputSearch from "../components/InputSearch.vue";
import DocGiaList from "../components/DocGiaList.vue";
import DocGiaService from "../services/docgia.service";

export default {
    components: {
        DocGiaCard,
        InputSearch,
        DocGiaList,
    },

    data() {
        return {
            docgias: [],
            activeIndex: -1,
            searchText: "",
        };
    },

    watch: {
        searchText() {
            this.activeIndex = -1;
        },
    },

    computed: {
        docgiaStrings() {
            return this.docgias.map((docgia) => {
                const { name, email, address, phone } = docgia;
                return [name, email, address, phone].join("");
            });
        },
        filteredDocGias() {
            if (!this.searchText) return this.docgias;
            return this.docgias.filter((_docgia, index) =>
                this.docgiaStrings[index].includes(this.searchText)
            );
        },
        activeDocGia() {
            if (this.activeIndex < 0) return null;
            return this.filteredDocGias[this.activeIndex];
        },
        filteredDocGiasCount() {
            return this.filteredDocGias.length;
        },
    },

    methods: {
        async retrieveDocGias() {
            try {
                this.docgias = await DocGiaService.getAll();
            } catch (error) {
                console.log(error);
            }
        },

        refreshList() {
            this.retrieveDocGias();
            this.activeIndex = -1;
        },

        async removeAllDocGias() {
            if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                try {
                    await DocGiaService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },

        goToAddDocGia() {
            this.$router.push({ name: "docgia.add" });
        },
    },

    mounted() {
        this.refreshList();
    },
}
</script>

<style scoped>
.page {
    text-align: left;
    max-width: 750px;
}
</style>