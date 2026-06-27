/* ===================================================================
   营销英语私教 · 内容数据
   词库已联网核对主流营销/商务英语词表（Sprout Social / CFI / Harvard PON /
   Promova 等），释义力求准确。每条：w 词 / ph 音标 / pos 词性 / cn 精准中文 /
   ex 英文例句 / exCn 中文 / note 易错提示
   =================================================================== */

const VOCAB = [
/* ===== L1 基础营销 ===== */
{lv:1,cat:"基础营销",w:"brand",ph:"/brænd/",pos:"n.",cn:"品牌",ex:"We are building a premium skincare brand.",exCn:"我们在打造一个高端护肤品牌。"},
{lv:1,cat:"基础营销",w:"brand positioning",ph:"/brænd pəˈzɪʃənɪŋ/",pos:"n.",cn:"品牌定位（品牌在用户心智中的位置）",ex:"Our brand positioning is affordable luxury.",exCn:"我们的品牌定位是轻奢。"},
{lv:1,cat:"基础营销",w:"target audience",ph:"/ˈtɑːrɡɪt ˈɔːdiəns/",pos:"n.",cn:"目标人群／目标受众",ex:"Who is the target audience for this product?",exCn:"这个产品的目标人群是谁？"},
{lv:1,cat:"基础营销",w:"value proposition",ph:"/ˈvæljuː ˌprɒpəˈzɪʃən/",pos:"n.",cn:"价值主张（品牌给用户的核心价值承诺）",ex:"Our value proposition is fast, visible results.",exCn:"我们的价值主张是快速、可见的效果。"},
{lv:1,cat:"基础营销",w:"selling point",ph:"/ˈselɪŋ pɔɪnt/",pos:"n.",cn:"卖点",ex:"The main selling point is the natural formula.",exCn:"主要卖点是天然配方。"},
{lv:1,cat:"基础营销",w:"USP (unique selling point)",ph:"/ˌjuː es ˈpiː/",pos:"n.",cn:"独特卖点（区别于竞品的唯一理由）",ex:"What's our USP versus competitors?",exCn:"我们相对竞品的独特卖点是什么？"},
{lv:1,cat:"基础营销",w:"differentiation",ph:"/ˌdɪfərenʃiˈeɪʃən/",pos:"n.",cn:"差异化",ex:"We need clear differentiation in this category.",exCn:"我们在这个品类里需要清晰的差异化。"},
{lv:1,cat:"基础营销",w:"market insight",ph:"/ˈmɑːrkɪt ˈɪnsaɪt/",pos:"n.",cn:"市场洞察",ex:"This decision is based on market insight.",exCn:"这个决策基于市场洞察。"},
{lv:1,cat:"基础营销",w:"consumer insight",ph:"/kənˈsuːmər ˈɪnsaɪt/",pos:"n.",cn:"消费者洞察（对用户真实需求的理解）",ex:"The campaign started from a consumer insight.",exCn:"这次活动源于一个消费者洞察。"},
{lv:1,cat:"基础营销",w:"competitor analysis",ph:"/kəmˈpetɪtər əˈnæləsɪs/",pos:"n.",cn:"竞品分析",ex:"I did a competitor analysis last week.",exCn:"我上周做了竞品分析。"},
{lv:1,cat:"基础营销",w:"market share",ph:"/ˈmɑːrkɪt ʃer/",pos:"n.",cn:"市场份额",ex:"We grew our market share to 15%.",exCn:"我们把市场份额做到了15%。"},
{lv:1,cat:"基础营销",w:"campaign",ph:"/kæmˈpeɪn/",pos:"n.",cn:"营销活动／战役",ex:"We are launching a new campaign next month.",exCn:"我们下个月上线一个新活动。"},
{lv:1,cat:"基础营销",w:"brand awareness",ph:"/brænd əˈwernəs/",pos:"n.",cn:"品牌知名度",ex:"This campaign is about brand awareness, not sales.",exCn:"这次活动目标是品牌知名度，不是销售。"},
{lv:1,cat:"基础营销",w:"brand image",ph:"/brænd ˈɪmɪdʒ/",pos:"n.",cn:"品牌形象",ex:"We must keep a consistent brand image.",exCn:"我们要保持一致的品牌形象。"},
{lv:1,cat:"基础营销",w:"product launch",ph:"/ˈprɒdʌkt lɔːntʃ/",pos:"n.",cn:"新品上市",ex:"The product launch is set for June.",exCn:"新品上市定在6月。"},
{lv:1,cat:"基础营销",w:"go-to-market strategy",ph:"/ˌɡəʊ tə ˈmɑːrkɪt/",pos:"n.",cn:"上市策略（新品如何进入市场）",ex:"Let's finalize the go-to-market strategy.",exCn:"我们把上市策略定下来。"},
{lv:1,cat:"基础营销",w:"segmentation",ph:"/ˌseɡmenˈteɪʃən/",pos:"n.",cn:"市场细分",ex:"We use age and lifestyle for segmentation.",exCn:"我们按年龄和生活方式做市场细分。"},
{lv:1,cat:"基础营销",w:"pain point",ph:"/peɪn pɔɪnt/",pos:"n.",cn:"痛点（用户未被满足的困扰）",ex:"The key pain point is the fishy smell.",exCn:"核心痛点是腥味。"},
{lv:1,cat:"基础营销",w:"scenario",ph:"/səˈnɑːriəʊ/",pos:"n.",cn:"（使用）场景",ex:"We map content to real use scenarios.",exCn:"我们把内容对应到真实使用场景。"},
{lv:1,cat:"基础营销",w:"trend",ph:"/trend/",pos:"n.",cn:"趋势",ex:"Short video is a strong trend this year.",exCn:"短视频是今年的强趋势。"},
{lv:1,cat:"基础营销",w:"demand",ph:"/dɪˈmænd/",pos:"n.",cn:"需求",ex:"There is rising demand for clean beauty.",exCn:"对纯净美妆的需求在上升。"},
{lv:1,cat:"基础营销",w:"niche",ph:"/niːʃ/",pos:"n.",cn:"细分市场／利基",ex:"Pet supplements are a profitable niche.",exCn:"宠物保健品是个有利可图的细分市场。"},
{lv:1,cat:"基础营销",w:"mass market",ph:"/mæs ˈmɑːrkɪt/",pos:"n.",cn:"大众市场",ex:"This price targets the mass market.",exCn:"这个价格瞄准大众市场。"},
{lv:1,cat:"基础营销",w:"brand story",ph:"/brænd ˈstɔːri/",pos:"n.",cn:"品牌故事",ex:"A good brand story builds emotional value.",exCn:"好的品牌故事能建立情感价值。"},

/* ===== L1 社媒内容 ===== */
{lv:1,cat:"社媒内容",w:"social media",ph:"/ˈsəʊʃl ˈmiːdiə/",pos:"n.",cn:"社交媒体",ex:"Social media is our main channel.",exCn:"社媒是我们的主渠道。"},
{lv:1,cat:"社媒内容",w:"content strategy",ph:"/ˈkɒntent ˈstrætədʒi/",pos:"n.",cn:"内容策略",ex:"Our content strategy focuses on real stories.",exCn:"我们的内容策略聚焦真实故事。"},
{lv:1,cat:"社媒内容",w:"post",ph:"/pəʊst/",pos:"n./v.",cn:"帖子；发帖",ex:"This post got high engagement.",exCn:"这篇帖子互动很高。"},
{lv:1,cat:"社媒内容",w:"short video",ph:"/ʃɔːrt ˈvɪdiəʊ/",pos:"n.",cn:"短视频",ex:"Short video drives most of our traffic.",exCn:"短视频带来我们大部分流量。"},
{lv:1,cat:"社媒内容",w:"livestream",ph:"/ˈlaɪvstriːm/",pos:"n./v.",cn:"直播",ex:"The livestream sold out in ten minutes.",exCn:"那场直播十分钟售罄。"},
{lv:1,cat:"社媒内容",w:"livestream e-commerce",ph:"/ˈlaɪvstriːm ˈiːˌkɒmɜːrs/",pos:"n.",cn:"直播电商",ex:"Livestream e-commerce is huge in China.",exCn:"直播电商在中国非常大。"},
{lv:2,cat:"社媒内容",w:"KOL",ph:"/ˌkeɪ əʊ ˈel/",pos:"n.",cn:"关键意见领袖（有专业权威、长期影响力的博主）",ex:"We work with three top KOLs.",exCn:"我们和三位头部KOL合作。",note:"KOL=Key Opinion Leader，强调专业权威；和素人KOC不同"},
{lv:2,cat:"社媒内容",w:"influencer",ph:"/ˈɪnfluənsər/",pos:"n.",cn:"有影响力的博主／网红（能影响购买决策的人）",ex:"This influencer has two million followers.",exCn:"这位博主有两百万粉丝。"},
{lv:2,cat:"社媒内容",w:"KOC",ph:"/ˌkeɪ əʊ ˈsiː/",pos:"n.",cn:"关键意见消费者（分享真实体验的普通用户）",ex:"KOCs make the content feel authentic.",exCn:"KOC让内容显得真实可信。",note:"KOC=Key Opinion Consumer，粉丝少但更真实、转化强"},
{lv:2,cat:"社媒内容",w:"product seeding",ph:"/ˈprɒdʌkt ˈsiːdɪŋ/",pos:"n.",cn:"种草（用内容激发用户购买欲）",ex:"Product seeding on RED drives search.",exCn:"小红书的种草能带动搜索。"},
{lv:2,cat:"社媒内容",w:"UGC",ph:"/ˌjuː dʒiː ˈsiː/",pos:"n.",cn:"用户生成内容（User-Generated Content）",ex:"We repost UGC from happy customers.",exCn:"我们转发满意用户的UGC。"},
{lv:1,cat:"社媒内容",w:"engagement",ph:"/ɪnˈɡeɪdʒmənt/",pos:"n.",cn:"互动（点赞/评论/收藏/转发的总和）",ex:"This video has very high engagement.",exCn:"这条视频互动很高。"},
{lv:2,cat:"社媒内容",w:"engagement rate",ph:"/ɪnˈɡeɪdʒmənt reɪt/",pos:"n.",cn:"互动率（互动量÷触达或粉丝数）",ex:"Our average engagement rate is 5%.",exCn:"我们平均互动率5%。"},
{lv:1,cat:"社媒内容",w:"follower",ph:"/ˈfɒləʊər/",pos:"n.",cn:"粉丝",ex:"We gained 10,000 followers this month.",exCn:"这个月涨了一万粉。"},
{lv:2,cat:"社媒内容",w:"viral",ph:"/ˈvaɪrəl/",pos:"adj.",cn:"病毒式传播的（指内容“爆了”）",ex:"The post went viral overnight.",exCn:"那条帖子一夜爆了。"},
{lv:1,cat:"社媒内容",w:"hashtag",ph:"/ˈhæʃtæɡ/",pos:"n.",cn:"话题标签（#）",ex:"We created a branded hashtag.",exCn:"我们做了一个品牌话题标签。"},
{lv:2,cat:"社媒内容",w:"feed",ph:"/fiːd/",pos:"n.",cn:"信息流",ex:"Our ad appears in the user's feed.",exCn:"我们的广告出现在用户信息流里。"},
{lv:2,cat:"社媒内容",w:"reach",ph:"/riːtʃ/",pos:"n.",cn:"触达人数（看到内容的独立用户数，算人）",ex:"The campaign reached 500,000 people.",exCn:"这次活动触达了50万人。",note:"reach算“人”，impression算“次”，别混"},
{lv:2,cat:"社媒内容",w:"impression",ph:"/ɪmˈpreʃən/",pos:"n.",cn:"曝光次数（内容被展示的总次数，算次）",ex:"We got two million impressions.",exCn:"我们获得了两百万次曝光。",note:"一个人看3次=1 reach、3 impressions"},
{lv:1,cat:"社媒内容",w:"trending topic",ph:"/ˈtrendɪŋ ˈtɒpɪk/",pos:"n.",cn:"热门话题",ex:"We jumped on a trending topic.",exCn:"我们蹭了一个热门话题。"},
{lv:2,cat:"社媒内容",w:"creative",ph:"/kriˈeɪtɪv/",pos:"n.",cn:"创意素材（广告图/视频，作名词）",ex:"The new creative lifted CTR a lot.",exCn:"新素材大幅提升了点击率。"},
{lv:1,cat:"社媒内容",w:"copywriting",ph:"/ˈkɒpiraɪtɪŋ/",pos:"n.",cn:"文案写作",ex:"Good copywriting drives conversion.",exCn:"好文案能带动转化。"},
{lv:1,cat:"社媒内容",w:"caption",ph:"/ˈkæpʃən/",pos:"n.",cn:"配文／文案（帖子下方文字）",ex:"Keep the caption short and clear.",exCn:"配文要短而清楚。"},
{lv:2,cat:"社媒内容",w:"matrix of accounts",ph:"/ˈmeɪtrɪks/",pos:"n.",cn:"账号矩阵（多账号协同）",ex:"We built a matrix of KOC accounts.",exCn:"我们搭了一个KOC账号矩阵。"},
{lv:1,cat:"社媒内容",w:"format",ph:"/ˈfɔːrmæt/",pos:"n.",cn:"内容形式／格式",ex:"Video is our best-performing format.",exCn:"视频是我们表现最好的内容形式。"},

/* ===== L2 数据指标 ===== */
{lv:2,cat:"数据指标",w:"ROI",ph:"/ˌɑːr əʊ ˈaɪ/",pos:"n.",cn:"投资回报率（利润÷投入；衡量赚不赚）",ex:"The livestream ROI was over two.",exCn:"那场直播的ROI超过2。",note:"ROI看“利润÷成本”；ROAS看“收入÷广告花费”，两者不同"},
{lv:2,cat:"数据指标",w:"ROAS",ph:"/ˈrəʊæs/",pos:"n.",cn:"广告支出回报率（收入÷广告花费）",ex:"Our ROAS on this channel is 4.",exCn:"这个渠道的ROAS是4。"},
{lv:2,cat:"数据指标",w:"GMV",ph:"/ˌdʒiː em ˈviː/",pos:"n.",cn:"商品交易总额（按挂牌价计，未扣退款/折扣/运费）",ex:"We grew GMV from zero to ten million.",exCn:"我们把GMV从0做到一千万。",note:"GMV是“成交流水”，不等于实际收入或利润"},
{lv:2,cat:"数据指标",w:"conversion",ph:"/kənˈvɜːrʒən/",pos:"n.",cn:"转化（用户完成目标动作）",ex:"This page has strong conversion.",exCn:"这个页面转化很强。"},
{lv:2,cat:"数据指标",w:"conversion rate",ph:"/kənˈvɜːrʒən reɪt/",pos:"n.",cn:"转化率（完成目标动作的人数占比）",ex:"Our conversion rate improved by 20%.",exCn:"我们的转化率提升了20%。"},
{lv:2,cat:"数据指标",w:"CTR",ph:"/ˌsiː tiː ˈɑːr/",pos:"n.",cn:"点击率（点击÷曝光）",ex:"The new creative lifted CTR by 144%.",exCn:"新素材把点击率提升了144%。"},
{lv:2,cat:"数据指标",w:"CPC",ph:"/ˌsiː piː ˈsiː/",pos:"n.",cn:"单次点击成本（Cost Per Click）",ex:"Our CPC dropped after optimization.",exCn:"优化后我们的单次点击成本下降了。"},
{lv:2,cat:"数据指标",w:"CPM",ph:"/ˌsiː piː ˈem/",pos:"n.",cn:"千次曝光成本（Cost Per Mille）",ex:"Awareness campaigns care about CPM.",exCn:"品宣活动关注千次曝光成本。"},
{lv:2,cat:"数据指标",w:"CAC",ph:"/kæk/",pos:"n.",cn:"获客成本（获得一个新客的总花费）",ex:"We kept CAC under 30.",exCn:"我们把获客成本控制在30以内。"},
{lv:2,cat:"数据指标",w:"CPA",ph:"/ˌsiː piː ˈeɪ/",pos:"n.",cn:"单次行动成本（Cost Per Action）",ex:"We optimize ads toward a target CPA.",exCn:"我们按目标CPA优化广告。"},
{lv:3,cat:"数据指标",w:"LTV",ph:"/ˌel tiː ˈviː/",pos:"n.",cn:"用户终身价值（Lifetime Value）",ex:"High LTV justifies a higher CAC.",exCn:"高终身价值就能接受更高的获客成本。"},
{lv:2,cat:"数据指标",w:"retention",ph:"/rɪˈtenʃən/",pos:"n.",cn:"留存（用户持续回来）",ex:"Retention matters more than acquisition.",exCn:"留存比拉新更重要。"},
{lv:2,cat:"数据指标",w:"retention rate",ph:"/rɪˈtenʃən reɪt/",pos:"n.",cn:"留存率",ex:"Our 30-day retention rate is 40%.",exCn:"我们的30天留存率是40%。"},
{lv:3,cat:"数据指标",w:"churn",ph:"/tʃɜːrn/",pos:"n.",cn:"流失（用户离开/取关）",ex:"We need to reduce churn.",exCn:"我们要降低流失。"},
{lv:1,cat:"数据指标",w:"KPI",ph:"/ˌkeɪ piː ˈaɪ/",pos:"n.",cn:"关键绩效指标",ex:"What are the KPIs for this quarter?",exCn:"这个季度的KPI是什么？"},
{lv:2,cat:"数据指标",w:"benchmark",ph:"/ˈbentʃmɑːrk/",pos:"n./v.",cn:"基准；对标",ex:"Let's benchmark against the category leader.",exCn:"我们对标品类第一名。"},
{lv:3,cat:"数据指标",w:"attribution",ph:"/ˌætrɪˈbjuːʃən/",pos:"n.",cn:"归因（把成交归到哪个渠道）",ex:"Attribution helps us judge each channel.",exCn:"归因帮我们判断每个渠道。"},
{lv:2,cat:"数据指标",w:"funnel",ph:"/ˈfʌnl/",pos:"n.",cn:"转化漏斗（从曝光到成交的层层流失）",ex:"Users drop off in the middle of the funnel.",exCn:"用户在漏斗中段流失。"},
{lv:2,cat:"数据指标",w:"lead",ph:"/liːd/",pos:"n.",cn:"销售线索（潜在客户）",ex:"This channel brings high-quality leads.",exCn:"这个渠道带来高质量线索。"},
{lv:2,cat:"数据指标",w:"lead generation",ph:"/liːd ˌdʒenəˈreɪʃən/",pos:"n.",cn:"获客／线索获取",ex:"Our goal this month is lead generation.",exCn:"我们这个月目标是获客。"},
{lv:1,cat:"数据指标",w:"analytics",ph:"/ˌænəˈlɪtɪks/",pos:"n.",cn:"数据分析",ex:"I pull numbers from the analytics tool.",exCn:"我从数据分析工具里拉数。"},
{lv:1,cat:"数据指标",w:"dashboard",ph:"/ˈdæʃbɔːrd/",pos:"n.",cn:"数据看板",ex:"Check the dashboard for live numbers.",exCn:"看看看板上的实时数据。"},

/* ===== L2 投放电商 ===== */
{lv:1,cat:"投放电商",w:"budget",ph:"/ˈbʌdʒɪt/",pos:"n.",cn:"预算",ex:"The annual budget is 45 million.",exCn:"年度预算是4500万。"},
{lv:2,cat:"投放电商",w:"ad spend",ph:"/æd spend/",pos:"n.",cn:"广告花费",ex:"We cut ad spend but kept results.",exCn:"我们砍了广告花费但保住了效果。"},
{lv:3,cat:"投放电商",w:"bidding",ph:"/ˈbɪdɪŋ/",pos:"n.",cn:"竞价（广告出价）",ex:"We switched to automatic bidding.",exCn:"我们改用自动竞价。"},
{lv:2,cat:"投放电商",w:"targeting",ph:"/ˈtɑːrɡɪtɪŋ/",pos:"n.",cn:"定向（圈定投放人群）",ex:"Our targeting was too broad.",exCn:"我们的定向太宽了。"},
{lv:3,cat:"投放电商",w:"retargeting",ph:"/ˌriːˈtɑːrɡɪtɪŋ/",pos:"n.",cn:"再营销／重定向（对来过的人再投）",ex:"Retargeting brings back cart abandoners.",exCn:"再营销能召回弃购用户。"},
{lv:2,cat:"投放电商",w:"placement",ph:"/ˈpleɪsmənt/",pos:"n.",cn:"广告位",ex:"This placement performs best.",exCn:"这个广告位效果最好。"},
{lv:2,cat:"投放电商",w:"organic",ph:"/ɔːrˈɡænɪk/",pos:"adj.",cn:"自然的（非付费流量）",ex:"Half of our traffic is organic.",exCn:"我们一半流量是自然流量。"},
{lv:2,cat:"投放电商",w:"paid traffic",ph:"/peɪd ˈtræfɪk/",pos:"n.",cn:"付费流量",ex:"Paid traffic underperformed this week.",exCn:"本周付费流量表现不佳。"},
{lv:1,cat:"投放电商",w:"traffic",ph:"/ˈtræfɪk/",pos:"n.",cn:"流量（访问量）",ex:"We drive traffic to the flagship store.",exCn:"我们给旗舰店引流。"},
{lv:2,cat:"投放电商",w:"SEO",ph:"/ˌes iː ˈəʊ/",pos:"n.",cn:"搜索引擎优化",ex:"SEO improves our organic ranking.",exCn:"SEO提升我们的自然排名。"},
{lv:2,cat:"投放电商",w:"keyword",ph:"/ˈkiːwɜːrd/",pos:"n.",cn:"关键词",ex:"We track keyword search volume weekly.",exCn:"我们每周追踪关键词搜索量。"},
{lv:2,cat:"投放电商",w:"ranking",ph:"/ˈræŋkɪŋ/",pos:"n.",cn:"排名",ex:"Our category ranking rose to top 10.",exCn:"我们品类排名升到前十。"},
{lv:1,cat:"投放电商",w:"e-commerce",ph:"/ˈiːˌkɒmɜːrs/",pos:"n.",cn:"电商",ex:"E-commerce is our biggest channel.",exCn:"电商是我们最大的渠道。"},
{lv:2,cat:"投放电商",w:"flagship store",ph:"/ˈflæɡʃɪp stɔːr/",pos:"n.",cn:"旗舰店",ex:"All traffic goes to the Tmall flagship store.",exCn:"所有流量导向天猫旗舰店。"},
{lv:2,cat:"投放电商",w:"SKU",ph:"/ˌes keɪ ˈjuː/",pos:"n.",cn:"单品／库存单位",ex:"This SKU is our best seller.",exCn:"这个单品是我们的爆款。"},
{lv:1,cat:"投放电商",w:"promotion",ph:"/prəˈməʊʃən/",pos:"n.",cn:"促销",ex:"We run a promotion during the festival.",exCn:"大促期间我们做促销。"},
{lv:1,cat:"投放电商",w:"discount",ph:"/ˈdɪskaʊnt/",pos:"n.",cn:"折扣",ex:"Can you offer a bigger discount?",exCn:"能给更大的折扣吗？"},
{lv:1,cat:"投放电商",w:"add to cart",ph:"/æd tə kɑːrt/",pos:"phr.",cn:"加购（加入购物车）",ex:"The add-to-cart rate went up.",exCn:"加购率上升了。"},
{lv:1,cat:"投放电商",w:"checkout",ph:"/ˈtʃekaʊt/",pos:"n./v.",cn:"结算／下单",ex:"Users drop off at checkout.",exCn:"用户在结算环节流失。"},
{lv:2,cat:"投放电商",w:"sell out",ph:"/sel aʊt/",pos:"phr.",cn:"售罄",ex:"The new SKU sold out in a day.",exCn:"新品一天就售罄。"},
{lv:2,cat:"投放电商",w:"restock",ph:"/ˌriːˈstɒk/",pos:"v.",cn:"补货",ex:"We need to restock before the sale.",exCn:"大促前我们得补货。"},

/* ===== L2 项目协作 ===== */
{lv:2,cat:"项目协作",w:"pitch",ph:"/pɪtʃ/",pos:"v./n.",cn:"推介、提案；做方案陈述（动词名词都有“方案”义）",ex:"I'll pitch the idea to the founder tomorrow.",exCn:"我明天向创始人推介这个想法。",note:"pitch不只是“扔”，更指“向客户/老板推介方案”"},
{lv:2,cat:"项目协作",w:"proposal",ph:"/prəˈpəʊzəl/",pos:"n.",cn:"提案文件／方案",ex:"Please review my proposal by Friday.",exCn:"请周五前看下我的提案。"},
{lv:2,cat:"项目协作",w:"brief",ph:"/briːf/",pos:"n.",cn:"简报／需求说明（如 campaign brief）",ex:"I'll send the creative brief tonight.",exCn:"我今晚发创意简报。"},
{lv:2,cat:"项目协作",w:"deliverable",ph:"/dɪˈlɪvərəbl/",pos:"n.",cn:"交付物",ex:"What are the deliverables for this project?",exCn:"这个项目的交付物是什么？"},
{lv:1,cat:"项目协作",w:"timeline",ph:"/ˈtaɪmlaɪn/",pos:"n.",cn:"时间线／节点",ex:"Can we move up the timeline?",exCn:"时间线能提前吗？"},
{lv:1,cat:"项目协作",w:"deadline",ph:"/ˈdedlaɪn/",pos:"n.",cn:"截止日期",ex:"The deadline is end of this month.",exCn:"截止日期是这个月底。"},
{lv:2,cat:"项目协作",w:"milestone",ph:"/ˈmaɪlstəʊn/",pos:"n.",cn:"里程碑（关键节点）",ex:"We hit our first milestone.",exCn:"我们达成了第一个里程碑。"},
{lv:2,cat:"项目协作",w:"stakeholder",ph:"/ˈsteɪkhəʊldər/",pos:"n.",cn:"利益相关方",ex:"I aligned with all key stakeholders.",exCn:"我和所有关键相关方对齐了。"},
{lv:2,cat:"项目协作",w:"align",ph:"/əˈlaɪn/",pos:"v.",cn:"对齐／达成一致",ex:"Let's align on the goals first.",exCn:"我们先把目标对齐。"},
{lv:2,cat:"项目协作",w:"sync",ph:"/sɪŋk/",pos:"v./n.",cn:"同步（开会对一下进度）",ex:"Let's sync on this tomorrow.",exCn:"我们明天同步一下。"},
{lv:2,cat:"项目协作",w:"follow up",ph:"/ˈfɒləʊ ʌp/",pos:"phr.",cn:"跟进",ex:"I'll follow up with the supplier.",exCn:"我会跟进供应商。"},
{lv:2,cat:"项目协作",w:"onboarding",ph:"/ˈɒnbɔːrdɪŋ/",pos:"n.",cn:"上手／入职流程",ex:"New member onboarding took one week.",exCn:"新成员上手用了一周。"},
{lv:2,cat:"项目协作",w:"scope",ph:"/skəʊp/",pos:"n.",cn:"范围（工作/项目边界）",ex:"Let's define the scope first.",exCn:"我们先界定范围。"},
{lv:2,cat:"项目协作",w:"workflow",ph:"/ˈwɜːrkfləʊ/",pos:"n.",cn:"工作流程",ex:"AI made our content workflow faster.",exCn:"AI让我们的内容流程更快。"},
{lv:2,cat:"项目协作",w:"SOP",ph:"/ˌes əʊ ˈpiː/",pos:"n.",cn:"标准作业流程",ex:"We wrote an SOP for new hires.",exCn:"我们为新人写了SOP。"},
{lv:2,cat:"项目协作",w:"vendor",ph:"/ˈvendər/",pos:"n.",cn:"供应商／服务商",ex:"We manage three content vendors.",exCn:"我们管理三家内容服务商。"},
{lv:2,cat:"项目协作",w:"prioritize",ph:"/praɪˈɒrətaɪz/",pos:"v.",cn:"排优先级",ex:"Let's prioritize the high-ROI tasks.",exCn:"我们优先做高ROI的任务。"},
{lv:3,cat:"项目协作",w:"bandwidth",ph:"/ˈbændwɪdθ/",pos:"n.",cn:"（口语）精力／产能",ex:"I don't have the bandwidth this week.",exCn:"我这周没精力接。"},
{lv:2,cat:"项目协作",w:"deck",ph:"/dek/",pos:"n.",cn:"提案PPT／演示文稿",ex:"Send me the deck before the meeting.",exCn:"会前把PPT发我。"},
{lv:2,cat:"项目协作",w:"recap",ph:"/ˈriːkæp/",pos:"n./v.",cn:"复盘／小结",ex:"Let's do a quick recap.",exCn:"我们快速复盘一下。"},
{lv:2,cat:"项目协作",w:"action item",ph:"/ˈækʃən ˈaɪtəm/",pos:"n.",cn:"待办事项",ex:"Here are the action items from today.",exCn:"这是今天的待办事项。"},
{lv:2,cat:"项目协作",w:"cross-functional",ph:"/krɒs ˈfʌŋkʃənl/",pos:"adj.",cn:"跨部门的",ex:"This needs cross-functional support.",exCn:"这需要跨部门支持。"},

/* ===== L3 谈判沟通 ===== */
{lv:2,cat:"谈判沟通",w:"negotiation",ph:"/nɪˌɡəʊʃiˈeɪʃən/",pos:"n.",cn:"谈判",ex:"Let's start the negotiation.",exCn:"我们开始谈吧。"},
{lv:2,cat:"谈判沟通",w:"negotiate",ph:"/nɪˈɡəʊʃieɪt/",pos:"v.",cn:"谈判（动词）",ex:"We can negotiate the price.",exCn:"价格可以谈。"},
{lv:2,cat:"谈判沟通",w:"offer",ph:"/ˈɒfər/",pos:"n./v.",cn:"报价／提议",ex:"Here's our offer for this round.",exCn:"这是我们这轮的报价。"},
{lv:3,cat:"谈判沟通",w:"counteroffer",ph:"/ˈkaʊntərˌɒfər/",pos:"n.",cn:"还价／反报价（对初始报价提出修改条款）",ex:"They made a counteroffer of 40,000.",exCn:"他们还价到4万。"},
{lv:3,cat:"谈判沟通",w:"anchor",ph:"/ˈæŋkər/",pos:"n./v.",cn:"锚定（先抛出的第一个数字，影响后续谈判）",ex:"Their high price anchored the talk.",exCn:"他们的高价锚定了整场谈判。",note:"谈判术语：第一个报价会成为双方的心理“锚”"},
{lv:3,cat:"谈判沟通",w:"concession",ph:"/kənˈseʃən/",pos:"n.",cn:"让步（在某点上做出妥协以推进达成）",ex:"I can make one concession on timing.",exCn:"我可以在时间上让一步。"},
{lv:3,cat:"谈判沟通",w:"trade-off",ph:"/ˈtreɪd ɒf/",pos:"n.",cn:"取舍／权衡",ex:"It's a trade-off between speed and cost.",exCn:"这是速度和成本的取舍。"},
{lv:3,cat:"谈判沟通",w:"leverage",ph:"/ˈliːvərɪdʒ/",pos:"n.",cn:"筹码／议价力",ex:"A long-term deal gives us leverage.",exCn:"长期合作给我们更多筹码。"},
{lv:2,cat:"谈判沟通",w:"win-win",ph:"/wɪn wɪn/",pos:"adj.",cn:"双赢的",ex:"Let's find a win-win solution.",exCn:"我们找个双赢的方案。"},
{lv:3,cat:"谈判沟通",w:"bottom line",ph:"/ˈbɒtəm laɪn/",pos:"n.",cn:"底线（能接受的最低条件）",ex:"120,000 is our bottom line.",exCn:"12万是我们的底线。"},
{lv:2,cat:"谈判沟通",w:"rate card",ph:"/reɪt kɑːrd/",pos:"n.",cn:"报价表（达人/媒体的刊例价）",ex:"Could you share your rate card?",exCn:"能发下你的报价表吗？"},
{lv:2,cat:"谈判沟通",w:"quote",ph:"/kwəʊt/",pos:"n./v.",cn:"报价",ex:"Can you quote me for three videos?",exCn:"三条视频你能报个价吗？"},
{lv:2,cat:"谈判沟通",w:"terms",ph:"/tɜːrmz/",pos:"n.",cn:"条款（合作条件）",ex:"Let's go over the terms.",exCn:"我们过一下条款。"},
{lv:2,cat:"谈判沟通",w:"commit",ph:"/kəˈmɪt/",pos:"v.",cn:"承诺／敲定",ex:"I can't commit to that today.",exCn:"我今天没法敲定这个。"},
{lv:3,cat:"谈判沟通",w:"push back",ph:"/pʊʃ bæk/",pos:"phr.",cn:"反对／顶回去（礼貌地表达不同意）",ex:"I have to push back on the timeline.",exCn:"时间线我得提出异议。"},
{lv:2,cat:"谈判沟通",w:"compromise",ph:"/ˈkɒmprəmaɪz/",pos:"n./v.",cn:"折中／妥协",ex:"Let's meet halfway as a compromise.",exCn:"我们折中各让一步。"},
{lv:1,cat:"谈判沟通",w:"deal",ph:"/diːl/",pos:"n.",cn:"交易／成交",ex:"Do we have a deal?",exCn:"我们成交了吗？"},
{lv:3,cat:"谈判沟通",w:"walk away",ph:"/wɔːk əˈweɪ/",pos:"phr.",cn:"放弃交易／走人",ex:"We're ready to walk away if needed.",exCn:"必要时我们可以放弃这单。"},
{lv:2,cat:"谈判沟通",w:"objection",ph:"/əbˈdʒekʃən/",pos:"n.",cn:"异议（对方的反对意见）",ex:"Let me address your objection.",exCn:"我来回应你的异议。"},
{lv:3,cat:"谈判沟通",w:"escalate",ph:"/ˈeskəleɪt/",pos:"v.",cn:"上报／升级处理",ex:"I'll escalate this to my manager.",exCn:"我把这个上报给经理。"},
{lv:2,cat:"谈判沟通",w:"close the deal",ph:"/kləʊz ðə diːl/",pos:"phr.",cn:"促成交易／拿下合作",ex:"Let's close the deal this week.",exCn:"我们这周把合作定下来。"},

/* ===== L3 汇报演示 ===== */
{lv:2,cat:"汇报演示",w:"present",ph:"/prɪˈzent/",pos:"v.",cn:"汇报／演示",ex:"I'll present the plan to the client.",exCn:"我会向客户汇报方案。"},
{lv:2,cat:"汇报演示",w:"presentation",ph:"/ˌprezənˈteɪʃən/",pos:"n.",cn:"演示／汇报（这件事）",ex:"My presentation is ready.",exCn:"我的汇报准备好了。"},
{lv:2,cat:"汇报演示",w:"walk through",ph:"/wɔːk θruː/",pos:"phr.",cn:"逐步讲解／带着过一遍",ex:"Let me walk you through the numbers.",exCn:"我带大家过一下数据。"},
{lv:2,cat:"汇报演示",w:"highlight",ph:"/ˈhaɪlaɪt/",pos:"v./n.",cn:"重点强调；亮点",ex:"Let me highlight three results.",exCn:"我重点说三个成果。"},
{lv:3,cat:"汇报演示",w:"takeaway",ph:"/ˈteɪkəweɪ/",pos:"n.",cn:"关键结论／要点",ex:"The key takeaway is to scale winners.",exCn:"关键结论是放大跑赢的内容。"},
{lv:1,cat:"汇报演示",w:"summary",ph:"/ˈsʌməri/",pos:"n.",cn:"总结",ex:"Here's a quick summary.",exCn:"这是个快速总结。"},
{lv:2,cat:"汇报演示",w:"overview",ph:"/ˈəʊvərvjuː/",pos:"n.",cn:"概览／总览",ex:"Let me give you an overview first.",exCn:"我先给个概览。"},
{lv:2,cat:"汇报演示",w:"breakdown",ph:"/ˈbreɪkdaʊn/",pos:"n.",cn:"拆解明细",ex:"Here's the budget breakdown.",exCn:"这是预算明细拆解。"},
{lv:1,cat:"汇报演示",w:"results",ph:"/rɪˈzʌlts/",pos:"n.",cn:"成果／结果",ex:"The results beat our target.",exCn:"结果超过了目标。"},
{lv:2,cat:"汇报演示",w:"performance",ph:"/pərˈfɔːrməns/",pos:"n.",cn:"表现／绩效",ex:"Overall performance was strong.",exCn:"整体表现强劲。"},
{lv:2,cat:"汇报演示",w:"recommendation",ph:"/ˌrekəmenˈdeɪʃən/",pos:"n.",cn:"建议",ex:"My recommendation is to increase budget.",exCn:"我的建议是加预算。"},
{lv:2,cat:"汇报演示",w:"next steps",ph:"/nekst steps/",pos:"n.",cn:"下一步",ex:"Let's agree on the next steps.",exCn:"我们定一下下一步。"},
{lv:3,cat:"汇报演示",w:"retrospective",ph:"/ˌretrəˈspektɪv/",pos:"n.",cn:"复盘（对已完成项目的回顾总结）",ex:"Let's do a campaign retrospective.",exCn:"我们做个活动复盘。"},
{lv:3,cat:"汇报演示",w:"learnings",ph:"/ˈlɜːrnɪŋz/",pos:"n.",cn:"经验教训／收获",ex:"The main learning is to test first.",exCn:"主要经验是先做测试。"},
{lv:3,cat:"汇报演示",w:"root cause",ph:"/ruːt kɔːz/",pos:"n.",cn:"根因（问题的根本原因）",ex:"What's the root cause of the drop?",exCn:"下滑的根因是什么？"},
{lv:3,cat:"汇报演示",w:"hypothesis",ph:"/haɪˈpɒθəsɪs/",pos:"n.",cn:"假设（待验证的判断）",ex:"Our hypothesis was wrong.",exCn:"我们的假设错了。"},
{lv:2,cat:"汇报演示",w:"to wrap up",ph:"/tə ræp ʌp/",pos:"phr.",cn:"总结收尾（结束语）",ex:"To wrap up, here are the next steps.",exCn:"最后总结，这是下一步。"},
{lv:2,cat:"汇报演示",w:"Q&A",ph:"/ˌkjuː ən ˈeɪ/",pos:"n.",cn:"问答环节",ex:"Let's open it up for Q&A.",exCn:"我们进入问答环节。"},

/* ===== L1 职场职位 ===== */
{lv:1,cat:"职场职位",w:"CEO",ph:"/ˌsiː iː ˈəʊ/",pos:"n.",cn:"首席执行官／总裁",ex:"She is the CEO of the company.",exCn:"她是公司的首席执行官。"},
{lv:1,cat:"职场职位",w:"CMO",ph:"/ˌsiː em ˈəʊ/",pos:"n.",cn:"首席营销官（管市场）",ex:"I report to the CMO.",exCn:"我向首席营销官汇报。"},
{lv:1,cat:"职场职位",w:"founder",ph:"/ˈfaʊndər/",pos:"n.",cn:"创始人",ex:"The founder started the brand in 2018.",exCn:"创始人2018年创立了品牌。"},
{lv:1,cat:"职场职位",w:"director",ph:"/dəˈrektər/",pos:"n.",cn:"总监",ex:"Our marketing director set the goals.",exCn:"我们市场总监定了目标。"},
{lv:1,cat:"职场职位",w:"manager",ph:"/ˈmænɪdʒər/",pos:"n.",cn:"经理",ex:"I'm the content marketing manager.",exCn:"我是内容营销经理。"},
{lv:1,cat:"职场职位",w:"assistant manager",ph:"/əˈsɪstənt ˈmænɪdʒər/",pos:"n.",cn:"助理经理／副经理",ex:"She was promoted to assistant manager.",exCn:"她升为助理经理了。"},
{lv:1,cat:"职场职位",w:"supervisor",ph:"/ˈsuːpərvaɪzər/",pos:"n.",cn:"主管／上司",ex:"Ask your supervisor to approve it.",exCn:"让你的主管审批一下。"},
{lv:2,cat:"职场职位",w:"team lead",ph:"/tiːm liːd/",pos:"n.",cn:"团队负责人／组长",ex:"I'm the team lead for content.",exCn:"我是内容组的负责人。"},
{lv:1,cat:"职场职位",w:"specialist",ph:"/ˈspeʃəlɪst/",pos:"n.",cn:"专员",ex:"We're hiring a social media specialist.",exCn:"我们在招社媒专员。"},
{lv:1,cat:"职场职位",w:"intern",ph:"/ˈɪntɜːrn/",pos:"n.",cn:"实习生",ex:"The intern helps with daily content.",exCn:"实习生帮忙做日常内容。"},
{lv:1,cat:"职场职位",w:"colleague",ph:"/ˈkɒliːɡ/",pos:"n.",cn:"同事",ex:"I'll check with my colleague.",exCn:"我问下我同事。"},
{lv:1,cat:"职场职位",w:"client",ph:"/ˈklaɪənt/",pos:"n.",cn:"客户",ex:"The client liked our proposal.",exCn:"客户喜欢我们的提案。"},
{lv:2,cat:"职场职位",w:"report to",ph:"/rɪˈpɔːrt tuː/",pos:"phr.",cn:"向…汇报",ex:"I report to the marketing director.",exCn:"我向市场总监汇报。"},
{lv:1,cat:"职场职位",w:"department",ph:"/dɪˈpɑːrtmənt/",pos:"n.",cn:"部门",ex:"She works in the marketing department.",exCn:"她在市场部工作。"},
{lv:2,cat:"职场职位",w:"promotion",ph:"/prəˈməʊʃən/",pos:"n.",cn:"升职（也指促销，看语境）",ex:"Congratulations on your promotion!",exCn:"恭喜你升职！"},
];

/* ===== 口语场景 ===== */
const SCENARIOS = [
 {id:"greet",title:"问候 / 寒暄",desc:"日常打招呼、闲聊几句",lines:[
   ["Colleague","Hi, good morning! How are you doing?","早上好！你怎么样？",0],
   ["You","Morning! I'm good, thanks. How about you?","早上好！我挺好的，谢谢。你呢？",1],
   ["Colleague","Pretty good. Did you have a nice weekend?","挺好的。周末过得好吗？",0],
   ["You","Yes, very relaxing. I just stayed home and rested.","嗯，很放松，就在家休息了。",1],
   ["You","Let's catch up later. Have a good one!","回头聊，祝你顺利！",1],
 ]},
 {id:"daily",title:"日常沟通 / 请求帮忙",desc:"请同事帮忙、给进度",lines:[
   ["You","Hi, could you help me with something when you have a minute?","你好，有空的时候能帮我个忙吗？",1],
   ["Colleague","Sure, what do you need?","当然，你需要什么？",0],
   ["You","Could you send me the report by the end of the day?","能在今天下班前把报告发我吗？",1],
   ["Colleague","No problem. I'll send it this afternoon.","没问题，我下午发你。",0],
   ["You","Thank you so much. Let me know if you have any questions.","太谢谢了。有问题随时找我。",1],
 ]},
 {id:"invite",title:"会议邀约",desc:"约一个会、定时间",lines:[
   ["You","Hi Anna, do you have time for a quick meeting tomorrow?","Anna你好，明天有空开个短会吗？",1],
   ["You","I'd like to discuss the campaign plan with you.","我想和你讨论一下活动方案。",1],
   ["Anna","Sure. What time works for you?","可以。你几点方便？",0],
   ["You","How about 2 pm? It should take about 30 minutes.","下午2点怎么样？大概30分钟。",1],
   ["Anna","Works for me. Should I prepare anything?","可以。我要准备什么吗？",0],
   ["You","Just bring the latest numbers. I'll send a calendar invite.","带上最新数据就行。我发个日历邀请。",1],
 ]},
 {id:"role",title:"职位 / 团队介绍",desc:"介绍你的职位和团队",lines:[
   ["You","Hi everyone, let me introduce myself.","大家好，我来自我介绍一下。",1],
   ["You","I'm Alex, the content marketing manager.","我是Alex，内容营销经理。",1],
   ["You","I report to the marketing director, and I lead a team of three.","我向市场总监汇报，带一个三人团队。",1],
   ["You","My team handles social media content and influencer campaigns.","我的团队负责社媒内容和达人合作。",1],
   ["Colleague","Nice to meet you. Who should I contact about budgets?","很高兴认识你。预算的事找谁？",0],
   ["You","That would be me. Feel free to reach out anytime.","找我就行，随时联系。",1],
 ]},
 {id:"intro",title:"面试 / 自我介绍",desc:"30 秒讲清你是谁、做过什么",lines:[
   ["You","Hi, I'm Alex. I have over 8 years of experience in brand and content marketing.","你好，我是Alex，有8年以上品牌与内容营销经验。",1],
   ["You","I focus on social media growth, especially on RED and Douyin.","我专注社媒增长，尤其是小红书和抖音。",1],
   ["You","In my last role, I grew the brand's GMV from zero to ten million.","上一份工作我把品牌GMV从0做到千万。",1],
   ["You","I also use AI tools to make content production much faster.","我还用AI工具大幅提升内容生产效率。",1],
   ["HR","That's impressive. Why are you interested in this role?","很厉害。你为什么对这个职位感兴趣？",0],
   ["You","I'm excited to bring my China-market experience to your brand.","我很期待把我的中国市场经验带到贵品牌。",1],
 ]},
 {id:"report",title:"周会汇报数据",desc:"向团队/老板汇报本周成绩",lines:[
   ["You","Let me walk you through this week's numbers.","我来带大家过一下本周的数据。",1],
   ["You","Our impressions reached two million, up 15% from last week.","曝光量达到200万，比上周涨了15%。",1],
   ["You","The conversion rate improved because we changed the creative.","因为换了素材，转化率提升了。",1],
   ["You","One issue is the acquisition cost went up slightly.","一个问题是获客成本略有上升。",1],
   ["Boss","What's your plan to fix that?","你打算怎么解决？",0],
   ["You","I'll test two new influencer types next week and compare ROI.","下周我会测试两类新达人并对比ROI。",1],
 ]},
 {id:"budget",title:"向老板争取预算",desc:"用数据说服老板加预算",lines:[
   ["You","I'd like to discuss the budget for next quarter.","我想聊下下季度的预算。",1],
   ["You","Based on current ROI, every dollar returns more than two.","按目前ROI，每投入1块回报超过2块。",1],
   ["You","If we increase the budget by 20%, we can scale the winning content.","如果预算增加20%，我们能放大跑赢的内容。",1],
   ["Boss","That's a big ask. What's the risk?","这要求不小。风险是什么？",0],
   ["You","The risk is low because we only scale proven creatives.","风险很低，因为我们只放大已验证的素材。",1],
   ["You","Can we agree on a one-month test with a clear KPI?","我们能不能定一个月、带明确KPI的测试？",1],
 ]},
 {id:"kol",title:"跟达人谈合作报价",desc:"和KOL/服务商谈合作与还价",lines:[
   ["You","Thanks for sharing your rate card. Let's talk about the collaboration.","谢谢发报价表，我们聊下合作。",1],
   ["KOL","Our rate for one video is 50,000.","我们一条视频报价5万。",0],
   ["You","I understand. Our budget for this round is a bit tighter.","理解。我们这轮预算稍紧一些。",1],
   ["You","Could we do a package of three videos at a better rate?","三条视频打包能不能给个更好的价？",1],
   ["KOL","I can offer 130,000 for three.","三条我可以给13万。",0],
   ["You","Let's meet in the middle at 120,000, and we'll book more next quarter.","我们折中12万，下季度我们会再追加。",1],
 ]},
 {id:"client",title:"向客户做方案提案",desc:"把营销方案讲给客户/老板听",lines:[
   ["You","Today I'll present our marketing strategy for the new product.","今天我汇报新品的营销策略。",1],
   ["You","First, let me share the market insight behind it.","首先分享背后的市场洞察。",1],
   ["You","We found that users care most about the 'no fishy smell' point.","我们发现用户最在意'不腥'这个点。",1],
   ["You","So our content strategy focuses on this differentiation.","所以内容策略聚焦这个差异化卖点。",1],
   ["Client","How will you measure success?","你们怎么衡量成功？",0],
   ["You","We'll track GMV, ROI, and search growth weekly.","我们每周追踪GMV、ROI和搜索增长。",1],
 ]},
 {id:"present",title:"方案讲解（完整提案）",desc:"把一套营销方案从头讲到尾",lines:[
   ["You","Thanks everyone. Today I'll present our marketing plan for the new product.","谢谢各位。今天我汇报新品的营销方案。",1],
   ["You","Let me start with the background and the key insight.","先从背景和关键洞察讲起。",1],
   ["You","Our goal is to grow GMV to ten million in six months.","目标是半年把GMV做到一千万。",1],
   ["You","The strategy has three parts: content, influencers, and paid traffic.","策略分三块：内容、达人、付费流量。",1],
   ["You","First, our content will focus on one core selling point.","第一，内容聚焦一个核心卖点。",1],
   ["Client","How much budget do you need?","需要多少预算？",0],
   ["You","We're proposing three million, with an expected ROI above two.","我们建议300万预算，预期ROI超过2。",1],
   ["You","To wrap up, here are the timeline and the KPIs we'll track.","最后是时间线和我们追踪的KPI。",1],
 ]},
 {id:"retro",title:"复盘方案讲解",desc:"回顾一次campaign，讲清成败与下一步",lines:[
   ["You","Let me walk you through the campaign retrospective.","我来带大家复盘这次活动。",1],
   ["You","Overall, we hit 120% of our GMV target.","整体我们完成了GMV目标的120%。",1],
   ["You","What worked well was the influencer content on RED.","做得好的是小红书的达人内容。",1],
   ["You","One thing that underperformed was the paid traffic.","表现不佳的是付费流量。",1],
   ["Boss","What's the root cause?","根因是什么？",0],
   ["You","The root cause was weak creative and broad targeting.","根因是素材弱、定向太宽。",1],
   ["You","For next steps, we'll test new creatives and narrow the audience.","下一步我们测新素材、收窄人群。",1],
   ["You","The key learning is to validate creative before scaling.","关键经验是放量前先验证素材。",1],
 ]},
];

/* ===== 谈判话术库（含联网核对的 anchoring / 条件让步 / 收尾确认） ===== */
const NEGO = [
 {fn:"开场 / 建立基调",items:[
   ["Thanks for taking the time. Let's find a deal that works for both of us.","谢谢抽时间，我们找个双赢的方案。"],
   ["Before we talk numbers, can I understand your priorities?","在谈数字前，我能先了解你的优先项吗？"],
 ]},
 {fn:"报价 / 锚定立场",items:[
   ["Based on the scope, our budget for this is around X.","按这个范围，我们的预算大约是X。"],
   ["Here's what we can offer at this stage.","这是我们现阶段能给的。"],
 ]},
 {fn:"还价 / 争取更好条件",items:[
   ["That's a bit higher than we expected. Is there room to move?","比我们预期高一些，有商量空间吗？"],
   ["If we commit to a longer term, can you improve the rate?","如果我们签更长期，价格能更好吗？"],
   ["Could we do a package deal for a better unit price?","能不能打包做，给个更好的单价？"],
 ]},
 {fn:"条件让步（用交换推进）",items:[
   ["If you can deliver by Friday, we'd be able to increase the order.","如果你能周五前交付，我们就能加大订单。"],
   ["I can do X, but only if you can do Y.","我可以做X，但前提是你能做到Y。"],
 ]},
 {fn:"探询对方底牌 / 提问",items:[
   ["What's most important to you in this deal?","这单合作里你最看重什么？"],
   ["Help me understand where that number comes from.","帮我理解下这个价格是怎么来的。"],
   ["If budget weren't an issue, what would the ideal package look like?","如果不考虑预算，理想的合作是什么样？"],
 ]},
 {fn:"处理异议 / 拒绝",items:[
   ["I see your point, but here's our concern.","我理解你的意思，但我们的顾虑是这样。"],
   ["That doesn't quite work for us. Can we explore another option?","这个我们不太能接受，能看看别的方案吗？"],
   ["I'm not able to commit to that today. Let me check internally.","今天我没法定，我内部确认下。"],
   ["I hear you, but that's below what we can work with.","我理解，但这低于我们能接受的范围。"],
 ]},
 {fn:"让步 / 收尾确认",items:[
   ["Let's meet in the middle at X.","我们折中到X吧。"],
   ["I can do X, as long as we lock it in today.","我可以给到X，前提是今天定下来。"],
   ["If you can do X, we have a deal.","如果你能做到X，我们就成交。"],
   ["Just to make sure we're on the same page, let me summarize what we agreed.","为确保双方一致，我总结下我们达成的。"],
   ["I'll send a recap so nothing gets lost.","我发个纪要，免得有遗漏。"],
 ]},
];

/* ===== 方案讲解话术库（按 pitch 流程分阶段） ===== */
const PRESENT = [
 {fn:"开场 · 框定内容",items:[
   ["Thanks everyone. Today I'll walk you through our marketing plan for [product].","谢谢各位。今天我带大家过一下[产品]的营销方案。"],
   ["I'll cover three things: the insight, the strategy, and the budget.","我会讲三块：洞察、策略和预算。"],
   ["Let me start with why this matters right now.","先说说为什么现在要做这件事。"],
 ]},
 {fn:"背景 · 洞察",items:[
   ["The key consumer insight is that users care most about [pain point].","核心消费者洞察是：用户最在意[痛点]。"],
   ["Both our research and the search data point to the same trend.","我们的调研和搜索数据都指向同一个趋势。"],
   ["Competitors are all saying [X], which leaves a clear gap for us.","竞品都在讲[X]，这给我们留了一个清晰的空位。"],
 ]},
 {fn:"目标 · 成功标准",items:[
   ["Our goal is to grow GMV to [X] in [timeframe].","我们的目标是在[时间]内把GMV做到[X]。"],
   ["Success means an ROI above [X] and a top-[N] category ranking.","成功的标准是ROI超过[X]、品类排名进前[N]。"],
 ]},
 {fn:"策略主线",items:[
   ["Our strategy has three pillars: content, influencers, and paid traffic.","策略分三块：内容、达人、付费流量。"],
   ["The core idea is to own one sharp selling point, not ten.","核心思路是把一个尖锐的卖点做透，而不是铺十个。"],
   ["We'll lead with KOLs for awareness, then KOCs to drive conversion.","先用KOL打知名度，再用KOC带转化。"],
 ]},
 {fn:"执行 · 打法细节",items:[
   ["In phase one, we seed content around [angle].","第一阶段，我们围绕[角度]做种草。"],
   ["We'll build a matrix of [N] KOC accounts to amplify it.","我们搭一个[N]个KOC账号的矩阵来放大。"],
   ["Every piece of content ladders up to the same key message.","每条内容都指向同一个核心信息。"],
 ]},
 {fn:"预算 · 资源",items:[
   ["We're proposing a budget of [X], split 60% content and 40% paid.","我们建议预算[X]，内容六成、付费四成。"],
   ["Here's the budget breakdown by channel.","这是按渠道拆的预算明细。"],
 ]},
 {fn:"预期效果 · 时间节点",items:[
   ["Based on past benchmarks, we expect an ROI above [X].","按过往基准，我们预期ROI超过[X]。"],
   ["The plan runs over [N] months, with a checkpoint at week [X].","方案跨[N]个月，第[X]周设一个检查点。"],
 ]},
 {fn:"风险 · 应对",items:[
   ["The main risk is [X]; we'll mitigate it by testing before we scale.","主要风险是[X]；我们会先测试、验证后再放量。"],
   ["If the data doesn't hold up, we'll reallocate the budget quickly.","如果数据不及预期，我们会快速调整预算分配。"],
 ]},
 {fn:"收尾 · 提出诉求",items:[
   ["To wrap up: one insight, one strategy, three pillars.","总结一下：一个洞察、一条策略、三大支柱。"],
   ["What I need from you today is sign-off on the budget.","我今天需要的是大家对预算的拍板。"],
   ["Can we align on the goals and the next steps?","我们能在目标和下一步上对齐吗？"],
 ]},
 {fn:"应对追问",items:[
   ["Great question. Let me answer that with the data.","好问题，我用数据来回答。"],
   ["That's a fair concern. Here's how we'd handle it.","这个顾虑很合理，我们会这样处理。"],
   ["Let me come back to you on that right after the meeting.","这个我会后第一时间给你答复。"],
 ]},
];

/* ===== 复盘话术库（按 retrospective 流程分阶段） ===== */
const RETRO = [
 {fn:"开场 · 框定复盘",items:[
   ["Let me walk you through the retrospective for [campaign].","我来带大家复盘一下[活动]。"],
   ["I'll cover results, what worked, what didn't, and next steps.","我会讲：结果、做得好的、没做好的，以及下一步。"],
 ]},
 {fn:"结果概览",items:[
   ["Overall, we hit [X]% of our GMV target.","整体我们完成了GMV目标的[X]%。"],
   ["Compared to last campaign, conversion was up [X]%.","和上次活动比，转化率提升了[X]%。"],
 ]},
 {fn:"做得好的",items:[
   ["What worked well was the KOL content on RED.","做得好的是小红书的KOL内容。"],
   ["The biggest win was [X], which beat the benchmark.","最大的亮点是[X]，跑赢了基准。"],
 ]},
 {fn:"没达标的",items:[
   ["One thing that underperformed was paid traffic.","表现不佳的是付费流量。"],
   ["We missed our target on [X].","我们在[X]上没达标。"],
 ]},
 {fn:"根因分析",items:[
   ["The root cause was weak creative and broad targeting.","根因是素材弱、定向太宽。"],
   ["Digging into the funnel, users dropped off at checkout.","深入看漏斗，用户在结算环节流失。"],
 ]},
 {fn:"数据佐证",items:[
   ["The numbers show [X] versus [Y] last time.","数据是[X]，上次是[Y]。"],
   ["If you look at the trend, it dipped right after [event].","看趋势，它在[事件]之后就掉了。"],
 ]},
 {fn:"经验教训",items:[
   ["The key learning is to validate creative before scaling.","关键经验是：放量前先验证素材。"],
   ["Next time, we'd narrow the audience earlier.","下次我们会更早收窄人群。"],
 ]},
 {fn:"下一步",items:[
   ["For next steps, we'll test new creatives and tighten targeting.","下一步我们测新素材、收紧定向。"],
   ["I'll run a one-week test and report back.","我会做一个一周的测试，再回来汇报。"],
 ]},
 {fn:"应对质疑",items:[
   ["I hear you, but the data suggests otherwise.","我理解，但数据指向的是另一个结论。"],
   ["That's a fair point; let me dig in and follow up.","这点很合理，我深入查一下再跟进。"],
 ]},
];

/* ===== 书面模板 ===== */
const WRITING = [
 {title:"给达人的合作邀约邮件",body:`Subject: Collaboration with [Brand] — [Product]

Hi [Name],

I'm Alex from [Brand]. We love your content, especially your [topic] videos.

We're launching [product] and think your audience is a great fit. We'd like to invite you for a paid collaboration.

Could you share your rate card and availability for [month]? Happy to send product details and a creative brief.

Looking forward to working together.

Best,
Alex`},
 {title:"营销活动 Brief 框架",body:`Campaign Brief

1. Background: [market insight / why now]
2. Objective: [GMV / ROI / search growth target]
3. Target audience: [who]
4. Key message: [one core selling point]
5. Channels: [RED / Douyin / livestream]
6. Deliverables: [number of posts / videos]
7. Timeline: [key dates]
8. KPI: [how we measure success]`},
 {title:"跟进邮件",body:`Subject: Following up — [topic]

Hi [Name],

Just following up on my last email about [topic].

Do you have any thoughts? Happy to jump on a quick call if that's easier.

Thanks,
Alex`},
];

/* ===== 3 个月里程碑（场景化目标，对标 CEFR A2→B1） ===== */
const MILESTONES = [
 {key:"d1", label:"第 1 天",  words:20,   title:"开口第一步",   target:"掌握 20 个基础词 + 能说 3 句英文自我介绍"},
 {key:"w1", label:"第 1 周",  words:150,  title:"日常能开口",   target:"~150 词，能做日常问候、请求、自我介绍"},
 {key:"w2", label:"第 2 周",  words:350,  title:"会议沟通",     target:"~350 词，能开会邀约、汇报简单数据"},
 {key:"m1", label:"第 1 个月",words:750,  title:"方案+谈判",    target:"~750 词，脱稿讲方案、走一轮谈判"},
 {key:"m2", label:"第 2 个月",words:1500, title:"1500 词达成",  target:"~1500 词，基础+商务+营销全覆盖，接近 CEFR A2-B1"},
 {key:"m3", label:"第 3 个月",words:2000, title:"综合实战",     target:"~2000 词，完整 pitch + 谈判 + 临场应对，接近 B1"},
];
