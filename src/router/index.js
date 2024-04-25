import { createWebHistory, createRouter } from "vue-router";
import DocGia from "../views/DocGia.vue";
import NhanVien from "../views/NhanVien.vue";

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
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
