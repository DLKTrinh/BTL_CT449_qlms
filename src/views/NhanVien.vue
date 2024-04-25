<template>
    <div class="page row">
        <div class="col-md-10">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-6">
            <h4>
                Nhân viên
            </h4>

            <NhanVienList
                v-if="filteredNhanViensCount > 0"
                :nhanviens="filteredNhanViens"
                v-model:activeIndex="activeIndex"
            />
            <p v-else>Không có nhân viên nào</p>

            <div class="mt-3 row justify-content-around align-items-center">
                <button class="btn btn-sm btn-primary" @click="refreshList()">
                    <font-awesome-icon icon="rotate-right" /> Làm mới
                </button>

                <button class="btn btn-sm btn-success" @click="goToAddNhanVien">
                    <i class="fas fa-plus"></i> Thêm mới
                </button>

                <button
                    class="btn btn-sm btn-danger"
                    @click="removeAllNhanViens"
                >
                <font-awesome-icon icon="trash" /> Xóa tất cả
                </button>
            </div>
        </div>
        <div class="mt-3 col-md-6">
            <div v-if="activeNhanVien">
                <h4>
                    Thông Tin Nhân Viên
                </h4>
                <NhanVienCard :nhanvien="activeNhanVien" />
                <router-link
                    :to="{
                        name: 'nhanvien.edit',
                        params: { id: activeNhanVien._id },
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
import NhanVienCard from "../components/NhanVienCard.vue";
import InputSearch from "../components/InputSearch.vue";
import NhanVienList from "../components/NhanVienList.vue";
import NhanVienService from "../services/nhanvien.service";

export default {
    components: {
        NhanVienCard,
        InputSearch,
        NhanVienList,
    },

    data() {
        return {
            nhanviens: [],
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
        nhanvienStrings() {
            return this.nhanviens.map((nhanvien) => {
                const { name, password, position, address, phone } = nhanvien;
                return [name, password, position, address, phone ].join("");
            });
        },
        filteredNhanViens() {
            if (!this.searchText) return this.nhanviens;
            return this.nhanviens.filter((_nhanvien, index) =>
                this.nhanvienStrings[index].includes(this.searchText)
            );
        },
        activeNhanVien() {
            if (this.activeIndex < 0) return null;
            return this.filteredNhanViens[this.activeIndex];
        },
        filteredNhanViensCount() {
            return this.filteredNhanViens.length;
        },
    },

    methods: {
        async retrieveNhanViens() {
            try {
                this.nhanviens = await NhanVienService.getAll();
            } catch (error) {
                console.log(error);
            }
        },

        refreshList() {
            this.retrieveNhanViens();
            this.activeIndex = -1;
        },

        async removeAllNhanViens() {
            if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                try {
                    await NhanVienService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },

        goToAddNhanVien() {
            this.$router.push({ name: "nhanvien.add" });
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