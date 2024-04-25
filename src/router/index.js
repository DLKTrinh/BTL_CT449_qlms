import { createWebHistory, createRouter } from "vue-router";
import DocGia from "../views/DocGia.vue";

const routes = [
    {
        path: "/",
        name: "docgia",
        component: DocGia,
    },

    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("../views/NotFound.vue"),
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
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
