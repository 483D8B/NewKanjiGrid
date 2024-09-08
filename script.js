const kanjiKenteiLevel = {
    'Level 10': '一右雨円王音下火花貝学気休玉金九空月犬見五口校左三山四子糸字耳七車手十出女小上森人水正生青石赤先千川早草足村大男竹中虫町天田土二日入年白八百文本名木目夕立力林六',
    'Level 9': '引羽雲園遠黄何夏家科歌画会回海絵外角楽活間丸岩顔帰汽記弓牛魚京強教近兄形計元原言古戸午後語交光公工広考行高合国黒今才細作算姉市思止紙寺時自室社弱首秋週春書少場色食心新親図数星晴声西切雪線船前組走多太体台谷知地池茶昼朝長鳥直通弟店点電冬刀東当答頭同道読内南肉馬買売麦半番父風分聞米歩母方北妹毎万明鳴毛門夜野矢友曜用来理里話',
    'Level 8': '悪安暗委意医育員飲院運泳駅央横屋温化荷界開階寒感漢館岸期起客宮急球究級去橋業局曲銀区苦具君係軽決血研県庫湖向幸港号根祭坂皿仕使始指死詩歯事持次式実写者主取守酒受州拾終習集住重宿所暑助勝商昭消章乗植深申真神身進世整昔全想相送息速族他打対待代第題炭短談着柱注丁帳調追定庭笛鉄転登都度島投湯等豆動童農波配倍箱畑発反板悲皮美鼻筆氷表病秒品負部服福物平返勉放味命面問役薬油有由遊予様洋羊葉陽落流旅両緑礼列練路和',
    'Level 7': '愛案以位囲胃衣印栄英塩億加果課貨芽改械害街各覚完官管観関願喜器希旗機季紀議救求泣給挙漁競共協鏡極訓軍郡型径景芸欠結健建験固候功好康航告差最菜材昨刷察札殺参散産残司史士氏試児治辞失借種周祝順初唱松焼照省笑象賞信臣成清静席積折節説戦浅選然倉巣争側束続卒孫帯隊達単置仲貯兆腸低停底的典伝徒努灯働堂得特毒熱念敗梅博飯費飛必標票不付夫府副粉兵別変辺便包法望牧末満未脈民無約勇要養浴利陸料良量輪類令例冷歴連労老録',
    'Level 6': '圧易移因営永衛液益演往応恩仮価可河過賀解快格確額刊幹慣眼基寄規技義逆久旧居許境興均禁句群経潔件券検険減現限個故護効厚構耕講鉱混査再妻採災際在罪財桜雑賛酸師志支枝資飼似示識質舎謝授修術述準序承招証常情条状織職制勢性政精製税績責接設絶舌銭祖素総像増造則測属損態貸退団断築張提程敵適統導銅徳独任燃能破判版犯比肥非備俵評貧婦富布武復複仏編弁保墓報豊暴貿防務夢迷綿輸余預容率略留領',
    'Level 5': '異遺域宇映延沿我灰拡閣革割株巻干看簡危揮机貴疑吸供胸郷勤筋敬系警劇激穴憲権絹厳源呼己誤后孝皇紅鋼降刻穀骨困砂座済裁策冊蚕姿私至視詞誌磁射捨尺若樹収宗就衆従縦縮熟純処署諸除傷将障城蒸針仁垂推寸盛聖誠宣専泉洗染善創奏層操窓装臓蔵存尊宅担探誕暖段値宙忠著庁潮頂賃痛展党糖討届難乳認納脳派俳拝背肺班晩否批秘腹奮並閉陛片補暮宝訪亡忘棒枚幕密盟模訳優郵幼欲翌乱卵覧裏律臨朗論',
    'Level 4': '握扱依偉威為維緯違井壱稲芋陰隠影鋭越援煙縁鉛汚奥押沖憶暇箇菓雅介壊戒皆獲較刈乾勧歓汗環甘監鑑含奇幾祈輝鬼儀戯詰却脚丘及朽巨拠距凶叫恐況狂狭響驚仰駆屈掘繰傾恵継迎撃兼剣圏堅肩軒遣玄枯誇鼓互御恒抗攻更稿荒項香豪腰込婚鎖彩歳載剤咲惨伺刺旨紫脂雌執芝斜煮釈寂朱狩趣需秀舟襲柔獣瞬旬盾巡召床沼称紹詳丈畳飾殖触侵寝慎振浸薪震尋尽陣吹澄是姓征跡占扇鮮訴僧燥騒贈即俗耐替拓沢濁脱丹嘆淡端弾恥致遅蓄徴跳沈珍堤抵摘滴添殿吐渡途奴怒倒唐塔桃盗到踏逃透闘胴峠突曇鈍弐悩濃杯輩拍泊薄迫爆髪罰抜搬繁般販範盤彼疲被避尾微匹描浜敏怖敷普浮腐膚賦舞幅払噴柄壁舗捕峰抱砲傍坊帽忙冒肪凡盆慢漫妙眠矛霧娘茂猛網黙紋躍雄与誉溶謡踊翼頼雷絡欄離粒慮療隣涙隷麗齢暦劣烈恋露郎惑腕',
    'Level 3': '哀慰詠悦閲宴炎欧殴乙卸穏佳嫁架華餓塊怪悔慨概該穫郭隔岳掛滑冠勘喚換敢緩肝貫企岐忌既棋棄軌騎欺犠菊吉喫虐虚峡脅凝斤緊愚偶遇桑刑啓契憩掲携鶏鯨倹賢幻孤弧雇顧娯悟坑孔巧慌拘控甲硬絞綱郊酵克獄墾恨紺魂債催削搾錯撮擦暫施祉諮侍慈軸湿疾赦邪殊寿潤遵徐匠掌昇晶焦衝鐘冗嬢譲錠嘱辱伸審辛炊粋衰遂酔随髄瀬牲請隻惜斥籍摂潜繕措礎粗阻双掃葬遭憎促賊怠滞胎袋逮滝卓択託諾奪胆鍛壇稚畜窒抽鋳駐彫聴超鎮陳墜帝締訂哲塗斗凍痘陶匿篤豚如尿粘婆排陪縛伐伴帆畔藩蛮卑泌碑姫漂苗符赴封伏覆墳紛癖穂募慕簿倣奉崩縫胞芳邦飽乏妨房某膨謀墨没翻魔埋膜又魅婿滅免幽憂誘揚揺擁抑裸濫吏隆了猟糧陵厘励零霊裂廉錬炉廊楼浪漏湾',
    'Level Pre-2': '亜尉逸姻韻渦浦疫謁猿凹翁寡禍稼蚊懐拐劾涯垣嚇核殻潟喝括渇褐轄且堪寛患憾棺款缶艦還閑陥頑飢偽宜擬窮糾拒享恭挟矯暁琴菌襟謹吟虞隅靴勲薫慶渓茎蛍傑嫌懸献謙顕弦呉碁侯江洪溝肯衡貢購剛拷酷懇昆佐唆詐宰栽砕斎崎索傘桟嗣肢賜滋璽漆遮蛇爵酌珠儒囚愁臭酬醜充汁渋銃叔淑粛塾俊准循殉庶緒叙償升奨宵尚彰抄渉症硝礁祥粧肖訟詔剰壌浄醸唇娠紳診刃甚迅酢帥睡崇枢据杉畝誓逝斉析拙窃仙栓旋繊薦践遷漸禅塑疎租喪壮捜挿曹槽荘藻霜堕妥惰駄泰濯但棚痴逐秩嫡衷弔懲挑眺勅朕津塚漬坪釣亭偵貞呈廷艇逓邸泥徹撤迭悼搭棟筒謄騰洞督凸屯縄軟尼妊忍寧猫把覇廃培媒賠伯舶漠肌鉢閥煩頒妃扉披罷賓頻瓶扶譜附侮沸憤雰丙併塀幣弊偏遍俸泡褒剖紡僕撲朴堀奔摩磨麻抹繭岬銘妄盲耗戻厄柳愉癒諭唯悠猶裕融庸窯羅酪履痢硫竜虜僚寮涼倫塁累鈴賄枠',
    'Level 2': '挨宛闇椅畏萎茨咽淫臼唄餌怨艶旺岡臆俺苛牙崖蓋骸柿顎葛釜鎌瓦韓玩伎畿亀僅巾錦駒串窟熊稽詣隙桁拳鍵舷股虎乞勾喉梗頃痕沙挫塞采阪埼柵拶斬鹿叱嫉腫呪蹴拭尻芯腎須裾凄醒戚脊煎羨腺詮膳曽狙遡爽痩捉袖遜汰唾堆戴誰旦綻酎捗椎潰爪鶴諦溺填貼妬賭藤憧瞳栃頓奈那謎鍋匂虹捻罵剥箸斑氾汎眉膝肘媛阜蔽蔑蜂貌頬睦勃昧枕蜜冥麺餅冶弥湧妖沃嵐藍梨璃侶瞭瑠呂賂弄麓脇丼傲刹哺喩嗅嘲毀彙恣惧慄憬拉摯曖楷鬱璧瘍箋籠緻羞訃諧貪踪辣錮',
    'Level Pre-1': '唖娃阿姶逢葵茜穐渥旭葦鯵梓斡姐虻飴絢綾鮎或粟袷庵按鞍杏伊夷惟謂亥郁磯溢鰯允胤蔭吋烏迂卯鵜窺丑碓嘘欝蔚鰻姥厩瓜閏噂云荏叡嬰曳洩瑛盈穎頴榎厭堰奄掩焔燕苑薗鴛於甥襖鴬鴎荻桶牡伽嘉珂禾茄蝦嘩迦霞俄峨臥蛾駕廻恢魁晦芥蟹凱咳碍鎧浬馨蛙蛎鈎劃廓撹赫笠樫橿梶鰍恰鰹叶椛樺鞄兜竃蒲噛鴨茅萱粥苅侃姦柑桓澗潅竿翰莞諌舘巌癌翫贋雁嬉毅稀徽妓祇蟻誼掬鞠吃桔橘砧杵黍仇汲灸笈渠鋸禦亨侠僑兇匡卿喬彊怯蕎饗尭桐粁欣欽禽芹衿倶狗玖矩躯駈喰寓櫛釧屑沓轡窪隈粂栗鍬卦袈祁圭珪慧桂畦繋罫荊頚戟訣倦喧捲牽硯鹸絃諺乎姑狐糊袴胡菰跨鈷伍吾梧檎瑚醐鯉佼倖垢宏巷庚弘昂晃杭浩糠紘肱腔膏砿閤鴻劫壕濠轟麹鵠漉甑忽惚狛此坤昏梱艮些叉嵯瑳裟坐哉犀砦冴堺榊肴鷺朔窄鮭笹匙薩皐鯖捌錆鮫晒撒燦珊纂讃餐仔屍孜斯獅爾痔而蒔汐鴫竺宍雫悉蔀篠偲柴屡蕊縞紗勺杓灼錫惹綬洲繍蒐輯酋什戎夙峻竣舜駿楯淳醇曙渚薯藷恕鋤哨嘗妾娼庄廠捷昌梢樟樵湘菖蒋蕉裳醤鉦鍾鞘丞擾杖穣埴燭蝕晋榛疹秦塵壬訊靭笥諏厨逗翠錐錘瑞嵩趨雛椙菅頗雀摺棲栖脆蹟碩蝉尖撰栴煽穿箭舛賎銑閃糎噌岨曾楚疏蘇鼠叢宋匝惣掻槍漕糟綜聡蒼鎗其揃詑柁舵楕陀騨岱腿苔黛鯛醍鷹啄托琢鐸茸凧蛸只叩辰巽竪辿狸鱈樽坦歎湛箪耽蛋檀弛智蜘馳筑註樗瀦猪苧凋喋寵帖暢牒脹蝶諜銚槌鎚栂掴槻佃柘辻蔦綴鍔椿壷嬬紬吊剃悌挺梯汀碇禎蹄鄭釘鼎擢鏑轍纏甜顛澱兎堵杜菟鍍砥砺塘套宕嶋梼淘涛祷董蕩鐙撞萄鴇涜禿橡椴鳶苫寅酉瀞噸惇敦沌遁呑乍凪薙灘捺楢馴畷楠汝賑廿韮濡禰祢葱撚乃廼之埜嚢膿覗蚤巴播杷琶芭盃牌楳煤狽這蝿秤矧萩柏箔粕曝莫駁函硲肇筈幡畠溌醗筏鳩噺塙蛤隼叛挽磐蕃匪庇斐緋誹樋簸枇毘琵柊稗疋髭彦菱弼畢逼桧紐謬彪瓢豹廟錨鋲蒜蛭鰭彬斌瀕埠斧芙撫葡蕪楓葺蕗淵弗鮒吻扮焚糞頁僻碧瞥箆篇娩鞭鋪圃甫輔戊菩呆峯庖捧朋烹萌蓬鋒鳳鵬鉾吠卜穆釦殆幌哩槙鮪柾鱒亦俣沫迄麿蔓巳箕湊蓑稔粍牟鵡椋姪牝棉緬摸孟蒙儲杢勿尤籾貰悶匁也爺耶靖薮鑓愈佑宥揖柚涌猷祐邑輿傭楊熔耀蓉遥慾淀螺莱洛蘭李裡葎掠劉溜琉亮凌梁稜諒遼淋燐琳鱗麟伶嶺怜玲苓憐漣煉簾聯蓮魯櫓婁牢狼篭聾蝋禄肋倭歪鷲亙亘鰐詫藁蕨椀碗儘兔凰凾厰咒壺峩崕嵳廐廏廚攪檜檮橢濤渕溯漑灌潴皋礦礪龝竈篦纒翆聨苒莵萠葢蘂蕋藪蠣蛛蠅蠏諫讚豎賤迺鉤鎔靱韃韭頸鰺鴈鴦鶯鸚麒麪',
    'Level 1': '芦讐屠櫨桝榔弌丐丕丱乂乖舒弍于亟亢亶仍仄仆仂仗仞仭仟价伉佚估佝佗佇佶侈侏侘佻佩佰侑佯侖俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃偕偐偈做偖偬偸傀傚傅傴僉僊僂僖僥僭僣僮僵儁儂儕儔儚儡儺儷儼儻兀兌兢兪冀冉冏冑冓冕冤冢冪冱冽凅凛几凩凭刋刔刎刪刮刳剏剄剋剌剞剔剪剴剳剿剽劈劬劭劼勁勍勗勣勦飭勠匆匈甸匍匐匏匕匚匣匯匱匳卅丗卉卍卮卻厖厥簒叟曼燮叮叨叭叺吁吽听吭吼吮吶吩吝呎咏呵咎呟呱呷呰呻咀呶咄咐咆哇咢咸咥咬哄哈咨咫哂咤哥哦唏唔哽哮哭哢唹啀啣售啜啅啖啗唸唳喙喀喊喟啻啾喘喞啼喃喇喨嗚嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛噎嘴嘶嘸噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶囂嚼囁囃囀囈囓囮囹圀囿圄圉嗇圜圦坎圻址坏坩坡坿垓垠垤埃埆埒堊堋堙堝堡塋塒堽塹墅墟壅壑壙壜壟壼夐夥夬夭夲夸夾奕奐奎奚奘奢奠奸妁妝佞妣妲姆姨姜妍姙姚娥娟娑娜娉婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嬪嬶嬾孅孀孑孕孚孛孥孩孰孳孵孺宦宸寇寔寐寤寞寥寰尠尨尸尹屁屎屓屏孱屮屶屹岌岑岔岫峙峭峪崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嶇嶄嶂嶢嶝嶬嶮嶷嶼巉巍巓巒巫已帚帙帑帛帷幄幃幀幎幗幔幟幢幇幵并幺麼庠廁廂廈廖廝廛廡廨廩廬廱廸彝彜弋弑弖弩弭弸彎弯彗彭彷徂彿徊很徇徙徘徨徭徼忖忻忤忸忱忝忿怡怙怩怎怱怛怕怫怦怏怺恚恁恪恟恊恍恃恤恂恬恫恙悁悍悃悚悄悛悖悒悧悋悸惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃惻愍愎慇愾愨愧慊愿愬愴慂慳慷慙慚慫慴慥慟慝慓慵憖憔憚憊憑憫憮懌懊懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戈戉戍戌戔戛戞戡截戮戳扁扎扞扣扛扠扨扼抉找抒抓抖抃抔拗拑抻拏拿拆拈拌拊拇抛挌拮拱挂挈拯拵捐捍捏掖掎掀掫捶掣掏掉掟捫捩掾揩揀揆揣揉揶揄搴搆搓搦搶搗搨搏摧摶摎撕撓撥撩撈撼擒擅撻擘擂擱擠擡抬擣擯攬擲擺攀擽攘攅攤攣攫畋敖敞敝敲斂斃斛斟斫旃旆旁旄旌旒旛旱杲昊昃旻杳昵昶昴昜晏晁晞晤晧晨晟晢晰暈暉暄暘暝曁暹暾曄曚曠昿曦曩曰曷朏朞朦朧霸朮朿朶朸杆杞杠杙杣枉杼杪枌枋枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎栞框栩桀栲桎梳栫桙桷桿梟梏梭梔梛梃桴梵梠梺椏椁棊椈棘棍棕椶椒椄棗棣棹棠椚楹楸楫楔楾楮椹椽椰楡楞楝榁槐槁槓榾槎寨槊榻槃榧榑榜榕榴槨樛槿槹槲槧樅榱槭樔樊樒櫁橄橇橙橦橈樸檐檠檄檣檗蘗檻櫃櫂檸檳檬櫟檪櫚櫪欅蘖櫺欒欖欸欷欹歇歃歉歙歔歛歟歿殀殄殃殍殞殤殪殫殯殲殱殷毋毟毬毫毳毯麾氈氓氛汞汕汪沂沍沚沁沛汨沐泄泓沽泗泅泝沮沱沾泛泯泪洟衍洶洫洽洸洵洒洌浣涓浚浹浙涎涕涅淹涵涸淆淬淌淒淅淙淤淪渭湮渙湲渾渣湫渫湍渟湃渺湎渝游溂溘滉溷滓溽滄溲滔滕溏溥滂溟滬滸滾漿滲漱漲滌漾漓滷澆潺潸潯潭澂潘澎潦澳澣澡澹濆澪濬濔濘濛瀉瀋濺瀑瀁瀏濾瀛瀚瀝瀟瀰瀾瀲灑炙炒炯烱炬炸炳炮烟烋烝烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燉燔燎燠燬燧燵燼燹燿爍爛爨爬爰牀牆牋牘牴牾犂犁犇犒犖犢犲狃狆狄狎狒狢狠狡狷倏猗猊猜猖猝猴猯猩猥猾獏獗獪獰獺珈玳玻珀珥珮珞璢琅瑯琥琲琺瑕瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞瓊瓏瓔瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甦畛畚畤畭畸疆疇畴疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿痼瘁痰痺痲痳瘋瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癢癨癩癪癧癬癰癲癸皎皖皓皙皚皰皴皸皹皺盂盍盒盞盥盧盪蘯盻眈眇眄眩眥眦眛眷眸睇睚睨睫睛睥睾睹瞎瞋瞑瞠瞞瞰瞿瞼瞽瞻矇矍矚矜矣矮矼砌砒砠硅硼碚碌碣碪磑磋磔碾碼磅磊磬磧磚磽磴礒礑礙礬礫祀祠祗祟祚祓祺禊禝禧禳禹禺秉秕秧秬秣稈稍稠稟禀稷穡穢穹穽窈窕窘窖窩窶竅竄窿邃竇竍竏竕竓站竚竡竢竦竭竰笏笊笆笳笘笙笞笵笨筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箍箜箚箒箏筝箙篋篁篌箴篆篝篩簑簔篥簀簇簓篳篷簗簍簣簧簪簟簷簫簽籌籃籔籀籐籟籤籖籥籬籵粃粤粢粨粳粲粱粽糀糅糂糒糜鬻糯糲糴糶糺紆紂紜紕紊絅紮紲紿紵絆絳絖絎絨絮絏絣綉絛綏絽綛綺綮綣綵緇綽綫綢綯綸綟綰緘緝緤緞緲緡縅縊縡縒縟縉縋縢繆繦縻縵縹繃縷縲縺繧繝繖繞繙繚繹繻纃繽辮纈纉纐纓纔纛纜缸罅罌罍罎罕罔罘罟罠罨罩罧羂羆羃羈羇羌羔羝羚羯羲羹羶羸翅翊翕翔翡翦翩翳翹飜耆耄耋耘耙耜耡耨耿聊聆聒聘聚聟聢聳聶聿肄肆肛肓肚肭肬胛胥胙胝胄胚胖胯胱脛脩脣脯腋隋腆脾腓腑胼腱腮腥腴膃膈膊膀膂膠膣腟膩膰膵膾臀臂膺臉臍臑臙臘臚臠臧臻臾舁舂舅舐舫舸舳艀艙艘艝艚艟艤艢艨艪艫艱艸艾芍芒芫芟芻芬苡苣苟苴苳苺莓范苻苹苞茆苜茉苙茵茴茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢茣莎荼荳荵莠莉莨菴菫菎菽萃菘菁菠菲萍萢莽萸葭萼葷蒭蒂葩葆葯萵蒹蒿蒟蓙蓍蒻蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈蕁蕕薀薤薈薑薊薨蕭薔薛薇薜蕷蕾薐藉薺薹藐藕藜藹蘊蘋藾藺蘆蘢蘚蘿虔虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蚫蛔蛞蛩蛬蛟蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣螟螂螯蟋螽蟀雖螫蟄螳蟇蟆螻蟯蟠蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠹蠧衄衒衙衢衫衾袞衵衽袵衲袂袗袒袙袢袍袤袰袿袱裃裄裔裘裙裹褂裼裴裨裲褄褌褊褓褞褥褪褫襁襄褻褶褸襌褝襠襞襦襤襭襪襯襴襷覃覈覓覘覡覩覦覬覯覲覿觚觜觝觴訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諳諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謳鞫謦謫謾謨譁譌譏譎譖譛譚譫譟譬譴讌讎讒讖讙谺豁谿豈豌豕豢豺貂貉貊貎貘貽貲貶賈賁賚賽賺賻贄贅贇贏贍贐齎贓贔贖赧赭赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踉跿踝踞踟蹂踵踰踴蹊蹇蹉蹌蹐蹈蹙蹤蹠蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躱躾軈軋軛軼軻軫軾輊輅輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轆轎轗轜轢轤辜辟辷迚迥迢迪邇迴逅迹逑逕逡逍逞逖逋逧逵迸遏遐遑遒逎遉逾遖遘遨遯遶邂遽邁邀邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲酊酖酣酥酩酳酲醋醂醢醯醪醵醴醺釁釉釐釵鈞釿鈔鈕鈑鉞鉗鉅鉉鉈銕鈿鉋銜銖銓銛鋏銹銷鋩錏鋺錙錚錣錺錵錻鍠鍼鍮鎰鎬鎹鏖鏗鏨鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐐鐶鐫鐺鑒鑠鑢鑞鑪鑰鑵鑷鑽鑚鑼鑾钁鑿閂閊閔閘閙閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖闡闥闢阡阨阮阯陂陌陋陜陞陝陟陲陬隍隘隕隗隧隰隴雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靂靉靠靤靦靨勒靫鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韆韈韋韜齏韲竟韶韵頏頌頤頡頷頽顆顋顫顰顱顴顳颪颯颱颶飄飆飩飫餃餉餒餔餡餞餤餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮駟駛駝駘駑駭駮駱駻駸騁騏騅駢騙騫驂驀驃騾驕驍驟驢驥驤驩驪骭骰骼髀髏髑髢髣髦髯髫髴髱髷髻鬆鬘鬚鬟鬢鬣鬧鬨鬩鬮鬯魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯏鯑鯒鯣鯢鯤鯔鯡鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰰鱇鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴃鴆鴪鴣鴟鵄鴕鴒鵁鴿鴾鵆鵝鵞鵤鵑鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷁鶻鶸鶺鷆鷂鷙鷓鷸鷦鷭鷯鷽鸛鸞鹵鹹麁麈麋麌麕麑麝麩麸麭靡黌黎黏黐黔黜黝黠黥黯黴黶黷黹黻黼黽鼇鼈鼕鼬鼾齔齣齟齠齦齧齬齪齷齲齶龕龠凜熙'
};

const grade = {
    'Grade 1': '一右雨円王音下火花貝学気休玉金九空月犬見五口校左三山四子糸字耳七車手十出女小上森人水正生青石赤先千川早草足村大男竹中虫町天田土二日入年白八百文本名木目夕立力林六',
    'Grade 2': '引羽雲園遠黄何夏家科歌画会回海絵外角楽活間丸岩顔帰汽記弓牛魚京強教近兄形計元原言古戸午後語交光公工広考行高合国黒今才細作算姉市思止紙寺時自室社弱首秋週春書少場色食心新親図数星晴声西切雪線船前組走多太体台谷知地池茶昼朝長鳥直通弟店点電冬刀東当答頭同道読内南肉馬買売麦半番父風分聞米歩母方北妹毎万明鳴毛門夜野矢友曜用来理里話',
    'Grade 3': '悪安暗委意医育員飲院運泳駅央横屋温化荷界開階寒感漢館岸期起客宮急球究級去橋業局曲銀区苦具君係軽決血研県庫湖向幸港号根祭坂皿仕使始指死詩歯事持次式実写者主取守酒受州拾終習集住重宿所暑助勝商昭消章乗植深申真神身進世整昔全想相送息速族他打対待代第題炭短談着柱注丁帳調追定庭笛鉄転登都度島投湯等豆動童農波配倍箱畑発反板悲皮美鼻筆氷表病秒品負部服福物平返勉放味命面問役薬油有由遊予様洋羊葉陽落流旅両緑礼列練路和',
    'Grade 4': '愛案以衣位茨印英栄媛塩岡億加果貨課芽賀改械害街各覚潟完官管関観願岐希季旗器機議求泣給挙漁共協鏡競極熊訓軍郡群径景芸欠結建健験固功好香候康佐差菜最埼材崎昨札刷察参産散残氏司試児治滋辞鹿失借種周祝順初松笑唱焼照城縄臣信井成省清静席積折節説浅戦選然争倉巣束側続卒孫帯隊達単置仲沖兆低底的典伝徒努灯働特徳栃奈梨熱念敗梅博阪飯飛必票標不夫付府阜富副兵別辺変便包法望牧末満未民無約勇要養浴利陸良料量輪類令冷例連老労録',
    'Grade 5': '圧囲移因永営衛易益液演応往桜可仮価河過快解格確額刊幹慣眼紀基寄規喜技義逆久旧救居許境均禁句型経潔件険検限現減故個護効厚耕航鉱構興講告混査再災妻採際在財罪殺雑酸賛士支史志枝師資飼示似識質舎謝授修述術準序招証象賞条状常情織職制性政勢精製税責績接設絶祖素総造像増則測属率損貸態団断築貯張停提程適統堂銅導得毒独任燃能破犯判版比肥非費備評貧布婦武復複仏粉編弁保墓報豊防貿暴脈務夢迷綿輸余容略留領歴',
    'Grade 6': '胃異遺域宇映延沿恩我灰拡革閣割株干巻看簡危机揮貴疑吸供胸郷勤筋系敬警劇激穴券絹権憲源厳己呼誤后孝皇紅降鋼刻穀骨困砂座済裁策冊蚕至私姿視詞誌磁射捨尺若樹収宗就衆従縦縮熟純処署諸除承将傷障蒸針仁垂推寸盛聖誠舌宣専泉洗染銭善奏窓創装層操蔵臓存尊退宅担探誕段暖値宙忠著庁頂腸潮賃痛敵展討党糖届難乳認納脳派拝背肺俳班晩否批秘俵腹奮並陛閉片補暮宝訪亡忘棒枚幕密盟模訳郵優預幼欲翌乱卵覧裏律臨朗論',
    'JuniorHS+': '亜哀挨曖握扱宛嵐依威為畏尉萎偉椅彙違維慰緯壱逸芋咽姻淫陰隠韻唄鬱畝浦詠影鋭疫悦越謁閲炎怨宴援煙猿鉛縁艶汚凹押旺欧殴翁奥憶臆虞乙俺卸穏佳苛架華菓渦嫁暇禍靴寡箇稼蚊牙瓦雅餓介戒怪拐悔皆塊楷潰壊懐諧劾崖涯慨蓋該概骸垣柿核殻郭較隔獲嚇穫岳顎掛括喝渇葛滑褐轄且釜鎌刈甘汗缶肝冠陥乾勘患貫喚堪換敢棺款閑勧寛歓監緩憾還環韓艦鑑含玩頑企伎忌奇祈軌既飢鬼亀幾棋棄毀畿輝騎宜偽欺儀戯擬犠菊吉喫詰却脚虐及丘朽臼糾嗅窮巨拒拠虚距御凶叫狂享況峡挟狭恐恭脅矯響驚仰暁凝巾斤菌琴僅緊錦謹襟吟駆惧愚偶遇隅串屈掘窟繰勲薫刑茎契恵啓掲渓蛍傾携継詣慶憬稽憩鶏迎鯨隙撃桁傑肩倹兼剣拳軒圏堅嫌献遣賢謙鍵繭顕懸幻玄弦舷股虎孤弧枯雇誇鼓錮顧互呉娯悟碁勾孔巧甲江坑抗攻更拘肯侯恒洪荒郊貢控梗喉慌硬絞項溝綱酵稿衡購乞拷剛傲豪克酷獄駒込頃昆恨婚痕紺魂墾懇沙唆詐鎖挫采砕宰栽彩斎債催塞歳載剤削柵索酢搾錯咲刹拶撮擦桟惨傘斬暫旨伺刺祉肢施恣脂紫嗣雌摯賜諮侍慈餌璽軸𠮟疾執湿嫉漆芝赦斜煮遮邪蛇酌釈爵寂朱狩殊珠腫趣寿呪需儒囚舟秀臭袖羞愁酬醜蹴襲汁充柔渋銃獣叔淑粛塾俊瞬旬巡盾准殉循潤遵庶緒如叙徐升召匠床抄肖尚昇沼宵症祥称渉紹訟掌晶焦硝粧詔奨詳彰憧衝償礁鐘丈冗浄剰畳壌嬢錠譲醸拭殖飾触嘱辱尻伸芯辛侵津唇娠振浸紳診寝慎審震薪刃尽迅甚陣尋腎須吹炊帥粋衰酔遂睡穂随髄枢崇据杉裾瀬是姓征斉牲凄逝婿誓請醒斥析脊隻惜戚跡籍拙窃摂仙占扇栓旋煎羨腺詮践箋潜遷薦繊鮮禅漸膳繕狙阻租措粗疎訴塑遡礎双壮荘捜挿桑掃曹曽爽喪痩葬僧遭槽踪燥霜騒藻憎贈即促捉俗賊遜汰妥唾堕惰駄耐怠胎泰堆袋逮替滞戴滝択沢卓拓託濯諾濁但脱奪棚誰丹旦胆淡嘆端綻鍛弾壇恥致遅痴稚緻畜逐蓄秩窒嫡抽衷酎鋳駐弔挑彫眺釣貼超跳徴嘲澄聴懲勅捗沈珍朕陳鎮椎墜塚漬坪爪鶴呈廷抵邸亭貞帝訂逓偵堤艇締諦泥摘滴溺迭哲徹撤添塡殿斗吐妬途渡塗賭奴怒到逃倒凍唐桃透悼盗陶塔搭棟痘筒稲踏謄藤闘騰洞胴瞳峠匿督篤凸突屯豚頓貪鈍曇丼那謎鍋軟尼弐匂虹尿妊忍寧捻粘悩濃把覇婆罵杯排廃輩培陪媒賠伯拍泊迫剝舶薄漠縛爆箸肌鉢髪伐抜罰閥氾帆汎伴畔般販斑搬煩頒範繁藩蛮盤妃彼披卑疲被扉碑罷避尾眉微膝肘匹泌姫漂苗描猫浜賓頻敏瓶扶怖附訃赴浮符普腐敷膚賦譜侮舞封伏幅覆払沸紛雰噴墳憤丙併柄塀幣弊蔽餅壁璧癖蔑偏遍哺捕舗募慕簿芳邦奉抱泡胞俸倣峰砲崩蜂飽褒縫乏忙坊妨房肪某冒剖紡傍帽貌膨謀頰朴睦僕墨撲没勃堀奔翻凡盆麻摩磨魔昧埋膜枕又抹慢漫魅岬蜜妙眠矛霧娘冥銘滅免麺茂妄盲耗猛網黙紋冶弥厄躍闇喩愉諭癒唯幽悠湧猶裕雄誘憂融与誉妖庸揚揺溶腰瘍踊窯擁謡抑沃翼拉裸羅雷頼絡酪辣濫藍欄吏痢履璃離慄柳竜粒隆硫侶虜慮了涼猟陵僚寮療瞭糧厘倫隣瑠涙累塁励戻鈴零霊隷齢麗暦劣烈裂恋廉錬呂炉賂露弄郎浪廊楼漏籠麓賄脇惑枠湾腕',
    'Jinmeiyou (regular)': '丑丞乃之乎也云亘亙些亦亥亨亮仔伊伍伽佃佑伶侃侑俄俠俣俐倭俱倦倖偲傭儲允兎兜其冴凌凜凛凧凪凰凱函劉劫勁勺勿匁匡廿卜卯卿厨厩叉叡叢叶只吾吞吻哉哨啄哩喬喧喰喋嘩嘉嘗噌噂圃圭坐尭堯坦埴堰堺堵塙壕壬夷奄奎套娃姪姥娩嬉孟宏宋宕宥寅寓寵尖尤屑峨峻崚嵯嵩嶺巌巖巫已巳巴巷巽帖幌幡庄庇庚庵廟廻弘弛彗彦彪彬徠忽怜恢恰恕悌惟惚悉惇惹惺惣慧憐戊或戟托按挺挽掬捲捷捺捧掠揃摑摺撒撰撞播撫擢孜敦斐斡斧斯於旭昂昊昏昌昴晏晃晄晒晋晟晦晨智暉暢曙曝曳朋朔杏杖杜李杭杵杷枇柑柴柘柊柏柾柚桧檜栞桔桂栖桐栗梧梓梢梛梯桶梶椛梁棲椋椀楯楚楕椿楠楓椰楢楊榎樺榊榛槙槇槍槌樫槻樟樋橘樽橙檎檀櫂櫛櫓欣欽歎此殆毅毘毬汀汝汐汲沌沓沫洸洲洵洛浩浬淵淳渚渚淀淋渥渾湘湊湛溢滉溜漱漕漣澪濡瀕灘灸灼烏焰焚煌煤煉熙燕燎燦燭燿爾牒牟牡牽犀狼猪猪獅玖珂珈珊珀玲琢琢琉瑛琥琶琵琳瑚瑞瑶瑳瓜瓢甥甫畠畢疋疏皐皓眸瞥矩砦砥砧硯碓碗碩碧磐磯祇祢禰祐祐祷禱禄祿禎禎禽禾秦秤稀稔稟稜穣穰穹穿窄窪窺竣竪竺竿笈笹笙笠筈筑箕箔篇篠簞簾籾粥粟糊紘紗紐絃紬絆絢綺綜綴緋綾綸縞徽繫繡纂纏羚翔翠耀而耶耽聡肇肋肴胤胡脩腔脹膏臥舜舵芥芹芭芙芦苑茄苔苺茅茉茸茜莞荻莫莉菅菫菖萄菩萌萠萊菱葦葵萱葺萩董葡蓑蒔蒐蒼蒲蒙蓉蓮蔭蔣蔦蓬蔓蕎蕨蕉蕃蕪薙蕾蕗藁薩蘇蘭蝦蝶螺蟬蟹蠟衿袈袴裡裟裳襖訊訣註詢詫誼諏諄諒謂諺讃豹貰賑赳跨蹄蹟輔輯輿轟辰辻迂迄辿迪迦這逞逗逢遥遙遁遼邑祁郁鄭酉醇醐醍醬釉釘釧銑鋒鋸錘錐錆錫鍬鎧閃閏閤阿陀隈隼雀雁雛雫霞靖鞄鞍鞘鞠鞭頁頌頗顚颯饗馨馴馳駕駿驍魁魯鮎鯉鯛鰯鱒鱗鳩鳶鳳鴨鴻鵜鵬鷗鷲鷺鷹麒麟麿黎黛鼎',
    'Jinmeiyou (variant)': '亞惡爲逸榮衞謁圓緣薗應櫻奧橫溫價禍悔海壞懷樂渴卷陷寬漢氣祈器僞戲虛峽狹響曉勤謹駈勳薰惠揭鷄藝擊縣儉劍險圈檢顯驗嚴廣恆黃國黑穀碎雜祉視兒濕實社者煮壽收臭從澁獸縱祝暑署緖諸敍將祥涉燒奬條狀乘淨剩疊孃讓釀神眞寢愼盡粹醉穗瀨齊靜攝節專戰纖禪祖壯爭莊搜巢曾裝僧層瘦騷增憎藏贈臟卽帶滯瀧單嘆團彈晝鑄著廳徵聽懲鎭轉傳都嶋燈盜稻德突難拜盃賣梅髮拔繁晚卑祕碑賓敏冨侮福拂佛勉步峯墨飜每萬默埜彌藥與搖樣謠來賴覽欄龍虜凉綠淚壘類禮曆歷練鍊郞朗廊錄'
};

const JLPTLevel = {
    'JLPT N5': '一右雨円下何火外学間気休金九月見五午後語校行高国今左三山四子時七車十出書女小上食人水生西先千川前大男中長天電土東読南二日入年白八半百父聞母北本毎万名木友来六話',
    'JLPT N4': '悪安以意医員飲院運映英駅屋音夏家歌花画会海界開楽漢館帰起急究牛去魚京強教業近銀空兄計建犬研験元言古公口工広考黒作仕使始姉思止死私紙試事字持自室質写社者借主手秋終習週集住重春少場色心新真親図世正青赤切早走送足族多体待貸代台題知地茶着昼注朝町鳥通弟店転田度冬答動同堂道特肉買売発飯病品不風服物文別勉歩方妹味明目問夜野有夕曜洋用理立旅料力',
    'JLPT N3': '愛暗位偉易違育因引泳越園演煙遠押横王化加科果過解回皆絵害格確覚掛割活寒完官感慣観関顔願危喜寄幾期機規記疑議客吸求球給居許供共恐局曲勤苦具偶靴君係形景経警迎欠決件権険原現限呼互御誤交候光向好幸更構港降号合刻告込困婚差座最妻才歳済際在罪財昨察殺雑参散産賛残市師指支資歯似次治示耳辞式識失実若取守種酒首受収宿術処初所緒助除勝商招消笑乗常情状職信寝深申神進吹数制性成政晴精声静席昔石積責折説雪絶戦洗船選然全祖組想争相窓草増側息束速続存他太打対退宅達単探断段談値恥置遅調頂直追痛定庭程適点伝徒渡登途都努怒倒投盗当等到逃頭働得突内難任認猫熱念能破馬敗杯背配箱髪抜判反犯晩番否彼悲疲費非飛備美必表貧付夫婦富怖浮負舞部福腹払平閉米変返便捕暮報抱放法訪亡忘忙望末満未民眠務夢娘命迷鳴面戻役約薬優由遊予余与容様葉要陽欲頼落利流留両良類例冷礼列連路労老論和',
    'JLPT N2': '圧依囲委移胃衣域印宇羽雲営栄永鋭液延塩汚央奥欧黄億温河荷菓課貨介快改械灰階貝各角革額乾刊巻干患換汗甘管簡缶丸含岸岩希机祈季技喫詰逆久旧巨漁競協叫境挟橋況胸極玉均禁区隅掘訓群軍傾型敬軽芸劇血券県肩賢軒減個固庫戸枯湖雇効厚硬紅耕肯航荒講郊鉱香腰骨根混査砂再採祭細菜材坂咲冊刷札皿算伺刺史枝糸脂詞誌児寺湿捨弱周州拾舟柔祝述準純順署諸召将床承昇焼照省章紹象賞城畳蒸植触伸森臣辛針震勢姓星清税隻籍績跡接設占専泉浅線双層捜掃燥総装像憎臓蔵贈造則測卒孫尊損村帯替袋濯谷担炭短団池築畜竹仲柱虫駐著貯兆庁超沈珍低停底泥滴鉄殿塗党凍塔島湯灯筒導童銅毒届曇鈍軟乳燃悩濃脳農波拝倍泊薄爆麦肌板版般販比皮被鼻匹筆氷秒瓶布府普符膚武封副復幅複沸仏粉兵並片編辺補募包宝豊帽暴棒貿防磨埋枚綿毛門油輸勇郵預幼溶踊浴翌絡乱卵裏陸律略粒了涼療量領緑林輪涙令零齢歴恋練録湾腕',
    'JLPT N1': '亜阿哀葵茜握渥旭梓扱絢綾鮎案杏伊威尉惟慰為異維緯遺井亥郁磯壱逸稲芋允姻胤陰隠韻卯丑渦唄浦叡影瑛衛詠疫益悦謁閲宴援沿炎猿縁艶苑鉛於凹往応旺殴翁沖憶乙卸恩穏仮伽価佳嘉嫁寡暇架禍稼箇茄華霞蚊我芽賀雅餓塊壊怪悔懐戒拐魁凱劾慨概涯街該馨垣嚇拡核殻獲穫較郭閣隔岳潟喝括渇滑褐轄且叶樺株鎌茅刈侃冠勘勧喚堪寛幹憾敢棺款歓環監看緩肝艦莞貫還鑑閑陥巌眼頑企伎器基奇嬉岐忌揮旗既棋棄毅汽稀紀貴軌輝飢騎鬼亀偽儀宜戯擬欺犠義誼菊鞠吉橘却脚虐丘及宮弓救朽泣窮級糾拒拠挙虚距亨享凶匡喬峡恭狂狭矯脅興郷鏡響驚仰凝尭暁桐錦斤欣欽琴筋緊芹菌衿襟謹吟句玖駆駒愚虞遇屈熊栗繰桑勲薫郡袈刑啓圭契径恵慶慧憩掲携桂渓系継茎蛍鶏鯨撃激傑潔穴結倹健兼剣圏堅嫌憲懸拳検献絹謙遣顕厳幻弦源玄絃孤己弧故胡虎誇顧鼓伍呉娯悟梧瑚碁護鯉侯倖功后坑孔宏巧康弘恒抗拘控攻昂晃江洪浩溝甲皇稿紘絞綱衡貢購酵鋼項鴻剛拷豪克穀酷獄墾恨懇昆紺魂佐唆嵯沙瑳詐鎖裟債催哉宰彩栽災采砕斎裁載剤冴崎削搾朔策索錯桜笹撮擦皐傘惨桟燦蚕酸暫司嗣士姿志施旨氏祉紫肢至視詩諮賜雌飼侍慈滋爾磁蒔汐鹿軸執漆疾偲芝舎射赦斜煮紗謝遮蛇邪勺尺爵酌釈寂朱殊狩珠趣儒授樹需囚宗就修愁洲秀臭衆襲酬醜充従汁渋獣縦銃叔淑縮粛塾熟俊峻瞬竣舜駿准循旬殉淳潤盾巡遵暑曙渚庶叙序徐恕傷償匠升唱奨宵尚庄彰抄掌捷昌昭晶松梢沼渉焦症硝礁祥称肖菖蕉衝訟証詔詳鐘障丞冗剰壌嬢条浄穣譲醸錠嘱飾殖織辱侵唇娠審慎振晋榛浸秦紳薪診仁刃尋甚尽迅陣須酢垂帥推炊睡粋翠衰遂酔錘随瑞髄崇嵩枢雛据杉澄寸瀬畝是征整牲盛聖製誠誓請逝斉惜斥析碩拙摂窃節舌仙宣扇栓染潜旋繊薦践遷銭銑鮮善漸禅繕塑措疎礎租粗素訴阻僧創倉喪壮奏爽惣挿操曹巣槽綜聡荘葬蒼藻遭霜騒促即俗属賊汰堕妥惰駄耐怠態泰滞胎逮隊黛鯛第鷹滝卓啄択拓沢琢託濁諾只但辰奪脱巽棚丹嘆旦淡端胆誕鍛壇弾暖檀智痴稚致蓄逐秩窒嫡宙忠抽衷鋳猪丁帳弔張彫徴懲挑暢潮眺聴脹腸蝶跳勅朕賃鎮陳津墜椎塚槻漬蔦椿坪紬釣鶴亭偵貞呈堤帝廷悌抵提禎締艇訂逓邸摘敵笛哲徹撤迭典展添吐斗杜奴刀悼搭桃棟痘糖統藤討謄豆踏透陶騰闘憧洞瞳胴峠匿徳督篤独凸寅酉屯惇敦豚奈那凪捺縄楠尼弐虹如尿妊忍寧粘乃之納巴把覇派婆俳廃排肺輩培媒梅賠陪萩伯博拍舶迫漠縛肇鉢伐罰閥鳩隼伴帆搬班畔繁藩範煩頒盤蛮卑妃扉批披斐泌碑秘緋罷肥避尾微眉柊彦姫媛俵彪標漂票評描苗彬浜賓頻敏扶敷腐芙譜賦赴附侮楓蕗伏覆噴墳憤奮紛雰丙併塀幣弊柄陛壁癖碧偏遍弁保舗甫輔穂墓慕簿倣俸奉峰崩朋泡砲縫胞芳萌褒邦飽鳳鵬乏傍剖妨房某冒紡肪膨謀僕墨撲朴牧睦没堀奔翻凡盆摩魔麻槙幕膜柾亦又抹繭麿慢漫魅巳岬密稔脈妙矛霧椋婿盟銘滅免模茂妄孟猛盲網耗黙紋匁也冶耶弥矢厄訳躍靖柳愉癒諭唯佑宥幽悠憂柚湧猶祐裕誘邑雄融誉庸揚揺擁楊窯羊耀蓉謡遥養抑翼羅裸雷酪嵐欄濫藍蘭覧吏履李梨璃痢離率琉硫隆竜慮虜亮僚凌寮猟瞭稜糧諒遼陵倫厘琳臨隣麟瑠塁累伶励嶺怜玲鈴隷霊麗暦劣烈裂廉蓮錬呂炉露廊朗楼浪漏郎禄倭賄惑枠亘侑勁奎崚彗昴晏晨晟暉栞椰毬洸洵滉漱澪燎燿瑶皓眸笙綺綸翔脩茉莉菫詢諄赳迪頌颯黎凜熙'
};

const rtk = {
    'RTK1 6th ed.': '一二三四五六七八九十口日月田目古吾冒朋明唱晶品呂昌早旭世胃旦胆亘凹凸旧自白百中千舌升昇丸寸肘専博占上下卓朝嘲只貝唄貞員貼見児元頁頑凡負万句肌旬勺的首乙乱直具真工左右有賄貢項刀刃切召昭則副別丁町可頂子孔了女好如母貫兄呪克小少大多夕汐外名石肖硝砕砂妬削光太器臭嗅妙省厚奇川州順水氷永泉腺原願泳沼沖汎江汰汁沙潮源活消況河泊湖測土吐圧埼垣填圭封涯寺時均火炎煩淡灯畑災灰点照魚漁里黒墨鯉量厘埋同洞胴向尚字守完宣宵安宴寄富貯木林森桂柏枠梢棚杏桐植椅枯朴村相机本札暦案燥未末昧沫味妹朱株若草苦苛寛薄葉模漠墓暮膜苗兆桃眺犬状黙然荻狩猫牛特告先洗介界茶脊合塔王玉宝珠現玩狂旺皇呈全栓理主注柱金銑鉢銅釣針銘鎮道導辻迅造迫逃辺巡車連軌輸喩前煎各格賂略客額夏処条落冗冥軍輝運冠夢坑高享塾熟亭京涼景鯨舎周週士吉壮荘売学覚栄書津牧攻敗枚故敬言警計詮獄訂訃討訓詔詰話詠詩語読調談諾諭式試弐域賊栽載茂戚成城誠威滅減蔑桟銭浅止歩渉頻肯企歴武賦正証政定錠走超赴越是題堤建鍵延誕礎婿衣裁装裏壊哀遠猿初巾布帆幅帽幕幌錦市柿姉肺帯滞刺制製転芸雨雲曇雷霜冬天妖沃橋嬌立泣章競帝諦童瞳鐘商嫡適滴敵匕叱匂頃北背比昆皆楷諧混渇謁褐喝葛旨脂詣壱毎敏梅海乞乾腹複欠吹炊歌軟次茨資姿諮賠培剖音暗韻識鏡境亡盲妄荒望方妨坊芳肪訪放激脱説鋭曽増贈東棟凍妊廷染燃賓歳県栃地池虫蛍蛇虹蝶独蚕風己起妃改記包胞砲泡亀電竜滝豚逐遂家嫁豪腸場湯羊美洋詳鮮達羨差着唯堆椎誰焦礁集准進雑雌準奮奪確午許歓権観羽習翌曜濯曰困固錮国団因姻咽園回壇店庫庭庁床麻磨心忘恣忍認忌志誌芯忠串患思恩応意臆想息憩恵恐惑感憂寡忙悦恒悼悟怖慌悔憎慣愉惰慎憾憶惧憧憬慕添必泌手看摩我義議犠抹拭拉抱搭抄抗批招拓拍打拘捨拐摘挑指持拶括揮推揚提損拾担拠描操接掲掛捗研戒弄械鼻刑型才財材存在乃携及吸扱丈史吏更硬梗又双桑隻護獲奴怒友抜投没股設撃殻支技枝肢茎怪軽叔督寂淑反坂板返販爪妥乳浮淫将奨采採菜受授愛曖払広勾拡鉱弁雄台怠治冶始胎窓去法会至室到致互棄育撤充銃硫流允唆出山拙岩炭岐峠崩密蜜嵐崎崖入込分貧頒公松翁訟谷浴容溶欲裕鉛沿賞党堂常裳掌皮波婆披破被残殉殊殖列裂烈死葬瞬耳取趣最撮恥職聖敢聴懐慢漫買置罰寧濁環還夫扶渓規替賛潜失鉄迭臣姫蔵臓賢腎堅臨覧巨拒力男労募劣功勧努勃励加賀架脇脅協行律復得従徒待往征径彼役徳徹徴懲微街桁衡稿稼程税稚和移秒秋愁私秩秘称利梨穫穂稲香季委秀透誘稽穀菌萎米粉粘粒粧迷粋謎糧菊奥数楼類漆膝様求球救竹笑笠笹箋筋箱筆筒等算答策簿築篭人佐侶但住位仲体悠件仕他伏伝仏休仮伎伯俗信佳依例個健側侍停値倣傲倒偵僧億儀償仙催仁侮使便倍優伐宿傷保褒傑付符府任賃代袋貸化花貨傾何荷俊傍俺久畝囚内丙柄肉腐座挫卒傘匁以似併瓦瓶宮営善膳年夜液塚幣蔽弊喚換融施旋遊旅勿物易賜尿尼尻泥塀履屋握屈掘堀居据裾層局遅漏刷尺尽沢訳択昼戸肩房扇炉戻涙雇顧啓示礼祥祝福祉社視奈尉慰款禁襟宗崇祭察擦由抽油袖宙届笛軸甲押岬挿申伸神捜果菓課裸斤析所祈近折哲逝誓斬暫漸断質斥訴昨詐作雪録剥尋急穏侵浸寝婦掃当彙争浄事唐糖康逮伊君群耐需儒端両満画歯曲曹遭漕槽斗料科図用庸備昔錯借惜措散廿庶遮席度渡奔噴墳憤焼暁半伴畔判拳券巻圏勝藤謄片版之乏芝不否杯矢矯族知智挨矛柔務霧班帰弓引弔弘強弥弱溺沸費第弟巧号朽誇顎汚与写身射謝老考孝教拷者煮著箸署暑諸猪渚賭峡狭挟頬追阜師帥官棺管父釜交効較校足促捉距路露跳躍践踏踪骨滑髄禍渦鍋過阪阿際障隙随陪陽陳防附院陣隊墜降階陛隣隔隠堕陥穴空控突究窒窃窟窪搾窯窮探深丘岳兵浜糸織繕縮繁縦緻線綻締維羅練緒続絵統絞給絡結終級紀紅納紡紛紹経紳約細累索総綿絹繰継緑縁網緊紫縛縄幼後幽幾機畿玄畜蓄弦擁滋慈磁系係孫懸遜却脚卸御服命令零齢冷領鈴勇湧通踊疑擬凝範犯氾厄危宛腕苑怨柳卵留瑠貿印臼毀興酉酒酌酎酵酷酬酪酢酔配酸猶尊豆頭短豊鼓喜樹皿血盆盟盗温蓋監濫鑑藍猛盛塩銀恨根即爵節退限眼良朗浪娘食飯飲飢餓飾餌館餅養飽既概慨平呼坪評刈刹希凶胸離璃殺爽純頓鈍辛辞梓宰壁璧避新薪親幸執摯報叫糾収卑碑陸睦勢熱菱陵亥核刻該骸劾述術寒塞醸譲壌嬢毒素麦青精請情晴清静責績積債漬表俵潔契喫害轄割憲生星醒姓性牲産隆峰蜂縫拝寿鋳籍春椿泰奏実奉俸棒謹僅勤漢嘆難華垂唾睡錘乗剰今含貪吟念捻琴陰予序預野兼嫌鎌謙廉西価要腰票漂標栗慄遷覆煙南楠献門問閲閥間闇簡開閉閣閑聞潤欄闘倉創非俳排悲罪輩扉侯喉候決快偉違緯衛韓干肝刊汗軒岸幹芋宇余除徐叙途斜塗束頼瀬勅疎辣速整剣険検倹重動腫勲働種衝薫病痴痘症瘍痩疾嫉痢痕疲疫痛癖匿匠医匹区枢殴欧抑仰迎登澄発廃僚瞭寮療彫形影杉彩彰彦顔須膨参惨修珍診文対紋蚊斑斉剤済斎粛塁楽薬率渋摂央英映赤赦変跡蛮恋湾黄横把色絶艶肥甘紺某謀媒欺棋旗期碁基甚勘堪貴遺遣潰舞無組粗租狙祖阻査助宜畳並普譜湿顕繊霊業撲僕共供異翼戴洪港暴爆恭選殿井丼囲耕亜悪円角触解再講購構溝論倫輪偏遍編冊柵典氏紙婚低抵底民眠捕哺浦蒲舗補邸郭郡郊部都郵邦那郷響郎廊盾循派脈衆逓段鍛后幻司伺詞飼嗣舟舶航舷般盤搬船艦艇瓜弧孤繭益暇敷来気汽飛沈枕妻凄衰衷面麺革靴覇声眉呉娯誤蒸承函極牙芽邪雅釈番審翻藩毛耗尾宅託為偽畏長張帳脹髪展喪巣単戦禅弾桜獣脳悩厳鎖挙誉猟鳥鳴鶴烏蔦鳩鶏島暖媛援緩属嘱偶遇愚隅逆塑遡岡鋼綱剛缶陶揺謡鬱就蹴懇墾貌免逸晩勉象像馬駒験騎駐駆駅騒駄驚篤罵騰虎虜膚虚戯虞慮劇虐鹿麓薦慶麗熊能態寅演辰辱震振娠唇農濃送関咲鬼醜魂魔魅塊襲嚇朕雰箇錬遵罷屯且藻隷癒璽潟丹丑羞卯巳',
    'RTK1 6th ed. (variant)': '剝塡籠頰䇳喻',
    'RTK3 3rd ed.': '此柴砦些髭禽檎憐燐麟鱗奄庵掩悛駿峻竣舅鼠鑿艘犀皐畷綴爾鎧凱呑韮籤懺芻雛趨尤厖或兎也尭巴甫疋菫曼云卜喬莫倭侠倦佼俄佃伶仔仇伽僻儲倖僑侃倶侭佑俣傭偲脩倅做冴凋凌凛凧凪夙鳳劉剃厭雁贋厨仄哨咎囁喋嘩噂咳喧叩嘘啄吠吊噛叶吻吃噺噌邑呆喰埴坤壕垢坦埠堰堵嬰姦婢婉娼妓娃姪嬬姥姑姐嬉孕孜宥寓宏牢宋宍屠屁屑屡屍屏嵩崚峨嶺嵌嵯帖幡幟庖廓庇鷹庄廟彊弛粥挽撞扮掠掴捺掻撰揃捌撹摺按播揖托捧撚挺擾撫撒擢捷抉怯惟惚怜惇恰恢悌澪洸滉漱洲洵滲洒沐泪渾涜梁澱洛汝漉瀕濠溌湊淋浩汀鴻潅溢湛淳渥灘汲瀞溜渕沌濾濡淀涅斧爺猾猥狡狸狼狽狗狐狛獅狒莨茉莉苺萩藝薙蓑苔蕩蔓蓮芙蓉蘭芦薯菖蕉蕎蕗茄蔭蓬芥萌葡萄蘇蕃苓菰蒙茅芭苅葱葵葺蕊茸蒔芹苫蒼藁蕪藷薮蒜蕨蔚茜莞蒐菅葦迪辿這迂遁逢遥遼逼迄逗郁鄭隈憑惹悉忽惣愈恕昴晋晟暈暉旱晏晨晒晃曝曙昂昏晦膿腑胱胚肛脆肋腔肱胡楓楊椋榛櫛槌樵梯柑杭柊柚椀栂柾榊樫槙楢橘桧棲栖桔杜杷梶杵杖樽櫓橿杓李棉楯榎樺槍柘梱枇樋橇槃栞椰檀樗槻椙彬桶楕樒毬燿燎炬焚灸燭煽煤煉燦灼烙焔熔烹牽牝牡瑶琳琉瑳琢珊瑚瑞珪玖瑛玲畢畦痒痰疹痔癌痺眸眩雉矩磐碇碧硯砥碗碍碩磯砺碓禦祷祐祇祢禄禎秤黍禿稔稗穣稜稀穆窺窄穿竃竪颯站靖妾衿袷袴襖笙筏簾箪竿箆箔笥箭筑篠纂竺箕笈篇筈簸粕糟糊籾糠糞粟繋綸絨絆緋綜紐紘纏絢繍紬綺綾絃縞綬紗舵聯聡聘耽耶蚤蟹蛋蟄蝿蟻蝋蝦蛸螺蝉蛙蛾蛤蛭蛎罫袈裟截哉詢諄讐諌諒讃訊訣詑誼謬詫諏諺誹謂諜註譬轟輔輻輯豹賎貰賑躓蹄蹟跨跪醤醍醐醇麹釦銚鋤鏑鋸錐鍬鋲錫錨釘鑓鋒鎚鉦錆鍾鋏閃悶閤雫霞翰斡鞍鞭鞘鞄靭鞠顛穎頗頌頚餐饗蝕飴駕騨馳騙馴駁駈驢鰻鯛鰯鱒鮭鮪鮎鯵鱈鯖鮫鰹鰍鰐鮒鮨鰭鴎鵬鸚鵡鵜鷺鷲鴨鳶梟塵麒瞑暝坐朔曳洩彗慧嘉兇兜欝劫歎輿巽歪翠黛鼎鹵鹸虔燕嘗殆孟牌覗彪秦雀隼耀夷嚢暢廻欣毅斯匙匡肇麿叢肴斐卿翫於套叛尖壷叡酋鴬赫臥甥瓢琵琶叉舜畠圃丞亮胤疏膏魁馨牒瞥睾巫敦奎翔皓黎赳已棘聚甦剪躾夥鼾祟粁糎粍噸哩浬吋呎梵陀薩菩唖迦牟珈琲檜轡淵伍什萬邁逞燈裡薗鋪嶋峯巌埜舘龍寵聾慾亙躯嶽國脛勁祀祓躇壽躊饅嘔鼈亨侑梧欽煕而掟籠'
};

// Define colors for each subcategory
const subcategoryColors = {
    'kanjiKenteiLevel': {
        'Level 10': '#ff9999',
        'Level 9': '#ffcc99',
        'Level 8': '#ffff99',
        'Level 7': '#ccff99',
        'Level 6': '#99ff99',
        'Level 5': '#99ffcc',
        'Level 4': '#99ffff',
        'Level 3': '#99ccff',
        'Level Pre-2': '#9999ff',
        'Level 2': '#cc99ff',
        'Level Pre-1': '#ff99ff',
        'Level 1': '#ff99cc'
    },
    'grade': {
        'Grade 1': '#ff9999',
        'Grade 2': '#ffcc99',
        'Grade 3': '#ffff99',
        'Grade 4': '#ccff99',
        'Grade 5': '#99ff99',
        'Grade 6': '#99ffcc',
        'JuniorHS+': '#99ffff',
        'Jinmeiyou (regular)': '#99ccff',
        'Jinmeiyou (variant)': '#9999ff'
    },
    'JLPTLevel': {
        'JLPT N5': '#ff9999',
        'JLPT N4': '#ffcc99',
        'JLPT N3': '#ffff99',
        'JLPT N2': '#99ff99',
        'JLPT N1': '#99ffcc'
    },
    'rtk': {
        'RTK1 6th ed.': '#ff9999',
        'RTK1 6th ed. (variant)': '#ffcc99',
        'RTK3 3rd ed.': '#ffff99'
    }
};


let isBound = false;

// Function to create the grid and apply colors to kanji based on subcategory
function createKanjiGrid(kanjiLevels, subcategoryColors) {
    const container = document.getElementById('grid');
    container.innerHTML = ''; // Clear existing grid
    const fragment = document.createDocumentFragment();

    for (const level in kanjiLevels) {
        const kanjis = kanjiLevels[level];
        const color = subcategoryColors[level]; // Get the color for the current level/subcategory

        for (const kanji of kanjis) {
            const kanjiElement = document.createElement('div');
            kanjiElement.classList.add('kanji-item');
            kanjiElement.textContent = kanji;
            kanjiElement.dataset.kanji = kanji;
            kanjiElement.style.backgroundColor = color; // Apply the color based on subcategory
            fragment.appendChild(kanjiElement);
        }
    }

    container.appendChild(fragment);
}

// Function to create a legend dynamically based on selected category
function createLegend(subcategoryColors) {
    const legendContainer = document.getElementById('legend');
    legendContainer.innerHTML = ''; // Clear previous legend

    for (const subcategory in subcategoryColors) {
        const legendItem = document.createElement('div');
        legendItem.classList.add('legend-item');
        legendItem.style.display = 'flex';
        legendItem.style.alignItems = 'center';
        legendItem.style.marginBottom = '0.5em';

        const colorBox = document.createElement('div');
        colorBox.style.backgroundColor = subcategoryColors[subcategory];
        colorBox.style.width = '1.5em';
        colorBox.style.height = '1.5em';
        colorBox.style.marginRight = '0.5em';

        const label = document.createElement('span');
        label.textContent = subcategory;

        legendItem.appendChild(colorBox);
        legendItem.appendChild(label);
        legendContainer.appendChild(legendItem);
    }
}

// Function to display kanji details
function displayKanjiDetails(details) {
    const detailsContainer = document.getElementById('kanji-details');
    detailsContainer.innerHTML = `
    <h3>${details.literal}</h3>
    <p>Meanings: ${details.meanings.join(', ')}</p>
    <p>Kunyomi: ${details.kunyomi.join(', ')}</p>
    <p>Onyomi: ${details.onyomi.join(', ')}</p>
    <p>Stroke Count: ${details.stroke_count}</p>
    <p>JLPT Level: ${details.jlpt}</p>
    <p>Frequency: ${details.freq}</p>
    `;
}


// Function to highlight search results in kanji, meanings, kunyomi, and onyomi, and show match count
function highlightSearchResults(searchValue) {
    const grid = document.getElementById('grid');
    const kanjiItems = grid.querySelectorAll('.kanji-item');
    const matchCountElement = document.getElementById('match-count');
    let firstMatchFound = false;
    let exactMatches = 0;
    let partialMatches = 0;

    // Trim the search value to remove leading/trailing spaces
    searchValue = searchValue.trim();

    // Function to check if searchValue is a single kanji character
    function isSingleKanjiCharacter(value) {
        // This assumes that a kanji character is a single Unicode character
        return value.length === 1 && /\p{Script=Hani}/u.test(value);
    }

    // If search value is empty or contains only spaces, reset the grid and match count
    if (!searchValue) {
        matchCountElement.textContent = 'Matches: 0';
        kanjiItems.forEach(item => {
            const highlight = item.querySelector('.highlight-overlay');
            if (highlight) {
                highlight.remove(); // Remove all highlights if no valid search
            }
        });
        return; // Exit the function if the search is empty or only spaces
    }

    // Helper function to check for exact matches
    function checkExactMatch(details) {
        const matchesKanji = details.literal === searchValue;
        const matchesMeanings = details.meanings.includes(searchValue);
        const matchesKunyomi = details.kunyomi.includes(searchValue);
        const matchesOnyomi = details.onyomi.includes(searchValue);

        return matchesKanji || matchesMeanings || matchesKunyomi || matchesOnyomi;
    }

    // Helper function to check for partial matches
    function checkPartialMatch(details) {
        const matchesKanji = details.literal.includes(searchValue);
        const matchesMeanings = details.meanings.some(meaning => meaning.includes(searchValue));
        const matchesKunyomi = details.kunyomi.some(kunyomi => kunyomi.includes(searchValue));
        const matchesOnyomi = details.onyomi.some(onyomi => onyomi.includes(searchValue));

        return matchesKanji || matchesMeanings || matchesKunyomi || matchesOnyomi;
    }

    // First pass: Look for exact matches
    kanjiItems.forEach(item => {
        const kanji = item.dataset.kanji; // Get the kanji character from dataset
        const kanjiDetails = Kanji.getDetails(kanji);
        const highlight = item.querySelector('.highlight-overlay');

        const matches = checkExactMatch(kanjiDetails);

        if (matches) {
            exactMatches++; // Increment exact match count

            // Add highlight overlay if not already present
            if (!highlight) {
                const overlay = document.createElement('div');
                overlay.className = 'highlight-overlay';
                item.appendChild(overlay);
            }
            if (!firstMatchFound) {
                // Scroll into view only if the search value is a single kanji character
                if (isSingleKanjiCharacter(searchValue)) {
                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                firstMatchFound = true;
            }
        } else {
            if (highlight) {
                highlight.remove(); // Remove highlight if no match
            }
        }
    });

    // Second pass: Look for partial matches if no exact match was found
    if (exactMatches === 0) {
        kanjiItems.forEach(item => {
            const kanji = item.dataset.kanji; // Get the kanji character from dataset
            const kanjiDetails = Kanji.getDetails(kanji);
            const highlight = item.querySelector('.highlight-overlay');

            const matches = checkPartialMatch(kanjiDetails);

            if (matches) {
                partialMatches++; // Increment partial match count

                // Add highlight overlay if not already present
                if (!highlight) {
                    const overlay = document.createElement('div');
                    overlay.className = 'highlight-overlay';
                    item.appendChild(overlay);
                }
                if (!firstMatchFound) {
                    // Scroll into view only if the search value is a single kanji character
                    if (isSingleKanjiCharacter(searchValue)) {
                        item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                    firstMatchFound = true;
                }
            } else {
                if (highlight) {
                    highlight.remove(); // Remove highlight if no match
                }
            }
        });
    }

    // Update the match count display
    const totalMatches = exactMatches > 0 ? exactMatches : partialMatches;
    matchCountElement.textContent = `Matches: ${totalMatches}`;
}



// Event listener for DOM content loaded
// Event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", (event) => {
    const selectElement = document.getElementById('kanji-category');
    const searchInput = document.getElementById('search');
    const onyomiCheckbox = document.getElementById('onyomi-checkbox');
    const kunyomiCheckbox = document.getElementById('kunyomi-checkbox');
    const grid = document.getElementById('grid');
    const detailsElement = document.getElementById('kanji-details');

    let touchStartX, touchStartY;
    const touchThreshold = 10; // pixels

    // Function to handle checkbox selection
    function handleCheckboxChange() {
        if (onyomiCheckbox.checked) {
            kunyomiCheckbox.checked = false;
        } else if (kunyomiCheckbox.checked) {
            onyomiCheckbox.checked = false;
        }
    }

    // Function to load the kanji grid and legend based on selected category
    function loadKanjiGrid() {
        const selectedCategory = selectElement.value;
        // Map the selected category to the corresponding object
        const kanjiData = {
            'kanjiKenteiLevel': kanjiKenteiLevel,
            'grade': grade,
            'JLPTLevel': JLPTLevel,
            'rtk': rtk
        };
        const colorData = subcategoryColors[selectedCategory]; // Get the color data for the selected category
        // Load the kanji grid and legend for the selected category
        createKanjiGrid(kanjiData[selectedCategory], colorData);
        createLegend(colorData);
    }

    // Function to handle kanji selection
    function handleKanjiSelection(target) {
        if (target.classList.contains('kanji-item')) {
            const kanji = target.textContent;
            const kanjiDetails = Kanji.getDetails(kanji);
            if (kanjiDetails) {
                displayKanjiDetails(kanjiDetails);
                detailsElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                alert('Kanji details not found.');
            }
        }
    }

    // Touch event handlers
    grid.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    grid.addEventListener('touchend', function (e) {
        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        const dx = Math.abs(touchEndX - touchStartX);
        const dy = Math.abs(touchEndY - touchStartY);

        if (dx < touchThreshold && dy < touchThreshold) {
            // This was a tap, not a scroll
            handleKanjiSelection(e.target);
        }
    });

    // Click event for non-touch devices
    grid.addEventListener('click', function (e) {
        // Check if the device supports touch events
        if (!('ontouchstart' in window)) {
            handleKanjiSelection(e.target);
        }
    });

    // Initial load for Kanji Kentei
    loadKanjiGrid();

    // Event listener for changing the kanji category
    selectElement.addEventListener('change', loadKanjiGrid);

    // Event listeners for checkboxes
    onyomiCheckbox.addEventListener('change', handleCheckboxChange);
    kunyomiCheckbox.addEventListener('change', handleCheckboxChange);

    // Debounced search functionality
    let searchTimeout;
    searchInput.addEventListener('input', function () {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchValue = this.value.trim();
            highlightSearchResults(searchValue);
        }, 150);
    });
});

// The rest of your code (createKanjiGrid, displayKanjiDetails, highlightSearchResults, createLegend) remains the same


function bindIME() {
    const searchInput = document.getElementById('search');
    wanakana.bind(searchInput, { IMEMode: IMEMode });
    isBound = true; // Update the variable when bound
}

// Unbind the input from the current IMEMode
function unbindIME() {
    const searchInput = document.getElementById('search');
    wanakana.unbind(searchInput);
    isBound = false; // Update the variable when unbound
}

// Function to toggle IMEMode between 'toHiragana' and 'toKatakana'
function toggleIMEMode() {
    IMEMode = IMEMode === 'toHiragana' ? 'toKatakana' : 'toHiragana';
    if (isBound) {
        bindIME(); // Re-bind the input to the new IMEMode
    }
}

// Function to handle checkbox change
function handleCheckboxChange() {
    const isOnyomiChecked = document.getElementById('onyomi-checkbox').checked;
    const isKunyomiChecked = document.getElementById('kunyomi-checkbox').checked;

    if (!isOnyomiChecked && !isKunyomiChecked) {
        if (isBound) {
            unbindIME(); // Unbind IME when both checkboxes are unchecked
        }
    } else {
        // Determine the IMEMode based on the checked checkbox
        if (isOnyomiChecked) {
            IMEMode = 'toKatakana'; // Set IME mode to Katakana
        } else if (isKunyomiChecked) {
            IMEMode = 'toHiragana'; // Set IME mode to Hiragana
        }
        if (isBound) {
            unbindIME(); // Unbind before rebinding with the new IMEMode
        }
        bindIME(); // Bind IME to the new IMEMode
    }
}

// Function to make checkboxes mutually exclusive
function makeCheckboxesMutuallyExclusive(clickedCheckboxId) {
    const checkboxes = ['onyomi-checkbox', 'kunyomi-checkbox'];
    checkboxes.forEach(id => {
        if (id !== clickedCheckboxId) {
            document.getElementById(id).checked = false;
        }
    });
}