/* ===================== Story Data ======================= */

class Node {
    constructor(title, text, next, endOfParag, choices, imageSrc, isChoice) {
        this.title = title;
        this.text = text;
        this.next = next;
        this.endOfParag = endOfParag;
        this.choices = choices;
        this.imageSrc = imageSrc;
        this.isChoice = isChoice;
    }
}

const O_comingSoon = new Node(
    "屬於你的旅程還沒結束……",
    ["未完待續，請持續關心高齡人士與我們的製作進度。"],
    [],
    0,
    [],
    "./images/comingSoon.png",
    false);

const E_end3_3 = new Node(
    "醫院終老",
    ["直到有一天，你不再呼吸，你的心臟不再跳動。 「三點十五分。心臟停止。」 你心裡明白，早在這之前，你的世界就停止運轉了。",
    "蠟燭熄了。你的願望實現了嗎？ 關於〈病人自主法〉、關於「善終」，社會都還討論得太少。只有走到最後一刻才會明白，這份心願近在咫尺，但也很可能只是奢求。",],
    [], 
    1,
    [],
    "./images/end3.png",
    false);

const E_end3_f_2 = new Node(
    "",
    ["根據衛福部統計，隨著平均壽命逐年增加，國人不健康的存活年數也增加了。而女性的不健康存活年數平均為9.4年，高於男性的7.6年。也就是說，台灣的女性在生命的末期，也得花上9年與病魔苦苦掙扎。",
    "你在病床上插著各種維生器具，彷彿是一條又一條的繩索，將你綑綁於人世間。意識時有時無，連你自己都無法肯定這種狀態，還算不算是「活著」……。",],
    E_end3_3, 
    1,
    [],
    "./images/hospital.png",
    false);

const E_end3_f_1 = new Node(
    "",
    ["由於你不常出門，加上糖尿病的關係，身體退化得很快。在一次的感冒中，你產生了嚴重的併發症，只好請救護車緊急將你送往醫院。",
    "雖然醫療人員透過健保卡的紀錄得知，你已經簽署了醫療決定書，但由於沒有熟識的人能強烈主張你的意願，醫師也不敢隨意決定你的生死，只好決定繼續為你治療。 在實際的醫療現場中，病患是否為「末期」、「不可逆轉之昏迷」等判定，仍取決於醫師的判斷。而大多數醫師秉持拯救病患的觀念，也難以直接宣告病患為末期狀態。",],
    E_end3_f_2, /*end 3 */
    1,
    [],
    "./images/ambulance.png",
    false);

const E_end2_2 = new Node(
    "孤老死",
    ["你陷入了昏迷。 由於你沒有伴侶、沒有子女，也沒有互通有無的朋友，當房東發現時，你已經身亡多時。夏日午後的燠熱空氣，混著刺鼻的悲涼。",
    "蠟燭熄了。你的願望實現了嗎？這是你當初所想像的高齡生活嗎？ 現在想想，當初若能主動一點保持與外界的接觸，或是積極尋求治療，或許結果會不一樣。更重要的是，政府並不容易掌握獨居高齡者的狀況。如果沒有地方層級的首長（如鄰、里長）或公益團體追蹤，很可能會像你一樣成為被社福體系忽略的個案。",],
    [], /*end 2 */
    1,
    [],
    "./images/end2.png",
    false);

const E_end2_ff_1 = new Node(
    "",
    ["你一天比一天衰弱，細瘦的雙腿已承受不住頻繁的移動。有天，你按照慣例前往陽台，打算為盆栽澆水時，突然跌了一跤。",
    "根據國民健康署的統計，高齡者的事故死亡原因，「跌倒」位居第二。65歲以上的長者在一年之間曾經跌倒的比例，高達1/6。 「跌倒」不只可能直接導致高齡者的死亡；即使獲得妥善的治療，後遺症仍會深遠地影響著高齡者的健康，包括移動緩慢、骨質脆弱、恐懼步行等。",
    "你無法自行爬起，也發不出聲音求救，只能任憑意識愈來愈模糊……。"],
    E_end2_2, /*end 2 */
    2,
    [],
    "./images/fall_f.png",
    false);

const E_end2_f_1 = new Node(
    "",
    ["你決定無視種種病徵與醫師和房東的提醒，仍依然故我的過日子……。 「奇怪？我到底吃過飯沒有？」 你開始對生活大小事都不再肯定了……。",
    "不知道這種渾沌不明的日子持續了多久，感覺就像一輩子一樣，無止無盡地與記憶拉扯。",
    "在生命的最後，你徹底失去了自我。忘了自己是誰，也忘了自己為什麼活著。在腦部功能大幅度衰退後，許多生理機能也出現異常。"],
    E_end2_2, /*end 2 */
    2,
    [],
    "./images/loseYourself_f.png",
    false);

const E_end1_f_2 = new Node(
    "安享天年",
    ["蠟燭熄了。你的願望實現了嗎？ 在人生的最後，你仍然努力地在這個世界上留下深刻的足跡，實屬難能可貴。你度過晚年的姿態，不只為其他高齡者帶來啟發，也鼓舞了政府更積極的推動許多高齡者的福利與保障措施，期望每個人都能像你一樣，得償所願。"],
    [], /*end 1 */
    0,
    [],
    "./images/end1_f.png",
    false);

const E_end1_f_1 = new Node(
    "",
    ["有天，你沉沉地睡去。朋友們聯絡不上你，輾轉透過你的保險理專得知你的住家。大家一同前去，才發現你平靜的離開了這個世界。 你在社群網站上留下了這樣一段話： 「人生的風景，我已飽覽無遺。凡我所未踏過的旅途，現在我將展翅翱翔。」",
    "你的朋友們在市政府的協助下，為你舉行了一場小型的溫馨葬禮。 大家朗讀著你的文章，聊著你在生前為他們帶來的歡樂與喜悅，所有人徜徉在回憶中，伴隨悠揚的琴聲，為你的人生謝幕。",],
    E_end1_f_2, 
    1,
    [],
    "./images/rip_f.png",
    false);


const A_group_f_1 = new Node(
    "",
    ["由於這次的經驗，你決定加入醫院的志工團隊，向其他高齡者介紹這個資訊。 當然，重點不是在於強加你的價值觀給其他人，而是讓他們知道，到了人生的終點站時，還有其他的選擇。 其他高齡者與他們的家屬聽著你詳細又耐心的說明，都不得不佩服你「活到老，學到老，做到老」的精神，以及對生命樂觀豁達的態度。",
    "就這樣，你有了能聊生活、談生命的朋友，不分階級，不分老少。大家在死亡面前一律都是平等的，也正因如此，愈到了晚年，就能看淡許多事，對於過往的恩怨，也不再計較……。"],
    E_end1_f_1, /*end 1 */
    1,
    [],
    "./images/group.png",
    false);

const A_rejVolunteer_f_1 = new Node(
    "",
    ["要不要再考慮看看呢？一週花個一到兩天，不會很累的。喜歡獨處、思考的你一樣能享有自己舒適的空間。 而且，當志工不只是幫助他人，也是讓你跟其他人建立人際關係的好機會。",],
    [A_group_f_1, E_end3_f_1], /*end 3 */
    0,
    ["好吧，我加入。", "我對於這些社交行為一向敬謝不敏。"],
    "./images/pass_f.png",
    true);

const A_PRAA_f_2 = new Node(
    "",
    ["你倒是沒經歷什麼掙扎，在保險理專／朋友的見證下，順利地完成簽署手續。 走出諮詢間，你在牆上看見一份正在招募志工的簡章。"],
    [A_rejVolunteer_f_1, A_group_f_1],
    0,
    ["我自己也有病在身，這種勞動還是算了吧。", "我偶爾也需要走出家門，與人群保持接觸。"],
    "./images/pass_f.png",
    true);


const A_PRAA_f_1 = new Node(
    "",
    ["你在與保臉理專／朋友聊天的過程聽說，現在政府通過〈病人自主權利法〉，讓病患有自主選擇是否接受醫療的權利。只要在健康食簽署「醫療決定書」，在面臨重症、末期、失能等狀況時，臨床醫師可依照決定書內容，決定是否執行維生醫療（如心肺復甦術、維生儀器、輸血、注射點滴、抗生素、插鼻胃管、裝葉克膜等）。",
    "但在簽決定書之前，必須先經過一次要價2000元、健保不補助的諮商。而且，由於進行諮商的醫療人員不足，你聽說有人排了兩個月的諮商門診，都還沒等到。 雖然有失望，但你終於等到諮商的機會了！",
    "「一般來說，要說服子女是最困難的，因為子女嘛，總是會想要盡孝到最後一刻。但往往也是這樣，讓長輩受許多無端的痛苦。」 你了解到，原來子女的愛有時候也是沉重的枷鎖，牽絆著年邁的靈魂而不得自由。",],
    A_PRAA_f_2,
    2,
    [],
    "./images/PRAA_f.png",
    false);

const A_reject_f_3 = new Node(
    "",
    ["在〈老人福利法的規範下〉，65歲以上的高齡者，每年都可以免費接受地方政府辦理的基礎檢康檢查。 這天，你收到健檢報告後，驚訝地發現你居然被診斷出罹患了糖尿病！",
    "2020年，台灣65歲以上民眾高血糖的盛行率，男性與女性分別為27%和28.5%。而且隨著年齡增加，糖尿病患者比例也逐漸升高，且女性患者多於男性。"],
    A_PRAA_f_1,
    1,
    [],
    "./images/diabetes_f.png",
    false);

const A_reject_f_2 = new Node(
    "",
    ["為了避免有更多的詐騙受害者，你決定加入反詐騙公益團體，提供高齡者諮詢服務，並與政府的關懷小組合作，打造高齡者的社交安全防護網。 不過與此同時，你身體的老化徵兆愈來愈明顯……"],
    A_reject_f_3,
    0,
    [],
    "./images/suit_f.png",
    false);

const A_reject_f_1 = new Node(
    "",
    ["豐富的人生閱歷讓你看人特別透徹，因此你約了George聊聊，想直接經手展覽。 「我在畫廊有認識的人，我直接聯繫很快的！」 雖然他這麼說，不過你也很堅持，不想假手他人。不料，George突然臉色一轉，不耐煩地說： 「你怎麼這麼固執、這麼囉嗦！不相信我就算了，我是看得起你，才邀請你一起辦展覽的耶！」",
    "你十分錯愕，但也因此看清了George這個人。 在你們不歡而散後，George就再也沒出現了。之後，你陸續聽到一些風聲，說George好像投資失敗，欠了一大筆債！",
    "幸好，當初你沒聽他的，否則就淪為詐騙集團專門下手的「肥羊」了！"],
    A_reject_f_2,
    2,
    [],
    "./images/georgeAngry.png",
    false);

const A_dementia = new Node(
    "",
    ["你去醫院做了檢查，才發現自己的健忘症狀，很可能是失智症的前兆。 這簡直是晴天霹靂！接下來該怎麼辦呢？",],
    [O_comingSoon, E_end2_f_1],
    0,
    ["我應該趁早規劃，安排自己住進照護機構。", "這應該只是搞錯了吧，只是有點健忘，不用這樣大驚小怪的。"],
    "./images/dementia.png",
    true);

const A_pride_f_2 = new Node(
    "",
    ["某天你向房東繳納房租時，他注意到你的異樣。 「我記得你以前都很準時交呀，怎麼最近常常要我提醒呢？還好嗎？」"],
    A_dementia,
    0,
    [],
    "./images/forget_f.png",
    false);

const A_pride_f_1 = new Node(
    "",
    ["其實，學經歷愈高、成就愈高的高齡者，出於證明自我價值的渴望，往往容易受到言語上的誘惑而淪為關係或金融詐騙的受害者。 也因此，受到詐騙的經驗往往會重挫他們的自尊心，讓他們失去對人的信任，開始與人群疏遠。",
    "因為這次的受騙經歷，你對於交友開始恐懼，也對於出現在人群中感到羞愧，漸漸就不去上社區課程了。少了社交生活，你不像從前一樣充滿自信、開朗，而你的健康也隨著抑鬱的情緒每況愈下。"],
    A_pride_f_2,
    1,
    [],
    "./images/pride_f.png",
    false);

const A_share_f_1 = new Node(
    "",
    ["你在社群網站上寫下了這次事件的始末，以及你深刻的反省。 靠著你長期累積的社群關注度，你的文章獲得廣大的回響，許多人看到你的文章，也分享了同樣的經驗。 大家不再避諱談論原本令人羞愧的往事，漸漸的，高齡詐欺的議題在網路社群上形成關注。",
    "缺乏陪伴的高齡者常常因為寂寞或出於證明自我價值的渴望，往往容易受到言語上的誘惑而淪為關係或金融詐騙的受害者。 不過，你明白了真正的價值無需他人肯定，只要你持續創作與付出，終究能找到你在社會上新的定位！",
    "同時，你為了更有效的規劃你的退休金，選擇投了穩健的健康險，為老後必然衰退的生理機能做準備。"],
    A_PRAA_f_1,
    2,
    [],
    "./images/share_f.png",
    false);

const A_accept_f_1 = new Node(
    "",
    ["你很快就將十萬元匯給George，也拿了好幾幅畫作給他。 之後，你很積極地問他展覽進度如何，不過，George好像有些閃爍其詞……。",
    "兩週後，George就沒再來班上了。你聯絡不上他，心焦如焚。最後，你才聽說，George好像投資失敗，欠了一大筆債！ 「想不到……看起來這麼風光的人呀……。」 你不禁倒抽了一口氣，難道……George說要辦展覽，都是騙人的？ 你感到渾身無力……。"],
    [A_share_f_1, A_pride_f_1],
    1,
    ["我應該透過網路分享這次的經驗，讓其他高齡者更有警覺心，才不會受騙。", "太丟臉了，沒想到自己也會像新聞裡的那些老人一樣被網友騙！我絕對不會跟其他人提起這件事。"],
    "./images/fraud.png",
    true);

const A_club_f_2 = new Node(
    "",
    ["許多成員也深受他的吸引，每次上課時都主動與他攀談；不過，他卻似乎對你情有獨鍾……。 「我看得出來，你的氣質跟大家都不一樣，很優雅！」他總是這樣對你說。 起初，你覺得他不過是在奉承你，不過，這對他又有什麼好處呢？你認真、投入，而且聰明又有才華，這樣的讚美並非過譽，所以你也欣然接受。",
    "一天，George把你叫到一旁，表示想和你合開一個畫展。想不到，在這個年齡還能享有這種光鮮亮麗的時刻，你聽了很心動，因此馬上就詢問他相關的細節，並希望自己也能為這個展覽出一份力。 「我們一個人出十萬元，來租場地、找經銷商，和印文宣。最好還出版一本展覽專刊呢！我們要證明高齡者也能很有『taste』！」"],
    [A_accept_f_1, A_reject_f_1],
    1,
    ["好呀！我們一定要讓這個展覽成功。", "呃……再讓我考慮看看好了……。"],
    "./images/george.png",
    true);



const A_club_f_1 = new Node(
    "",
    ["在里長的大力宣傳下，你報名了社區開設的繪畫班和舞蹈班。 由於現在各縣市都依據〈老人福利法〉，提供社區長者課程的補助，因此，相較於一般的才藝教室，高齡者們都能用便宜的價格滿足終身學習和維持社交生活的需求。",
    "你在社團中表現活躍，並積極擔任幹部、主辦成果發表會，其他成員都相當欽佩你。 你也認識了許多朋友，其中最引起你注意的，當屬George了。 George幽默、風趣，而且，他今年才50歲。聽說，他投資股票賺了一大筆錢，所以提早退休享受人生。", ],
    A_club_f_2,
    1,
    [],
    "./images/club.png",
    false);

const A_getOld_f_4 = new Node(
    "",
    ["起初，你和Indah比手畫腳，Indah則常常一頭霧水，並感到很抱歉。不過，在你們長期的相處下，漸漸建立默契。現在，你已經十分依賴Indah的照料，也把他視如己出，與他分享年輕時的打拼過程，也聽他傾訴心聲。", 
    "在聊天的過程中，你知道Indah的其他姊妹必須負擔高額的仲介費，因此，你決定宣揚政府的「直接聘僱」政策，透過網路分享Indah和你的經歷，鼓勵大眾繞過仲介直接雇用移工，幫助Indah的姊妹們享有更合理的待遇，雇主也能省去多餘的費用。"],
    E_end3_f_1,
    1,
    [],
    "./images/goodCare_f.png",
    false);

const A_getOld_f_3 = new Node(
    "",
    ["你最後還是透過長照2.0計畫申請居家服務員，讓居服員定期到你家中服務。不過「論件計酬」的服務方式讓你只能精打細算，不敢請居服員做太多事，以要付的費用過高。 居服員為你準備一餐飯，加上飯後清理，得花費310元；清掃、洗衣則是每30分鐘200元。", 
    "不過，定期為你服務的居服員阿美細心又熱情的態度，讓你對他很有好感。也因此每當阿美要離開時，都讓你依依不捨。你這時才發現，原來你十分害怕寂寞。 不過，礙於計價規定，你也不好意思多留阿美。 由於阿美並不能長時間陪在你身邊，因此當你突然心肌梗塞時，沒有人在第一時間發現。"],
    E_end2_2,
    1,
    [],
    "./images/foodCare_f.png",
    false);

const A_getOld_f_2 = new Node(
    "",
    ["你說得沒錯！許多高齡者總擔心，老了會給身邊的人添麻煩。其實，如果政府有良善的措施，不僅能改善照顧者須承受的負擔，也能使高齡者的價值和尊嚴受到保障。 雖然你的體力大不如前，但你認為，你仍可以對世界有所貢獻，因此，你決定聘雇看護協助你的生活起居。", 
    "你透過長照機構找到願意到你家中服務的外籍看護Indah。由於Indah才來台灣一年，他的中文並不是很流利。 這讓你很困擾，因為你體力已經大不如前，不想花多餘的力氣在溝通上。"],
    [A_getOld_f_3, A_getOld_f_4],
    1,
    ["合不來也沒辦法，Indah應該也很辛苦，還是辭退他好了。", "我想再試試看，說不定能找到合適的溝通模式。"],
    "./images/care_f.png",
    true);

const A_getOld_f_1 = new Node(
    "",
    ["於是，你始終一個人靜靜度日，既不理會外在世界的紛擾，也不主動與他人接觸。就像現代版的隱士一樣。 最近，你發現身體狀況大不如前，一個人煮飯、做家務都變得十分吃力。", ],
    [A_getOld_f_2, E_end2_ff_1],
    0,
    ["所有人都會老。老化並不可恥，是時候依賴他人了。", "如果我的身體無法再負荷日常生活，這也是命，就順其自然吧。"],
    "./images/getOld_f.png",
    true);

const A_shareI_f_7 = new Node(
    "",
    ["理專後來為你投保了糖尿病專屬的醫療險，保費雖然稍高，但如果血糖控制得宜，還有提供保費折抵呢。果然，誠實為上策。 不過，你的病情始終是個隱憂，你很害怕到最後動也動不了，只能用鼻胃管進食，那樣一點人生樂趣也沒有！",],
    A_PRAA_f_1,
    0,
    [],
    "./images/worry_f.png",
    false);

const A_shareI_f_6 = new Node(
    "",
    ["不久後，你因為關節炎住院，理專前來慰問你，並且想協助你處理保險給付的問題。",
    "「誒，阿姨，你有糖尿病嗎？」 由於你隱瞞了病情，保險公司拒絕理賠你的住院費用。理專也愛莫能助。 你只怨自己因小失大、悔不當初。"],
    A_shareI_f_7,
    1,
    [],
    "./images/hospital_f.png",
    false);

const A_shareI_f_5 = new Node(
    "",
    ["你決定瞞著不說，讓理專直接幫你投保。感覺真是省事多了。"],
    A_shareI_f_6,
    0,
    [],
    "./images/cici_f.png",
    false);

const A_shareI_f_4 = new Node(
    "",
    ["你去醫院檢查後驚訝地發現，你居然被診斷出罹患了糖尿病！ 2020年，台灣65歲以上民眾高血糖的盛行率，男性與女性分別為27%和28.5%。而且隨著年齡增加，糖尿病患者比例也逐漸升高，且女性患者多於男性。",
    "之前聽理專說，如果健檢結果有問題的話，可能要繳比較高的保費，嚴重的話，還可能拒絕讓你投保。"],
    [A_shareI_f_7, A_shareI_f_5],
    1,
    ["我應該誠實告訴理專我的身體狀況，這樣他才能幫我選擇最合適的保單。", "如果保費因此提高的話就划不來了！我不說他也不會知道吧。"],
    "./images/diabetes_f.png",
    true);

const A_shareI_f_3 = new Node(
    "",
    ["這也怪不得，畢竟有前車之鑑，是該小心一些。 你查了網路，發現「只要被保險人超過60歲，不論壽險或健康險，一律須要體檢」，這下，你總算相信理專說的話了。"],
    A_shareI_f_4,
    0,
    [],
    "./images/share_f.png",
    false);

const A_shareI_f_2 = new Node(
    "",
    ["你決定重新考慮購買保險，透過網友的介紹，一位保險專員親自到你家中與你說明。不過他表示，因為你已經滿65歲，需要進行健檢，公司才能根據你的健康狀況，設定你該繳多少保費。"],
    [A_shareI_f_7, A_shareI_f_3],
    0,
    ["年紀大了，趁機做個詳細的檢查也不錯。", "我還是有點懷疑……。"],
    "./images/shareI.png",
    true);

const A_shareI_f_1 = new Node(
    "",
    ["你在社群網站上寫下了這次事件的始末，以及你深刻的反省。 靠著你長期累積的社群關注度，你的文章獲得廣大的回響，許多人看到你的文章，也分享了同樣的經驗。",
    "大家不再避諱談論原本令人羞愧的往事，漸漸的，高齡詐欺的議題在網路社群上形成關注，迫使政府正視這個問題，開始草擬〈反金融剝削法〉。 許多金融機構也開始推動「白話契約範本」，讓精神與理解力下降的高齡者能更容易的選購合適的金融商品。"],
    A_shareI_f_2,
    1,
    [],
    "./images/share_f.png",
    false);

const A_appeal_f_1 = new Node(
    "",
    ["你將社群網站上的對話紀錄截圖給保險公司，證明你並沒有同意對方幫你投保，因此這項保險契約在法律上並不成立。 多虧你的機智，才化解了一次詐騙危機。"],
    [A_shareI_f_1, A_pride_f_1],
    0,
    ["我應該透過網路分享這次的經驗，讓其他高齡者更有警覺心，才不會受騙。", "太丟臉了，沒想到自己也會像新聞裡的那些老人一樣被網友騙！我絕對不會跟其他人提起這件事。"],
    "./images/insuranceGuy.png",
    true);

const A_ensureI_f_3 = new Node(
    "",
    ["後來，你透過網路才知道， ……目前人身保險（壽險、健康險）的最低承保年齡，最高只到60或65歲，因此許多高齡者買不到商業保險。某些保險公司便推出以「不用體檢，一定承保」為訴求的「老人保單」。但需要注意的是，儘管號稱「一定保」，卻不一定「理賠」。如果當初投的是「意外險」，那麼只要並非發生事故，就拿不到保險理賠金。 真令人遺憾，就當作是花錢買教訓吧。"],
    [A_shareI_f_1, A_pride_f_1],
    0,
    ["我應該透過網路分享這次的經驗，讓其他高齡者更有警覺心，才不會受騙。", "太丟臉了，沒想到自己也會像新聞裡的那些老人一樣被網友騙！我絕對不會跟其他人提起這件事。"],
    "./images/fraud2_f.png",
    true);

const A_ensureI_f_2 = new Node(
    "",
    ["不料，你拿著保單向保險公司申請理賠時，保險公司卻百般刁難，要你證明你確實是因為發生意外才需要進行手術，否則一般的疾病是不會理賠的。 你馬上透過網路聯絡朋友，想請他幫忙和保險理專說明，但他遲遲沒有回覆……。原來，這就是所謂的「金融詐騙」。"],
    A_ensureI_f_3,
    0,
    [],
    "./images/fraud2_f.png",
    false);

const A_ensureI_f_1 = new Node(
    "",
    ["上週，你因為在用餐時出了一點小意外，牙齒斷了。牙醫表示，手術不涵蓋在健保內，需要自費。真慶幸當初有投保，未雨綢繆果然是對的。"],
    A_ensureI_f_2,
    0,
    [],
    "./images/toothache_f.png",
    false);

const A_forceI_f_1 = new Node(
    "",
    ["「那不然你先把資料告訴我，我幫你先保留這個機會！」 對方的積極讓你些不知所措，只好順著對方的話，提供了你的基本資料。", ],
    [A_ensureI_f_1, A_appeal_f_1],
    0,
    ["算了，保就保了吧。", "我得向保險公司申訴！"],
    "./images/insuranceGuy.png",
    true);

const A_searchI_f_4 = new Node(
    "",
    ["對方盛情難卻，你也正需要一份保險來保障你的高齡生活，於是便答應了投保，也開始按期繳交保費。能透過網路認識到這麼可靠的朋友，真是太好了。"],
    A_ensureI_f_1,
    0,
    [],
    "./images/share_f.png",
    false);

const A_searchI_f_3 = new Node(
    "",
    ["「那麼我就直接幫你投保囉！"],
    A_searchI_f_4,
    0,
    [],
    "./images/insuranceGuy.png",
    false);

const A_searchI_f_2 = new Node(
    "",
    ["「您大可放心，我們的保費非常實惠，換算下來，每天只要一個便當的錢！再說，我相信你也認為，能獲得保障才是最重要的。」"],
    [A_forceI_f_1, A_ensureI_f_1],
    0,
    ["「這……。」", "「這樣啊，那就麻煩您幫忙了。」"],
    "./images/insuranceGuy.png",
    true);

const A_searchI_f_1 = new Node(
    "",
    ["「我推薦的這家意外險，無論什麼年齡都可以投保，也不用做事前的體檢，對於你這樣的獨居高齡者而言，再適合不過了。」"],
    [A_searchI_f_2, A_searchI_f_3],
    0,
    ["「條件這麼好唷……那會不會很貴呀？」", "「太棒了！我之前打聽過的保險都說，60歲以上就一定要做體檢才能保，我都很擔心自己不符合標準，保費會很高呢。」"],
    "./images/insuranceGuy.png",
    true);

const A_NetFriend_f_3 = new Node(
    "",
    ["「你真幽默！不過身為高齡獨居者，確實存在很多安全風險。如果你願意，我能幫你介紹合適的保險，這樣出意外的話，就不用擔心錢的問題了。」", ],
    [A_forceI_f_1, A_searchI_f_1],
    0,
    ["「不好意思，但我需要再考慮一下。」", "「真的嗎？我早就覺得該買個保險了！請務必介紹相關資訊給我。」"],
    "./images/insuranceGuy.png",
    true);

const A_NetFriend_f_4 = new Node(
    "",
    ["「我告訴你，千萬不能心存僥倖！上次一個太太也是這樣『鐵齒』，結果有一天遇到人家酒駕，被撞傷了。因為他沒有保意外險，那些開刀、住院的錢零零總總也要二十幾萬耶！」 二十幾萬！對於已經退休、又沒有其他家人的你而言，也是不小的負擔。經過三思，你決定先探聽看看，到時候再作決定也不遲。", ],
    A_searchI_f_1,
    0,
    [],
    "./images/insuranceGuy.png",
    false);

const A_HI_f_2 = new Node(
    "",
    ["在〈老人福利法的規範下〉，65歲以上的高齡者，每年都可以免費接受地方政府辦理的基礎檢康檢查。 這天，你收到健檢報告後，驚訝地發現你居然被診斷出罹患了糖尿病！",
    "2020年，台灣65歲以上民眾高血糖的盛行率，男性與女性分別為27%和28.5%。而且隨著年齡增加，糖尿病患者比例也逐漸升高，且女性患者多於男性。",],
    A_PRAA_f_1,
    1,
    [],
    "./images/diabetes_f.png",
    false);

const A_HI_f_1 = new Node(
    "",
    ["其實，你早就從網路上搜尋到：「……目前市面上的老人健康險多半帶有壽險的功能，好處是可還本，設定滿幾周年就幾付一筆生存保險金；若因故身亡，同樣可以領到身故保險金。」 對方看你年紀雖長，吸收的新知的能力與熱情卻不亞於他，只能對你甘拜下風。"],
    A_HI_f_2,
    0,
    [],
    "./images/insuranceGuy.png",
    false);

const A_NetFriend_f_2 = new Node(
    "",
    ["「你說得沒錯，一個人也能過得很好，只要買對保險，人生下半場一樣很有保障！」", ],
    [A_HI_f_1, A_NetFriend_f_4],
    0,
    ["「是呀，我有投保健康險，可以每年領，確實很有保障。」", "「保險？手續很麻煩吧？我待在家也遇不到什麼事……」"],
    "./images/insuranceGuy.png",
    true);

const A_NetFriend_f_1 = new Node(
    "",
    ["「嗨！我追蹤你的頁面很久了，我真的很喜歡你的文字風格，字裡行間充滿了對於人生的成熟體悟。」 哇，他很崇拜你呢！得好好回覆他才行。", ],
    [A_NetFriend_f_2, A_NetFriend_f_3],
    0,
    ["「謝謝你。我希望分享獨居生活的美好，讓大家明白一個人住其實沒這麼糟。」", "「哈哈，不瞞你說，其實那則「打斷手骨顛倒勇」的文章，是我不小心跌倒後有感而發寫的。」"],
    "./images/insuranceGuy.png",
    true);

const A_internet_f_3 = new Node(
    "",
    ["嗯……你很有警覺心呢。不過現代人愈來愈常透過社群網站分享自己的生活，形同讓個人資訊赤裸裸地被攤在名為「網路」的公共空間中。 不過，如果你既不想透過網路與人交流，又足不出戶的話，與這個世界的連結將會愈來愈少……。", ],
    [A_getOld_f_1, A_NetFriend_f_1],
    0,
    ["人生本是一個人的旅程，其他人充其量只是過客，無須在意。", "唉……好吧，就看看他葫蘆裡賣什麼膏藥好了。"],
    "./images/netFriend.png",
    true);

const A_internet_f_2 = new Node(
    "",
    ["喔……我懂了，這些網站真是人性化，簡直是專門為高齡者量身打造的社群平台，不只能透過語音操作，還有人聲讀報功能呢！ 「登愣——」原來是好友通知。看來有人透過這個平台，想與你聊聊。", ],
    [A_internet_f_3, A_NetFriend_f_1],
    0,
    ["看起來是個很奇怪的人……我還是別搭理他為妙。", "「相逢何必曾相識？」像我這樣的獨居老人，應該多多建立人際連結才是。"],
    "./images/netFriend.png",
    true);

const A_internet_f_1 = new Node(
    "",
    ["說得沒錯！根據行政院統計，2018年65歲以上的長者網路使用率高達42%。隨著熟悉網路環境的青壯年人口開始步入中老年，高齡者的網路使用率只會持續增長。 不過，由於視力退化，使用手機螢幕閱讀對你而言變得愈來愈吃力……。", ],
    [O_comingSoon, A_internet_f_2],
    0,
    ["或許我偶爾也該去戶外走走，你知道的，像個老人散個步那樣。", "有聲音、能夠互動的影片與網站愈來愈多，即使視力大不如前，我也能獲得毫不遜於以往的娛樂體驗。"],
    "./images/share_f.png",
    true);

const A_retire_f_3 = new Node(
    "",
    ["何不說說你打算如何度過你的退休生涯呢？", ],
    [A_club_f_1, A_internet_f_1],
    0,
    ["我打算參加長青俱樂部，培養休閒興趣之餘，順便結交志同道合的朋友。", "我希望能一個人待在屬於我的空間裡，舒適地進行閱讀與思考。"],
    "./images/retire_f.png",
    true);

const A_alone_f_1 = new Node(
    "",
    ["嗯……是不錯，頗有哲學家與藝術家的風範…… 不過，隨著年紀增長、健康不如以往，你確定在沒有家人與朋友的照顧與關懷下，能夠確保自身的安全與生活品質嗎？"],
    [A_retire_f_3, A_internet_f_1],
    0,
    ["或許我該重新考慮一下關於退休的生活安排……。", "不必擔心，透過網路世界，我也能接觸到新知，並維持人際連結。"],
    "./images/alone_f.png",
    true);

const A_retire_f_2 = new Node(
    "",
    ["何不說說你打算如何度過你的退休生涯呢？", ],
    [A_club_f_1, A_alone_f_1],
    0,
    ["我打算參加長青俱樂部，培養休閒興趣之餘，順便結交志同道合的朋友。", "我希望能一個人待在屬於我的空間裡，舒適地進行閱讀與思考。"],
    "./images/retire_f.png",
    true);

const A_retire_f_1 = new Node(
    "",
    ["很好，看來你為了這天，已經準備數十年之久了。相信你對於接下來的人生一定有完善的規劃，對吧？"],
    A_retire_f_2,
    0,
    [],
    "./images/retire_f.png",
    false);

const A_work_f_6 = new Node(
    "",
    ["不過，這樣的文章在日漸緊張的世代對立氛圍中，難以獲得共鳴，反而引來許多網友攻訐怒罵，甚至有些同仁也不希望你擅自代表他們的立場。你深受打擊，還是離開了工作崗位。 不過，往好處想，你可以開始享受退休生活了。", ],
    [A_getOld_f_1, O_comingSoon],
    0,
    ["人類真讓我失望，我已經沒興趣與他們來往了。", "說的也是，反正人生是自己的，我的人生下半場也要過得精采才行。"],
    "./images/enjou_f.png",
    true);

const A_work_f_5 = new Node(
    "",
    ["你向媒體投書，寫道： 「……社會上對於高齡就業者還是有很多不理解的地方。其實，除了通過勞動獲得成就感外，高齡者也希望能在經濟上獨立，讓生活更有安全感。」", ],
    A_work_f_6,
    0,
    [],
    "./images/phone_f.png",
    false);

const A_retire_f_4 = new Node(
    "",
    ["其他員工們為你辦了退休歡送會，祝福你的人生邁入下一階段。而這次的體驗，也讓你開始思考所謂「高齡生活」的意義。 就這樣，你開始經營網路社群，分享你的體悟。 在為數不多、卻句句精心的回應中，你注意到了一則留言：", ],
    A_NetFriend_f_1,
    0,
    [],
    "./images/getRetire_f.png",
    false);

const A_work_f_4 = new Node(
    "",
    ["今天上班時，你看到阿榮愁眉苦臉的，好像有什麼煩惱。 「我兒子要我別再來上班了……他說這樣讓他很沒面子，好像沒給我錢、養不起我似的……。」 「我女兒也是，還說我是在跟年輕人搶飯碗吃呢！如果太閒的話，就去當志工。」阿芬也吐著苦水。", ],
    [A_retire_f_4, A_work_f_5],
    0,
    ["原來社會是這樣看待我們的……還是辭職退休好了。", "這些都是誤解，我應該試著澄清。"],
    "./images/conplain_f.png",
    true);

const A_work_f_3 = new Node(
    "",
    ["有些人覺得，選擇繼續投入就業市場的高齡者，都是迫於經濟壓力；事實上，隨著國人平均壽命增加，愈來愈多高齡者想延長自己的工作年限，為的是繼續保持充實感與成就感。 目前勞動部致力推動「職務再設計」，也就是依照高齡工作者的身心理條件，設計新的作業方式，並提供輔具，以使高齡就業者能再度提供勞力，填補未來的人力缺口。而政府也會提供企業補助以及專人諮詢協助，協助勞雇雙方都能各取所需。", ],
    A_work_f_4,
    0,
    [],
    "./images/suit_f.png",
    false);

const A_work_f_2 = new Node(
    "",
    ["戴上紅帽子，你也是麥當勞家族的成員了！ 欸欸，先等一下，這可不是在業配喔。是因為麥當勞洞悉到台灣勞動人口的變化趨勢，才會出此策略。 台灣的工作年齡人口（15-64歲者）在2015年後開始下降，於是麥當勞在2016年開始推動「多元化人力池」方案，將中高齡工作人口納入招募對象，以填補其人力缺口。", 
    "70歲的阿玉就是透過「銀髮人才資源中心」與麥當勞的合作，才會到這裡來上班的。 他在銀髮中心經過了初步的就職訓練，雖然起初有些緊張，不過很快就能進入狀況，幫客人點起餐來也駕輕就熟。"],
    A_work_f_3,
    0,
    [],
    "./images/fastfood.png",
    false);

const A_work_f_1 = new Node(
    "",
    ["由於〈勞動基準法〉第54條明文規定，雇主得強制年滿65歲勞工退休。許多公司認為高齡者已不具勞動價值，加上〈就業保險法〉強制65歲以上的勞工不再納保，因此就業市場上長期存在「年齡歧視」。 雖然〈中高齡者及高齡者就業促進法〉放寬讓65歲以上的高齡勞工可與雇主簽訂定期契約，增加勞雇雙方彈性。但保險公司對於高齡就業者的意外險，不是拒絕就是會提高保費，降低企業聘雇高齡者的動力。", 
    "你覓職多時，發現只有像速食店、大賣場等店內的服務、銷售人員，有高齡者的人力需求。"],
    [A_retire_f_1, A_work_f_2],
    1,
    ["這完全不符合我的專業，還是退休好了。", "聊勝於無，我願意去當麥當勞的點餐服務生。"],
    "./images/hardToWork.png",
    true);

const M_rent_f = new Node(
    "",
    ["現今的老人獨居宅數，比起十年前增加了一倍。 而在台灣的房屋租賃市場中，高齡者經常是不受房東歡迎的租客，原因不外乎是擔心高齡者維持環境整潔不易，以及不可避免的——孤獨死。因此，就算你有誠意繳租金，可能也租不到房子住……。",
    "幸好，看你外表整潔、打扮也很得體，加上經濟情況無虞，房東才答應把房子繼續租給你。 準備好開始享受你的退休人生了嗎：", ],
    [A_work_f_1, A_retire_f_1],
    1,
    ["嗯…65歲聽起來，也沒有很老，我不能繼續工作嗎？", "太好了，辛苦了大半輩子，終於可以享受人生了！"],
    "./images/rent_f.png",
    true);

const M_home_f = new Node(
    "",
    ["現今的老人獨居宅數，比起十年前增加了一倍。 更令人擔憂的是，根據衛服部統計，目前有大約七成的高齡者所住的房子，都沒有電梯。"],
    O_comingSoon,
    0,
    [],
    "./images/home_f.png",
    false);

const M_rent_m = new Node(
    "",
    ["現今的老人獨居宅數，比起十年前增加了一倍。 而在台灣的房屋租賃市場中，高齡者經常是不受房東歡迎的租客，原因不外乎是擔心高齡者維持環境整潔不易，以及不可避免的——孤獨死。因此，就算你有誠意繳租金，可能也租不到房子住……。",
    "除了年齡門檻，就連性別也都可能影響租不租得到房，多數房東還是寧願租給女性長輩，因為認為男性較沒辦法好好維護環境整潔。", ],
    O_comingSoon,
    1,
    [],
    "./images/rent_m.png",
    false);

const M_home_m = new Node(
    "",
    ["現今的老人獨居宅數，比起十年前增加了一倍。 更令人擔憂的是，根據衛服部統計，目前有大約七成的高齡者所住的房子，都沒有電梯。"],
    O_comingSoon,
    0,
    [],
    "./images/home_m.png",
    false);

const M_noChild_m = new Node(
    "",
    ["對於身為男性、而且有伴侶的你而言，這並不是太大的問題。 在傳統的家務分工上，家中的女性成員常成為無酬的居家照護者。即使沒有孩子，相信你的伴侶也能提供你無微不至的照顧。",
    "不過，你也不希望自己成為另一半的重擔，然後任憑晚年艱難歲月磨蝕你們的愛情與親情，對嗎？ 為了確保你們都能過上幸福的高齡生活，就從現在開始規劃吧。" ],
    O_comingSoon,
    1,
    [],
    "./images/noChild.png",
    false);

const M_noChild_f = new Node(
    "",
    ["少了兒女，你的負擔更為沉重了。 這不只是舊經濟上而言。在傳統的家務分工上，家中的女性成員常成為無酬的居家照護者。如果你沒有其他孩子，那這份重擔，肯定會落在你身上了。",
    "不過，如果雙方能互相扶持、在彼此逐漸改變的身心狀態中尋求關係的平衡，那麼你的伴侶將會是與你共享人生最後光陰的知己。 為了實現你的願望，你必須從現在開始規劃你的老後生活。"],
    O_comingSoon,
    1,
    [],
    "./images/noChild.png",
    false);

const M_haveChild = new Node(
    "",
    ["2020年，台灣人口自然增加首度出現負值。新生兒數跌破17萬人，創下史上最低的16萬5,249人，人口正式進入負成長時代。 在少子化的現代社會中，有子女毋寧是幸運的！",
    "過去一個家庭通常會有兩到三位手足，彼此分擔父母親的撫養工作。然而現今每個家庭平均生育不到一位子女，雖然能使每位子女獲得更多的成長資源，不過也導致子女的撫養負擔加重。", 
    "有鑑於此，你是否想與你的孩子同住呢？"],
    [O_comingSoon, O_comingSoon],
    2,
    ["我不希望讓下一輩太顧慮我們，我們不會強求與孩子一起住，這樣也能減少摩擦。", "現在房價這麼高，孩子跟我們住能省下一大筆開銷，何樂不為？"],
    "./images/haveChild.png",
    true);

const M_single_f = new Node(
    "「塞翁失馬，焉知非福？」",
    ["基於傳統性別角色規範、以及不同性別的高齡者實際的健康狀況落差，男性高齡者通常需要仰賴配偶與女兒照顧。 雖然你在人生最後的階段少了另一半的陪伴，不過負擔相對也減輕了，所以……未嘗不是件值得慶幸的事呢？",
    "實際上，你很快就會發現，你並不孤單。 2020年，被政府列冊關懷的獨居老人有4.2萬。一般經濟狀況的獨居者有3.08萬，其中女性就有1.96萬人，佔了63.5%。不過，在中低收入的獨居老人之中，女性的比例卻比男性還低。", 
    "從這點來看，女性高齡者通常能比男性高齡者享有較寬裕的老年生活。 通往優雅的老後，就從現在規劃起吧。",
    "何不先檢視一下你目前的居住環境呢？ 你目前的住家是：自宅／租屋"],
    [M_home_f, M_rent_f],
    3,
    ["自宅", "租屋"],
    "./images/single_f.png",
    true);

const M_couple_f = new Node(
    "「執子之手，與子偕老。」",
    ["與子偕老，談何容易？ 根據內政部於2020年的統計，台灣人平均壽命為81.3歲，其中男性78.1歲、女性84.7歲。女性較男性多出6歲。女性喪偶比率為11.5%，遠高於男性的2.6%。 如果你的伴侶是異性，那麼，平均壽命較另一半更長的女性，身為伴侶往後的主要照顧者似乎是你注定的命運。",
    "你有子女嗎：有／無"],
    [M_haveChild, M_noChild_f],
    1,
    ["有", "無"],
    "./images/couple.png",
    true);

const M_single_m = new Node(
    "「紅柿上樹頭，羅漢腳仔目屎流……」",
    ["隨著男性未婚率愈來愈高，在邁入高齡的此刻，你身旁沒有枕邊人能共度人生晚年，也將會成為社會上普遍的景象。 一方面，你到了這個年紀，仍可以過得比其他人更自由自在、無拘無束的放浪生活；不過，這也意味著當你在身體逐漸衰老之際，已無人可依靠，因此，趁早做好老後生活規劃，便成了你的當務之急。",
    "2021年，65歲以上的女性人口為216,4826人，比男性多出約3%。而女性的平均壽命普遍而言都較男性更長。 這對於大多數男性高齡者而言，反而是值得慶幸的。因為在日漸衰老的暮年時期，還有人能夠在一旁照料你，還有什麼比這個更讓人感到安慰的呢？",
    "實際上，你很快就會發現，你並不孤單。 2020年，被政府列冊關懷的獨居老人有4.2萬。一般經濟狀況的獨居者有3.08萬，其中男性1.1萬，僅佔36.5%。不過，中低收入的獨居老人則有約1.12萬，其中男性0.6萬人，佔了53.5%。 顯然，身為男性高齡者的你，對於財務規劃有必要從長計議。",
    "何不先檢視一下你目前的居住環境呢？ 你目前的住家是：自宅／租屋"],
    [M_home_m, M_rent_m],
    3,
    ["自宅", "租屋"],
    "./images/single_m.png",
    true);

const M_couple_m = new Node(
    "「執子之手，與子偕老。」",
    ["與子偕老，談何容易？ 根據內政部於2020年的統計，台灣人平均壽命為81.3歲，其中男性78.1歲、女性84.7歲。而男性的喪偶比率為2.6%，遠低於女性的11.5%。 也就是說，如果你的伴侶是異性，你或許是幸運的——離開總是比送行來得容易些。",
    "你有子女嗎：有／無"],
    [M_haveChild, M_noChild_m],
    1,
    ["有", "無"],
    "./images/couple.png",
    true);

const M_female = new Node(
    "「像我這樣的一個女子……」",
    ["女性高齡者是台灣未來社會中，不可忽視的族群。 2021年，65歲以上的女性人口為216,4826人，比男性多出約3%，而女性的平均壽命普遍而言都較男性更長。",
    "你有配偶或伴侶嗎：有／無"],
    [M_couple_f, M_single_f],
    1,
    ["有", "無"],
    "./images/female.png",
    true);

const M_male = new Node(
    "「當男人年老時……」",
    ["2021年，65歲以上的女性人口為216,4826人，比男性多出約3%。 而女性的平均壽命普遍而言都較男性更長。 這對於大多數男性高齡者而言，反而是值得慶幸的。因為在日漸衰老的暮年時期，還有人能夠在一旁照料你，還有什麼比這個更讓人感到安慰的呢？",
    "你有配偶或伴侶嗎：有／無"],
    [M_couple_m, M_single_m],
    1,
    ["有", "無"],
    "./images/male.png",
    true);


const M_gender = new Node(
    "",
    ["你的生理性別是：男／女"],
    [M_male, M_female],
    0,
    ["男", "女"],
    "./images/start.png",
    true);

const M_start = new Node(
    "",
    ["「祝你生日快樂，祝你生日快樂……」", 
    "蠟燭點亮了，今天是你的65歲生日。 按照世界衛生組織（WHO）的定義，從今天開始，你就正式成為「高齡人口」的一份子了。",
    "65歲，是人生臻於純熟圓滿的階段。 不過，隨著退休、身體健康下滑、子女成年離家，你的生活環境與人際關係，也將迎來重大的改變與挑戰……。 你對著蛋糕上搖曳的燭光，許下了邁入65歲後的第一個心願：請讓我能有尊嚴的活到最後。"], 
    M_gender,
    2,
    [],
    "./images/start.png", false);

var endings = [O_comingSoon, E_end1_f_2, E_end2_2, E_end3_3]

/* ===================== Story Data ======================= */

var isStart = false;
var isOver = false;

var image = document.querySelector(".image");
var gameTitle = document.querySelector(".game-title");
var group = document.querySelector(".group-title");
var description = document.querySelector(".description");
var choiceList = document.querySelector(".choice-list");
var choiceA = document.querySelector(".button-left");
var choiceB = document.querySelector(".button-right");
var startButton = document.querySelector(".start");
var restartButton = document.querySelector(".restart");
var paragraph = document.querySelector(".paragraph");
var paragTitle = document.querySelector(".parag-title");
var playerCondition = document.querySelector(".player-condition");
var conditionContent = document.querySelector(".condition-content");
var currentNode = "";
var textCount = 0;
var conditionCount = 0;

window.addEventListener("keydown", nextParagraph);
choiceA.addEventListener("click", handleChoice);
choiceB.addEventListener("click", handleChoice);
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);

window.onload = function(){
    setInterval("toggleSound()",100);
}

function toggleSound() {
       var music = document.getElementById("bgm");//獲取ID  
           
       if (music.paused) { //判讀是否播放  
           music.paused=false;
           music.play(); //沒有就播放 
       }    
}

function startGame() {
    isStart = true;
    gameTitle.style.display = "none";
    group.style.display = "none";
    startButton.style.display = "none";
    description.style.display = "block";
    choiceList.style.display = "block";
    choiceList.style.visibility = "hidden";
    currentNode = M_start;
    insertParagraph(currentNode.text[textCount]);
    image.src = currentNode.imageSrc;

}

function restartGame() {
    isOver = false;
    gameTitle.style.display = "block";
    startButton.style.display = "block";
    restartButton.style.display = "none";
    conditionContent.innerHTML = "";
    description.style.display = "none";
    choiceList.style.display = "none";
    choiceList.style.visibility = "visible";
}

function handleChoice(obj) {
    target = obj.target.innerText;
    console.log(target);
    if(target == currentNode.choices[0]) {
        jumpToNextSection(0);
    }
    else if(target == currentNode.choices[1]) {
        jumpToNextSection(1);
    }
}

function insertParagraph(str) {
    paragTitle.textContent = currentNode.title;
    arr = str.split(' ');
    for(var i = 0; i < arr.length; i++) {
        p = document.createElement("p");
        p.innerHTML = arr[i];
        paragraph.append(p);
    }
}

function jumpToNextSection(i) {
    switch (i){
        case -1:
            textCount = -1;
            currentNode = currentNode.next;
            if(currentNode.endOfParag == 0) {
                paragraph.innerHTML = "";
                textCount = textCount + 1;
                insertParagraph(currentNode.text[textCount]);
                image.src = currentNode.imageSrc;
                if (currentNode == O_comingSoon) {
                    isStart = false;
                    isOver = true;
                }
            }
            break;
        default:
            switch (currentNode.choices[i]){
                case "男":
                    playerCondition.style.visibility = "visible";
                    conditionContent.innerHTML = "男　";
                    conditionCount = conditionCount + 1;
                    break;
                case "女":
                    playerCondition.style.visibility = "visible";
                    conditionContent.innerHTML = "女　";
                    conditionCount = conditionCount + 1;
                    break;
                case "有":
                    if(conditionCount == 1) conditionContent.innerHTML = conditionContent.innerHTML + "/　有配偶　";
                    else if(conditionCount == 2) conditionContent.innerHTML = conditionContent.innerHTML + "/　有子女　";
                    conditionCount = conditionCount + 1;
                    break;
                case "無":
                    if(conditionCount == 1) conditionContent.innerHTML = conditionContent.innerHTML + "/　單身　";
                    else if(conditionCount == 2) conditionContent.innerHTML = conditionContent.innerHTML + "/　無子女　";
                    conditionCount = conditionCount + 1;
                    break;
                case "自宅":
                    conditionContent.innerHTML = conditionContent.innerHTML + "/　自宅";
                    conditionCount = conditionCount + 1;
                    break;
                case "租屋":
                    conditionContent.innerHTML = conditionContent.innerHTML + "/　租屋";
                    conditionCount = conditionCount + 1;
                    break;
                default:
                    break;
            }
            paragraph.innerHTML = "";
            textCount = 0;
            currentNode = currentNode.next[i];
            insertParagraph(currentNode.text[textCount]);
            image.src = currentNode.imageSrc;
            choiceListHidden();
            break;
    }
}

function choiceListVisible() {
    choiceList.style.visibility = "visible";
}

function choiceListHidden() {
    choiceList.style.visibility = "hidden";
}



function nextParagraph(e) {
    console.log(isStart);
    console.log(currentNode);
    console.log(textCount);
    if(e.keyCode == 13 && (textCount <= currentNode.endOfParag) && isStart) {
        if(textCount < currentNode.endOfParag) {
            paragraph.innerHTML = "";
            textCount = textCount + 1;
            insertParagraph(currentNode.text[textCount]);
            image.src = currentNode.imageSrc;
        }
        if (endings.find((e) => currentNode == e) >= 0) {
            console.log('Ending');
            isStart = false;
            isOver = true;
            restartButton.style.display = 'block';
        }
        if(textCount >= currentNode.endOfParag)  {
            if (currentNode.isChoice) {
                choiceListVisible();
                choiceA.textContent = currentNode.choices[0];
                choiceB.textContent = currentNode.choices[1];
            }
            else{
                jumpToNextSection(-1);
            }
        }
    }
}