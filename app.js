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
    cookList: [
      {
        cookHd: '浆果类',
        id: 'berry',
        cookBd: [
          {
            id: "00001",
            icon: '../../assets/item.jpg',
            cookName: '草莓',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            id: "00002",
            icon: '../../assets/item.jpg',
            cookName: '桑椹',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            id: "00003",
            icon: '../../assets/item.jpg',
            cookName: '马奶子',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            id: "00004",
            icon: '../../assets/item.jpg',
            cookName: '蓝莓',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "00005",
            icon: '../../assets/item.jpg',
            cookName: '黑莓',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "00006",
            icon: '../../assets/item.jpg',
            cookName: '覆盆子',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "00007",
            icon: '../../assets/item.jpg',
            cookName: '葡萄',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "00008",
            icon: '../../assets/item.jpg',
            cookName: '青提',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "00009",
            icon: '../../assets/item.jpg',
            cookName: '红提',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "00010",
            icon: '../../assets/item.jpg',
            cookName: '水晶葡萄',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
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
            icon: '../../assets/item.jpg',
            cookName: '金橘',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            id: "01002",
            icon: '../../assets/item.jpg',
            cookName: '甜橙',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            id: "01003",
            icon: '../../assets/item.jpg',
            cookName: '蜜橘',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "01004",
            icon: '../../assets/item.jpg',
            cookName: '柠檬',
            cookIntro: '美味的不二选择',
            sals: 32, 
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "01005",
            icon: '../../assets/item.jpg',
            cookName: '葡萄柚',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "01006",
            icon: '../../assets/item.jpg',
            cookName: '文旦',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "01007",
            icon: '../../assets/item.jpg',
            cookName: '柚子',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "01008",
            icon: '../../assets/item.jpg',
            cookName: '砂糖橘',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "01009",
            icon: '../../assets/item.jpg',
            cookName: '蜜柑',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "01010",
            icon: '../../assets/item.jpg',
            cookName: '脐橙',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "01011",
            icon: '../../assets/item.jpg',
            cookName: '西柚',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "01012",
            icon: '../../assets/item.jpg',
            cookName: '莱姆',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
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
            icon: '../../assets/item.jpg',
            cookName: '樱桃',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12, 
            like: 0,
            price: 38,
            num: 0
          },
          {
            id: "02002",
            icon: '../../assets/item.jpg',
            cookName: '油桃',
            cookIntro: '一次让你吃个够',
            sals: 38, 
            like: 25,
            price: 56,
            num: 0
          },
          {
            id: "02003",
            icon: '../../assets/item.jpg',
            cookName: '蟠桃',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "02004",
            icon: '../../assets/item.jpg',
            cookName: '水蜜桃',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "02005",
            icon: '../../assets/item.jpg',
            cookName: '黄桃',
            cookIntro: '美味的不二选择',
            sals: 32, 
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "02006",
            icon: '../../assets/item.jpg',
            cookName: '橄榄',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "02007",
            icon: '../../assets/item.jpg',
            cookName: '龙眼',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "02008",
            icon: '../../assets/item.jpg',
            cookName: '荔枝',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "02009",
            icon: '../../assets/item.jpg',
            cookName: '李子',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "02010",
            icon: '../../assets/item.jpg',
            cookName: '杏子',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "02011",
            icon: '../../assets/item.jpg',
            cookName: '梅子',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "02012",
            icon: '../../assets/item.jpg',
            cookName: '杨梅',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "02013",
            icon: '../../assets/item.jpg',
            cookName: '西梅',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "02014",
            icon: '../../assets/item.jpg',
            cookName: '乌梅',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "02015",
            icon: '../../assets/item.jpg',
            cookName: '大枣',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "02016",
            icon: '../../assets/item.jpg',
            cookName: '沙枣',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "02017",
            icon: '../../assets/item.jpg',
            cookName: '海枣',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "02018",
            icon: '../../assets/item.jpg',
            cookName: '蜜枣',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "02019",
            icon: '../../assets/item.jpg',
            cookName: '槟榔',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
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
            icon: '../../assets/item.jpg',
            cookName: '苹果',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12, 
            like: 0,
            price: 38,
            num: 0
          },
          {
            id: "03002",
            icon: '../../assets/item.jpg',
            cookName: '梨',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            id: "03003",
            icon: '../../assets/item.jpg',
            cookName: '柿子',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          }, 
          {
            id: "03004",
            icon: '../../assets/item.jpg',
            cookName: '枇杷',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "03005",
            icon: '../../assets/item.jpg',
            cookName: '蛇果',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "03007",
            icon: '../../assets/item.jpg',
            cookName: '海棠果',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "03008",
            icon: '../../assets/item.jpg',
            cookName: '沙果',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "03009",
            icon: '../../assets/item.jpg',
            cookName: '山竹',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "03010",
            icon: '../../assets/item.jpg',
            cookName: '黑布林',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "03011",
            icon: '../../assets/item.jpg',
            cookName: '杨桃',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "03012",
            icon: '../../assets/item.jpg',
            cookName: '山楂',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "03013",
            icon: '../../assets/item.jpg',
            cookName: '圣女果',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "03014",
            icon: '../../assets/item.jpg',
            cookName: '无花果',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "03015",
            icon: '../../assets/item.jpg',
            cookName: '白果',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "03016",
            icon: '../../assets/item.jpg',
            cookName: '罗汉果',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "03017",
            icon: '../../assets/item.jpg',
            cookName: '火龙果',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "03018",
            icon: '../../assets/item.jpg',
            cookName: '猕猴桃',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
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
            icon: '../../assets/item.jpg',
            cookName: '西瓜',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            id: "04002",
            icon: '../../assets/item.jpg',
            cookName: '甜瓜',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            id: "04003",
            icon: '../../assets/item.jpg',
            cookName: '香瓜',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "04004",
            icon: '../../assets/item.jpg',
            cookName: '哈密瓜',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "04005",
            icon: '../../assets/item.jpg',
            cookName: '美人瓜',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "04006",
            icon: '../../assets/item.jpg',
            cookName: '黄河蜜',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "04007",
            icon: '../../assets/item.jpg',
            cookName: '木瓜',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "04008",
            icon: '../../assets/item.jpg',
            cookName: '乳瓜',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
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
            icon: '../../assets/item.jpg',
            cookName: '菠萝',
            cookIntro: '带你赴一场美丽的旅行',
            sals: 12,
            like: 0,
            price: 38,
            num: 0
          },
          {
            id: "05002",
            icon: '../../assets/item.jpg',
            cookName: '芒果',
            cookIntro: '一次让你吃个够',
            sals: 38,
            like: 25,
            price: 56,
            num: 0
          },
          {
            id: "05003",
            icon: '../../assets/item.jpg',
            cookName: '椰子',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "05004",
            icon: '../../assets/item.jpg',
            cookName: '奇异果',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "05005",
            icon: '../../assets/item.jpg',
            cookName: '芭乐',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "05006",
            icon: '../../assets/item.jpg',
            cookName: '榴莲',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "05007",
            icon: '../../assets/item.jpg',
            cookName: '香蕉',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "05008",
            icon: '../../assets/item.jpg',
            cookName: '甘蔗',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "05009",
            icon: '../../assets/item.jpg',
            cookName: '百合',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "05010",
            icon: '../../assets/item.jpg',
            cookName: '莲子',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "05011",
            icon: '../../assets/item.jpg',
            cookName: '石榴',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "05012",
            icon: '../../assets/item.jpg',
            cookName: '核桃',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          },
          {
            id: "05013",
            icon: '../../assets/item.jpg',
            cookName: '拐枣',
            cookIntro: '美味的不二选择',
            sals: 32,
            like: 12,
            price: 26,
            num: 0
          }
        ]
      }
    ],
    cartList:[]
  }
})