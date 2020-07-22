const router = [{
    title: "控制台",
    icon: "home",
    key: "/index"
}, {
    title: "用户管理",
    icon: "laptop",
    key: "/index/user",
    child: [{
        title: "用户列表",
        icon: "",
        key: "/index/user/list",
        // child: [{
        //     title: "用户列表1",
        //     icon: "",
        //     key: "/index/user/list1",
        // }]
    }, {
        title: "添加用户",
        icon: "",
        key: "/index/user/add"
    }]
}, {
    title: "部门管理",
    icon: "bars",
    key: "/index/department",
    child: [{
        title: "部门列表",
        icon: "bars",
        key: "/index/department/index"
    }, {
        title: "部门添加",
        icon: "bars",
        key: "/index/department/add",
    }]
}, {
    title: "职位管理",
    icon: "laptop",
    key: "/index/stations/index",
    child: [{
        title: "职位列表",
        icon: "",
        key: "/index/stations/list"
    }, {
        title: "添加职位",
        icon: "",
        key: "/index/stations/add"
    }]
}, {
    title: "请假",
    icon: "",
    key: "/index/leave/index"
}, {
    title: "加班",
    icon: "",
    key: "/index/operate/index"
}]

export default router;