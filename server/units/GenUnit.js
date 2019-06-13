'use strict';
// +----------------------------------------------------------------------
// | 项目：InsunAPIServer
// | 版权：Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// | 授权：Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// | 作者: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// +----------------------------------------------------------------------
// | 用途: 自动生成手机、姓名等功能单元
// | 路径: ./units/GenUnit.js
// | 备注： 完成70% 考虑中文名也依照性别生成。
// +----------------------------------------------------------------------
// | 函数: 
// |     1.generateBankAccount()==>自动生成银行卡号
// |     2.generateMoble()==>自动生成随机手机号
// |     3.generateNameCN()==>自动生成中文姓名
// |     4.generateNameEN()==>自动生成英文名字
// |     5.generateNameEN(@prams sex 0-男性 other-女性)==>依据性别自动生成英文名字
// +----------------------------------------------------------------------
module.exports = {

    // +----------------------------------------------------------------------
    // | 使用:6自动生成银行卡号:generateBankAccount() 
    // +----------------------------------------------------------------------
    // | 样例：
    // | var strBankAccount=InsunFUN.generateBankAccount()
    // | console.log(`随机银行卡号==>${strBankAccount}`)
    // | 输出>>随机银行卡号==>6223090530571889739
    // +----------------------------------------------------------------------	

    generateBankAccount: function () {
        var prefixArray = new Array(
            "622202", "622848", "622700", "622262", "621661", "622666", "622622",
            "622556", "622588", "622155", "622689", "622630", "622908", "621717",
            "622323", "622309");
        var i = parseInt(prefixArray.length * Math.random());
        var prefix = prefixArray[i];

        for (var j = 0; j < 13; j++) {
            var prefix = prefix + Math.floor(Math.random() * 10);
        }
        return prefix
    },
    // +----------------------------------------------------------------------
    // | 使用: 
    // |     自动生成身份证编号:generateMoble() 
    // +----------------------------------------------------------------------
    // | 依赖：
    // +----------------------------------------------------------------------
    // | 样例：
    // | var strMoble=InsunFUN.generateMoble()
    // | console.log(`随机移动号码==>${strMoble}`)
    // | 输出>>随机移动号码==>15511893696
    // +----------------------------------------------------------------------

    //自动生成随机手机号
    generateMoble: function () {

        var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189", "155", "156", "186", "185", "134", "136", "139", "150", "151", "152", "157", "158", "159", "182", "183", "188", "153", "180", "181");
        var i = parseInt(prefixArray.length * Math.random());
        var prefix = prefixArray[i];
        for (var j = 0; j < 8; j++) {
            prefix = prefix + Math.floor(Math.random() * 10);
        }
        return prefix
    },
    // +----------------------------------------------------------------------
    // | 使用: 
    // |     自动生成随机姓名(中文):generateNameCN() 
    // +----------------------------------------------------------------------
    // | 依赖：
    // +----------------------------------------------------------------------
    // | 样例：
    // | var strNameCN=InsunFUN.generateNameCN()
    // | console.log(`随机中文姓名==>${strNameCN}`)
    // | 输出>>>随机中文姓名==>卫昊轩  雷欣宜 ...
    // +----------------------------------------------------------------------
    // 
    generateNameCN: function () {
        var familyNames = new Array(
            "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
            "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
            "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
            "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
            "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
            "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
            "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
            "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
            "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
            "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹",
            "姚", "湛", "臧", "计", "戴", "明", "祁", "狄", "伏", "成",
            "贝", "米", "毛", "汪", "邵", "禹", "谈", "谈", "谈", "谈",
            "谈", "谈", "谈", "宋", "茅", "庞", "熊", "纪", "舒", "屈",
            "项", "祝", "董", "梁", "杜", "阮", "蓝", "闵", "席", "季",
            "麻", "强", "贾", "路", "娄", "危", "江", "童", "颜", "郭",
            "梅", "盛", "林", "刁", "钟", "徐", "邱", "骆", "高", "夏",
            "蔡", "田", "樊", "胡", "凌", "霍", "虞", "万", "支", "柯",
            "昝", "管", "卢", "莫", "经", "房", "裘", "缪", "干", "解",
            "应", "宗", "丁", "宣", "贲", "邓", "郁", "单", "杭", "洪",
            "包", "诸", "左", "石", "崔", "吉", "钮", "龚", "程", "嵇",
            "邢", "滑", "裴", "陆", "荣", "翁", "荀", "羊", "於", "惠",
            "甄", "麴", "家", "封", "芮", "羿", "储", "靳", "汲", "邴",
            "糜", "松", "井", "段", "富", "巫", "乌", "焦", "巴", "弓",
            "牧", "隗", "山", "谷", "车", "侯", "宓", "蓬", "全", "郗",
            "班", "仰", "秋", "仲", "伊", "宫", "宁", "仇", "栾", "暴",
            "甘", "钭", "厉", "戎", "祖", "武", "符", "刘", "景", "詹",
            "束", "龙", "叶", "幸", "司", "韶", "郜", "黎", "蓟", "薄",
            "印", "宿", "白", "怀", "蒲", "邰", "从", "鄂", "索", "咸",
            "籍", "赖", "卓", "蔺", "屠", "蒙", "池", "乔", "阴", "郁",
            "胥", "能", "苍", "双", "闻", "莘", "党", "翟", "谭", "贡",
            "劳", "逄", "姬", "申", "扶", "堵", "冉", "宰", "郦", "雍",
            "舄", "璩", "桑", "桂", "濮", "牛", "寿", "通", "边", "扈",
            "燕", "冀", "郏", "浦", "尚", "农", "温", "别", "庄", "晏",
            "柴", "瞿", "阎", "充", "慕", "连", "茹", "习", "宦", "艾",
            "鱼", "容", "向", "古", "易", "慎", "戈", "廖", "庾", "终",
            "暨", "居", "衡", "步", "都", "耿", "满", "弘", "匡", "国",
            "文", "寇", "广", "禄", "阙", "东", "殴", "殳", "沃", "利",
            "蔚", "越", "夔", "隆", "师", "巩", "厍", "聂", "晁", "勾",
            "敖", "融", "冷", "訾", "辛", "阚", "晋", "楚", "闫", "法",
            "汝", "鄢", "涂", "钦", "那", "简", "饶", "空", "曾", "毋",
            "沙", "乜", "养", "鞠", "须", "丰", "巢", "关", "蒯", "相",
            "查", "後", "荆", "红", "游", "竺", "权", "逯", "盖", "益",
            "桓", "公", "归", "海", "岳", "帅", "缑", "亢", "况", "后",
            "有", "琴", "商", "牟", "佘", "佴", "伯", "赏", "墨", "哈",
            "谯", "笪", "年", "爱", "阳", "佟", "言", "福", "西门", "司马",
            "上官", "欧阳", "夏侯", "诸葛", "南宫", "闻人", "东方", "赫连",
            "皇甫", "尉迟", "公羊", "澹台", "公冶", "宗政", "濮阳", "淳于",
            "单于", "太叔", "申屠", "公孙", "仲孙", "轩辕", "令狐", "钟离",
            "宇文", "长孙", "慕容", "鲜于", "闾丘", "司徒", "司空", "呼延",
            "司寇", "第五", "子车", "颛孙", "端木", "巫马", "公西", "漆雕",
            "乐正", "壤驷", "公良", "拓跋", "夹谷", "宰父", "谷梁", "段干",
            "百里", "东郭", "南门", "羊舌", "微生", "梁丘", "左丘", "东门"
        );
        var givenNames = new Array(
            "子璇", "斯淼", "国栋", "夫子", "瑞堂", "甜馨", "敏哲", "尚哲", "国贤", "贺祥",
            "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "泽杨", "文昊",
            "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
            "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建",
            "建林", "亦菲", "俊林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋",
            "涵越", "润丽", "翔飞", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅",
            "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌彤", "明远", "欣宜", "泽远", "欣怡",
            "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕",
            "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵",
            "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌",
            "嘉懿", "煜城", "懿轩", "烨伟", "苑博", "伟泽", "熠彤", "鸿煊", "博涛", "烨霖",
            "烨华", "煜祺", "智宸", "正豪", "昊然", "明杰", "立诚", "立轩", "立辉", "峻熙",
            "弘文", "熠彤", "鸿煊", "烨霖", "哲瀚", "鑫鹏", "致远", "俊驰", "雨泽", "烨磊",
            "晟睿", "天佑", "文昊", "修洁", "黎昕", "远航", "旭尧", "鸿涛", "伟祺", "荣轩",
            "越泽", "浩宇", "瑾瑜", "皓轩", "擎苍", "擎宇", "志泽", "睿渊", "楷瑞", "子轩",
            "弘文", "哲瀚", "雨泽", "鑫磊", "修杰", "伟诚", "建辉", "晋鹏", "天磊", "绍辉",
            "泽洋", "明轩", "健柏", "鹏煊", "昊强", "伟宸", "博超", "君浩", "子骞", "明辉",
            "鹏涛", "炎彬", "鹤轩", "越彬", "风华", "靖琪", "明诚", "高格", "光华", "国源",
            "冠宇", "晗昱", "涵润", "翰飞", "翰海", "昊乾", "浩博", "和安", "弘博", "宏恺",
            "鸿朗", "华奥", "华灿", "嘉慕", "坚秉", "建明", "金鑫", "锦程", "瑾瑜", "晋鹏",
            "经赋", "景同", "靖琪", "君昊", "俊明", "季同", "开济", "凯安", "康成", "乐语",
            "力勤", "良哲", "理群", "茂彦", "敏博", "明达", "朋义", "彭泽", "鹏举", "濮存",
            "溥心", "璞瑜", "浦泽", "奇邃", "祺祥", "荣轩", "锐达", "睿慈", "绍祺", "圣杰",
            "晟睿", "思源", "斯年", "泰宁", "天佑", "同巍", "奕伟", "祺温", "文虹", "向笛",
            "心远", "欣德", "新翰", "兴言", "星阑", "修为", "旭尧", "炫明", "学真", "雪风",
            "雅昶", "阳曦", "烨熠", "英韶", "永贞", "咏德", "宇寰", "雨泽", "玉韵", "越彬",
            "蕴和", "哲彦", "振海", "正志", "子晋", "自怡", "德赫", "君平", "晨涛"
        );
        var i = parseInt(familyNames.length * Math.random());
        var tmpFamilyName = familyNames[i];
        var j = parseInt(givenNames.length * Math.random());
        var tmpGivenName = givenNames[j];
        var fullName = tmpFamilyName += tmpGivenName;
        return fullName

    },
    // +----------------------------------------------------------------------
    // | 使用: 
    // |     自动生成随机姓名(中文):generateNameEN(sex) 
    // +----------------------------------------------------------------------
    // | 依赖：
    // +----------------------------------------------------------------------
    // | 样例：
    // | var strNameEN=InsunFUN.generateNameEN(0)
    // | console.log(`随机英文姓名==>${strNameEN}`)
    // | 输出>>>随机英文姓名==> ...
    // +----------------------------------------------------------------------
    // 
    generateNameEN: function (sex) {
        var givenManNames = new Array(
            "Albert", "Aldrich", "", "Alexander", "Alfred", "Alger", "Algernon", "Allen", "Alston",
            "Alva", "Alvin", "Alvis", "Amos", "Andre", "Andrew", "Andy", "Angelo", "Augus", "Ansel",
            "Antony", "Antoine", "Antonio", "Archer", "Archibald", "Aries", "Arlen", "Armand",
            "Armstrong", "Arno", "Arnold", "Arthur", "Arvin", "Asa", "Ashbur", "Atwood", "Aubrey",
            "August", "Augustine", "Avery", "Bancroft", "Bard", "Barlow", "Barnett", "Baron", "Barret",
            "Barry", "Bartholomew", "Bart", "Barton", "Bartley", "Basil", "Chester", "Christ", "Christian",
            "Christopher", "Clare", "Clarence", "Clark", "Claude", "Clement", "Cleveland", "Cliff",
            "Clifford", "Clyde", "Colbert", "Colby", "Colin", "Conrad", "Corey", "Cornelius", "Cornell",
            "Craig", "Curitis", "Cyril", "Dana", "Daniel", "Darcy", "Darnell", "Darren", "Dave", "David",
            "Dean", "Dempsey", "Dennis", "Derrick", "Devin", "Dick", "Dominic", "Don", "Donahue", "Donald",
            "Douglas", "Drew", "Duke", "Duncan", "Dunn", "Dwight", "Dylan", "Ed", "Eden", "Edgar", "Edmund",
            "Edison", "Edward", "Edwiin", "Egbert", "Eli", "Elijah", "Elliot", "Ellis", "Elmer", "Elroy",
            "Elton", "Elvis", "Emmanuel", "Enoch", "Eric", "Ernest", "Eugene", "Evan", "Everley", "Fabian",
            "Felix", "Ferdinand", "Fitch", "Fitzgerald", "Ford", "Francis", "Frank", "Franklin", "Frederic",
            "Gabriel", "Gale", "Gary", "Gavin", "Gene", "Geoffrey", "Geoff", "George", "Gerald", "Gilbert",
            "Giles", "Glenn", "Goddard", "Godfery", "Gordon", "Greg", "Gregary", "Griffith", "Grover",
            "Gustave", "Guy", "Ogden", "Oliver", "Omar", "Orville", "Osborn", "Oscar", "Osmond", "Oswald",
            "Otis", "Otto", "Owen", "Payne", "Perry", "Pete", "Peter", "Phil", "Philip", "Porter",
            "Prescott", "Primo", "Rachel", "Ralap", "Randolph", "Raymond", "Reg", "Regan", "Reginald",
            "Reuben", "Rex", "Richard", "Robert", "Robin", "Rock", "Rod", "Roderick", "Rodney", "Ron",
            "Ronald", "Rory", "Roy", "Rudolf", "Rupert", "Ryan", "Sam", "Sampson", "Samuel", "Sandy",
            "Saxon", "Scott", "Sean");
        var givenWomanNames = new Array(
            "Alice", "Alma", "Alva", "Amanda", "Amelia", "Amy", "Anastasia", "Andrea", "Angela", "Ann",
            "Anna", "Annabelle", "Antonia", "April", "Arlene", "Astrid", "Athena", "Audrey", "Aurora",
            "Barbara", "Beatrice", "Belinda", "Bella", "Belle", "Bernice", "Bertha", "Beryl", "Bess",
            "Betsy", "Betty", "Beverly", "Blanche", "Bblythe", "Bonnie", "Bridget", "Camille", "Candice",
            "Cara", "Carol", "Caroline", "Catherine", "Cathy", "Cecilia", "Celeste", "Charlotte", "Cherry",
            "Cheryl", "Chloe", "Christine", "Claire", "Clara", "Constance", "Cora", "Coral", "Cornelia", "Crystal",
            "Cynthia", "Daisy", "Dale", "Dana", "Daphne", "Darlene", "Dawn", "Debby", "Deborah", "Deirdre",
            "Delia", "Denise", "Diana", "Dinah", "Dolores", "Dominic", "Donna", "Dora", "Doreen", "Doris",
            "Dorothy", "Eartha", "Eden", "Edith", "Edwina", "Eileen", "Elaine", "Eleanore", "Elizabeth", "Ella"
            , "Elma", "Elsa", "Elsie", "Elva", "Elvira", "Emily", "Emma", "Enid", "Erica", "Erin", "Esther", "Ethel",
            "Eudora", "Eunice", "Evangeline", "Eve", "Evelyn", "Faithe", "Fanny", "Fay", "Flora", "Florence", "Frances",
            "Freda", "Frederica", "Gabrielle", "Gail", "Gemma", "Genevieve", "Georgia", "Geraldine", "Gill",
            "Gladys", "Gloria", "Grace", "Griselda", "Gustave", "Gwendolyn", "Hannah", "Harriet", "Haze", "Hedda",
            "Hedy", "Helen", "Heloise", "Hermosa", "Hilda", "Hilary", "Honey", "Hulda", "Ida", "Ina", "Ingrid",
            "Irene", "Iris", "Irma", "Isabel", "Ivy", "Jacqueline", "Jamie", "Jane", "Janet", "Janice", "Jean",
            "Jennifer", "Jenny", "Jessie", "Jessica", "Jill", "Jo", "Joan", "Joanna", "Joanne", "Jocelyn", "Jodie",
            "Josephine", "Joy", "Joyce", "Judith", "Judy", "Julia", "Julie", "Juliet", "June", "Kama", "Karen",
            "Katherine", "Kay", "Kelly", "Kimberley", "Kitty", "Kristin", "Laura", "Laurel", "Lauren", "Lee",
            "Leila", "Lena", "Leona", "Lesley", "Letitia", "Lilith", "Lillian", "Linda", "Lindsay", "Lisa", "Liz",
            "Lorraine", "Louise", "Lucy", "Lydia", "Lynn", "Mabel", "Madeline");
        if (sex == 0) {
            //男性
            var j = parseInt(givenManNames.length * Math.random());
            return givenManNames[j];
        } else {
            //女性
            var j = parseInt(givenWomanNames.length * Math.random());
            return givenWomanNames[j];
        }
    }



}
