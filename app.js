//app.js
import { getSetting, getUserInfo } from 'utils/index.js'
App({
  data:{
  },
  getSetting,
  getUserInfo,
  onLaunch() {
  },
  globalData: {
    baseImgUrl: 'http://www.zhangxiaode.com/wxImgs/',
    cookList: [
      {
        cookHd: '浆果类',
        id: 'berry',
        cookBd: [
          {
            id: "00001",
            icon: `http://www.zhangxiaode.com/wxImgs/草莓.jpg`,
            cookName: '草莓',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 17,
            num: 0
          },
          {
            id: "00002",
            icon: `http://www.zhangxiaode.com/wxImgs/桑葚.jpg`,
            cookName: '桑葚',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 22,
            num: 0
          },
          {
            id: "00003",
            icon: `http://www.zhangxiaode.com/wxImgs/马奶子.jpg`,
            cookName: '马奶子',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 15,
            num: 0
          },
          {
            id: "00004",
            icon: `http://www.zhangxiaode.com/wxImgs/蓝莓.jpg`,
            cookName: '蓝莓',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 8,
            num: 0
          },
          {
            id: "00005",
            icon: `http://www.zhangxiaode.com/wxImgs/黑莓.jpg`,
            cookName: '黑莓',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 12,
            num: 0
          },
          {
            id: "00006",
            icon: `http://www.zhangxiaode.com/wxImgs/覆盆子.jpg`,
            cookName: '覆盆子',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 20,
            num: 0
          },
          {
            id: "00007",
            icon: `http://www.zhangxiaode.com/wxImgs/葡萄.jpg`,
            cookName: '葡萄',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 8,
            num: 0
          },
          {
            id: "00008",
            icon: `http://www.zhangxiaode.com/wxImgs/青提.jpg`,
            cookName: '青提',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 15,
            num: 0
          },
          {
            id: "00009",
            icon: `http://www.zhangxiaode.com/wxImgs/红提.jpg`,
            cookName: '红提',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 14,
            num: 0
          },
          {
            id: "00010",
            icon: `http://www.zhangxiaode.com/wxImgs/水晶葡萄.jpg`,
            cookName: '水晶葡萄',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 12,
            num: 0
          }
        ]
      },
      {
        cookHd: '柑橘类',
        id: 'citrus',
        cookBd: [
          {
            id: "01001",
            icon: `http://www.zhangxiaode.com/wxImgs/金橘.jpg`,
            cookName: '金橘',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 6,
            num: 0
          },
          {
            id: "01002",
            icon: `http://www.zhangxiaode.com/wxImgs/甜橙.jpg`,
            cookName: '甜橙',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 13,
            num: 0
          },
          {
            id: "01003",
            icon: `http://www.zhangxiaode.com/wxImgs/蜜橘.jpg`,
            cookName: '蜜橘',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 9,
            num: 0
          },
          {
            id: "01004",
            icon: `http://www.zhangxiaode.com/wxImgs/柠檬.jpg`,
            cookName: '柠檬',
            cookIntro: '美味的不二选择',
            sals: 32, 
            like: 12,
            price: 22,
            num: 0
          },
          {
            id: "01005",
            icon: `http://www.zhangxiaode.com/wxImgs/葡萄柚.jpg`,
            cookName: '葡萄柚',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 7,
            num: 0
          },
          {
            id: "01006",
            icon: `http://www.zhangxiaode.com/wxImgs/文旦.jpg`,
            cookName: '文旦',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 19,
            num: 0
          },
          {
            id: "01007",
            icon: `http://www.zhangxiaode.com/wxImgs/柚子.jpg`,
            cookName: '柚子',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 5,
            num: 0
          },
          {
            id: "01008",
            icon: `http://www.zhangxiaode.com/wxImgs/砂糖橘.jpg`,
            cookName: '砂糖橘',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 7,
            num: 0
          },
          {
            id: "01009",
            icon: `http://www.zhangxiaode.com/wxImgs/蜜柑.jpg`,
            cookName: '蜜柑',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 12,
            num: 0
          },
          {
            id: "01010",
            icon: `http://www.zhangxiaode.com/wxImgs/脐橙.jpg`,
            cookName: '脐橙',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 11,
            num: 0
          },
          {
            id: "01011",
            icon: `http://www.zhangxiaode.com/wxImgs/西柚.jpg`,
            cookName: '西柚',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 7,
            num: 0
          },
          {
            id: "01012",
            icon: `http://www.zhangxiaode.com/wxImgs/莱姆.jpg`,
            cookName: '莱姆',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 10,
            num: 0
          }
        ]
      },
      {
        cookHd: '核果',
        id: 'nuclear',
        cookBd: [
          {
            id: "02001",
            icon: `http://www.zhangxiaode.com/wxImgs/樱桃.jpg`,
            cookName: '樱桃',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12, 
            like: 0,
            price: 26,
            num: 0
          },
          {
            id: "02002",
            icon: `http://www.zhangxiaode.com/wxImgs/油桃.jpg`,
            cookName: '油桃',
            cookIntro: '一次让你吃个够',
            sals: 38, 
            like: 25,
            price: 6,
            num: 0
          },
          {
            id: "02003",
            icon: `http://www.zhangxiaode.com/wxImgs/蟠桃.jpg`,
            cookName: '蟠桃',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 18,
            num: 0
          },
          {
            id: "02004",
            icon: `http://www.zhangxiaode.com/wxImgs/水蜜桃.jpg`,
            cookName: '水蜜桃',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 15,
            num: 0
          },
          {
            id: "02005",
            icon: `http://www.zhangxiaode.com/wxImgs/黄桃.jpg`,
            cookName: '黄桃',
            cookIntro: '美味的不二选择',
            sals: 32, 
            like: 12,
            price: 13,
            num: 0
          },
          {
            id: "02006",
            icon: `http://www.zhangxiaode.com/wxImgs/橄榄.jpg`,
            cookName: '橄榄',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 20,
            num: 0
          },
          {
            id: "02007",
            icon: `http://www.zhangxiaode.com/wxImgs/龙眼.jpg`,
            cookName: '龙眼',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 19,
            num: 0
          },
          {
            id: "02008",
            icon: `http://www.zhangxiaode.com/wxImgs/荔枝.jpg`,
            cookName: '荔枝',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 32,
            num: 0
          },
          {
            id: "02009",
            icon: `http://www.zhangxiaode.com/wxImgs/李子.jpg`,
            cookName: '李子',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 8,
            num: 0
          },
          {
            id: "02010",
            icon: `http://www.zhangxiaode.com/wxImgs/杏子.jpg`,
            cookName: '杏子',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 7,
            num: 0
          },
          {
            id: "02011",
            icon: `http://www.zhangxiaode.com/wxImgs/梅子.jpg`,
            cookName: '梅子',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 10,
            num: 0
          },
          {
            id: "02012",
            icon: `http://www.zhangxiaode.com/wxImgs/杨梅.jpg`,
            cookName: '杨梅',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 9,
            num: 0
          },
          {
            id: "02013",
            icon: `http://www.zhangxiaode.com/wxImgs/西梅.jpg`,
            cookName: '西梅',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 9,
            num: 0
          },
          {
            id: "02014",
            icon: `http://www.zhangxiaode.com/wxImgs/乌梅.jpg`,
            cookName: '乌梅',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 11,
            num: 0
          },
          {
            id: "02015",
            icon: `http://www.zhangxiaode.com/wxImgs/大枣.jpg`,
            cookName: '大枣',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 7,
            num: 0
          },
          {
            id: "02016",
            icon: `http://www.zhangxiaode.com/wxImgs/沙枣.jpg`,
            cookName: '沙枣',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 8,
            num: 0
          },
          {
            id: "02017",
            icon: `http://www.zhangxiaode.com/wxImgs/海枣.jpg`,
            cookName: '海枣',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 19,
            num: 0
          },
          {
            id: "02018",
            icon: `http://www.zhangxiaode.com/wxImgs/蜜枣.jpg`,
            cookName: '蜜枣',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 22,
            num: 0
          },
          {
            id: "02019",
            icon: `http://www.zhangxiaode.com/wxImgs/槟榔.jpg`,
            cookName: '槟榔',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 8,
            num: 0
          }
        ]
      },
      {
        cookHd: '仁果',
        id: 'benevolence',
        cookBd: [
          {
            id: "03001",
            icon: `http://www.zhangxiaode.com/wxImgs/苹果.jpg`,
            cookName: '苹果',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12, 
            like: 0,
            price: 5,
            num: 0
          },
          {
            id: "03002",
            icon: `http://www.zhangxiaode.com/wxImgs/梨.jpg`,
            cookName: '梨',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 4,
            num: 0
          },
          {
            id: "03003",
            icon: `http://www.zhangxiaode.com/wxImgs/柿子.jpg`,
            cookName: '柿子',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 6,
            num: 0
          }, 
          {
            id: "03004",
            icon: `http://www.zhangxiaode.com/wxImgs/枇杷.jpg`,
            cookName: '枇杷',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 13,
            num: 0
          },
          {
            id: "03005",
            icon: `http://www.zhangxiaode.com/wxImgs/蛇果.jpg`,
            cookName: '蛇果',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 25,
            num: 0
          },
          {
            id: "03007",
            icon: `http://www.zhangxiaode.com/wxImgs/海棠果.jpg`,
            cookName: '海棠果',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 19,
            num: 0
          },
          {
            id: "03008",
            icon: `http://www.zhangxiaode.com/wxImgs/沙果.jpg`,
            cookName: '沙果',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 11,
            num: 0
          },
          {
            id: "03009",
            icon: `http://www.zhangxiaode.com/wxImgs/山竹.jpg`,
            cookName: '山竹',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 23,
            num: 0
          },
          {
            id: "03010",
            icon: `http://www.zhangxiaode.com/wxImgs/黑布林.jpg`,
            cookName: '黑布林',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 15,
            num: 0
          },
          {
            id: "03011",
            icon: `http://www.zhangxiaode.com/wxImgs/杨桃.jpg`,
            cookName: '杨桃',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 18,
            num: 0
          },
          {
            id: "03012",
            icon: `http://www.zhangxiaode.com/wxImgs/山楂.jpg`,
            cookName: '山楂',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 23,
            num: 0
          },
          {
            id: "03013",
            icon: `http://www.zhangxiaode.com/wxImgs/圣女果.jpg`,
            cookName: '圣女果',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 9,
            num: 0
          },
          {
            id: "03014",
            icon: `http://www.zhangxiaode.com/wxImgs/无花果.jpg`,
            cookName: '无花果',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "03015",
            icon: `http://www.zhangxiaode.com/wxImgs/白果.jpg`,
            cookName: '白果',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 14,
            num: 0
          },
          {
            id: "03016",
            icon: `http://www.zhangxiaode.com/wxImgs/罗汉果.jpg`,
            cookName: '罗汉果',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 16,
            num: 0
          },
          {
            id: "03017",
            icon: `http://www.zhangxiaode.com/wxImgs/火龙果.jpg`,
            cookName: '火龙果',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 10,
            num: 0
          },
          {
            id: "03018",
            icon: `http://www.zhangxiaode.com/wxImgs/猕猴桃.jpg`,
            cookName: '猕猴桃',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 13,
            num: 0
          }
        ]
      },
      {
        cookHd: '瓜类',
        id: 'melon',
        cookBd: [
          {
            id: "04001",
            icon: `http://www.zhangxiaode.com/wxImgs/西瓜.jpg`,
            cookName: '西瓜',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 2,
            num: 0
          },
          {
            id: "04002",
            icon: `http://www.zhangxiaode.com/wxImgs/甜瓜.jpg`,
            cookName: '甜瓜',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 4,
            num: 0
          },
          {
            id: "04003",
            icon: `http://www.zhangxiaode.com/wxImgs/香瓜.jpg`,
            cookName: '香瓜',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 5,
            num: 0
          },
          {
            id: "04004",
            icon: `http://www.zhangxiaode.com/wxImgs/哈密瓜.jpg`,
            cookName: '哈密瓜',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 7,
            num: 0
          },
          {
            id: "04005",
            icon: `http://www.zhangxiaode.com/wxImgs/美人瓜.jpg`,
            cookName: '美人瓜',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 11,
            num: 0
          },
          {
            id: "04006",
            icon: `http://www.zhangxiaode.com/wxImgs/黄河蜜.jpg`,
            cookName: '黄河蜜',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 16,
            num: 0
          },
          {
            id: "04007",
            icon: `http://www.zhangxiaode.com/wxImgs/木瓜.jpg`,
            cookName: '木瓜',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 18,
            num: 0
          },
          {
            id: "04008",
            icon: `http://www.zhangxiaode.com/wxImgs/乳瓜.jpg`,
            cookName: '乳瓜',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 9,
            num: 0
          }
        ]
      },
      {
        cookHd: '其他',
        id: 'others',
        cookBd: [
          {
            id: "05001",
            icon: `http://www.zhangxiaode.com/wxImgs/菠萝.jpg`,
            cookName: '菠萝',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 5,
            num: 0
          },
          {
            id: "05002",
            icon: `http://www.zhangxiaode.com/wxImgs/芒果.jpg`,
            cookName: '芒果',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 19,
            num: 0
          },
          {
            id: "05003",
            icon: `http://www.zhangxiaode.com/wxImgs/椰子.jpg`,
            cookName: '椰子',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 17,
            num: 0
          },
          {
            id: "05004",
            icon: `http://www.zhangxiaode.com/wxImgs/奇异果.jpg`,
            cookName: '奇异果',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 13,
            num: 0
          },
          {
            id: "05005",
            icon: `http://www.zhangxiaode.com/wxImgs/芭乐.jpg`,
            cookName: '芭乐',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 9,
            num: 0
          },
          {
            id: "05006",
            icon: `http://www.zhangxiaode.com/wxImgs/榴莲.jpg`,
            cookName: '榴莲',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 7,
            num: 0
          },
          {
            id: "05007",
            icon: `http://www.zhangxiaode.com/wxImgs/香蕉.jpg`,
            cookName: '香蕉',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 5,
            num: 0
          },
          {
            id: "05008",
            icon: `http://www.zhangxiaode.com/wxImgs/甘蔗.jpg`,
            cookName: '甘蔗',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 5,
            num: 0
          },
          {
            id: "05009",
            icon: `http://www.zhangxiaode.com/wxImgs/百合.jpg`,
            cookName: '百合',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 27,
            num: 0
          },
          {
            id: "05010",
            icon: `http://www.zhangxiaode.com/wxImgs/莲子.jpg`,
            cookName: '莲子',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 32,
            num: 0
          },
          {
            id: "05011",
            icon: `http://www.zhangxiaode.com/wxImgs/石榴.jpg`,
            cookName: '石榴',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 13,
            num: 0
          },
          {
            id: "05012",
            icon: `http://www.zhangxiaode.com/wxImgs/核桃.jpg`,
            cookName: '核桃',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 42,
            num: 0
          },
          {
            id: "05013",
            icon: `http://www.zhangxiaode.com/wxImgs/拐枣.jpg`,
            cookName: '拐枣',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 18,
            num: 0
          }
        ]
      }
    ],
    cartList:[]
  }
})