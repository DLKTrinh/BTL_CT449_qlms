<template>
    <Form
        @submit="submitSach"
        :validation-schema="sachFormSchema"
    >
        <div class="form-group">
            <label for="name">Tên</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="sachLocal.name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="price">Đơn Giá</label>
            <Field
                name="price"
                type="number"
                class="form-control"
                v-model="sachLocal.price"
            />
            <ErrorMessage name="price" class="error-feedback" />
        </div>
        <div class="form-group">
                <label for="quantity">Số Lượng</label>
                <Field
                    name="quantity"
                    type="number"
                    class="form-control"
                    v-model="sachLocal.quantity"
                />
                <ErrorMessage name="quantity" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="year">Năm Xuất Bản</label>
            <Field
                name="year"
                type="number"
                class="form-control"
                v-model="sachLocal.year"
            />
            <ErrorMessage name="year" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="publisher">Nhà Xuất Bản</label>
            <Field
                name="publisher"
                type="text"
                class="form-control"
                v-model="sachLocal.publisher"
            />
            <ErrorMessage name="publisher" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="author">Tác Giả</label>
            <Field
                name="author"
                type="text"
                class="form-control"
                v-model="sachLocal.author"
            />
            <ErrorMessage name="author" class="error-feedback" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button
                v-if="sachLocal._id"
                type="button"
                class="ml-2 btn btn-danger"
                @click="deleteSach"
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
    emits: ["submit:sach", "delete:sach"],
    props: {
        sach: { type: Object, required: true }
    },
    data() {
        const sachFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            price: yup
                .number()
                .required("Tien phải có giá trị."),
            quantity: yup
                .number()
                .required("So luong phải có giá trị."),
            author: yup
                .string()
                .required("Vui long nhap ten tac gia")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            },
        );
        return {
            sachLocal: this.sach,
            sachFormSchema,
        };
    },
    methods: {
        submitSach() {
            this.$emit("submit:sach", this.sachLocal);
            this.$router.push({ name: "sach" });
        },
        deleteSach() {
            this.$emit("delete:sach", this.sachLocal.id);
            this.$router.push({ name: "sach" });
        },
    },
};
</script>

<style scoped>
    @import "../assets/form.css";
</style>