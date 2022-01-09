/* ===================== Fake Data ======================= */

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

const M_rent_f = new Node(
    "",
    ["現今的老人獨居宅數，比起十年前增加了一倍。 而在台灣的房屋租賃市場中，高齡者經常是不受房東歡迎的租客，原因不外乎是擔心高齡者維持環境整潔不易，以及不可避免的——孤獨死。因此，就算你有誠意繳租金，可能也租不到房子住……。",
    "幸好，看你外表整潔、打扮也很得體，加上經濟情況無虞，房東才答應把房子繼續租給你。 準備好開始享受你的退休人生了嗎：", ],
    [O_comingSoon, O_comingSoon],
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

/* ===================== Fake Data ======================= */

var isStart = false;
var isOver = false;

var image = document.querySelector(".image");
var gameTitle = document.querySelector(".game-title");
var description = document.querySelector(".description");
var choiceList = document.querySelector(".choice-list");
var choiceA = document.querySelector(".button-left");
var choiceB = document.querySelector(".button-right");
var startButton = document.querySelector(".start");
var paragraph = document.querySelector(".paragraph");
var paragTitle = document.querySelector(".parag-title");
var currentNode = "";
var textCount = 0;

window.addEventListener("keydown", nextParagraph);
choiceA.addEventListener("click", handleChoice);
choiceB.addEventListener("click", handleChoice);
startButton.addEventListener("click", startGame);

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
    choiceList.style.display = "block";
    choiceList.style.visibility = "hidden";
    currentNode = M_start;
    insertParagraph(currentNode.text[textCount]);
    image.src = currentNode.imageSrc;

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
        if (currentNode == O_comingSoon) {
            isStart = false;
            isOver = true;
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