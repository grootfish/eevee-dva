const Mock = require('mockjs');

module.exports = {
  '/api/demand/list': () => {
    const data = Mock.mock({
      success: true,
      result: {
        'data|10-18': [{
          id: '@id',
          requirer: '@cname',
          org: '金华市本级采购单位01',
          'price|100-10000': 1000,
          date: '@date',
          status: /1|2|3/,
        }],
        total: 20,
      },
      error: null,
    });
    return data;
  },
  '/api/demand/delete': () => {
    const data = Mock.mock({
      success: true,
      result: null,
      error: null,
    });
    return data;
  },
    '/user/apps/getAppsBasicInfo': function (){
        const data = Mock.mock({
            "success": true,
            "result": {
                "getMyDistrict": {
                    "id": "960",
                    "parentId": 954,
                    "code": "330108",
                    "name": "滨江区",
                    "type": "0",
                    "hierarchy": "3310.953.954.960",
                    "fullName": "浙江省杭州市滨江区",
                    "nameBone": "浙江杭滨江",
                    "shortPinyin": null,
                    "shortPy": null,
                    "tsPublish": 1451577600000,
                    "tsDeprecated": 253402271999000,
                    "tsPublishInternal": 1451577600000,
                    "tsDeprecatedInternal": 253402271999000,
                    "isLeaf": true,
                    "version": null,
                    "tsUpdated": 1516188219000,
                    "postcode": null,
                    "areaCode": null,
                    "characters": null,
                    "dotCode": null,
                    "region": null,
                    "status": "启用",
                    "tier": "区县",
                    "remark": null
                },
                "getUserIdentity": [ {
                    "userId": 100012122,
                    "empId": 100012122,
                    "userDisplayName": null,
                    "displayName": "超级机构",
                    "categoryName": "030101",
                    "categoryDisplayName": "政府集中采购机构",
                    "districtDisplayName": "滨江区",
                    "orgName": "滨江区采购中心单位",
                    "orgId": 100012072,
                    "departmentName": "111",
                    "departmentId": 1000100018330,
                    "userType": "Org",
                    "currentFlag": true
                } ],
                "getEnvHref": {
                    "login": "http://member.test.cai-inc.com/login",
                    "logout": "http://member.test.cai-inc.com/logout",
                    "category": "http://member.test.cai-inc.com/api/user/category",
                    "userCenter": "http://member.test.cai-inc.com/user-center",
                    "front": "http://www.test.cai-inc.com",
                    "middle": "http://middle.test.cai-inc.com",
                    "member": "http://member.test.cai-inc.com",
                    "protocol": "http://protocol.test.cai-inc.com",
                    "agreement": "http://agreement.test.cai-inc.com",
                    "inquiry": "http://inquiry.test.cai-inc.com",
                    "inquiryhall": "http://inquiryhall.test.cai-inc.com",
                    "reverse": "http://reverse.test.cai-inc.com",
                    "reversehall": "http://reversehall.test.cai-inc.com",
                    "hall": "http://hall.test.cai-inc.com",
                    "bidding": "http://bidding.test.cai-inc.com",
                    "zjzfcg": "http://122.224.213.60:7002/cssframework/loginWin1.jsp",
                    "tradeAdmin": "http://admin.test.cai-inc.com",
                    "vaccine": "http://vaccine.test.cai-inc.com",
                    "projectmanager": "http://project-manage.test.cai-inc.com",
                    "supplier": "http://supplier.test.cai-inc.com",
                    "commission": "http://commission.test.cai-inc.com",
                    "settlement": "http://pay.test.cai-inc.com",
                    "customer": "http://customer.test.cai-inc.com",
                    "salesarea": "http://salesarea.test.cai-inc.com",
                    "experts": "http://experts.test.cai-inc.com",
                    "athena": "http://test.cai-inc.com/athena",
                    "vienna": "http://test.cai-inc.com/vienna",
                    "lasvegas": "http://test.cai-inc.com/lasvegas",
                    "ctaxccgp": "http://ctaxccgp.test.cai-inc.com",
                    "ctaxccgphall": "http://ctaxccgp-hall.test.cai-inc.com",
                    "health": "http://test.cai-inc.com/health",
                    "health-hall": "http://medical.test.cai-inc.com",
                    "bidding-open": "http://test.cai-inc.com/bidding-open",
                    "pageoffice": "http://pageoffice.test.cai-inc.com",
                    "index": "http://__ENV_PREFIX__-__ENV_NAME__.cai-inc.com",
                    "fixed": "http://fixed.test.cai-inc.com"
                },
                "getAppsByDimForFront": {
                    "currentName": "系统管理",
                    "appList": [ {
                        "app": {
                            "id": 13,
                            "name": "基础库",
                            "brief": null,
                            "description": "",
                            "code": "zcy.base",
                            "parentCode": "zcy",
                            "level": 1,
                            "status": 1,
                            "statusUpdatedAt": 1484730078000,
                            "createdAt": 1484730078000,
                            "updatedAt": 1484730078000,
                            "isOpen": false,
                            "icon": "icon-app_icon_base",
                            "domain": null,
                            "url": "http://middle.test.cai-inc.com/dashboard/panel",
                            "type": 1
                        },
                        "appCode": null,
                        "backLogApp": "item,expert-manager,ageOrg,agrsuppmng,supplier",
                        "backLogCount": 18241,
                        "appSubName": "JICHU KU"
                    }, {
                        "app": {
                            "id": 23,
                            "name": "采购计划",
                            "brief": null,
                            "description": "",
                            "code": "zcy.purchase-plan",
                            "parentCode": "zcy",
                            "level": 1,
                            "status": 1,
                            "statusUpdatedAt": 1497873406000,
                            "createdAt": 1497873406000,
                            "updatedAt": 1497873406000,
                            "isOpen": false,
                            "icon": " icon-app_icon_cgjh",
                            "domain": null,
                            "url": "http://middle.test.cai-inc.com/dashboard/panel",
                            "type": 1
                        }, "appCode": null, "backLogApp": null, "backLogCount": null, "appSubName": "CAIGOU JIHUA"
                    }, {
                        "app": {
                            "id": 39,
                            "name": "电子卖场",
                            "brief": null,
                            "description": "",
                            "code": "zcy.emall.esale",
                            "parentCode": "zcy",
                            "level": 1,
                            "status": 1,
                            "statusUpdatedAt": 1505129860000,
                            "createdAt": 1505129860000,
                            "updatedAt": 1505129860000,
                            "isOpen": false,
                            "icon": " icon-app_icon_esale",
                            "domain": null,
                            "url": "http://middle.test.cai-inc.com/dashboard/panel",
                            "type": 4
                        },
                        "appCode": null,
                        "backLogApp": "athena,car-insurance,car-repair,fixed,fixed-hotel,trade,zeus",
                        "backLogCount": 0,
                        "appSubName": "DIANZI MAICHANG"
                    }, {
                        "app": {
                            "id": 11,
                            "name": "项目采购",
                            "brief": null,
                            "description": "",
                            "code": "zcy.procurement",
                            "parentCode": "zcy",
                            "level": 1,
                            "status": 1,
                            "statusUpdatedAt": 1484730078000,
                            "createdAt": 1484730078000,
                            "updatedAt": 1484730078000,
                            "isOpen": false,
                            "icon": "icon-app_icon_xmcg",
                            "domain": null,
                            "url": "http://bidding.test.cai-inc.com/biding/console",
                            "type": 1
                        },
                        "appCode": "招投标",
                        "backLogApp": "trust,ztb",
                        "backLogCount": 8,
                        "appSubName": "XIANGMU CAIGOU"
                    }, {
                        "app": {
                            "id": 22,
                            "name": "公告",
                            "brief": null,
                            "description": "",
                            "code": "zcy.notice",
                            "parentCode": "zcy",
                            "level": 1,
                            "status": 1,
                            "statusUpdatedAt": 1497873406000,
                            "createdAt": 1497873406000,
                            "updatedAt": 1497873406000,
                            "isOpen": false,
                            "icon": "icon-app_icon_gg",
                            "domain": null,
                            "url": "http://middle.test.cai-inc.com/dashboard/panel",
                            "type": 1
                        }, "appCode": "公告管理", "backLogApp": "announcement", "backLogCount": 0, "appSubName": "GONGGAO "
                    }, {
                        "app": {
                            "id": 20,
                            "name": "合同",
                            "brief": null,
                            "description": "",
                            "code": "zcy.contract",
                            "parentCode": "zcy",
                            "level": 1,
                            "status": 1,
                            "statusUpdatedAt": 1497873406000,
                            "createdAt": 1497873406000,
                            "updatedAt": 1497873406000,
                            "isOpen": false,
                            "icon": "icon-app_icon_ht",
                            "domain": null,
                            "url": "http://middle.test.cai-inc.com/dashboard/panel",
                            "type": 1
                        }, "appCode": null, "backLogApp": null, "backLogCount": null, "appSubName": "HETONG "
                    }, {
                        "app": {
                            "id": 40,
                            "name": "预警",
                            "brief": null,
                            "description": "",
                            "code": "zcy.warn",
                            "parentCode": "zcy",
                            "level": 1,
                            "status": 1,
                            "statusUpdatedAt": 1505129860000,
                            "createdAt": 1505129860000,
                            "updatedAt": 1505129860000,
                            "isOpen": false,
                            "icon": "icon-app_icon_warn",
                            "domain": null,
                            "url": "http://middle.test.cai-inc.com/dashboard/panel",
                            "type": 1
                        }, "appCode": null, "backLogApp": "warning", "backLogCount": 0, "appSubName": "YUJING "
                    }, {
                        "app": {
                            "id": 41,
                            "name": "诚信中心",
                            "brief": null,
                            "description": "",
                            "code": "zcy.credit",
                            "parentCode": "zcy",
                            "level": 1,
                            "status": 1,
                            "statusUpdatedAt": 1505129860000,
                            "createdAt": 1505129860000,
                            "updatedAt": 1505129860000,
                            "isOpen": false,
                            "icon": "icon-app_icon_credit",
                            "domain": null,
                            "url": "http://middle.test.cai-inc.com/dashboard/panel",
                            "type": 1
                        },
                        "appCode": null,
                        "backLogApp": "vanyar-credit",
                        "backLogCount": 0,
                        "appSubName": "CHENGXIN ZHONGXIN"
                    }, {
                        "app": {
                            "id": 43,
                            "name": "配置管理",
                            "brief": null,
                            "description": "",
                            "code": "zcy.config",
                            "parentCode": "zcy",
                            "level": 1,
                            "status": 1,
                            "statusUpdatedAt": 1505129860000,
                            "createdAt": 1505129860000,
                            "updatedAt": 1505129860000,
                            "isOpen": false,
                            "icon": "icon-app_icon_config",
                            "domain": null,
                            "url": "http://middle.test.cai-inc.com/dashboard/panel",
                            "type": 1
                        }, "appCode": null, "backLogApp": null, "backLogCount": null, "appSubName": "PEIZHI GUANLI"
                    }, {
                        "app": {
                            "id": 24,
                            "name": "系统管理",
                            "brief": null,
                            "description": "",
                            "code": "zcy.sys",
                            "parentCode": "zcy",
                            "level": 1,
                            "status": 1,
                            "statusUpdatedAt": 1497873406000,
                            "createdAt": 1497873406000,
                            "updatedAt": 1497873406000,
                            "isOpen": false,
                            "icon": " icon-app_icon_xtgl",
                            "domain": null,
                            "url": "http://middle.test.cai-inc.com/dashboard/panel",
                            "type": 1
                        }, "appCode": null, "backLogApp": null, "backLogCount": null, "appSubName": "XITONG GUANLI"
                    } ]
                }
            },
            "error": null
        });
        return data;
    },
    '/backlog/item/obtainBacklogHeadInfo': function (){
        const data = Mock.mock({
            "code": 0,
            "message": "完成",
            "data": {
                "messageCount": 6,
                "backlogCount": 18249,
                "backlogs": [ {
                    "id": "02db7517-76be-4824-8944-cbd9fd25ff87",
                    "creatorId": null,
                    "creatorType": null,
                    "level": null,
                    "startupAt": 1529024401000,
                    "invalidateAt": null,
                    "serialNumber": "100012072_1_2018061509",
                    "title": " 【初审处理】您有7件商品待初审，点击查看详情。",
                    "app": "item",
                    "appTag": null,
                    "appSection": null,
                    "appData": null,
                    "appName": "商品管理",
                    "callbackUrl": "https://www.test.cai-inc.com/seller/item-check?auditStatus=1",
                    "callbackType": null,
                    "callbackTitle": null,
                    "autoFinish": null,
                    "version": null,
                    "createdAt": 1529024401000,
                    "updatedAt": 1529024401000,
                    "serialType": "audit_item_institution_id",
                    "needEffectWarning": null,
                    "serialNumberUrl": null
                }, {
                    "id": "24450c48-dfb0-4342-8c4c-64c64445a970",
                    "creatorId": null,
                    "creatorType": null,
                    "level": null,
                    "startupAt": 1528979317000,
                    "invalidateAt": null,
                    "serialNumber": "ztb-assignPlan-1000000000000021036",
                    "title": "【创建项目】浙江省本级采购单位 委托竞争性磋商-003采购计划待创建项目",
                    "app": "ztb",
                    "appTag": null,
                    "appSection": null,
                    "appData": null,
                    "appName": "招投标",
                    "callbackUrl": "http://bidding.test.cai-inc.com/xmgl/scxm?tablename=budget_center&field=status_no&statusNo=all&status=24",
                    "callbackType": null,
                    "callbackTitle": null,
                    "autoFinish": null,
                    "version": null,
                    "createdAt": 1528979317000,
                    "updatedAt": 1528979317000,
                    "serialType": "ztb-assignPlan",
                    "needEffectWarning": null,
                    "serialNumberUrl": null
                }, {
                    "id": "2bd124cd-f8ee-439c-a5c1-b8d97af3b3b2",
                    "creatorId": null,
                    "creatorType": null,
                    "level": null,
                    "startupAt": 1528963113000,
                    "invalidateAt": null,
                    "serialNumber": "58ed4be1111cb5a5",
                    "title": "【开评标处理】项目名称:公告测试0531-02 项目开评标待处理",
                    "app": "ztb",
                    "appTag": null,
                    "appSection": null,
                    "appData": null,
                    "appName": "招投标",
                    "callbackUrl": "http://test.cai-inc.com/bidding-open/purchaser/bidding-details?operation=edit&projectId=58ed4be1111cb5a5&item=1",
                    "callbackType": null,
                    "callbackTitle": null,
                    "autoFinish": null,
                    "version": null,
                    "createdAt": 1528963113000,
                    "updatedAt": 1528963113000,
                    "serialType": null,
                    "needEffectWarning": null,
                    "serialNumberUrl": null
                }, {
                    "id": "11030662-d70b-4a53-9f58-86dfe426950f",
                    "creatorId": null,
                    "creatorType": null,
                    "level": null,
                    "startupAt": 1528892397000,
                    "invalidateAt": null,
                    "serialNumber": "ztb-assignPlan-1000000000000021202",
                    "title": "【创建项目】滨江区采购人单位的测试采购计划退回陈驰-002-000采购计划待创建项目",
                    "app": "ztb",
                    "appTag": null,
                    "appSection": null,
                    "appData": null,
                    "appName": "招投标",
                    "callbackUrl": "http://bidding.test.cai-inc.com/xmgl/scxm?tablename=budget_center&field=status_no&statusNo=all&status=24",
                    "callbackType": null,
                    "callbackTitle": null,
                    "autoFinish": null,
                    "version": null,
                    "createdAt": 1528892397000,
                    "updatedAt": 1528892397000,
                    "serialType": "ztb-assignPlan",
                    "needEffectWarning": null,
                    "serialNumberUrl": null
                }, {
                    "id": "4a842bf4-1bca-4bb1-bf02-30ca2883e81e",
                    "creatorId": null,
                    "creatorType": null,
                    "level": null,
                    "startupAt": 1528869476000,
                    "invalidateAt": null,
                    "serialNumber": "58fdc73750dcb2d5",
                    "title": "【发布处理】项目名称： \"liangjie-3\" (项目编号:liangjie-3)采购公告待发布",
                    "app": "ztb",
                    "appTag": null,
                    "appSection": null,
                    "appData": null,
                    "appName": "招投标",
                    "callbackUrl": "http://bidding.test.cai-inc.com/xmgl/cgggfb_edit?projectId=58fdc73750dcb2d5",
                    "callbackType": null,
                    "callbackTitle": null,
                    "autoFinish": null,
                    "version": null,
                    "createdAt": 1528869476000,
                    "updatedAt": 1528869476000,
                    "serialType": null,
                    "needEffectWarning": null,
                    "serialNumberUrl": null
                } ],
                "messages": [ {
                    "id": "ab0bf243-7fc0-4fdb-ab0d-9681d470d1ae",
                    "creatorId": -1,
                    "creatorType": null,
                    "level": null,
                    "title": "协议入围通知",
                    "content": "您好:<br>&nbsp;&nbsp;&nbsp;&nbsp;嘉兴市秀城区采购机构签约协议213213213已经审核通过，请您确认。<br><a href='//agreement.test.cai-inc.com/agreement-fixed/protocol-detail?supplierId=100014379&protocolId=2207&projectId=832'>点击链接查看详情</a>",
                    "imageUrl": null,
                    "app": "hades",
                    "appId": null,
                    "appTag": null,
                    "appName": null,
                    "appData": null,
                    "isRead": false,
                    "isCollection": null,
                    "createdAt": 1528961796000,
                    "updatedAt": 1528961796000
                }, {
                    "id": "d9f305c2-4c02-495c-b187-915ff2b298f9",
                    "creatorId": -1,
                    "creatorType": null,
                    "level": null,
                    "title": "合同审核通过通知",
                    "content": "合同(编号:10115,所属项目:0611-1)已审核通过",
                    "imageUrl": null,
                    "app": "ztb",
                    "appId": null,
                    "appTag": null,
                    "appName": null,
                    "appData": null,
                    "isRead": false,
                    "isCollection": null,
                    "createdAt": 1528708915000,
                    "updatedAt": 1528708915000
                }, {
                    "id": "ecbb945b-6ee5-4f42-816c-85d848b120a4",
                    "creatorId": -1,
                    "creatorType": null,
                    "level": null,
                    "title": "协议入围通知",
                    "content": "您好:<br>&nbsp;&nbsp;&nbsp;&nbsp;浙江省杭州市本级采购中心签约协议项目四期的协议已经审核通过，请您确认。<br><a href='//agreement.test.cai-inc.com/agreement-fixed/protocol-detail?supplierId=100013901&protocolId=2307&projectId=872'>点击链接查看详情</a>",
                    "imageUrl": null,
                    "app": "hades",
                    "appId": null,
                    "appTag": null,
                    "appName": null,
                    "appData": null,
                    "isRead": false,
                    "isCollection": null,
                    "createdAt": 1528465529000,
                    "updatedAt": 1528465529000
                }, {
                    "id": "45ade1d9-e270-4fdc-9c71-e44df8c764e8",
                    "creatorId": -1,
                    "creatorType": null,
                    "level": null,
                    "title": "抽取结果通知",
                    "content": "滨江区采购中心单位 你好！\r\n居安推荐抽取-推荐人员项目抽取完成。点击下面的链接查看详情：\r\nhttp://experts.test.cai-inc.com/expert/extraction/outcome?programId=10279",
                    "imageUrl": null,
                    "app": "expert-manager",
                    "appId": null,
                    "appTag": null,
                    "appName": null,
                    "appData": null,
                    "isRead": false,
                    "isCollection": null,
                    "createdAt": 1528456243000,
                    "updatedAt": 1528456243000
                }, {
                    "id": "53eb8b59-f2e2-4379-8055-05718c26049e",
                    "creatorId": -1,
                    "creatorType": null,
                    "level": null,
                    "title": "抽取结果通知",
                    "content": "滨江区采购中心单位 你好！\r\n居安自抽001项目抽取完成。点击下面的链接查看详情：\r\nhttp://experts.test.cai-inc.com/expert/extraction/outcome?programId=10277",
                    "imageUrl": null,
                    "app": "expert-manager",
                    "appId": null,
                    "appTag": null,
                    "appName": null,
                    "appData": null,
                    "isRead": false,
                    "isCollection": null,
                    "createdAt": 1528454455000,
                    "updatedAt": 1528454455000
                } ]
            }
        });
        return data;
    },
    '/user/privileges/getAppMenuTree':function (){
        const data = Mock.mock({"success":true,"result":[{"name":"总览","icon":"icon-gongzuotai","href":"http://middle.test.cai-inc.com/dashboard/panel","path":null,"privileges":[],"child":[],"alias":null},{"name":"供应商管理","icon":"icon-gongyingshangguanli","href":"","path":null,"privileges":[],"child":[{"name":"供应商查询","icon":"","href":"http://supplier.test.cai-inc.com/supplier/query","path":null,"privileges":[],"child":[],"alias":null},{"name":"注册审核","icon":"","href":"http://supplier.test.cai-inc.com/supplier/register-manage","path":null,"privileges":[],"child":[],"alias":null},{"name":"网超资格确认","icon":"","href":"http://salesarea.test.cai-inc.com/sales-agreement/audit-manage","path":null,"privileges":[],"child":[],"alias":null},{"name":"资格列表","icon":"","href":"http://salesarea.test.cai-inc.com/sales-agreement/qualification-list","path":null,"privileges":[],"child":[],"alias":null},{"name":"变更记录","icon":"","href":"http://salesarea.test.cai-inc.com/sales-agreement/changeLog","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"商品管理","icon":"icon-shangpinguanli","href":"","path":null,"privileges":[],"child":[{"name":"商品查询","icon":"","href":"http://admin.test.cai-inc.com/items/purchase-center-items","path":null,"privileges":[],"child":[],"alias":null},{"name":"网超商品管理","icon":"","href":"http://www.test.cai-inc.com/seller/item-supervise","path":null,"privileges":[],"child":[],"alias":null},{"name":"网超商品审核","icon":"","href":"http://www.test.cai-inc.com/seller/item-check?auditStatus=1","path":null,"privileges":[],"child":[],"alias":null},{"name":"疫苗商品管理","icon":"","href":"http://www.test.cai-inc.com/seller/vaccine-item-supervise","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"专家抽取管理","icon":"icon-zhuanjiachouquguanli","href":"","path":null,"privileges":[],"child":[{"name":"抽取专家审核","icon":"icon-menu_pzgl_fxjjp","href":"http://experts.test.cai-inc.com/expert/extraction/check","path":null,"privileges":[],"child":[],"alias":null},{"name":"代抽项目管理","icon":"icon-menu_pzgl_pbgzp","href":"http://experts.test.cai-inc.com/expert/extraction/list","path":null,"privileges":[],"child":[],"alias":null},{"name":"项目抽取管理","icon":"icon-menu_pzgl_zxxjp","href":"http://experts.test.cai-inc.com/expert/extraction/ready","path":null,"privileges":[],"child":[],"alias":null},{"name":"抽取结果处理","icon":"icon-menu_pzgl_xyghp","href":"http://experts.test.cai-inc.com/expert/extract-result/list","path":null,"privileges":[],"child":[],"alias":null},{"name":"专家请假管理","icon":"icon-menu_pzgl_ggmbp","href":"http://experts.test.cai-inc.com/expert/affair/leave","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"代抽项目管理","icon":"icon-menu_pzgl_pbgzp","href":"http://experts.test.cai-inc.com/expert/extraction/list","path":null,"privileges":[],"child":[],"alias":null},{"name":"项目抽取管理","icon":"icon-menu_pzgl_zxxjp","href":"http://experts.test.cai-inc.com/expert/extraction/ready","path":null,"privileges":[],"child":[],"alias":null},{"name":"抽取结果处理","icon":"icon-menu_pzgl_xyghp","href":"http://experts.test.cai-inc.com/expert/extract-result/list","path":null,"privileges":[],"child":[],"alias":null},{"name":"抽取专家审核","icon":"icon-menu_pzgl_fxjjp","href":"http://experts.test.cai-inc.com/expert/extraction/check","path":null,"privileges":[],"child":[],"alias":null},{"name":"专家请假管理","icon":"icon-menu_pzgl_ggmbp","href":"http://experts.test.cai-inc.com/expert/affair/leave","path":null,"privileges":[],"child":[],"alias":null},{"name":"定点服务","icon":"icon-gongyingshangguanli","href":"","path":null,"privileges":[],"child":[{"name":"定点协议管理","icon":"","href":"http://fixed-hotel.test.cai-inc.com/consult_purchase/protocol_manage","path":null,"privileges":[],"child":[],"alias":null},{"name":"酒店协议审核","icon":"","href":"http://fixed-hotel.test.cai-inc.com/consult_purchase/protocol_audit","path":null,"privileges":[],"child":[],"alias":null},{"name":"保险协议审核","icon":"","href":"http://fixed.test.cai-inc.com/center/insurance/protocol/audit","path":null,"privileges":[],"child":[],"alias":null},{"name":"维修协议审核","icon":"","href":"http://fixed.test.cai-inc.com/supplier/car-info/carinfo-check","path":null,"privileges":[],"child":[],"alias":null},{"name":"定点协议引用","icon":"","href":"http://fixed-hotel.test.cai-inc.com/center/protocol/quote/quote/list","path":null,"privileges":[],"child":[],"alias":null},{"name":"定点协议确认","icon":"","href":"http://fixed-hotel.test.cai-inc.com/center/protocol/confirm/confirm/list","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"合同列表","icon":"","href":"http://contract.test.cai-inc.com/contract-center/agency/list","path":null,"privileges":[],"child":[],"alias":null},{"name":"采购计划管理","icon":"icon-yusuanguanli","href":"http://pay.test.cai-inc.com/purchaseplan/superviser-list","path":null,"privileges":[],"child":[],"alias":null},{"name":"网上超市","icon":"icon-gongyingshangguanli","href":"","path":null,"privileges":[],"child":[{"name":"网超资格确认","icon":"","href":"http://salesarea.test.cai-inc.com/sales-agreement/audit-manage","path":null,"privileges":[],"child":[],"alias":null},{"name":"网超商品管理","icon":"","href":"http://www.test.cai-inc.com/seller/item-supervise","path":null,"privileges":[],"child":[],"alias":null},{"name":"网超商品审核","icon":"","href":"http://www.test.cai-inc.com/seller/item-check?auditStatus=1","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"协议供货","icon":"icon-xieyiruweiguanli","href":"","path":null,"privileges":[],"child":[{"name":"交易查询","icon":"","href":"http://test.cai-inc.com/lasvegas/online-agree/purchaseCenter/biddingProject","path":null,"privileges":[],"child":[],"alias":null},{"name":"合同查询","icon":"","href":"http://test.cai-inc.com/vienna/online-agree/purchaseCenter/contract?contractType=1","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"协议入围","icon":"icon-xieyiruweiguanli","href":"","path":null,"privileges":[],"child":[{"name":"协议商品审核","icon":"","href":"http://protocol.test.cai-inc.com/agreement/buyingcenter-audit-list","path":null,"privileges":[],"child":[],"alias":null},{"name":"协议商品管理","icon":"","href":"http://protocol.test.cai-inc.com/agreement/buyingcenter-manage-list","path":null,"privileges":[],"child":[],"alias":null},{"name":"协议配件审核","icon":"","href":"http://protocol.test.cai-inc.com/Goodsmanage/parts-audit/list","path":null,"privileges":[],"child":[],"alias":null},{"name":"承诺式项目","icon":"","href":"http://protocol.test.cai-inc.com/agrproject/list/promiseModeList","path":null,"privileges":[],"child":[],"alias":null},{"name":"招标式项目","icon":"","href":"http://protocol.test.cai-inc.com/agrproject/list/bidModeList","path":null,"privileges":[],"child":[],"alias":null},{"name":"完结项目录入","icon":"","href":"http://protocol.test.cai-inc.com/agrproject/list/offLineModeList","path":null,"privileges":[],"child":[],"alias":null},{"name":"协议确认引用","icon":"","href":"http://protocol.test.cai-inc.com/agrproject/protocolList/quoteList","path":null,"privileges":[],"child":[],"alias":null},{"name":"协议管理","icon":"","href":"http://protocol.test.cai-inc.com/agrproject/protocolList/signedList","path":null,"privileges":[],"child":[],"alias":null},{"name":"协供货商审核","icon":"","href":"http://protocol.test.cai-inc.com/protocolSupplier/purchase/auditList","path":null,"privileges":[],"child":[],"alias":null},{"name":"协供货商列表","icon":"","href":"http://protocol.test.cai-inc.com/protocolSupplier/purchase/list","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"申诉管理","icon":"icon-menu_pzgl_pbgzp","href":"http://middle.test.cai-inc.com/appeal/appeal-order","path":null,"privileges":[],"child":[],"alias":null},{"name":"举报管理","icon":"icon-menu_pzgl_zxxjp","href":"http://middle.test.cai-inc.com/report/report-list","path":null,"privileges":[],"child":[],"alias":null},{"name":"预警管理","icon":"icon-cebianlanyujing","href":"http://middle.test.cai-inc.com/warning/message","path":null,"privileges":[],"child":[],"alias":null},{"name":"组织管理","icon":"icon-jigouguanli","href":"","path":null,"privileges":[],"child":[{"name":"用户查询","icon":"","href":"http://middle.test.cai-inc.com/orgmanage/user-query","path":null,"privileges":[],"child":[],"alias":null},{"name":"用户管理","icon":"","href":"http://middle.test.cai-inc.com/orgmanage/user-manage","path":null,"privileges":[],"child":[],"alias":null},{"name":"部门管理","icon":"","href":"http://middle.test.cai-inc.com/orgmanage/dep-manage","path":null,"privileges":[],"child":[],"alias":null},{"name":"部门信息","icon":"","href":"http://middle.test.cai-inc.com/orgmanage/dep-info","path":null,"privileges":[],"child":[],"alias":null},{"name":"CA用户管理","icon":"","href":"http://middle.test.cai-inc.com/front-permission/caUserManage","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"权限管理","icon":"icon-quanxianguanli","href":"","path":null,"privileges":[],"child":[{"name":"功能查询","icon":"","href":"http://middle.test.cai-inc.com/privilege/privilegeSearch","path":null,"privileges":[],"child":[],"alias":null},{"name":"角色查询","icon":"","href":"http://middle.test.cai-inc.com/privilege/roleSearch","path":null,"privileges":[],"child":[],"alias":null},{"name":"岗位查询","icon":"","href":"http://middle.test.cai-inc.com/privilege/positionSearch","path":null,"privileges":[],"child":[],"alias":null},{"name":"流程模板","icon":"","href":"http://middle.test.cai-inc.com/privilege/procedureOrgManage","path":null,"privileges":[],"child":[],"alias":null},{"name":"工作流配置","icon":"","href":"http://middle.test.cai-inc.com/front-workflow/workflowConfig","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"委托管理","icon":"icon-wtgl","href":"","path":null,"privileges":[],"child":[{"name":"委托协议受理","icon":"icon-menu_pzgl_ykzhp","href":"http://test.cai-inc.com/bidding-open/commission/agreementAuditAcceptance","path":null,"privileges":[],"child":[],"alias":null},{"name":"委托单受理","icon":"icon-menu_pzgl_yjgzp","href":"http://test.cai-inc.com/bidding-open/agentOrder/list","path":null,"privileges":[],"child":[],"alias":null},{"name":"采购计划分派","icon":"icon-menu_pzgl_pbgzp","href":"http://test.cai-inc.com/bidding-open/agentOrder/assignment","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"项目管理","icon":"icon-menu_pzgl_pbgzp","href":"","path":null,"privileges":[],"child":[{"name":"生成项目","icon":"icon-menu_pzgl_pbgzp","href":"http://bidding.test.cai-inc.com/xmgl/scxm?tablename=budget_center&field=status_no&statusNo=all&status=24","path":null,"privileges":[],"child":[],"alias":null},{"name":"我的项目","icon":"","href":"http://test.cai-inc.com/bidding-open/myProject/list","path":null,"privileges":[],"child":[],"alias":null},{"name":"采购文件制作","icon":"icon-menu_pzgl_zxxjp","href":"http://bidding.test.cai-inc.com/xmgl/cgwjzz","path":null,"privileges":[],"child":[],"alias":null},{"name":"采购文件审核","icon":"icon-menu_pzgl_xyghp","href":"http://bidding.test.cai-inc.com/xmgl/cgwjsh_zz?status=160&tablename=apply_head&field=status_no&statusNo=all&checkOperNo=1&pagecode=/xmgl/cgwjzz_sp","path":null,"privileges":[],"child":[],"alias":null},{"name":"采购公告发布","icon":"icon-menu_pzgl_fxjjp","href":"http://bidding.test.cai-inc.com/xmgl/cgggfb","path":null,"privileges":[],"child":[],"alias":null},{"name":"报名登记管理","icon":"icon-cjgg","href":"http://bidding.test.cai-inc.com/cggcgl/enroll","path":null,"privileges":[],"child":[],"alias":null},{"name":"更正公告制作","icon":"icon-menu_pzgl_ggmbp","href":"http://bidding.test.cai-inc.com/gzgg/correctNotice/list_process","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"更正公告","icon":"icon-menu_pzgl_fxjjp","href":"","path":null,"privileges":[],"child":[{"name":"更正公告制作","icon":"icon-menu_pzgl_ggmbp","href":"http://bidding.test.cai-inc.com/gzgg/correctNotice/list_process","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"项目采购合同","icon":"icon-quanxianguanli","href":"","path":null,"privileges":[],"child":[{"name":"合同列表","icon":"","href":"http://contract.test.cai-inc.com/contract-center/agency/list","path":null,"privileges":[],"child":[],"alias":null},{"name":"合同创建","icon":"","href":"http://bidding.test.cai-inc.com/projectContract/agency/projectList?type=1","path":null,"privileges":[],"child":[],"alias":null},{"name":"合同创建","icon":"","href":"http://bidding.test.cai-inc.com/projectContract/agency/projectList?type=1","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"场地管理","icon":"icon-cebianlanyujing","href":"","path":null,"privileges":[],"child":[{"name":"场地信息维护","icon":"","href":"http://test.cai-inc.com/bidding-open/fieldManage/field-list","path":null,"privileges":[],"child":[],"alias":null},{"name":"场地使用情况","icon":"","href":"http://test.cai-inc.com/bidding-open/spaceManage/cdsygl","path":null,"privileges":[],"child":[],"alias":null},{"name":"拼会审核","icon":"","href":"http://test.cai-inc.com/bidding-open/spaceManage/collageReview","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"审批流程管理","icon":"icon-menu_pzgl_pbgzp","href":"http://bidding.test.cai-inc.com/splc/splc_list","path":null,"privileges":[],"child":[],"alias":null},{"name":"参数设定","icon":"icon-menu_pzgl_zxxjp","href":"http://bidding.test.cai-inc.com/mbgl/rules?configurationType=0#0","path":null,"privileges":[],"child":[],"alias":null},{"name":"采购文件模板","icon":"icon-menu_pzgl_xyghp","href":"http://bidding.test.cai-inc.com/mbgl/cgwjmb?filecode=1&page=1","path":null,"privileges":[],"child":[],"alias":null},{"name":"报价表模板","icon":"icon-menu_pzgl_fxjjp","href":"http://bidding.test.cai-inc.com/mbgl/kbmb?filecode=2","path":null,"privileges":[],"child":[],"alias":null},{"name":"投标模板","icon":"icon-menu_pzgl_ggmbp","href":"http://bidding.test.cai-inc.com/mbgl/tbmb?filecode=3","path":null,"privileges":[],"child":[],"alias":null},{"name":"评标模板配置","icon":"icon-menu_pzgl_htmbp","href":"http://bidding.test.cai-inc.com/mbgl/pbmb?filecode=4","path":null,"privileges":[],"child":[],"alias":null},{"name":"数据查询","icon":"icon-cjgg","href":"","path":null,"privileges":[],"child":[{"name":"采购计划查询","icon":"","href":"http://bidding.test.cai-inc.com/xmgl/xmjhqd_list","path":null,"privileges":[],"child":[],"alias":null},{"name":"项目查询","icon":"","href":"http://bidding.test.cai-inc.com/xmgl/projectQuery/list","path":null,"privileges":[],"child":[],"alias":null},{"name":"委托协议查询","icon":"","href":"http://test.cai-inc.com/bidding-open/commission/query","path":null,"privileges":[],"child":[],"alias":null},{"name":"委托单查询","icon":"","href":"http://test.cai-inc.com/bidding-open/agentOrder/query","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"公告管理","icon":"icon-quanxianguanli","href":"","path":null,"privileges":[],"child":[{"name":"手工创建项目","icon":"icon-menu_pzgl_pbgzp","href":"http://project-manage.test.cai-inc.com/projectmanage/list","path":null,"privileges":[],"child":[],"alias":null},{"name":"创建公告","icon":"icon-menu_pzgl_zxxjp","href":"http://middle.test.cai-inc.com/announcement/create/choose-type","path":null,"privileges":[],"child":[],"alias":null},{"name":"公告列表","icon":"icon-menu_pzgl_xyghp","href":"http://middle.test.cai-inc.com/announcement/list/list-table","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"手工创建项目","icon":"icon-menu_pzgl_pbgzp","href":"http://project-manage.test.cai-inc.com/projectmanage/list","path":null,"privileges":[],"child":[],"alias":null},{"name":"创建公告","icon":"icon-menu_pzgl_zxxjp","href":"http://middle.test.cai-inc.com/announcement/create/choose-type","path":null,"privileges":[],"child":[],"alias":null},{"name":"公告列表","icon":"icon-menu_pzgl_xyghp","href":"http://middle.test.cai-inc.com/announcement/list/list-table","path":null,"privileges":[],"child":[],"alias":null},{"name":"电子卖场合同","icon":"icon-quanxianguanli","href":"","path":null,"privileges":[],"child":[{"name":"合同查询","icon":"","href":"http://test.cai-inc.com/vienna/online-agree/financialSupervision/contract","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"合同管理","icon":"icon-cjgg","href":"","path":null,"privileges":[],"child":[{"name":"合同创建","icon":"","href":"http://bidding.test.cai-inc.com/projectContract/agency/projectList?type=1","path":null,"privileges":[],"child":[],"alias":null},{"name":"合同备案","icon":"","href":"http://bidding.test.cai-inc.com/projectContract/agency/contractList?type=1","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"总览","icon":"icon-gongzuotai","href":"http://middle.test.cai-inc.com/dashboard/panel?app=ageOrg,agrsuppmng,expert-manager,item,supplier&&pageSize=20","path":null,"privileges":[],"child":[],"alias":null},{"name":"总览","icon":"icon-gongzuotai","href":"http://middle.test.cai-inc.com/dashboard/panel?app=&pageSize=20","path":null,"privileges":[],"child":[],"alias":null},{"name":"总览","icon":"icon-gongzuotai","href":"http://middle.test.cai-inc.com/dashboard/panel?app=car-insurance,car-repair,fixed,fixed-hotel,trade,zeus&pageSize=20","path":null,"privileges":[],"child":[],"alias":null},{"name":"总览","icon":"icon-gongzuotai","href":"http://middle.test.cai-inc.com/dashboard/panel?app=announcement&pageSize=20","path":null,"privileges":[],"child":[],"alias":null},{"name":"总览","icon":"icon-gongzuotai","href":"http://middle.test.cai-inc.com/dashboard/panel?app=warning&pageSize=20","path":null,"privileges":[],"child":[],"alias":null},{"name":"总览","icon":"icon-gongzuotai","href":"http://middle.test.cai-inc.com/dashboard/panel?app=vanyar-credit&pageSize=20","path":null,"privileges":[],"child":[],"alias":null},{"name":"特殊事项管理","icon":"icon-zxxjgl","href":"","path":null,"privileges":[],"child":[{"name":"特殊事项","icon":"","href":"http://test.cai-inc.com/athena/peculiar-approval/list-main","path":null,"privileges":[],"child":[],"alias":null},{"name":"配置","icon":"","href":"http://test.cai-inc.com/athena/peculiar-approval/special-rules-edit","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"总览","icon":"icon-gongzuotai","href":"http://bidding.test.cai-inc.com/console/panel","path":null,"privileges":[],"child":[],"alias":null},{"name":"收款账号管理","icon":"icon-caigoujihua-zuocedaohang-icon","href":"http://customer.test.cai-inc.com/deposit/account","path":null,"privileges":[],"child":[],"alias":null},{"name":"通用定点 - -)!","icon":"icon-htgl","href":null,"path":null,"privileges":[],"child":[{"name":"协议批量录入","icon":"","href":"http://agreement.test.cai-inc.com/agreement-fixed/project-list","path":null,"privileges":[],"child":[],"alias":null},{"name":"协议录入审核","icon":"","href":"http://agreement.test.cai-inc.com/agreement-fixed/protocol-audit-list","path":null,"privileges":[],"child":[],"alias":null},{"name":"定点协议确认","icon":"","href":"http://agreement.test.cai-inc.com/agreement-fixed/protocol-confirm-list","path":null,"privileges":[],"child":[],"alias":null},{"name":"定点商品审核","icon":"","href":"http://agreement.test.cai-inc.com/agreement-fixed/goods/buyingcenter-audit-list","path":null,"privileges":[],"child":[],"alias":null},{"name":"定点商品管理","icon":"","href":"http://agreement.test.cai-inc.com/agreement-fixed/goods/buyingcenter-manage-list","path":null,"privileges":[],"child":[],"alias":null},{"name":"联系单查询","icon":"","href":"http://fixed.test.cai-inc.com/universal/centralizer/contact-list","path":null,"privileges":[],"child":[],"alias":null},{"name":"合同查询","icon":"","href":"http://fixed.test.cai-inc.com/universal/centralizer/order-list","path":null,"privileges":[],"child":[],"alias":null},{"name":"特殊事项备案","icon":"","href":"http://test.cai-inc.com/athena/peculiar-approval/list-main?businessType=5","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"开标评标管理","icon":"icon-menu_pzgl_xyghp","href":"","path":null,"privileges":[],"child":[{"name":"开标任务分派","icon":"icon-kaibiaorenwufenpai-zuodaohang","href":"http://bidding.test.cai-inc.com/xmgl/segmentation/unassign","path":null,"privileges":[],"child":[],"alias":null},{"name":"发送评审邀请","icon":"icon-menu_pzgl_fxjjp","href":"http://bidding.test.cai-inc.com/cggcgl/fspsyq?applyheadstatusNo=185&pagecode=/cggcgl/hdyqhfs&tablename=apply_head&field=status_no&statusNo=all","path":null,"privileges":[],"child":[],"alias":null},{"name":"开标评标管理","icon":"icon-menu_pzgl_yjgzp","href":"http://test.cai-inc.com/bidding-open/purchaser/bidding","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"采购结果管理","icon":"icon-menu_pzgl_xyghp","href":"","path":null,"privileges":[],"child":[{"name":"采购结果管理","icon":"icon-menu_pzgl_ggmbp","href":"http://test.cai-inc.com/bidding-open/purchaser/bidding-result/announcement","path":null,"privileges":[],"child":[],"alias":null},{"name":"中标通知书管理","icon":"icon-menu_pzgl_yjgzp","href":"http://bidding.test.cai-inc.com/cgjggl/zbtz?flag=1","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"其他管理","icon":"icon-menu_pzgl_pbgzp","href":"","path":null,"privileges":[],"child":[{"name":"需求论证","icon":"","href":"http://bidding.test.cai-inc.com/xqlz/xqlz_list?pagecode=/xqlz/xqlz&statusNo=24","path":null,"privileges":[],"child":[],"alias":null},{"name":"需求公示","icon":"","href":"http://bidding.test.cai-inc.com/xqlz/xqgs_list?statusNo=24&pagecode=/xqlz/xqgs","path":null,"privileges":[],"child":[],"alias":null},{"name":"采购计划退回","icon":"icon-menu_pzgl_zxxjp","href":"http://bidding.test.cai-inc.com/xmth/xmkth?tablename=budget_center&field=status_no&statusNo=all&stateNo=82&pagecode=/xmgl/xmth","path":null,"privileges":[],"child":[],"alias":null},{"name":"计划退回审核","icon":"icon-menu_pzgl_xyghp","href":"http://bidding.test.cai-inc.com/xmth/thdsh?tablename=budget_back&field=status_no&statusNo=all&stateNo=10&pagecode=/xmgl/xmth_sp","path":null,"privileges":[],"child":[],"alias":null},{"name":"采购方式变更","icon":"icon-menu_pzgl_fxjjp","href":"http://bidding.test.cai-inc.com/purchaseWayChange/modeChange","path":null,"privileges":[],"child":[],"alias":null}],"alias":null},{"name":"总览","icon":"icon-gongzuotai","href":"http://archives.test.cai-inc.com/dashboard/panel","path":null,"privileges":[],"child":[],"alias":null}],"error":null})
        return data;
    },
    "/user/privileges/isResourcePermit": function (){
        return {
            "success": true,
            "result": {
                "isPermit": true,
                "accessType": 2,
                "error": "user not authorization",
                "errorType": 403
            },
            "error": null
        }
    },
    "/api/select": function (){
        const data = Mock.mock({
            'data|5': [ {
                text: "@cname",
                'value|+1': 1,
            } ]
        });
        return data
    },
    "/api/select1": function (){
        const data = Mock.mock({
            a:{
                'data|5': [ {
                    name: "@email",
                    'age|+1': 1,
                } ]
            }
        });
        return data
    },
    '/api/deleteItem': function (){
        const data = Mock.mock({
            "success": true,
            message: "1111"
        })
        return data;
    },
    '/api/deleteItems': function (){
        const data = Mock.mock({
            "success": true
        })
        return data;
    },
    '/api/check': function (){
        const data = Mock.mock({
            "success": true,
            "error": "异步错误"
        })
        return data;
    },
    '/api/detail': function (){
        const data = Mock.mock({
            "success": true,
            "data": {
                age: 11,
                bookMark: "书签",
                date: 1528957471559,
                email: "xxxxx@126.com",
                mobile: "12345678911",
                mobile1: "12345678911",
                mobile2: "12345678911",
                mobile3: "12345678911",
                name: "Hi!",
                pages: 1,
                radio: "a",
                selectName: 1,
                textArea: "12345678911",
            }
        })
        return data;
    }
}
