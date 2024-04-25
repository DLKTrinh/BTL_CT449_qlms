<template>
    <Form
        @submit="submitNXB"
        :validation-schema="nxbFormSchema"
    >
        <div class="form-group">
            <label for="name">Tên</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="nxbLocal.name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="address">Địa chỉ</label>
            <Field
                name="address"
                type="text"
                class="form-control"
                v-model="nxbLocal.address"
            />
            <ErrorMessage name="address" class="error-feedback" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button
                v-if="nxbLocal._id"
                type="button"
                class="ml-2 btn btn-danger"
                @click="deleteNXB"
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
    emits: ["submit:nxb", "delete:nxb"],
    props: {
        nxb: { type: Object, required: true }
    },
    data() {
        const nxbFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            }
        );
        return {
            nxbLocal: this.nxb,
            nxbFormSchema,
        };
    },
    methods: {
        submitNXB() {
            this.$emit("submit:nxb", this.nxbLocal);
            this.$router.push({ name: "nxb" });
        },
        deleteNXB() {
            this.$emit("delete:nxb", this.nxbLocal.id);
            this.$router.push({ name: "nxb" });
        },
    },
};
</script>

<style scoped>
    @import "../assets/form.css";
</style>