<template>
    <Form
        @submit="submitMuonSach"
        :validation-schema="muonsachFormSchema"
    >
        <div class="form-group">
            <label for="name">Tên quyển sách</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="muonsachLocal.name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="reader">Tên người mượn</label>
            <Field
                name="reader"
                type="text"
                class="form-control"
                v-model="muonsachLocal.reader"
            />
            <ErrorMessage name="reader" class="error-feedback" />
        </div>
        <div class="form-group">
                <label for="borrow">Ngày mượn</label>
                <Field
                    name="borrow"
                    type="date"
                    class="form-control"
                    v-model="muonsachLocal.borrow"
                />
                <ErrorMessage name="borrow" class="error-feedback" />
        </div>
        <div class="form-group">
                <label for="returns">Ngày trả</label>
                <Field
                    name="returns"
                    type="date"
                    class="form-control"
                    v-model="muonsachLocal.returns"
                />
                <ErrorMessage name="returns" class="error-feedback" />
            </div>
        
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button
                v-if="muonsachLocal._id"
                type="button"
                class="ml-2 btn btn-danger"
                @click="deleteMuonSach"
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
    emits: ["submit:muonsach", "delete:muonsach"],
    props: {
        muonsach: { type: Object, required: true }
    },
    data() {
        const muonsachFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            borrow: yup
                .date()
                .min(new Date(),"Vui lòng chọn ngày hợp lệ"),
            returns: yup
                .date()
                .min(new Date(),"Vui lòng nhập ngày hợp lệ")
            }
        );
        return {
            muonsachLocal: this.muonsach,
            muonsachFormSchema,
        };
    },
    methods: {
        submitMuonSach() {
            this.$emit("submit:muonsach", this.muonsachLocal);
            this.$router.push({ name: "muonsach" });
        },
        deleteMuonSach() {
            this.$emit("delete:muonsach", this.muonsachLocal.id);
            this.$router.push({ name: "muonsach" });
        },
    },
};
</script>

<style scoped>
    @import "../assets/form.css";
</style>