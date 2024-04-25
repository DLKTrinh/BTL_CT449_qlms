<template>
    <div class="page">
        <h4>Thêm Sach</h4>
        <Form
            @submit.prevent="addSach($data)"
        >
        <div class="form-group">
            <label for="name">Tên</label>
            <input
                name="name"
                type="text"
                class="form-control"
                v-model="name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="price">Gia</label>
            <input
                name="price"
                type="number"
                class="form-control"
                v-model="price"
            />
            <ErrorMessage name="price" class="error-feedback" />
        </div>
        <div class="form-group">
                <label for="quantity">So luong</label>
                <input
                    name="quantity"
                    type="number"
                    class="form-control"
                    v-model="quantity"
                />
                <ErrorMessage name="quantity" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="year">Nam xuat ban</label>
            <input
                name="year"
                type="number"
                class="form-control"
                v-model="year"
            />
            <ErrorMessage name="year" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="publisher">Nha xuat ban</label>
            <input
                name="publisher"
                type="text"
                class="form-control"
                v-model="publisher"
            />
            <ErrorMessage name="publisher" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="author">Tac gia</label>
            <input
                name="author"
                type="text"
                class="form-control"
                v-model="author"
            />
            <ErrorMessage name="author" class="error-feedback" />
        </div>
            <div class="form-group submit">
                    <button class="btn btn-primary"><font-awesome-icon icon="floppy-disk" />Lưu</button>
            </div>
        </Form>
    </div>
</template>

<script>
import SachService from "../services/sach.service";

export default {
    data() {
        return{
            name: '',
            price: '',
            quantity:'',
            year:'',
            publisher: '',
            author: '',
        };
    },
    methods: {
        async addSach($data) {
            try {
                await SachService.create($data);
                message = "Liên hệ được tạo.";
            } catch (error) {
                console.log(error);
            }
            this.$router.push({ name: "sach" });
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