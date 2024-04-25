<template>
    <div class="page row">
        <div class="col-md-10">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-6">
            <h4>
                Danh Sách Mượn
            </h4>

            <MuonSachList
                v-if="filteredMuonSachsCount > 0"
                :muonsachs="filteredMuonSachs"
                v-model:activeIndex="activeIndex"
            />
            <p v-else>Không có quyển sách nào đang được mượn</p>

            <div class="mt-3 row justify-content-around align-items-center">
                <button class="btn btn-sm btn-primary" @click="refreshList()">
                    <font-awesome-icon icon="rotate-right" /> Làm mới
                </button>

                <button class="btn btn-sm btn-success" @click="goToAddMuonSach">
                    <i class="fas fa-plus"></i> Thêm mới
                </button>

                <button
                    class="btn btn-sm btn-danger"
                    @click="removeAllMuonSachs"
                >
                <font-awesome-icon icon="trash" /> Xóa tất cả
                </button>
            </div>
        </div>
        <div class="mt-3 col-md-6">
            <div v-if="activeMuonSach">
                <h4>
                    Thẻ Mượn
                </h4>
                <MuonSachCard :muonsach="activeMuonSach" />
                <router-link
                    :to="{
                        name: 'muonsach.edit',
                        params: { id: activeMuonSach._id },
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
import MuonSachCard from "../components/MuonSachCard.vue";
import InputSearch from "../components/InputSearch.vue";
import MuonSachList from "../components/MuonSachList.vue";
import MuonSachService from "../services/muonsach.service";

export default {
    components: {
        MuonSachCard,
        InputSearch,
        MuonSachList,
    },

    data() {
        return {
            muonsachs: [],
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
        muonsachStrings() {
            return this.muonsachs.map((muonsach) => {
                const {name, reader, borrow, returns,} = muonsach;
                return [name, reader, borrow, returns].join("");
            });
        },
        filteredMuonSachs() {
            if (!this.searchText) return this.muonsachs;
            return this.muonsachs.filter((_muonsach, index) =>
                this.muonsachStrings[index].includes(this.searchText)
            );
        },
        activeMuonSach() {
            if (this.activeIndex < 0) return null;
            return this.filteredMuonSachs[this.activeIndex];
        },
        filteredMuonSachsCount() {
            return this.filteredMuonSachs.length;
        },
    },

    methods: {
        async retrieveMuonSachs() {
            try {
                this.muonsachs = await MuonSachService.getAll();
            } catch (error) {
                console.log(error);
            }
        },

        refreshList() {
            this.retrieveMuonSachs();
            this.activeIndex = -1;
        },

        async removeAllMuonSachs() {
            if (confirm("Bạn muốn xóa tất cả nha xuat ban?")) {
                try {
                    await MuonSachService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },

        goToAddMuonSach() {
            this.$router.push({ name: "muonsach.add" });
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