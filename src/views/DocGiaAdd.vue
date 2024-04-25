<template>
    <div class="page">
        <h4>Thêm doc gia</h4>
        <Form
            @submit.prevent="addDocGia($data)"
        >
        <div class="form-group">
                <label for="surname">Họ lót</label>
                <input
                    required
                    name="surname"
                    type="text"
                    class="form-control"
                    v-model="surname"
                />
                <ErrorMessage name="surname" class="error-feedback" />
            </div>
            <div class="form-group">
                <label for="name">Tên</label>
                <input
                    required
                    name="name"
                    type="text"
                    class="form-control"
                    v-model="name"
                />
                <ErrorMessage name="name" class="error-feedback" />
            </div>
            <div class="form-group">
                <label for="birthday">Ngày sinh</label>
                <input
                    name="birthday"
                    type="date"
                    class="form-control"
                    v-model="birthday"
                />
                <ErrorMessage name="birthday" class="error-feedback" />
            </div>
            <div class="form-group">
                <label for="sex">Giới tính</label>
                    <input value="Nam" type="radio" v-model="sex" style="margin: 0px 10px;"> 
                    <lable style="margin-right: 30px;">Nam</lable>
                    <input value="Nữ" type="radio" v-model="sex" style="margin: 0px 10px;"> 
                    <lable style="margin-right: 30px;">Nữ</lable>
                    <input value="Khác" type="radio" v-model="sex" style="margin: 0px 10px;"> 
                    <lable>Khác</lable>
            </div>
            <div class="form-group">
                <label for="address">Địa chỉ</label>
                <input
                    name="address"
                    type="text"
                    class="form-control"
                    v-model="address"
                />
                <ErrorMessage name="address" class="error-feedback" />
            </div>
            <div class="form-group">
                <label for="phone">Điện thoại</label>
                <input
                    name="phone"
                    type="tel"
                    class="form-control"
                    v-model="phone"
                />
                <ErrorMessage name="phone" class="error-feedback" />
            </div>
            <div class="form-group submit">
                    <button class="btn btn-primary"><font-awesome-icon icon="floppy-disk" />Lưu</button>
            </div>
        </Form>
    </div>
</template>

<script>
import DocGiaService from "../services/docgia.service";

export default {
    data() {
        return{
            surname: '',
            name: '',
            birthday: '',
            sex: 'Nam',
            address: '',
            phone: '',
        };
    },
    methods: {
        async addDocGia($data) {
            try {
                await DocGiaService.create($data);
                message = "Liên hệ được tạo.";
            } catch (error) {
                console.log(error);
            }
            this.$router.push({ name: "docgia" });
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