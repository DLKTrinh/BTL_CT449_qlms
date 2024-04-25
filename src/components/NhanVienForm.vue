<template>
    <Form
        @submit="submitNhanVien"
        :validation-schema="nhanvienFormSchema"
    >
        <div class="form-group">
            <label for="name">Tên</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="nhanvienLocal.name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="position">Vị Trí</label>
            <Field
                name="position"
                type="text"
                class="form-control"
                v-model="nhanvienLocal.position"
            />
            <ErrorMessage name="position" class="error-feedback" />
        </div>
        <div class="form-group">
                <label for="password">Ngày Sinh</label>
                <Field
                    name="password"
                    type="text"
                    class="form-control"
                    v-model="nhanvienLocal.password"
                />
                <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="address">Địa Chỉ</label>
            <Field
                name="address"
                type="text"
                class="form-control"
                v-model="nhanvienLocal.address"
            />
            <ErrorMessage name="address" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="phone">Điện Thoại</label>
            <Field
                name="phone"
                type="tel"
                class="form-control"
                v-model="nhanvienLocal.phone"
            />
            <ErrorMessage name="phone" class="error-feedback" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button
                v-if="nhanvienLocal._id"
                type="button"
                class="ml-2 btn btn-danger"
                @click="deleteNhanVien"
            >
                Xóa
            </button>
        </div>
    </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:nhanvien", "delete:nhanvien"],
    props: {
        nhanvien: { type: Object, required: true }
    },
    data() {
        const nhanvienFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            password: yup
                .string()
                .required("Mật khẩu phải có giá trị.")
                .min(2, "Mật khẩu phải ít nhất 2 ký tự.")
                .max(10, "Mật khẩu có nhiều nhất 10 ký tự."),
            position: yup
                .string()
                .required("Vị trí phải có giá trị."),
            phone: yup
                .string()
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),
            },
        );
        return {
            nhanvienLocal: this.nhanvien,
            nhanvienFormSchema,
        };
    },
    methods: {
        submitNhanVien() {
            this.$emit("submit:nhanvien", this.nhanvienLocal);
            this.$router.push({ name: "nhanvien" });
        },
        deleteNhanVien() {
            this.$emit("delete:nhanvien", this.nhanvienLocal.id);
            this.$router.push({ name: "nhanvien" });
        },
    },
};
</script>

<style scoped>
    @import "../assets/form.css";
</style>