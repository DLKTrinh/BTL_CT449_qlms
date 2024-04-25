import { createWebHistory, createRouter } from "vue-router";
import DocGia from "../views/DocGia.vue";
import NhanVien from "../views/NhanVien.vue";
import Sach from "../views/Sach.vue";

const routes = [
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("../views/NotFound.vue"),
    },

    {
        path: "/docgia",
        name: "docgia",
        component: DocGia,
    },
    
    {
        path: "/docgia/:id",
        name: "docgia.edit",
        component: () => import("../views/DocGiaEdit.vue"),
        props: true
    },   
    
    {
        path: "/docgia/add",
        name: "docgia.add",
        component: () => import("../views/DocGiaAdd.vue"),
    },

    {
        path: "/nhanvien",
        name: "nhanvien",
        component: NhanVien,
    },

    {
        path: "/nhanvien/:id",
        name: "nhanvien.edit",
        component: () => import("../views/NhanVienEdit.vue"),
        props: true
    },   
    
    {
        path: "/nhanvien/add",
        name: "nhanvien.add",
        component: () => import("../views/NhanVienAdd.vue"),
    },

    {
        path: "/sach",
        name: "sach",
        component: Sach,
    },

    {
        path: "/sach/:id",
        name: "sach.edit",
        component: () => import("../views/SachEdit.vue"),
        props: true
    },   
    
    {
        path: "/sach/add",
        name: "sach.add",
        component: () => import("../views/SachAdd.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
