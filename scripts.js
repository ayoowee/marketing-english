/* ===================================================================
   实战脚本 · 基于真实工作案例的双语英文讲解
   ⚠️ 品牌名称均已虚拟化（用于分享）：
     Aura=护肤品牌 / Violet紫瓶精华 / Snow雪研精华 / Snow cream雪研面霜
     Barkly=犬粮品牌 / Spark Media=内容营销公司
     竞品用 A/B/C 代替，明星用"头部主播/代言人"代替
   type: 提案 / 复盘 / 公司 / 方法
   句子按"初级可说"写。配合 Claude 语音私教实战。
   =================================================================== */
const SCRIPTS = [
/* ===== 提案 ===== */
{id:"bag", type:"提案", title:"奢品女包 × 小红书方案", desc:"面试 pitch，4-5 分钟", dur:"4-5min", sections:[
 {stage:"开场 · 框定", lines:[
   ["Thanks for having me. Today I'll present my Xiaohongshu marketing plan for a luxury handbag brand.","谢谢这个机会。今天我汇报一个奢侈品女包品牌的小红书营销方案。"],
   ["I'll cover four parts: the situation, the yearly plan, the influencer and content strategy, and the budget and goals.","我讲四块：现状、全年规划、达人与内容、预算与目标。"],
 ]},
 {stage:"现状 · 洞察", lines:[
   ["The brand has strong luxury awareness, but on Xiaohongshu it's still just a traffic tool following the Tmall calendar.","品牌有很强的奢品认知，但小红书还只是跟着天猫大促的流量工具。"],
   ["Here's the key insight: luxury bag searches grew 90 percent last year.","关键洞察：奢品包搜索去年增长90%。"],
   ["Users search 18 keywords on average before they fall for a bag, and the decision takes over 90 days.","用户平均搜18个词才看中一款，决策超过90天。"],
   ["So Xiaohongshu is not a promotion channel. It's a long-term, mind-building channel.","所以小红书不是促销场，是长期心智养成场。"],
   ["I also studied three competitors, A, B, and C. Brand A posted 104 notes, 68 percent boosted by ads — a full KFS funnel.","我还研究了三个竞品A、B、C。竞品A发了104篇笔记、68%投流，是完整KFS打法。"],
 ]},
 {stage:"策略 · 全年", lines:[
   ["My strategy has three directions: build long-term mind, plan ahead to own the decision moment, and complete the KFS funnel.","策略三个方向：建长期心智、提前布局抢决策场、完善KFS链路。"],
   ["For the full year, I planned 139 influencer notes, with quarterly budgets of 54, 90, 66, and 90万.","全年139篇达人笔记，季度预算54、90、66、90万。"],
 ]},
 {stage:"达人 · 内容", lines:[
   ["I built a four-layer influencer matrix: 1 percent top KOLs, 8 percent mid-tier, 51 percent tail and KOCs, and 40 percent real users.","四层达人矩阵：1%头部、8%腰部、51%尾部和KOC、40%真实用户。"],
   ["In new-product periods, we tie the bag to real scenes — commute, travel, and dating.","新品期把包绑进真实场景——通勤、差旅、约会。"],
 ]},
 {stage:"预算 · 目标", lines:[
   ["The total KFS budget is 3 million: 1.44 million for influencers, 1.56 million for ads.","KFS总预算300万：达人144万、广告156万。"],
   ["My KPIs: over 2.5 million reads, read cost under 1.2, brand ranking up 10 places, and SOV in the top 5.","KPI：阅读超250万、阅读成本低于1.2、品牌词排名提升10名、SOV进前5。"],
 ]},
 {stage:"收尾", lines:[
   ["To wrap up: one insight — long-termism; three directions; a full-year plan; clear KPIs.","总结：一个洞察长期主义、三个方向、全年规划、清晰KPI。"],
   ["The core idea: stop following the sales calendar, and build the brand's mind all year round. Thank you.","核心思路：别跟大促走，全年经营品牌心智。谢谢。"],
 ]},
]},

{id:"agency", type:"公司", title:"Spark Media · 公司能力介绍", desc:"内容营销公司介绍 pitch", dur:"3min", sections:[
 {stage:"开场 · 定位", lines:[
   ["We're Spark Media, a content marketing agency. We help brands grow from content traffic, to brand voice, to product sales.","我们是星火传媒，一家内容营销公司，帮品牌从内容流量→品牌声量→产品销量。"],
   ["We focus on Xiaohongshu and Douyin, and help brands grow online from zero to one.","我们专注小红书和抖音，帮品牌线上从0到1。"],
 ]},
 {stage:"服务能力", lines:[
   ["We offer a full-chain service: insight, strategy, execution, amplification, and review.","我们提供全链条服务：洞察、策略、执行、放大、复盘。"],
   ["Our team covers strategy, KOL, content, traffic buying, and livestream.","团队覆盖策略、达人、内容、流量采买、直播。"],
   ["We screen influencers by four things: persona, fans, content quality, and cost.","我们按四点筛达人：人设、粉丝、内容质量、成本。"],
 ]},
 {stage:"案例", lines:[
   ["For a pet brand, we grew online sales from 1.5 million to over 10 million in one year.","一个宠物品牌，一年把线上销售从150万做到1000万+。"],
   ["For a Japanese supplement, we built a 'triple-anti anti-aging' concept and hit a livestream ROI above 2.","日本保健品我们做了'三抗抗老'概念，直播ROI超过2。"],
   ["For a toothpaste brand, we lifted brand heat from zero to 6800.","一个牙膏品牌，品牌热度从0提升到6800。"],
 ]},
 {stage:"收尾", lines:[
   ["In short, we make marketing deliver real results.","一句话，我们让营销拥有结果。"],
 ]},
]},

{id:"snow", type:"提案", title:"Snow 精华 · 种草规划", desc:"抗氧化定位种草提案", dur:"3min", sections:[
 {stage:"目标", lines:[
   ["This is the seeding plan for Aura's Snow serum.","这是 Aura 雪研精华的种草规划。"],
   ["Our goal is to drive Taobao search: 57,500 search UV in the first four months, 250,000 for the year.","目标是带动淘搜：前4个月5.75万搜索UV，全年25万。"],
 ]},
 {stage:"策略", lines:[
   ["The strategy is to own one clear position: antioxidant.","策略是占住一个清晰定位：抗氧化。"],
   ["We seed heavily with KOCs, supported by SEO and paid feeds, to raise penetration.","用KOC大量铺量，配合SEO和信息流，提高渗透率。"],
 ]},
 {stage:"执行 · 成果", lines:[
   ["We pick mid-tier KOLs for credibility and KOCs for authentic word of mouth.","腰部KOL做背书，KOC做真实口碑。"],
   ["In two months, we published 98 notes, with 1.48 million reads and a 36 percent viral-note rate.","两个月发了98篇笔记，阅读148万，爆文率36%。"],
   ["We pushed brand penetration in the antioxidant category to top 4.","我们把抗氧化赛道的品牌渗透率做到前4。"],
 ]},
 {stage:"目标 · KPI", lines:[
   ["Our KPI: daily search popularity over 2000, with a peak over 3000.","KPI：日均搜索人气2000+，峰值3000+。"],
 ]},
]},

{id:"pet", type:"提案", title:"Barkly 犬粮 · 内容规划", desc:"宠物品牌全年内容主线", dur:"3min", sections:[
 {stage:"主线", lines:[
   ["This is the self-media content plan for Barkly, a dog food brand.","这是 Barkly 犬粮的自媒体内容规划。"],
   ["The story runs across the year: new product, seeding, a charity event, and user stories.","全年主线：新品、种草、公益、用户故事。"],
 ]},
 {stage:"上新 · 种草", lines:[
   ["At launch, we frame the new food as the answer for dogs with sensitive stomachs.","上新期，把新品定位成'玻璃胃'狗狗的答案。"],
   ["We run a '21-day poop challenge': 30 dogs get free trials and check in for 21 days.","我们做'21天便便便'挑战：30只狗免费试吃、打卡21天。"],
   ["Then a factory-reveal series answers real reviews and shows our team is professional and fun.","然后用'工厂揭秘'回应真实评价，展现团队专业又有趣。"],
 ]},
 {stage:"公益 · 收尾", lines:[
   ["A charity 'Paw Print' event lets users donate steps to feed rescue dogs.","公益'爪印行动'让用户捐步数来喂养救助犬。"],
   ["The whole plan builds trust first, then turns trust into sales.","整套规划先建立信任，再把信任变成销量。"],
 ]},
]},

/* ===== 复盘 ===== */
{id:"d11", type:"复盘", title:"Violet 精华 · 双11复盘", desc:"开屏/搜索/CTR 真实数据", dur:"3-4min", sections:[
 {stage:"开场", lines:[
   ["Let me walk you through our Double 11 retrospective for the Violet serum line.","我来复盘紫瓶精华线的双11。"],
   ["I'll cover the results, what worked, what underperformed, and the next plan.","我讲结果、做得好的、没达标的、和下一步。"],
 ]},
 {stage:"结果", lines:[
   ["Our Violet serum splash-screen ad reached 12.6 million impressions, with a 4.05 percent CTR — above the 3 percent benchmark.","紫瓶精华开屏1262万曝光、点击率4.05%，超过3%基准。"],
   ["The scalp serum did even better: 30.9 million impressions and a 5.47 percent CTR.","头皮精华更好：3091万曝光、点击率5.47%。"],
   ["Search jumped: scalp serum up 325 percent, and the serum category up about 16 times year over year.","搜索大涨：头皮精华+325%，精华品类同比约16倍。"],
 ]},
 {stage:"亮点", lines:[
   ["What worked was the splash-screen plus 'surprise box' combo, which created a clear search peak.","做得好的是开屏+惊喜盒子组合，造出明显搜索高峰。"],
   ["We hold the number-one SOV on the 'Violet serum' keyword, at 24 percent.","我们在'紫瓶精华'词上拿到SOV第一，24%。"],
 ]},
 {stage:"不足 · 经验", lines:[
   ["One thing that underperformed was timing — we warmed up later than competitors.","一个不足是节奏——我们预热比竞品晚。"],
   ["The key learning is to start at least one month before pre-sale, and raise the search budget.","关键经验是预售前至少提前一个月，并提高搜索预算。"],
 ]},
 {stage:"下一步", lines:[
   ["For next half-year, we'll allocate by stage: 20 million for the Violet serum, aiming for top 5 in anti-aging.","下半年按阶段分配：紫瓶精华2000万，目标抗老进前5。"],
 ]},
]},

{id:"monthly", type:"复盘", title:"Violet 精华 · 月度复盘汇报", desc:"零售/明星IP/转化数据", dur:"3-4min", sections:[
 {stage:"开场 · 结果", lines:[
   ["Let me review this month for the Violet serum.","我来复盘本月的紫瓶精华。"],
   ["In October, retail grew 27 percent year over year; in September, 84 percent.","10月零售同比+27%，9月+84%。"],
   ["During Double 11, Tmall sales reached 46.72 million RMB, after refunds.","双11天猫销售额4672万，已去退款。"],
   ["We ranked top 4 on the serum chart, and number one for add-to-cart in anti-aging.","精华总榜第4，抗老加购第一。"],
 ]},
 {stage:"做得好的", lines:[
   ["What worked was maximizing a top livestreamer's IP: strong content, 700-plus real users, and amplified ads.","做得好的是把头部主播IP用到极致：强内容、700+素人、广告放大。"],
   ["Search popularity climbed from 6000 to 14,704.","搜索人气从6000涨到14704。"],
   ["The landing-page conversion rose 150 percent, and add-to-cart 76 percent.","承接页转化+150%，加购率+76%。"],
 ]},
 {stage:"不足 · 下一步", lines:[
   ["One lesson: our resource follow-up in early August broke off. Next time we'll lock the schedule earlier.","一个教训：8月初资源延续不够。下次更早锁定排期。"],
   ["For next steps, we'll keep the anti-aging mind and launch a new ambassador in December.","下一步守住抗老心智，12月官宣新代言人。"],
 ]},
]},

{id:"h2growth", type:"复盘", title:"Barkly · 增长业务周报", desc:"内容组 KPI 达成", dur:"3min", sections:[
 {stage:"开场 · KPI", lines:[
   ["Let me report this month for the Barkly content and media team.","我来汇报 Barkly 内容媒介组本月情况。"],
   ["Our KPIs are: Tmall search index 14,000, a viral-note rate over 6 percent, and 750,000 impressions.","KPI是：天猫搜索指数14000、爆文率6%+、曝光75万。"],
 ]},
 {stage:"达成情况", lines:[
   ["Last week we hit 100 percent of our content target and 327 percent of impressions.","上周内容达成100%，曝光达成327%。"],
   ["Engagement hit 775 percent of target, driven by a Douyin note with over one million plays.","互动达成775%，靠一条百万播放的抖音爆文。"],
   ["Our CPM dropped to 45 and CPE to 0.7 — well below target.","CPM降到45、CPE 0.7，远低于目标。"],
 ]},
 {stage:"下一步", lines:[
   ["Next week, we'll get 10 creators to replicate the viral script and test the model.","下周让10位达人复刻爆款脚本测模型。"],
   ["We'll also boost potential notes with ads to find the lowest-cost audience and timing.","也会给潜力笔记加热，找最低成本的人群和时间点。"],
 ]},
]},

{id:"retro_meeting", type:"复盘", title:"精华种草 · 复盘会议", desc:"种草复盘改进与下一步", dur:"2-3min", sections:[
 {stage:"框定", lines:[
   ["Let me share the retrospective for our serum seeding project.","我来同步精华种草项目的复盘。"],
   ["We focused on three keywords: anti-aging, repair, and barrier serum.","我们聚焦三个词：抗老、修复、修护精华。"],
 ]},
 {stage:"发现 · 问题", lines:[
   ["We need to understand the difference between category users and competitor users, and find the opportunity.","我们要搞清行业人群和竞品人群的差异，找到机会点。"],
   ["For the repair serum, our ranking rose 9 places. We need to know what content and ad moves drove it.","修复精华排名提升了9名，要弄清是什么内容和投放动作带来的。"],
 ]},
 {stage:"下一步", lines:[
   ["Next, we'll build a backup list of high-viral, low-cost tail and KOC creators.","下一步储备高爆文、低成本的尾部和KOC达人名单。"],
   ["And we'll measure which influencer tier and which content type are the most efficient.","并测算哪个达人梯队、哪种内容效率最高。"],
 ]},
]},

/* ===== 方法 ===== */
{id:"aips", type:"方法", title:"AIPS 人群资产模型 · 讲解", desc:"向管理层解释种草长期价值", dur:"2min", sections:[
 {stage:"是什么", lines:[
   ["Let me explain the AIPS audience-asset model on Xiaohongshu.","我讲一下小红书的AIPS人群资产模型。"],
   ["AIPS has five stages: Awareness, Interest, deep Interest, Purchase, and Share.","AIPS分五阶段：认知、种草、深度种草、购买、分享。"],
 ]},
 {stage:"价值", lines:[
   ["It shows how many new users each note brings, and how they move from awareness to purchase.","它展示每篇笔记带来多少新用户，以及他们如何从认知走到购买。"],
   ["So we don't just look at likes and comments. We look at real user assets.","所以我们不只看点赞评论，而是看真实的用户资产。"],
 ]},
 {stage:"怎么用", lines:[
   ["We use it to judge which content truly converts, and to allocate budget by product line.","我们用它判断哪类内容真正转化，并按产品线分配预算。"],
   ["And we use it to show management the long-term value of content marketing.","并用它向管理层证明内容营销的长期价值。"],
 ]},
]},
];
