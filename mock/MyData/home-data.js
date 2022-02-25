//总销售额
const grossSales =
{
  totalMoney: 84759,
  todayMoney: 25,
  pariPassu: -18
}

//访问量
const rolePageViewData = [
  {
    id: parseInt(Math.random() * 1000000000000),
    roleString: '管理员',//所在城市
    text: '系统管理员，拥有所有权限',//描述
    key: 'admin',
    role: 'admin',
    roleIds: '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36'//菜单
  },
];
//加购数
const PurchaseCount = [
  {
    id: parseInt(Math.random() * 1000000000000),
    roleString: '管理员',//所在城市
    text: '系统管理员，拥有所有权限',//描述
    key: 'admin',
    role: 'admin',
    roleIds: '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36'//菜单
  },
];
//支付笔数
const payCount = [
  {
    id: parseInt(Math.random() * 1000000000000),
    roleString: '管理员',//所在城市
    text: '系统管理员，拥有所有权限',//描述
    key: 'admin',
    role: 'admin',
    roleIds: '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36'//菜单
  },
];


module.exports = [{
  url: '/gross/sales',
  type: 'post',
  response: config => {
    return {
      data: grossSales,
      code: 200,
      message: '获取总销售额成功'
    };
  }
},]

