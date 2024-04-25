<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Ứng dụng Quản Lý Mượn Sách</a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'docgia' }" class="nav-link">
                    Đọc Giả
                    <i class="fas fa-address-book"></i>
                </router-link>
                
            </li>
            <li>
                <router-link :to="{ name: 'nhanvien' }" class="nav-link">
                    Nhân Viên
                    <i class="fas fa-address-book"></i>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'sach' }" class="nav-link">
                    Sach
                    <i class="fas fa-address-book"></i>
                </router-link>
            </li>
            
        </div>
    </nav>
</template>   