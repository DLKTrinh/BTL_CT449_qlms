<template>
    <div class="page">
        <h4>Thêm Thẻ Mượn</h4>
        <Form
            @submit.prevent="addMuonSach($data)"
        >
        <div class="form-group">
            <label for="name">Tên quyển sách</label>
            <input
                name="name"
                type="text"
                class="form-control"
                v-model="name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="reader">Tên người mượn</label>
            <input
                name="reader"
                type="text"
                class="form-control"
                v-model="reader"
            />
            <ErrorMessage name="reader" class="error-feedback" />
        </div>
        <div class="form-group">
                <label for="borrow">Ngày mượn</label>
                <input
                    name="borrow"
                    type="date"
                    class="form-control"
                    v-model="borrow"
                />
                <ErrorMessage name="borrow" class="error-feedback" />
        </div>
        <div class="form-group">
                <label for="returns">Ngày trả</label>
                <input
                    name="returns"
                    type="date"
                    class="form-control"
                    v-model="returns"
                />
                <ErrorMessage name="returns" class="error-feedback" />
            </div>
        
        <div class="form-group">
            <div class="form-group submit">
                    <button class="btn btn-primary"><font-awesome-icon icon="floppy-disk" />Lưu</button>
            </div>
        </div>
        </Form>
    </div>
</template>

<script>
import MuonSachService from "../services/muonsach.service";

export default {
    data() {
        return{
            name: '',
            reader: '',
            borrow: '',
            returns: '',
        };
    },
    methods: {
        async addMuonSach($data) {
            try {
                await MuonSachService.create($data);
                message = "Thẻ mượn sách đã được tạo.";
            } catch (error) {
                console.log(error);
            }
            this.$router.push({ name: "muonsach" });
        },
    },
};
</script>

<style scoped>
    label {
        display: block;
        margin-top: 10px;
    }

    .card-container.card {
        max-width: 400px !important;
        padding: 40px 40px;
    }

    .card {
        background-color: #f7f7f7;
        padding: 20px 25px 30px;
        margin: 0 auto 25px;
        margin-top: 50px;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    }

    .profile-img-card {
        width: 96px;
        height: 96px;
        margin: 0 auto 10px;
        display: block;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
    }

    .error-feedback {
        color: red;
    }
</style>