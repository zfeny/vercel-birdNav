const defaultSearchList = [
  {
    name: "聚合类",
    urls: [
      {
        title: "百度",
        describtion: "百度一下，你就知道",
        url: "https://www.baidu.com/s?wd=$keyword$",
      },
      {
        title: "Bing",
        describtion: "微软必应，纯净好用",
        // url: "https://cn.bing.com/search?q=$keyword$",
        url: "https://www.bing.com/?q=%s&FORM=HPCNEN&setmkt=en-us&setlang=zh-cn",
      },
      {
        title: "搜狗",
        describtion: "搜狗搜索，值得拥有",
        url: "https://www.sogou.com/web?query=$keyword$",
      },
      {
        title: "Magi",
        describtion: "基于机器学习的搜索引擎",
        url: "https://magi.com/search?q=$keyword$",
      },
      {
        title: "谷歌",
        describtion: "世界上最大的搜索引擎",
        url: "https://www.google.com/search?query=$keyword$",
      },
      {
        title: "头条",
        describtion: "你关心的，才是头条",
        url: "  https://so.toutiao.com/search?dvpf=pc&source=input&keyword=$keyword$",
      },
    ],
  },
  {
    name: "工具类",
    urls: [
      {
        title: "Shodan",
        describtion: "请输入查询关键词",
        url: "https://www.shodan.io/search?query=$keyword$",
      },
      {
        title: "Censys",
        describtion: "请输入域名",
        url: "https://censys.io/domain?q=$keyword$",
      },
      {
        title: "Ping",
        describtion: "请输入域名或ip(站长之家ping工具)",
        url: "http://ping.chinaz.com/$keyword$",
      },
      {
        title: "JsDelivr",
        describtion: "请输入js包名(公共cdn库)",
        url: "https://www.jsdelivr.com/?query=$keyword$",
      },
      {
        title: "Github",
        describtion: "请输入关键词(开源库)",
        url: "https://github.com/search?q=$keyword$",
      },
      {
        title: "CVE",
        describtion: "请输入关键词(来自阿里云漏洞库)",
        url: "https://avd.aliyun.com/search?q=$keyword$",
      },
    ],
  },
  {
    name: "社区类",
    urls: [
      {
        title: "天涯",
        describtion: "搜遍天涯，找到答案",
        url: "https://search.tianya.cn/bbs?q=$keyword$",
      },
      {
        title: "知乎",
        describtion: "有问题，就会有答案",
        url: "https://www.zhihu.com/search?type=content&q=$keyword$",
      },
      {
        title: "豆瓣",
        describtion: "豆瓣里的生活",
        url: "https://www.douban.com/search?q=$keyword$",
      },
      {
        title: "微博",
        describtion: "打捞全网动态",
        url: "https://s.weibo.com/weibo/$keyword$",
      },
      {
        title: "Quora",
        describtion: "Quora社区搜索",
        url: "https://www.quora.com/search?q=$keyword$",
      },
      {
        title: "Reddit",
        describtion: "Reddit社区搜索",
        url: "https://www.reddit.com/search/?q=$keyword$",
      },
    ],
  },
  {
    name: "生活类",
    urls: [
      {
        title: "淘宝",
        describtion: "在淘宝上搜索商品",
        url: "https://s.taobao.com/search?q=$keyword$",
      },
      {
        title: "京东",
        describtion: "在京东上搜索商品",
        url: "https://search.jd.com/Search?keyword=$keyword$",
      },
      {
        title: "快递",
        describtion: "输入运单号，在快递100查物流",
        url: "https://m.kuaidi100.com/result.jsp?nu=$keyword$",
      },
      {
        title: "地图",
        describtion: "在高德地图搜索地理位置",
        url: "  https://ditu.amap.com/search?query=$keyword$",
      },
      {
        title: "香哈",
        describtion: "在香哈搜菜谱",
        url: "https://www.xiangha.com/so/?q=caipu&s=$keyword$",
      },
      {
        title: "下厨房",
        describtion: "在下厨房搜索菜谱",
        url: "https://www.xiachufang.com/search/?keyword=$keyword$",
      },
    ],
  },
  {
    name: "影视类",
    urls: [
      {
        title: "Bilibili",
        describtion: "高质量内容的聚集地",
        url: "https://search.bilibili.com/all?keyword=$keyword$",
      },
      {
        title: "爱奇艺",
        describtion: "国内老牌影视网站",
        url: "https://so.iqiyi.com/so/q_$keyword$",
      },
      {
        title: "优酷",
        describtion: "这世界很酷",
        url: "https://so.youku.com/search_video/q_$keyword$",
      },
      {
        title: "抖音",
        describtion: "记录美好生活",
        url: "https://www.douyin.com/search/$keyword$",
      },
      {
        title: "西瓜",
        describtion: "点亮对生活的好奇心",
        url: "https://www.ixigua.com/search/$keyword$",
      },
      {
        title: "Youtube",
        describtion: "全球up主的聚集地",
        url: "  https://www.youtube.com/results?search_query=$keyword$",
      },
    ],
  },
  {
    name: "音乐类",
    urls: [
      {
        title: "网易云",
        describtion: "在网易云音乐官网搜索",
        url: "https://music.163.com/#/search/m/?s=$keyword$",
      },
      {
        title: "QQ",
        describtion: "在QQ音乐官网搜索",
        url: "https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=$keyword$",
      },
      {
        title: "酷我",
        describtion: "在酷我音乐官网搜索",
        url: "http://www.kuwo.cn/search/list?type=all&key=$keyword$",
      },
      {
        title: "酷狗",
        describtion: "在酷狗音乐官网搜索",
        url: "https://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord=$keyword$",
      },
      {
        title: "5sing",
        describtion: "中国原创音乐基地",
        url: "http://search.5sing.kugou.com/?keyword=$keyword$",
      },
      {
        title: "千千",
        describtion: "在千千音乐官网搜索",
        url: "  https://music.taihe.com/search?word=$keyword$",
      },
    ],
  },
  {
    name: "自定义",
    urls: [
      {
        title: "stack",
        describtion: "search on stackoverflow",
        url: "https://stackoverflow.com/search?q=$keyword$",
      },
      {
        title: "wolfram",
        describtion: "search on wolframalpha",
        url: "https://www.wolframalpha.com/input/?i=$keyword$",
      },
    ],
  },
];

const defaultCurrentSearch = {
  title: "百度",
  describtion: "百度一下，你就知道",
  url: "https://www.baidu.com/s?wd=$keyword$",
};

export { defaultCurrentSearch, defaultSearchList };
