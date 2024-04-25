<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Ứng dụng Quản Lý Mượn Sách</a>
    </nav>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="mr-auto navbar-nav" >
            <li class="nav-item">
                <router-link :to="{ name: 'docgia' }" class="nav-link">
                    Đọc Giả
                </router-link>
                
            </li>
            <li>
                <router-link :to="{ name: 'nhanvien' }" class="nav-link">
                    Nhân Viên
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'sach' }" class="nav-link">
                    Sách
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'nxb' }" class="nav-link">
                    Nhà Xuất Bản
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'muonsach' }" class="nav-link">
                    Danh Sách Mượn
                </router-link>
            </li>
        </div>
    </nav>
</template>   