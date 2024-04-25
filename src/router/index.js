import { createWebHistory, createRouter } from "vue-router";
import DocGia from "../views/DocGia.vue";
import NhanVien from "../views/NhanVien.vue";
import Sach from "../views/Sach.vue";
import NXB from "../views/NXB.vue";
import MuonSach from "../views/MuonSach.vue"

const routes = [
    {
        path: "/",
        name: "quanlymuonsach",
        component: () => import("../views/QuanLyMuonSach.vue"),
    },

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

    {
        path: "/nxb",
        name: "nxb",
        component: NXB,
    },

    {
        path: "/nxb/:id",
        name: "nxb.edit",
        component: () => import("../views/NXBEdit.vue"),
        props: true
    },   
    
    {
        path: "/nxb/add",
        name: "nxb.add",
        component: () => import("../views/NXBAdd.vue"),
    },
    
    {
        path: "/muonsach",
        name: "muonsach",
        component: MuonSach,
    },

    {
        path: "/muonsach/:id",
        name: "muonsach.edit",
        component: () => import("../views/MuonSachEdit.vue"),
        props: true
    },

    {
        path: "/muonsach/add",
        name: "muonsach.add",
        component: () => import("../views/MuonSachAdd.vue"),
    }, 
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
