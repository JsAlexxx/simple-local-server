const supAdmin = [
  {
    path: "/",
    name: "home",
    label: "首页",
    icon: "s-home",
    component: "Home",
    redirect: '/home'
  },
  {
    path: "/user",
    name: "user",
    label: "用户管理",
    icon: "user",
    component: "User",
  },
  {
    path: "/page1",
    name: "others",
    label: "其他",
    icon: "loacation",
    children: [
      {
        path: "/page1",
        name: "page1",
        label: "页面1",
        icon: "setting",
        component: "PageOne",
      },
      {
        path: "/page2",
        name: "page2",
        label: "页面2",
        icon: "setting",
        component: "PageTwo",
      },
    ],
  },
]

const admin = [
  {
    path: "/",
    name: "home",
    label: "首页",
    icon: "s-home",
    component: "Home",
    redirect: '/home'
  },
  {
    path: "/user",
    name: "user",
    label: "用户管理",
    icon: "user",
    component: "User",
  },
]

const user = [
  {
    path: "/",
    name: "home",
    label: "首页",
    icon: "s-home",
    component: "Home",
    redirect: '/home'
  },
]

const menuData = {
  supAdmin,
  admin,
  user
}

module.exports = menuData