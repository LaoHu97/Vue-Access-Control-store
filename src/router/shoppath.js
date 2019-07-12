import Abstract from '../views/common/abstract.vue';

export default [{
    path: '/index1',
    name: '交易明细查询',
    meta: {
      icon: 'icon-shujutongji'
    },
    component: Abstract,
    children: [{
      path: 'table',
      name: '实时交易查询',
      meta: {
        title: '实时交易查询', icon: 'table1', noCache: false, code:'',
      },
      component: (resolve) => require(['../views/shop/nav1/Table.vue'], resolve)
    },{
      path: 'table5',
      name: '历史交易查询',
      meta: {
        title: '历史交易查询', icon: 'table', noCache: true, code:''
      },
      component: (resolve) => require(['../views/shop/nav1/Table5.vue'], resolve)
    },{
      path: 'table2',
      name: '门店汇总查询',
      meta: {
        title: '门店汇总查询', icon: 'table', noCache: true, code:''
      },
      component: (resolve) => require(['../views/shop/nav1/Table2.vue'], resolve)
    }]
  },{
    path: '/index1',
    name: '交易汇总查询',
    meta: {
      icon: 'icon-daohang-shujufenxi'
    },
    component: Abstract,
    children: [{
      path: 'table4',
      name: '商户日汇总查询',
      meta: {
        title: '商户日汇总查询', icon: 'table', noCache: true, code:''
      },
      component: (resolve) => require(['../views/shop/nav1/Table4.vue'], resolve)
    },{
      path: 'table3',
      name: '门店日汇总查询',
      meta: {
        title: '门店日汇总查询', icon: 'table', noCache: true, code:''
      },
      component: (resolve) => require(['../views/shop/nav1/Table3.vue'], resolve)
    },{
      path: 'table6',
      name: '门店数据查询（汇总）',
      meta: {
        title: '门店数据查询（汇总）', icon: 'table', noCache: true, code:''
      },
      component: (resolve) => require(['../views/shop/nav1/Table6.vue'], resolve)
    }]
  },{
    path: '/index2',
    name: '商家设置',
    meta: {
      icon: 'icon-shangjia'
    },
    component: Abstract,
    children: [{
      path: 'page3',
      name: '商户信息',
      meta: {
        title: '商户信息', icon: 'table', noCache: true, code:''
      },
      component: (resolve) => require(['../views/shop/nav2/Page3.vue'], resolve)
    },{
      path: 'page1',
      name: '门店管理',
      meta: {
        title: '门店管理', icon: 'table', noCache: true, code:''
      },
      component: (resolve) => require(['../views/shop/nav2/Page1.vue'], resolve)
    },{
      path: 'page2',
      name: '款台管理',
      meta: {
        title: '款台管理', icon: 'table', noCache: true, code:''
      },
      component: (resolve) => require(['../views/shop/nav2/Page2.vue'], resolve)
    }]
  },{
    path: '/index2',
    name: '配置设置',
    meta: {
      icon: 'icon-peizhi'
    },
    component: Abstract,
    children: [{
      path: 'configure1',
      name: '打印配置',
      meta: {
        title: '打印配置', icon: 'table', noCache: true, code:''
      },
      component: (resolve) => require(['../views/shop/nav3/configure1.vue'], resolve)
    },{
      path: 'configure2',
      name: '喇叭配置',
      meta: {
        title: '喇叭配置', icon: 'table', noCache: true, code:''
      },
      component: (resolve) => require(['../views/shop/nav3/configure2.vue'], resolve)
    },{
      path: 'configure3',
      name: '充电桩管理',
      meta: {
        title: '充电桩管理', icon: 'table', noCache: true, code:''
      },
      component: (resolve) => require(['../views/shop/nav3/configure3.vue'], resolve)
    }]
  },{
    path: '/index3',
    name: '会员管理',
    meta: {
      icon: 'icon-qiaquan'
    },
    component: Abstract,
    children: [{
      path: 'tab2',
      name: '微信门店',
      meta: {
        title: '微信门店', icon: 'table', noCache: true, code:'20180316112031_51'
      },
      component: (resolve) => require(['../views/shop/nav4/tab2.vue'], resolve)
    },{
      path: 'tab1',
      name: '微信会员卡',
      meta: {
        title: '微信会员卡', icon: 'table', noCache: true, code:'20180316114730_38'
      },
      component: (resolve) => require(['../views/shop/nav4/tab1.vue'], resolve)
    },{
      path: 'tab4',
      name: '会员信息',
      meta: {
        title: '会员信息', icon: 'table', noCache: true, code:'20180316114844_54'
      },
      component: (resolve) => require(['../views/shop/nav4/tab4.vue'], resolve)
    },{
      path: 'tab7',
      name: '卡券管理',
      meta: {
        title: '卡券管理', icon: 'table', noCache: true, code:'20180308145701_36'
      },
      component: (resolve) => require(['../views/shop/nav4/tab7.vue'], resolve)
    },{
      path: 'tab5',
      name: '卡券核销',
      meta: {
        title: '卡券核销', icon: 'table', noCache: true, code:'20180316114852_92'
      },
      component: (resolve) => require(['../views/shop/nav4/tab5.vue'], resolve)
    },{
      path: 'tab3',
      name: '公司账户',
      meta: {
        title: '公司账户', icon: 'table', noCache: true, code:'20180316114859_79'
      },
      component: (resolve) => require(['../views/shop/nav4/tab3.vue'], resolve)
    },{
      path: 'tab6',
      name: '消费记录',
      meta: {
        title: '消费记录', icon: 'table', noCache: true, code:'20180316114906_58'
      },
      component: (resolve) => require(['../views/shop/nav4/tab6.vue'], resolve)
    },{
      path: 'tab10',
      name: '余额统计',
      meta: {
        title: '余额统计', icon: 'table', noCache: true, code:'20180316115031_33'
      },
      component: (resolve) => require(['../views/shop/nav4/tab10.vue'], resolve)
    },{
      path: 'tab9',
      name: '交易账单',
      meta: {
        title: '交易账单', icon: 'table', noCache: true, code:'20180316115044_29'
      },
      component: (resolve) => require(['../views/shop/nav4/tab9.vue'], resolve)
    },{
      path: 'tab1s',
      name: '新增会员卡',
      meta: {
        title: '新增会员卡', icon: 'table', noCache: true, code:'20180316115424_52', hidden:true
      },
      component: (resolve) => require(['../views/shop/tab1s.vue'], resolve)
    },{
      path: 'tab7s',
      name: '新增券',
      meta: {
        title: '新增券', icon: 'table', noCache: true, code:'20180316115406_91', hidden:true
      },
      component: (resolve) => require(['../views/shop/tab7s.vue'], resolve)
    },{
      path: 'tab3s',
      name: '添加公司账户',
      meta: {
        title: '添加公司账户', icon: 'table', noCache: true, code:'20180316115416_58', hidden:true
      },
      component: (resolve) => require(['../views/shop/nav4/tab3s.vue'], resolve)
    },{
      path: 'tab1-modify',
      name: '修改会员卡',
      meta: {
        title: '修改会员卡', icon: 'table', noCache: true, code:'20180316142852_80', hidden:true
      },
      component: (resolve) => require(['../views/shop/tab1-modify.vue'], resolve)
    },{
      path: 'tab7-modify',
      name: '修改券',
      meta: {
        title: '修改券', icon: 'table', noCache: true, code:'20180316142914_71', hidden:true
      },
      component: (resolve) => require(['../views/shop/tab7-modify.vue'], resolve)
    },{
      path: 'tab11',
      name: '充值设置',
      meta: {
        title: '充值设置', icon: 'table', noCache: true, code:'20180319104742_11', hidden:true
      },
      component: (resolve) => require(['../views/shop/nav4/tab11.vue'], resolve)
    },{
      path: 'tab8',
      name: '已绑定会员',
      meta: {
        title: '已绑定会员', icon: 'table', noCache: true, code:'20180319104742_11', hidden:true
      },
      component: (resolve) => require(['../views/shop/nav4/tab8.vue'], resolve)
    }]
  }, {
    path: '/index3',
    name: '会员管理2',
    meta: {
      icon: 'icon-qiaquan'
    },
    component: Abstract,
    children: [{
      path: 'tab2-v',
      name: '微信门店-v',
      meta: {
        title: '微信门店-v',
        icon: 'table',
        noCache: true,
        code: '20180316112031_51'
      },
      component: (resolve) => require(['../views/shop/nav9/tab2.vue'], resolve)
    }, {
      path: 'tab1-v',
      name: '微信会员卡-v',
      meta: {
        title: '微信会员卡-v',
        icon: 'table',
        noCache: true,
        code: '20180316114730_38'
      },
      component: (resolve) => require(['../views/shop/nav9/tab1.vue'], resolve)
    }, {
      path: 'tab4-v',
      name: '会员信息-v',
      meta: {
        title: '会员信息-v',
        icon: 'table',
        noCache: true,
        code: '20180316114844_54'
      },
      component: (resolve) => require(['../views/shop/nav9/tab4.vue'], resolve)
    }, {
      path: 'tab7-v',
      name: '卡券管理-v',
      meta: {
        title: '卡券管理-v',
        icon: 'table',
        noCache: true,
        code: '20180308145701_36'
      },
      component: (resolve) => require(['../views/shop/nav9/tab7.vue'], resolve)
    }, {
      path: 'tab5-v',
      name: '卡券核销-v',
      meta: {
        title: '卡券核销-v',
        icon: 'table',
        noCache: true,
        code: '20180316114852_92'
      },
      component: (resolve) => require(['../views/shop/nav9/tab5.vue'], resolve)
    }, {
      path: 'tab3-v',
      name: '公司账户-v',
      meta: {
        title: '公司账户-v',
        icon: 'table',
        noCache: true,
        code: '20180316114859_79'
      },
      component: (resolve) => require(['../views/shop/nav9/tab3.vue'], resolve)
    }, {
      path: 'tab6-v',
      name: '会员余额记录-v',
      meta: {
        title: '会员余额记录-v',
        icon: 'table',
        noCache: true,
        code: '20180316114906_58'
      },
      component: (resolve) => require(['../views/shop/nav9/tab6.vue'], resolve)
    }, {
      path: 'tab10-v',
      name: '余额统计-v',
      meta: {
        title: '余额统计-v',
        icon: 'table',
        noCache: true,
        code: '20180316115031_33'
      },
      component: (resolve) => require(['../views/shop/nav9/tab10.vue'], resolve)
    }, {
      path: 'tab9-v',
      name: '交易账单-v',
      meta: {
        title: '交易账单-v',
        icon: 'table',
        noCache: true,
        code: '20180316115044_29'
      },
      component: (resolve) => require(['../views/shop/nav9/tab9.vue'], resolve)
    }, {
      path: 'tab1s-v',
      name: '新增会员卡-v',
      meta: {
        title: '新增会员卡-v',
        icon: 'table',
        noCache: true,
        code: '20180316115424_52',
        hidden: true
      },
      component: (resolve) => require(['../views/shop/tab1s-v.vue'], resolve)
    }, {
      path: 'tab7s-v',
      name: '新增券-v',
      meta: {
        title: '新增券-v',
        icon: 'table',
        noCache: true,
        code: '20180316115406_91',
        hidden: true
      },
      component: (resolve) => require(['../views/shop/tab7s-v.vue'], resolve)
    }, {
      path: 'tab3s-v',
      name: '添加公司账户-v',
      meta: {
        title: '添加公司账户-v',
        icon: 'table',
        noCache: true,
        code: '20180316115416_58',
        hidden: true
      },
      component: (resolve) => require(['../views/shop/nav9/tab3s.vue'], resolve)
    }, {
      path: 'tab1-modify-v',
      name: '修改会员卡-v',
      meta: {
        title: '修改会员卡-v',
        icon: 'table',
        noCache: true,
        code: '20180316142852_80',
        hidden: true
      },
      component: (resolve) => require(['../views/shop/tab1-modify-v.vue'], resolve)
    }, {
      path: 'tab7-modify-v',
      name: '修改券-v',
      meta: {
        title: '修改券-v',
        icon: 'table',
        noCache: true,
        code: '',
        hidden: true
      },
      component: (resolve) => require(['../views/shop/tab7-modify-v.vue'], resolve)
    }, {
      path: 'tab11-v',
      name: '充值设置-v',
      meta: {
        title: '充值设置-v',
        icon: 'table',
        noCache: true,
        code: '20180319104742_11',
        hidden: true
      },
      component: (resolve) => require(['../views/shop/nav9/tab11.vue'], resolve)
    }, {
      path: 'tab8-v',
      name: '已绑定会员-v',
      meta: {
        title: '已绑定会员-v',
        icon: 'table',
        noCache: true,
        code: '20180319104742_11',
        hidden: true
      },
      component: (resolve) => require(['../views/shop/nav9/tab8.vue'], resolve)
    }, {
      path: 'tab12-v',
      name: '创建计次卡-v',
      meta: {
        title: '创建计次卡-v',
        icon: 'table',
        noCache: true,
        code: '',
        hidden: true
      },
      component: (resolve) => require(['../views/shop/tab7s-metering-v.vue'], resolve)
    }, {
      path: 'tab13-v',
      name: '会员积分记录-v',
      meta: {
        title: '会员积分记录-v',
        icon: 'table',
        noCache: true,
        code: '20180316114906_58'
      },
      component: (resolve) => require(['../views/shop/nav9/tab13.vue'], resolve)
    }, {
      path: 'tab14-v',
      name: '计次卡领取记录-v',
      meta: {
        title: '计次卡领取记录-v',
        icon: 'table',
        noCache: true,
        code: '20180316114906_58'
      },
      component: (resolve) => require(['../views/shop/nav9/tab14.vue'], resolve)
    }, {
      path: 'tab15-v',
      name: '计次卡核销记录-v',
      meta: {
        title: '计次卡核销记录-v',
        icon: 'table',
        noCache: true,
        code: '20180316114906_58'
      },
      component: (resolve) => require(['../views/shop/nav9/tab15.vue'], resolve)
    }, {
      path: 'tab16-v',
      name: '消费有礼-v',
      meta: {
        title: '消费有礼-v',
        icon: 'table',
        noCache: true,
        code: '20180316114906_58'
      },
      component: (resolve) => require(['../views/shop/nav9/tab16.vue'], resolve)
    }, {
      path: 'tab17-v',
      name: '添加消费有礼-v',
      meta: {
        title: '添加消费有礼-v',
        icon: 'table',
        noCache: true,
        hidden: true,
        code: '20180316114906_58'
      },
      component: (resolve) => require(['../views/shop/nav9/tab17.vue'], resolve)
    }, {
      path: 'tab18-v',
      name: '充值有礼-v',
      meta: {
        title: '充值有礼-v',
        icon: 'table',
        noCache: true,
        code: '20180316114906_58'
      },
      component: (resolve) => require(['../views/shop/nav9/tab18.vue'], resolve)
    }, {
      path: 'tab19-v',
      name: '添加充值有礼-v',
      meta: {
        title: '添加充值有礼-v',
        icon: 'table',
        noCache: true,
        hidden: true,
        code: '20180316114906_58'
      },
      component: (resolve) => require(['../views/shop/nav9/tab19.vue'], resolve)
    }, {
      path: 'tab20-v',
      name: '开卡有礼-v',
      meta: {
        title: '开卡有礼-v',
        icon: 'table',
        noCache: true,
        code: '20180316114906_58'
      },
      component: (resolve) => require(['../views/shop/nav9/tab20.vue'], resolve)
    }, {
      path: 'tab21-v',
      name: '添加开卡有礼-v',
      meta: {
        title: '添加开卡有礼-v',
        icon: 'table',
        noCache: true,
        hidden: true,
        code: '20180316114906_58'
      },
      component: (resolve) => require(['../views/shop/nav9/tab21.vue'], resolve)
    }, {
      path: 'tab22-v',
      name: '充值规则明细-v',
      meta: {
        title: '充值规则明细-v',
        icon: 'table',
        noCache: true,
        hidden: true,
        code: '20180316114906_58'
      },
      component: (resolve) => require(['../views/shop/nav9/tab22.vue'], resolve)
    }, {
      path: 'tab23-v',
      name: '消费规则明细-v',
      meta: {
        title: '消费规则明细-v',
        icon: 'table',
        noCache: true,
        hidden: true,
        code: '20180316114906_58'
      },
      component: (resolve) => require(['../views/shop/nav9/tab23.vue'], resolve)
    }, {
      path: 'tab24-v',
      name: '会员分享记录-v',
      meta: {
        title: '会员分享记录-v',
        icon: 'table',
        noCache: true,
        code: '20180316114906_58'
      },
      component: (resolve) => require(['../views/shop/nav9/tab24.vue'], resolve)
    }, {
      path: 'tab25-v',
      name: '购买会员卡管理-v',
      meta: {
        title: '购买会员卡管理-v',
        icon: 'table',
        noCache: true,
        code: '20180316114906_58'
      },
      component: (resolve) => require(['../views/shop/nav9/tab25.vue'], resolve)
    }]
  }, {
    path: '/index3',
    name: '会员套餐',
    meta: {
      icon: 'icon-huiyuan'
    },
    component: Abstract,
    children: [{
      path: 'package01',
      name: '套餐购买记录',
      meta: {
        title: '套餐购买记录', icon: 'table', noCache: true, code:'20180316115052_26'
      },
      component: (resolve) => require(['../views/shop/nav7/package01.vue'], resolve)
    },{
      path: 'package02',
      name: '会员邀请记录',
      meta: {
        title: '会员邀请记录', icon: 'table', noCache: true, code:'20180316115102_40'
      },
      component: (resolve) => require(['../views/shop/nav7/package02.vue'], resolve)
    },{
      path: 'package03',
      name: '套餐激活汇总',
      meta: {
        title: '套餐激活汇总', icon: 'table', noCache: true, code:'20180316115216_15'
      },
      component: (resolve) => require(['../views/shop/nav7/package03.vue'], resolve)
    },{
      path: 'package04',
      name: '套餐列表',
      meta: {
        title: '套餐列表', icon: 'table', noCache: true, code:'20180316115226_96'
      },
      component: (resolve) => require(['../views/shop/nav7/package04.vue'], resolve)
    }]
  },{
    path: '/index3',
    name: '积分商城',
    meta: {
      icon: 'icon-jifen'
    },
    component: Abstract,
    children: [{
      path: 'shop1',
      name: '商品管理',
      meta: {
        title: '商品管理', icon: 'table', noCache: true, code:'20180316115233_28'
      },
      component: (resolve) => require(['../views/shop/nav5/shop1.vue'], resolve)
    },{
      path: 'shop2',
      name: '订单管理',
      meta: {
        title: '订单管理', icon: 'table', noCache: true, code:'20180316115239_61'
      },
      component: (resolve) => require(['../views/shop/nav5/shop2.vue'], resolve)
    }]
  },{
    path: '/index4',
    name: '小程序管理',
    meta: {
      icon: 'icon-xiaochengxu'
    },
    component: Abstract,
    children: [{
      path: 'miniprogram2',
      name: '轮播图列表',
      meta: {
        title: '轮播图列表', icon: 'table', noCache: true, code:'20180316115233_28'
      },
      component: (resolve) => require(['../views/shop/nav8/miniprogram2.vue'], resolve)
    },{
      path: 'miniprogram1',
      name: '导航列表',
      meta: {
        title: '导航列表', icon: 'table', noCache: true, code:'20180316115233_28'
      },
      component: (resolve) => require(['../views/shop/nav8/miniprogram1.vue'], resolve)
    },{
      path: 'miniprogram4',
      name: '资讯列表',
      meta: {
        title: '资讯列表', icon: 'table', noCache: true, code:'20180316115233_28'
      },
      component: (resolve) => require(['../views/shop/nav8/miniprogram4.vue'], resolve)
    },{
      path: 'miniprogram3',
      name: '新增资讯',
      meta: {
        title: '新增资讯', icon: 'table', noCache: true, code:'20180316115233_28', hidden:true
      },
      component: (resolve) => require(['../views/shop/nav8/miniprogram3.vue'], resolve)
    },{
      path: 'miniprogram5',
      name: '资讯修改',
      meta: {
        title: '资讯修改', icon: 'table', noCache: true, code:'20180316115233_28', hidden:true
      },
      component: (resolve) => require(['../views/shop/nav8/miniprogram5.vue'], resolve)
    }, {
      path: 'miniprogram6',
      name: '评价列表',
      meta: {
        title: '评价列表',
        icon: 'table',
        noCache: true,
        code: '20180316115233_28'
      },
      component: (resolve) => require(['../views/shop/nav8/miniprogram6.vue'], resolve)
    }, {
      path: 'miniprogram7',
      name: '团购商品列表',
      meta: {
        title: '团购商品列表',
        icon: 'table',
        noCache: true,
        code: '20180316115233_28'
      },
      component: (resolve) => require(['../views/shop/nav8/miniprogram7.vue'], resolve)
    }, {
      path: 'miniprogram8',
      name: '团购订单列表',
      meta: {
        title: '团购订单列表',
        icon: 'table',
        noCache: true,
        code: '20180316115233_28'
      },
      component: (resolve) => require(['../views/shop/nav8/miniprogram8.vue'], resolve)
    }, {
      path: 'miniprogram9',
      name: '拼团商品列表',
      meta: {
        title: '拼团商品列表',
        icon: 'table',
        noCache: true,
        code: '20180316115233_28'
      },
      component: (resolve) => require(['../views/shop/nav8/miniprogram9.vue'], resolve)
    }, {
      path: 'miniprogram10',
      name: '拼团订单列表',
      meta: {
        title: '拼团订单列表',
        icon: 'table',
        noCache: true,
        code: '20180316115233_28'
      },
      component: (resolve) => require(['../views/shop/nav8/miniprogram10.vue'], resolve)
    }]
  }, {
    path: '/index4',
    name: '小程序管理2',
    meta: {
      icon: 'icon-xiaochengxu'
    },
    component: Abstract,
    children: [{
      path: 'miniprogram2-v',
      name: '轮播图列表-v',
      meta: {
        title: '轮播图列表-v',
        icon: 'table',
        noCache: true,
        code: '20180316115233_28'
      },
      component: (resolve) => require(['../views/shop/nav10/miniprogram2.vue'], resolve)
    }, {
      path: 'miniprogram1-v',
      name: '导航列表-v',
      meta: {
        title: '导航列表-v',
        icon: 'table',
        noCache: true,
        code: '20180316115233_28'
      },
      component: (resolve) => require(['../views/shop/nav10/miniprogram1.vue'], resolve)
    }, {
      path: 'miniprogram4-v',
      name: '资讯列表-v',
      meta: {
        title: '资讯列表-v',
        icon: 'table',
        noCache: true,
        code: '20180316115233_28'
      },
      component: (resolve) => require(['../views/shop/nav10/miniprogram4.vue'], resolve)
    }, {
      path: 'miniprogram3-v',
      name: '新增资讯-v',
      meta: {
        title: '新增资讯-v',
        icon: 'table',
        noCache: true,
        code: '20180316115233_28',
        hidden: true
      },
      component: (resolve) => require(['../views/shop/nav10/miniprogram3.vue'], resolve)
    }, {
      path: 'miniprogram5-v',
      name: '资讯修改-v',
      meta: {
        title: '资讯修改-v',
        icon: 'table',
        noCache: true,
        code: '20180316115233_28',
        hidden: true
      },
      component: (resolve) => require(['../views/shop/nav10/miniprogram5.vue'], resolve)
    }, {
      path: 'miniprogram6-v',
      name: '评价列表-v',
      meta: {
        title: '评价列表-v',
        icon: 'table',
        noCache: true,
        code: '20180316115233_28'
      },
      component: (resolve) => require(['../views/shop/nav10/miniprogram6.vue'], resolve)
    }, {
      path: 'miniprogram7-v',
      name: '团购商品列表-v',
      meta: {
        title: '团购商品列表-v',
        icon: 'table',
        noCache: true,
        code: '20180316115233_28'
      },
      component: (resolve) => require(['../views/shop/nav10/miniprogram7.vue'], resolve)
    }, {
      path: 'miniprogram8-v',
      name: '团购订单列表-v',
      meta: {
        title: '团购订单列表-v',
        icon: 'table',
        noCache: true,
        code: '20180316115233_28'
      },
      component: (resolve) => require(['../views/shop/nav10/miniprogram8.vue'], resolve)
    }, {
      path: 'miniprogram9-v',
      name: '拼团商品列表-v',
      meta: {
        title: '拼团商品列表-v',
        icon: 'table',
        noCache: true,
        code: '20180316115233_28'
      },
      component: (resolve) => require(['../views/shop/nav10/miniprogram9.vue'], resolve)
    }, {
      path: 'miniprogram10-v',
      name: '拼团订单列表-v',
      meta: {
        title: '拼团订单列表-v',
        icon: 'table',
        noCache: true,
        code: '20180316115233_28'
      },
      component: (resolve) => require(['../views/shop/nav10/miniprogram10.vue'], resolve)
    }, {
      path: 'miniprogram11-v',
      name: '爆款活动-v',
      meta: {
        title: '爆款活动-v',
        icon: 'table',
        noCache: true,
        code: '20180316115233_28'
      },
      component: (resolve) => require(['../views/shop/nav10/miniprogram11.vue'], resolve)
    }]
  }, {
    path: '/bill1',
    name: '对账单下载',
    meta: {
      title: '对账单下载', icon: 'icon-icon--', noCache: true, code:''
    },
    component: (resolve) => require(['../views/shop/nav6/bill1.vue'], resolve)
  }, {
    path: '/bill2',
    name: '更多对账单下载',
    meta: {
      title: '更多对账单下载', icon: 'icon-icon--', noCache: true, code: '20181121143250_4'
    },
    component: (resolve) => require(['../views/shop/nav6/bill2.vue'], resolve)
  }]
