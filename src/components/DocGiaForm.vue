<template>
    <Form
        @submit="submitDocGia"
        :validation-schema="docgiaFormSchema"
    >
    <div class="form-group">
        <label for="surname">Họ lót</label>
            <Field
                name="surname"
                type="text"
                class="form-control"
                v-model="docgiaLocal.surname"
            />
            <ErrorMessage name="surname" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="name">Tên</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="docgiaLocal.name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
                <label for="birthday">Ngày sinh</label>
                <Field
                    name="birthday"
                    type="date"
                    class="form-control"
                    v-model="docgiaLocal.birthday"
                />
                <ErrorMessage name="birthday" class="error-feedback" />
            </div>
            <div class="form-group">
                <label for="sex">Giới tính</label>
                    <input value="Nam" type="radio" v-model="docgiaLocal.sex" style="margin: 0px 10px;"> 
                    <lable style="margin-right: 30px;">Nam</lable>
                    <input value="Nữ" type="radio" v-model="docgiaLocal.sex" style="margin: 0px 10px;"> 
                    <lable style="margin-right: 30px;">Nữ</lable>
                    <input value="Khác" type="radio" v-model="docgiaLocal.sex" style="margin: 0px 10px;"> 
                    <lable>Khác</lable>
            </div>
        <div class="form-group">
            <label for="address">Địa chỉ</label>
            <Field
                name="address"
                type="text"
                class="form-control"
                v-model="docgiaLocal.address"
            />
            <ErrorMessage name="address" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="phone">Điện thoại</label>
            <Field
                name="phone"
                type="tel"
                class="form-control"
                v-model="docgiaLocal.phone"
            />
            <ErrorMessage name="phone" class="error-feedback" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button
                v-if="docgiaLocal._id"
                type="button"
                class="ml-2 btn btn-danger"
                @click="deleteDocGia"
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
    emits: ["submit:docgia", "delete:docgia"],
    props: {
        docgia: { type: Object, required: true }
    },
    data() {
        const docgiaFormSchema = yup.object().shape({
            surname: yup
                .string()
                .required("Họ lót phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            birthday: yup
                .date()
                .max(new Date(), "Vui lòng chọn ngày hợp lệ")
                .min("01/01/1900","Vui lòng chọn ngày hợp lệ"),
            address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
            phone: yup
                .string()
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),
            },
        );
        return {
            docgiaLocal: this.docgia,
            docgiaFormSchema,
        };
    },
    methods: {
        submitDocGia() {
            this.$emit("submit:docgia", this.docgiaLocal);
            this.$router.push({ name: "docgia" });
        },
        deleteDocGia() {
            this.$emit("delete:docgia", this.docgiaLocal.id);
            this.$router.push({ name: "docgia" });
        },
    },
};
</script>

<style scoped>
    @import "../assets/form.css";
</style>