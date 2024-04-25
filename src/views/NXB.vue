<template>
    <div class="page row">
        <div class="col-md-10">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-6">
            <h4>
                Nhà Xuất Bản
            </h4>

            <NXBList
                v-if="filteredNXBsCount > 0"
                :nxbs="filteredNXBs"
                v-model:activeIndex="activeIndex"
            />
            <p v-else>Không có nhà xuất bản nào</p>

            <div class="mt-3 row justify-content-around align-items-center">
                <button class="btn btn-sm btn-primary" @click="refreshList()">
                    <font-awesome-icon icon="rotate-right" /> Làm mới
                </button>

                <button class="btn btn-sm btn-success" @click="goToAddNXB">
                    <i class="fas fa-plus"></i> Thêm mới
                </button>

                <button
                    class="btn btn-sm btn-danger"
                    @click="removeAllNXBs"
                >
                <font-awesome-icon icon="trash" /> Xóa tất cả
                </button>
            </div>
        </div>
        <div class="mt-3 col-md-6">
            <div v-if="activeNXB">
                <h4>
                    Chi Tiết Nhà Xuất Bản
                </h4>
                <NXBCard :nxb="activeNXB" />
                <router-link
                    :to="{
                        name: 'nxb.edit',
                        params: { id: activeNXB._id },
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
import NXBCard from "../components/NXBCard.vue";
import InputSearch from "../components/InputSearch.vue";
import NXBList from "../components/NXBList.vue";
import NXBService from "../services/nxb.service";

export default {
    components: {
        NXBCard,
        InputSearch,
        NXBList,
    },

    data() {
        return {
            nxbs: [],
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
        nxbStrings() {
            return this.nxbs.map((nxb) => {
                const {name, address} = nxb;
                return [name, address].join("");
            });
        },
        filteredNXBs() {
            if (!this.searchText) return this.nxbs;
            return this.nxbs.filter((_nxb, index) =>
                this.nxbStrings[index].includes(this.searchText)
            );
        },
        activeNXB() {
            if (this.activeIndex < 0) return null;
            return this.filteredNXBs[this.activeIndex];
        },
        filteredNXBsCount() {
            return this.filteredNXBs.length;
        },
    },

    methods: {
        async retrieveNXBs() {
            try {
                this.nxbs = await NXBService.getAll();
            } catch (error) {
                console.log(error);
            }
        },

        refreshList() {
            this.retrieveNXBs();
            this.activeIndex = -1;
        },

        async removeAllNXBs() {
            if (confirm("Bạn muốn xóa tất cả nhà xuất bản?")) {
                try {
                    await NXBService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },

        goToAddNXB() {
            this.$router.push({ name: "nxb.add" });
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