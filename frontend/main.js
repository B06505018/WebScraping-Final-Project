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
    "./images/hospital_f.png",
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

const A_reject_f_2 = new Node(
    "",
    ["為了避免有更多的詐騙受害者，你決定加入反詐騙公益團體，提供高齡者諮詢服務，並與政府的關懷小組合作，打造高齡者的社交安全防護網。 不過與此同時，你身體的老化徵兆愈來愈明顯，在〈老人福利法的規範下〉，65歲以上的高齡者，每年都可以免費接受地方政府辦理的基礎檢康檢查。 這天，你收到健檢報告後，驚訝地發現你居然被診斷出罹患了糖尿病！",
    "2020年，台灣65歲以上民眾高血糖的盛行率，男性與女性分別為27%和28.5%。而且隨著年齡增加，糖尿病患者比例也逐漸升高，且女性患者多於男性。"],
    A_PRAA_f_1,
    1,
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

const A_retire_f_3 = new Node(
    "",
    ["何不說說你打算如何度過你的退休生涯呢？", ],
    [A_club_f_1, O_comingSoon],
    0,
    ["我打算參加長青俱樂部，培養休閒興趣之餘，順便結交志同道合的朋友。", "我希望能一個人待在屬於我的空間裡，舒適地進行閱讀與思考。"],
    "./images/retire_f.png",
    true);

const A_alone_f_1 = new Node(
    "",
    ["嗯……是不錯，頗有哲學家與藝術家的風範…… 不過，隨著年紀增長、健康不如以往，你確定在沒有家人與朋友的照顧與關懷下，能夠確保自身的安全與生活品質嗎？"],
    [A_retire_f_3, O_comingSoon],
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

const M_rent_f = new Node(
    "",
    ["現今的老人獨居宅數，比起十年前增加了一倍。 而在台灣的房屋租賃市場中，高齡者經常是不受房東歡迎的租客，原因不外乎是擔心高齡者維持環境整潔不易，以及不可避免的——孤獨死。因此，就算你有誠意繳租金，可能也租不到房子住……。",
    "幸好，看你外表整潔、打扮也很得體，加上經濟情況無虞，房東才答應把房子繼續租給你。 準備好開始享受你的退休人生了嗎：", ],
    [O_comingSoon, A_retire_f_1],
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
var description = document.querySelector(".description");
var choiceList = document.querySelector(".choice-list");
var choiceA = document.querySelector(".button-left");
var choiceB = document.querySelector(".button-right");
var startButton = document.querySelector(".start");
var restartButton = document.querySelector(".restart");
var paragraph = document.querySelector(".paragraph");
var paragTitle = document.querySelector(".parag-title");
var currentNode = "";
var textCount = 0;

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
    startButton.style.display = "none";
    description.style.display = "block";
    choiceList.style.display = "inline-block";
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