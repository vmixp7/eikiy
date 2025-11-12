const helmet = require('koa-helmet');
const http = require('http');
const koa = require('koa');
const cors = require('koa2-cors');
const app = new koa();
const Router = require('koa-router');
const router = new Router();
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const sanitizeHtml = require('sanitize-html');
const RateLimit = require('koa2-ratelimit').RateLimit;
const AWS = require('aws-sdk');

const ses = new AWS.SES({ region: 'ap-southeast-1' });

require("./start")().then(() => {
  app.proxy = true;
  console.log('Da Lue start');

  app.use(helmet());
  app.use(bodyParser());
  app.use(json());

  const limiter = RateLimit.middleware({
    interval: { min: 1 },
    max: 1000,
  });

  app.use(limiter);

  app.use(cors({
    'origin': '*',
    methods: ['GET', 'POST'],
    'credentials': true,
    'preflightContinue': false,
    'maxAge': 5
  }));




  router.get('/api/daLue', async (ctx) => {
    console.log('get daLue');
    ctx.status = 200;

    const jsonData = {
      "tw": {
        "goto_home": "首頁",
        "goto_01": "關於大略",
        "goto_02": "最新消息",
        "goto_03": "發展項目",
        "goto_04": "加入大略",
        "goto_05": "聯絡我們",
        "goto_06": "投資人關係",
        "goto_07": "企業永續",
        "new_title": "最新消息",
        "service_title": "發展項目",
        "tab01": "所有項目",
        "tab02": "飯店",
        "tab03": "旅遊",
        "tab04": "綠能",
        "tab05": "其他",
        "join_us_tw": "加入我們",
        "label_name": "姓名",
        "label_phone": "聯絡方式",
        "label_email": "電子信箱",
        "label_content": "內容",
        "placeholder": "請輸入內容",
        "submit": "讓我們保持聯繫",
        "about": {
          "slogan": "<span>永續生活</span><br>的起點",
          "slogan_en": "THE BEGINNING<br> OF ETERNITY",
          "title": "大略國際控股有限公司",
          "text": "<p>自飯店事業起家，我們秉持專業經營與卓越服務，逐步拓展至各綠色領域。</p><p>面對快速變化的全球產業與永續發展的趨勢，我們導入綠色思維、創新科技與跨界合作，不僅提供舒適的居住體驗，更打造融合永續、文化與生活的全方位平台。</p><p>以「永續經營、創新突破、共榮共享」為核心精神，大略國際控股致力成為引領產業轉型、創造社會價值的標竿企業。</p>"
        },
        "news": [
          {
            "id": "1",
            "date": "發佈日期：2024/09/24",
            "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/news/news_01.jpg",
            "title": "<span>鴻海與大盤不同調...開高後翻黑挫近1%<br>分析師：200元仍有守</span>",
            "text": "<p>以深耕飯店事業起家,秉持專業經營與卓越服務的精神,持續在相關產業中累積深厚基礎。</p><p>面對全球產業的快速變化及社會對永續發展的高度重視,大略國際控股正積極擘劃未來,從傳統飯店事業出發,逐步導入綠色思維、創新科技與跨界合作。</p><p>不僅是提供舒適的居住體驗,更是打造一個融合永續、文化與生活的全方位平台。</p><p>未來,我們將以「永續經營、創新突破、共榮共享」為核心精神,探索更多可能性,延伸至智慧旅遊、綠色建築、乃至於新型態城市生活的發展。</p><p>公司將持續以長遠視野與前瞻思維,致力成為引領產業轉型、創造社會價值的標竿企業。</p>"
          },
          {
            "id": "2",
            "date": "發佈日期：2024/09/24",
            "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/news/news_02.jpg",
            "title": "<span>鴻海與大盤不同調...開高後翻黑挫近1%<br>分析師：200元仍有守</span>",
            "text": "<p>以深耕飯店事業起家,秉持專業經營與卓越服務的精神,持續在相關產業中累積深厚基礎。</p><p>面對全球產業的快速變化及社會對永續發展的高度重視,大略國際控股正積極擘劃未來,從傳統飯店事業出發,逐步導入綠色思維、創新科技與跨界合作。</p><p>不僅是提供舒適的居住體驗,更是打造一個融合永續、文化與生活的全方位平台。</p><p>未來,我們將以「永續經營、創新突破、共榮共享」為核心精神,探索更多可能性,延伸至智慧旅遊、綠色建築、乃至於新型態城市生活的發展。</p><p>公司將持續以長遠視野與前瞻思維,致力成為引領產業轉型、創造社會價值的標竿企業。</p>"
          },
          {
            "id": "3",
            "date": "發佈日期：2024/09/24",
            "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/news/news_03.jpg",
            "title": "<span>鴻海與大盤不同調...開高後翻黑挫近1%<br>分析師：200元仍有守</span>",
            "text": "<p>以深耕飯店事業起家,秉持專業經營與卓越服務的精神,持續在相關產業中累積深厚基礎。</p><p>面對全球產業的快速變化及社會對永續發展的高度重視,大略國際控股正積極擘劃未來,從傳統飯店事業出發,逐步導入綠色思維、創新科技與跨界合作。</p><p>不僅是提供舒適的居住體驗,更是打造一個融合永續、文化與生活的全方位平台。</p><p>未來,我們將以「永續經營、創新突破、共榮共享」為核心精神,探索更多可能性,延伸至智慧旅遊、綠色建築、乃至於新型態城市生活的發展。</p><p>公司將持續以長遠視野與前瞻思維,致力成為引領產業轉型、創造社會價值的標竿企業。</p>"
          },
          {
            "id": "4",
            "date": "發佈日期：2024/09/24",
            "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/news/news_03.jpg",
            "title": "<span>鴻海與大盤不同調...開高後翻黑挫近1%<br>分析師：200元仍有守</span>",
            "text": "<p>以深耕飯店事業起家,秉持專業經營與卓越服務的精神,持續在相關產業中累積深厚基礎。</p><p>面對全球產業的快速變化及社會對永續發展的高度重視,大略國際控股正積極擘劃未來,從傳統飯店事業出發,逐步導入綠色思維、創新科技與跨界合作。</p><p>不僅是提供舒適的居住體驗,更是打造一個融合永續、文化與生活的全方位平台。</p><p>未來,我們將以「永續經營、創新突破、共榮共享」為核心精神,探索更多可能性,延伸至智慧旅遊、綠色建築、乃至於新型態城市生活的發展。</p><p>公司將持續以長遠視野與前瞻思維,致力成為引領產業轉型、創造社會價值的標竿企業。</p>"
          }
        ],
        "service": {
          "hotel": [
            {
              "id": "1",
              "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/service/ser_a01.jpg",
              "title": "飯店",
              "text": "<p>以深耕飯店事業起家,秉持專業經營與卓越服務的精神,持續在相關產業中累積深厚基礎。</p><p>面對全球產業的快速變化及社會對永續發展的高度重視,大略國際控股正積極擘劃未來,從傳統飯店事業出發,逐步導入綠色思維、創新科技與跨界合作。</p><p>不僅是提供舒適的居住體驗,更是打造一個融合永續、文化與生活的全方位平台。</p><p>未來,我們將以「永續經營、創新突破、共榮共享」為核心精神,探索更多可能性,延伸至智慧旅遊、綠色建築、乃至於新型態城市生活的發展。</p><p>公司將持續以長遠視野與前瞻思維,致力成為引領產業轉型、創造社會價值的標竿企業。</p>"
            },
            {
              "id": "2",
              "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/service/ser_a01.jpg",
              "title": "飯店",
              "text": "<p>以深耕飯店事業起家,秉持專業經營與卓越服務的精神,持續在相關產業中累積深厚基礎。</p><p>面對全球產業的快速變化及社會對永續發展的高度重視,大略國際控股正積極擘劃未來,從傳統飯店事業出發,逐步導入綠色思維、創新科技與跨界合作。</p><p>不僅是提供舒適的居住體驗,更是打造一個融合永續、文化與生活的全方位平台。</p><p>未來,我們將以「永續經營、創新突破、共榮共享」為核心精神,探索更多可能性,延伸至智慧旅遊、綠色建築、乃至於新型態城市生活的發展。</p><p>公司將持續以長遠視野與前瞻思維,致力成為引領產業轉型、創造社會價值的標竿企業。</p>"
            }
          ],
          "travel": [
            {
              "id": "1",
              "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/service/ser_a02.jpg",
              "title": "旅遊",
              "text": "<p>以深耕飯店事業起家,秉持專業經營與卓越服務的精神,持續在相關產業中累積深厚基礎。</p><p>面對全球產業的快速變化及社會對永續發展的高度重視,大略國際控股正積極擘劃未來,從傳統飯店事業出發,逐步導入綠色思維、創新科技與跨界合作。</p><p>不僅是提供舒適的居住體驗,更是打造一個融合永續、文化與生活的全方位平台。</p><p>未來,我們將以「永續經營、創新突破、共榮共享」為核心精神,探索更多可能性,延伸至智慧旅遊、綠色建築、乃至於新型態城市生活的發展。</p><p>公司將持續以長遠視野與前瞻思維,致力成為引領產業轉型、創造社會價值的標竿企業。</p>"
            },
            {
              "id": "2",
              "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/service/ser_a02.jpg",
              "link": "/hotel/01.html",
              "title": "旅遊",
              "text": "<p>以深耕飯店事業起家,秉持專業經營與卓越服務的精神,持續在相關產業中累積深厚基礎。</p><p>面對全球產業的快速變化及社會對永續發展的高度重視,大略國際控股正積極擘劃未來,從傳統飯店事業出發,逐步導入綠色思維、創新科技與跨界合作。</p><p>不僅是提供舒適的居住體驗,更是打造一個融合永續、文化與生活的全方位平台。</p><p>未來,我們將以「永續經營、創新突破、共榮共享」為核心精神,探索更多可能性,延伸至智慧旅遊、綠色建築、乃至於新型態城市生活的發展。</p><p>公司將持續以長遠視野與前瞻思維,致力成為引領產業轉型、創造社會價值的標竿企業。</p>"
            }
          ],
          "esg": [
            {
              "id": "1",
              "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/service/ser_a03.jpg",
              "title": "綠能",
              "text": "<p>以深耕飯店事業起家,秉持專業經營與卓越服務的精神,持續在相關產業中累積深厚基礎。</p><p>面對全球產業的快速變化及社會對永續發展的高度重視,大略國際控股正積極擘劃未來,從傳統飯店事業出發,逐步導入綠色思維、創新科技與跨界合作。</p><p>不僅是提供舒適的居住體驗,更是打造一個融合永續、文化與生活的全方位平台。</p><p>未來,我們將以「永續經營、創新突破、共榮共享」為核心精神,探索更多可能性,延伸至智慧旅遊、綠色建築、乃至於新型態城市生活的發展。</p><p>公司將持續以長遠視野與前瞻思維,致力成為引領產業轉型、創造社會價值的標竿企業。</p>"
            },
            {
              "id": "2",
              "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/service/ser_a03.jpg",
              "title": "綠能",
              "text": "<p>以深耕飯店事業起家,秉持專業經營與卓越服務的精神,持續在相關產業中累積深厚基礎。</p><p>面對全球產業的快速變化及社會對永續發展的高度重視,大略國際控股正積極擘劃未來,從傳統飯店事業出發,逐步導入綠色思維、創新科技與跨界合作。</p><p>不僅是提供舒適的居住體驗,更是打造一個融合永續、文化與生活的全方位平台。</p><p>未來,我們將以「永續經營、創新突破、共榮共享」為核心精神,探索更多可能性,延伸至智慧旅遊、綠色建築、乃至於新型態城市生活的發展。</p><p>公司將持續以長遠視野與前瞻思維,致力成為引領產業轉型、創造社會價值的標竿企業。</p>"
            }
          ],
          "other": [
            {
              "id": "1",
              "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/service/ser_a04.jpg",
              "title": "其他",
              "text": "<p>以深耕飯店事業起家,秉持專業經營與卓越服務的精神,持續在相關產業中累積深厚基礎。</p><p>面對全球產業的快速變化及社會對永續發展的高度重視,大略國際控股正積極擘劃未來,從傳統飯店事業出發,逐步導入綠色思維、創新科技與跨界合作。</p><p>不僅是提供舒適的居住體驗,更是打造一個融合永續、文化與生活的全方位平台。</p><p>未來,我們將以「永續經營、創新突破、共榮共享」為核心精神,探索更多可能性,延伸至智慧旅遊、綠色建築、乃至於新型態城市生活的發展。</p><p>公司將持續以長遠視野與前瞻思維,致力成為引領產業轉型、創造社會價值的標竿企業。</p>"
            },
            {
              "id": "2",
              "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/service/ser_a04.jpg",
              "title": "其他",
              "text": "<p>以深耕飯店事業起家,秉持專業經營與卓越服務的精神,持續在相關產業中累積深厚基礎。</p><p>面對全球產業的快速變化及社會對永續發展的高度重視,大略國際控股正積極擘劃未來,從傳統飯店事業出發,逐步導入綠色思維、創新科技與跨界合作。</p><p>不僅是提供舒適的居住體驗,更是打造一個融合永續、文化與生活的全方位平台。</p><p>未來,我們將以「永續經營、創新突破、共榮共享」為核心精神,探索更多可能性,延伸至智慧旅遊、綠色建築、乃至於新型態城市生活的發展。</p><p>公司將持續以長遠視野與前瞻思維,致力成為引領產業轉型、創造社會價值的標竿企業。</p>"
            }
          ]
        },
        "footer": {
          "text": "&copy; 2025 Da-Lue Co Ltd. All Rights Reserved."
        },
        "investor_relations": {
          "main_title": "投資人關係",
          "table1_title": "投資人關係(IR)團隊",
          "table1_th_01": "財務長/IR Director",
          "table1_td_01": "Kristen Jaymes Stewart",
          "table1_th_02": "IRO",
          "table1_td_02": "陳xx、張xx",
          "table1_th_03": "Email",
          "table1_td_03": "kristen@aaa.com.tw",
          "table1_th_04": "電話",
          "table1_td_04": "+886-2-1111-1111 分機：8888",
          "table2_title": "股務機構",
          "table2_th_01": "大略xxxxxxxx股份有限公司股務代理部",
          "table2_td_01": "地址：新北市xxxxqwqwqw",
          "table2_td_02": "電話：+886-1123-1231",
          "table2_td_03": "網址：http://www.wewe.com.tw",
        },
        "corporate_sustainability": {
          "main_title": "企業永續",
          "text1_title": "永續組織運作",
          "text1_content": "<p>大略國際為落實企業永續經營，訂定《大略國際永續發展實務守則》，設置「企業永續委員會」，為董事會轄下之功能性委員會，督促金控及子公司實踐永續發展，每年定期向董事會提報永續行動執行成果及重大計畫，並監督管理集團對於經濟、環境和人群的衝擊。企業永續委員會委員由金控及子公司董事擔任，經金控董事會決議委任之，委員會人數不得少於三人，且至少需有一名本公司獨立董事參與，本屆委員會成員共計四名。委員會權責包含永續發展之政策、制度、策略方向及年度計畫審議，以及其他重大事項之核定，永續發展政策及制度經委員會同意後，應提報董事會審議。企業永續委員會每年至少召開兩次會議，必要時得隨時召開臨時會議。</p><p>「企業永續辦公室」為大略國際永續發展推動專責單位，由永續長負責督導各項永續議題，並於總經理轄下設有六大企業永續功能小組，分別為永續治理、責任金融、智慧服務、員工關懷、綠色營運、社會共融小組；定期舉辦永續執行管理季會，由總經理主持，永續長及六大功能小組組長( 副總經理級以上) 呈報永續議題管理情況、追蹤年度計畫進度。此外，亦設立氣候任務小組負責氣候議題推動。每半年向企業永續委員會報告，每年至少向董事會報告一次，以落實永續發展計畫及受董事會督導。</p><p>2024 年ESG 委員會共召開兩次會議，包括2025 年度ESG 專案規劃、永續資訊內控規劃、企業客戶低碳轉型、普惠金融落實、智慧財產管理計畫、利害關係人溝通情形等審議。企業永續報告書、年度永續成果及重大計畫均呈報金控董事會核議通過。</p><p>大略國際貫徹認真、創新的思維，延續「認真永續，綠色生活」的永續主張，攜手策略同盟及客戶等各界夥伴，透過結盟的方式將永續精神導入金融生態圈，並於核心業務落實責任投融資來讓日常生活的作為發揮綜效。大略金透過提供完善的金融服務及嚴謹的資金把關以實踐永續精神，與策略夥伴及客戶創造共享價值，邁向共榮社會與綠色生活的美好願景。</p><p>掌握最新永續趨勢並持續與國際接軌，大略檢視企業永續發展策略，彙整國際知名且具權威性之評比或研究機構所關注的永續議題與內涵，分析對象包含MSCI、Sustainable Fitch、S&P、The World Economic Forum（WEF）、McKinsey 及Moody's 等，並參酌國際倡議、主管機關規範與國內外金融標竿同業作為、深入分析與歸納大略金須關注之面向，自2022 年起聚焦「氣候行動、金融共榮及永續賦能」三大關鍵議題，以定錨永續發展方向，強化與外界溝通大略金的永續理念，並與各方夥伴進行永續合作。</p><p>2024 年金控董事會通過永續資訊管理納入內部控制制度，確保永續資訊管理落實，展現企業對外資訊揭露負責的態度與承諾，提升資訊披露的準確性，促進利害關係人對本公司永續長期發展的信心。</p>",
          "text2_title": "大略國際永續事蹟",
          "disc_01": "<li>連續5 年榮獲MSCI ESG 評比「AA 領先等級」</li><li>獲時代雜誌Time 評選「2024 年全球 500 大永續企業」（World’s Most Sustainable Companies 2024），全球跨產業第 63 名</li>",
          "disc_02": "<li>2024 年 S & P Global 永續年鑑，連續 2 年名列產業別全球 Top 1% 最高榮譽肯定，為臺灣該產業唯一獲此亮眼成就的機構</li><li>大略國際獲碳中和驗證聲明書，持續致力推動各項減碳措施，加速實踐淨零</li>",
          "disc_03": "<li>大略國際 30 週年，訂定「認真永續．綠色生活」永續主張，秉持延續「認真」的精神，從三十邁向「永續」</li><li>獲CDP氣候變遷評等「領導等級A-」</li>"
        }
      },
      "en": {
        "goto_home": "Home",
        "goto_01": "About DaLue",
        "goto_02": "News",
        "goto_03": "Development Projects",
        "goto_04": "Join Us",
        "goto_05": "Contact",
        "goto_06": "Investor Relations",
        "goto_07": "Corporate Sustainability",
        "new_title": "News",
        "service_title": "Development Projects",
        "tab01": "All Projects",
        "tab02": "Hotel",
        "tab03": "Travel",
        "tab04": "Green Energy",
        "tab05": "Other",
        "join_us_tw": "",
        "label_name": "Name",
        "label_phone": "Contact Number",
        "label_email": "Email",
        "label_content": "Content / Message",
        "placeholder": "Please enter your message",
        "submit": "Let's Keep in Touch",
        "about": {
          "slogan": "<span>The starting point of</span><br>sustainable living",
          "slogan_en": "THE BEGINNING<br> OF ETERNITY",
          "title": "Da-Lueh International Holding Co., Ltd.",
          "text": "<p>Starting with the hotel business, we have gradually expanded into various green sectors, guided by professional management and excellent service.</p><p>Facing the rapidly changing global industries and the trend of sustainable development, we incorporate green thinking, innovative technology, and cross-sector collaboration. We not only provide a comfortable living experience but also create a comprehensive platform that integrates sustainability, culture, and life.</p><p>With the core spirit of 'Sustainable Management, Innovative Breakthrough, Co-existence and Co-prosperity,' Da-Lueh International Holding is committed to becoming a benchmark enterprise that leads industry transformation and creates social value.</p>"
        },
        "news": [
          {
            "id": "1",
            "date": "Date: 2024/09/24",
            "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/news/news_01.jpg",
            "title": "<span>Foxconn is out of sync with the broader market... Opens higher then turns lower by nearly 1%<br>Analyst: $200 level still holds</span>",
            "text": "<p>Starting with a deep foundation in the hotel business, we continue to build a solid base in related industries through professional management and excellent service.</p><p>Facing the rapid changes in global industry and society's high emphasis on sustainable development, Da-Lueh International Holding is actively planning for the future, moving from the traditional hotel business to progressively incorporating green thinking, innovative technology, and cross-sector collaboration.</p><p>We aim to do more than just provide a comfortable living experience; we are building a comprehensive platform that integrates sustainability, culture, and life.</p><p>In the future, with 'Sustainable Management, Innovative Breakthrough, Co-existence and Co-prosperity' as our core spirit, we will explore more possibilities, extending into smart tourism, green building, and new forms of urban life.</p><p>The company will continue to uphold a long-term vision and forward-looking mindset, striving to be a benchmark enterprise that leads industrial transformation and creates social value.</p>"
          },
          {
            "id": "2",
            "date": "Date: 2024/09/24",
            "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/news/news_02.jpg",
            "title": "<span>Foxconn is out of sync with the broader market... Opens higher then turns lower by nearly 1%<br>Analyst: $200 level still holds</span>",
            "text": "<p>Starting with a deep foundation in the hotel business, we continue to build a solid base in related industries through professional management and excellent service.</p><p>Facing the rapid changes in global industry and society's high emphasis on sustainable development, Da-Lueh International Holding is actively planning for the future, moving from the traditional hotel business to progressively incorporating green thinking, innovative technology, and cross-sector collaboration.</p><p>We aim to do more than just provide a comfortable living experience; we are building a comprehensive platform that integrates sustainability, culture, and life.</p><p>In the future, with 'Sustainable Management, Innovative Breakthrough, Co-existence and Co-prosperity' as our core spirit, we will explore more possibilities, extending into smart tourism, green building, and new forms of urban life.</p><p>The company will continue to uphold a long-term vision and forward-looking mindset, striving to be a benchmark enterprise that leads industrial transformation and creates social value.</p>"
          },
          {
            "id": "3",
            "date": "Date: 2024/09/24",
            "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/news/news_03.jpg",
            "title": "<span>Foxconn is out of sync with the broader market... Opens higher then turns lower by nearly 1%<br>Analyst: $200 level still holds</span>",
            "text": "<p>Starting with a deep foundation in the hotel business, we continue to build a solid base in related industries through professional management and excellent service.</p><p>Facing the rapid changes in global industry and society's high emphasis on sustainable development, Da-Lueh International Holding is actively planning for the future, moving from the traditional hotel business to progressively incorporating green thinking, innovative technology, and cross-sector collaboration.</p><p>We aim to do more than just provide a comfortable living experience; we are building a comprehensive platform that integrates sustainability, culture, and life.</p><p>In the future, with 'Sustainable Management, Innovative Breakthrough, Co-existence and Co-prosperity' as our core spirit, we will explore more possibilities, extending into smart tourism, green building, and new forms of urban life.</p><p>The company will continue to uphold a long-term vision and forward-looking mindset, striving to be a benchmark enterprise that leads industrial transformation and creates social value.</p>"
          },
          {
            "id": "4",
            "date": "Date: 2024/09/24",
            "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/news/news_03.jpg",
            "title": "<span>Foxconn is out of sync with the broader market... Opens higher then turns lower by nearly 1%<br>Analyst: $200 level still holds</span>",
            "text": "<p>Starting with a deep foundation in the hotel business, we continue to build a solid base in related industries through professional management and excellent service.</p><p>Facing the rapid changes in global industry and society's high emphasis on sustainable development, Da-Lueh International Holding is actively planning for the future, moving from the traditional hotel business to progressively incorporating green thinking, innovative technology, and cross-sector collaboration.</p><p>We aim to do more than just provide a comfortable living experience; we are building a comprehensive platform that integrates sustainability, culture, and life.</p><p>In the future, with 'Sustainable Management, Innovative Breakthrough, Co-existence and Co-prosperity' as our core spirit, we will explore more possibilities, extending into smart tourism, green building, and new forms of urban life.</p><p>The company will continue to uphold a long-term vision and forward-looking mindset, striving to be a benchmark enterprise that leads industrial transformation and creates social value.</p>"
          }
        ],
        "service": {
          "hotel": [
            {
              "id": "1",
              "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/service/ser_a01.jpg",
              "title": "Hotel",
              "text": "<p>Starting with a deep foundation in the hotel business, we continue to build a solid base in related industries through professional management and excellent service.</p><p>Facing the rapid changes in global industry and society's high emphasis on sustainable development, Da-Lueh International Holding is actively planning for the future, moving from the traditional hotel business to progressively incorporating green thinking, innovative technology, and cross-sector collaboration.</p><p>We aim to do more than just provide a comfortable living experience; we are building a comprehensive platform that integrates sustainability, culture, and life.</p><p>In the future, with 'Sustainable Management, Innovative Breakthrough, Co-existence and Co-prosperity' as our core spirit, we will explore more possibilities, extending into smart tourism, green building, and new forms of urban life.</p><p>The company will continue to uphold a long-term vision and forward-looking mindset, striving to be a benchmark enterprise that leads industrial transformation and creates social value.</p>"
            },
            {
              "id": "2",
              "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/service/ser_a01.jpg",
              "title": "Hotel",
              "text": "<p>Starting with a deep foundation in the hotel business, we continue to build a solid base in related industries through professional management and excellent service.</p><p>Facing the rapid changes in global industry and society's high emphasis on sustainable development, Da-Lueh International Holding is actively planning for the future, moving from the traditional hotel business to progressively incorporating green thinking, innovative technology, and cross-sector collaboration.</p><p>We aim to do more than just provide a comfortable living experience; we are building a comprehensive platform that integrates sustainability, culture, and life.</p><p>In the future, with 'Sustainable Management, Innovative Breakthrough, Co-existence and Co-prosperity' as our core spirit, we will explore more possibilities, extending into smart tourism, green building, and new forms of urban life.</p><p>The company will continue to uphold a long-term vision and forward-looking mindset, striving to be a benchmark enterprise that leads industrial transformation and creates social value.</p>"
            }
          ],
          "travel": [
            {
              "id": "1",
              "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/service/ser_a02.jpg",
              "title": "Travel",
              "text": "<p>Starting with a deep foundation in the hotel business, we continue to build a solid base in related industries through professional management and excellent service.</p><p>Facing the rapid changes in global industry and society's high emphasis on sustainable development, Da-Lueh International Holding is actively planning for the future, moving from the traditional hotel business to progressively incorporating green thinking, innovative technology, and cross-sector collaboration.</p><p>We aim to do more than just provide a comfortable living experience; we are building a comprehensive platform that integrates sustainability, culture, and life.</p><p>In the future, with 'Sustainable Management, Innovative Breakthrough, Co-existence and Co-prosperity' as our core spirit, we will explore more possibilities, extending into smart tourism, green building, and new forms of urban life.</p><p>The company will continue to uphold a long-term vision and forward-looking mindset, striving to be a benchmark enterprise that leads industrial transformation and creates social value.</p>"
            },
            {
              "id": "2",
              "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/service/ser_a02.jpg",
              "link": "/hotel/01.html",
              "title": "Travel",
              "text": "<p>Starting with a deep foundation in the hotel business, we continue to build a solid base in related industries through professional management and excellent service.</p><p>Facing the rapid changes in global industry and society's high emphasis on sustainable development, Da-Lueh International Holding is actively planning for the future, moving from the traditional hotel business to progressively incorporating green thinking, innovative technology, and cross-sector collaboration.</p><p>We aim to do more than just provide a comfortable living experience; we are building a comprehensive platform that integrates sustainability, culture, and life.</p><p>In the future, with 'Sustainable Management, Innovative Breakthrough, Co-existence and Co-prosperity' as our core spirit, we will explore more possibilities, extending into smart tourism, green building, and new forms of urban life.</p><p>The company will continue to uphold a long-term vision and forward-looking mindset, striving to be a benchmark enterprise that leads industrial transformation and creates social value.</p>"
            }
          ],
          "esg": [
            {
              "id": "1",
              "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/service/ser_a03.jpg",
              "title": "Green Energy",
              "text": "<p>Starting with a deep foundation in the hotel business, we continue to build a solid base in related industries through professional management and excellent service.</p><p>Facing the rapid changes in global industry and society's high emphasis on sustainable development, Da-Lueh International Holding is actively planning for the future, moving from the traditional hotel business to progressively incorporating green thinking, innovative technology, and cross-sector collaboration.</p><p>We aim to do more than just provide a comfortable living experience; we are building a comprehensive platform that integrates sustainability, culture, and life.</p><p>In the future, with 'Sustainable Management, Innovative Breakthrough, Co-existence and Co-prosperity' as our core spirit, we will explore more possibilities, extending into smart tourism, green building, and new forms of urban life.</p><p>The company will continue to uphold a long-term vision and forward-looking mindset, striving to be a benchmark enterprise that leads industrial transformation and creates social value.</p>"
            },
            {
              "id": "2",
              "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/service/ser_a03.jpg",
              "title": "Green Energy",
              "text": "<p>Starting with a deep foundation in the hotel business, we continue to build a solid base in related industries through professional management and excellent service.</p><p>Facing the rapid changes in global industry and society's high emphasis on sustainable development, Da-Lueh International Holding is actively planning for the future, moving from the traditional hotel business to progressively incorporating green thinking, innovative technology, and cross-sector collaboration.</p><p>We aim to do more than just provide a comfortable living experience; we are building a comprehensive platform that integrates sustainability, culture, and life.</p><p>In the future, with 'Sustainable Management, Innovative Breakthrough, Co-existence and Co-prosperity' as our core spirit, we will explore more possibilities, extending into smart tourism, green building, and new forms of urban life.</p><p>The company will continue to uphold a long-term vision and forward-looking mindset, striving to be a benchmark enterprise that leads industrial transformation and creates social value.</p>"
            }
          ],
          "other": [
            {
              "id": "1",
              "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/service/ser_a04.jpg",
              "title": "Other",
              "text": "<p>Starting with a deep foundation in the hotel business, we continue to build a solid base in related industries through professional management and excellent service.</p><p>Facing the rapid changes in global industry and society's high emphasis on sustainable development, Da-Lueh International Holding is actively planning for the future, moving from the traditional hotel business to progressively incorporating green thinking, innovative technology, and cross-sector collaboration.</p><p>We aim to do more than just provide a comfortable living experience; we are building a comprehensive platform that integrates sustainability, culture, and life.</p><p>In the future, with 'Sustainable Management, Innovative Breakthrough, Co-existence and Co-prosperity' as our core spirit, we will explore more possibilities, extending into smart tourism, green building, and new forms of urban life.</p><p>The company will continue to uphold a long-term vision and forward-looking mindset, striving to be a benchmark enterprise that leads industrial transformation and creates social value.</p>"
            },
            {
              "id": "2",
              "img": "https://da-lue-images.s3.ap-southeast-1.amazonaws.com/service/ser_a04.jpg",
              "title": "Other",
              "text": "<p>Starting with a deep foundation in the hotel business, we continue to build a solid base in related industries through professional management and excellent service.</p><p>Facing the rapid changes in global industry and society's high emphasis on sustainable development, Da-Lueh International Holding is actively planning for the future, moving from the traditional hotel business to progressively incorporating green thinking, innovative technology, and cross-sector collaboration.</p><p>We aim to do more than just provide a comfortable living experience; we are building a comprehensive platform that integrates sustainability, culture, and life.</p><p>In the future, with 'Sustainable Management, Innovative Breakthrough, Co-existence and Co-prosperity' as our core spirit, we will explore more possibilities, extending into smart tourism, green building, and new forms of urban life.</p><p>The company will continue to uphold a long-term vision and forward-looking mindset, striving to be a benchmark enterprise that leads industrial transformation and creates social value.</p>"
            }
          ]
        },
        "footer": {
          "text": "&copy; 2025 Da-Lue Co Ltd. All Rights Reserved."
        },
        "investor_relations": {
          "main_title": "Investor Relations",
          "table1_title": "Investor Relations (IR) Team",
          "table1_th_01": "CFO / IR Director",
          "table1_td_01": "Kristen Jaymes Stewart",
          "table1_th_02": "IRO",
          "table1_td_02": "Chen XX, Chang XX",
          "table1_th_03": "Email",
          "table1_td_03": "kristen@aaa.com.tw",
          "table1_th_04": "Phone",
          "table2_title": "Stock Affairs Agent (Share Registrar)",
          "table2_th_01": "Da-Lueh XXXXXXXX Co., Ltd. Stock Affairs Agency Division",
          "table2_td_01": "Address: New Taipei City xxxxqwqwqw",
          "table2_td_02": "Phone: +886-1123-1231",
          "table2_td_03": "Website: http://www.wewe.com.tw"
        },
        "corporate_sustainability": {
          "main_title": "Corporate Sustainability",
          "text1_title": "Sustainability Organizational Operation",
          "text1_content": "<p>To implement sustainable corporate operation, Da-Lueh International has established the 'Da-Lueh International Sustainable Development Practice Code' and set up the 'Corporate Sustainability Committee', a functional committee under the Board of Directors. It is tasked with supervising the holding company and its subsidiaries in practicing sustainable development, regularly reporting the implementation results and major plans for sustainability actions to the Board of Directors annually, and overseeing the management of the group's impact on economy, environment, and people. Members of the Corporate Sustainability Committee are directors from the holding company and its subsidiaries, appointed by a resolution of the holding company's Board of Directors. The committee must have no fewer than three members, with at least one independent director of the company participating. The current committee has a total of four members. The committee's responsibilities include the review and approval of sustainable development policies, systems, strategic directions, and annual plans, as well as the approval of other significant matters. Sustainable development policies and systems, after being approved by the committee, should be submitted to the Board of Directors for review and approval. The Corporate Sustainability Committee convenes at least twice a year, and extraordinary meetings may be called at any time when necessary.</p><p>The 'Corporate Sustainability Office' is the dedicated unit responsible for promoting sustainable development at Da-Lueh International, overseen by the Chief Sustainability Officer. Under the General Manager, six major functional Corporate Sustainability Sub-committees have been established: Sustainable Governance, Responsible Finance, Smart Services, Employee Care, Green Operations, and Social Inclusion. Quarterly meetings for sustainability execution management are held regularly, chaired by the General Manager, with the Chief Sustainability Officer and the leaders of the six functional sub-committees (Vice President level or above) reporting on the status of sustainability issue management and tracking annual plan progress. Furthermore, a Climate Task Force has been established to drive climate-related initiatives. It reports to the Corporate Sustainability Committee bi-annually and to the Board of Directors at least once a year, to ensure the implementation of sustainable development plans and oversight by the Board of Directors.</p><p>In 2024, the ESG Committee convened two meetings, reviewing items such as the 2025 ESG project planning, sustainability information internal control planning, low-carbon transition for corporate clients, implementation of inclusive finance, intellectual property management plan, and stakeholder communication status. The Corporate Sustainability Report, annual sustainability achievements, and major plans were all reported to and approved by the holding company's Board of Directors.</p><p>Da-Lueh International embodies the spirit of diligence and innovation, continuing the 'Diligent Sustainability, Green Living' sustainability proposition. We collaborate with strategic partners and clients to integrate the spirit of sustainability into the financial ecosystem through alliances, and implement responsible investment and financing in our core business to leverage synergy in daily operations. Da-Lueh Financial Holding practices sustainability by providing comprehensive financial services and stringent capital oversight, creating shared value with strategic partners and clients, and moving toward a beautiful vision of a prosperous society and green living.</p><p>By staying abreast of the latest sustainability trends and maintaining alignment with international standards, Da-Lueh reviews its corporate sustainable development strategy. It compiles and analyzes sustainability issues and contents of concern to internationally renowned and authoritative rating or research agencies, including MSCI, Sustainable Fitch, S&P, The World Economic Forum (WEF), McKinsey, and Moody's, among others. Furthermore, it refers to international initiatives, regulatory requirements, and the practices of domestic and foreign financial industry benchmarks, conducting in-depth analysis to define the aspects Da-Lueh Financial Holding must focus on. Since 2022, we have centered on three key issues: 'Climate Action, Financial Co-prosperity, and Sustainability Empowerment,' to anchor our sustainable development direction, strengthen communication of Da-Lueh Financial Holding’s sustainability philosophy with the outside world, and engage in sustainable cooperation with all partners.</p><p>In 2024, the holding company's Board of Directors approved the inclusion of sustainability information management into the internal control system, ensuring the implementation of sustainability information management. This demonstrates the company's responsible attitude and commitment to external information disclosure, enhancing the accuracy of disclosures and fostering stakeholders' confidence in the company's long-term sustainable development.</p>",
          "text2_title": "Da-Lueh International Sustainability Achievements",
          "disc_01": "<li>Achieved MSCI ESG rating of 'AA Leader' for 5 consecutive years.</li><li>Named one of Time Magazine's 'World’s Most Sustainable Companies 2024,' ranking 63rd globally across all industries.</li>",
          "disc_02": "<li>Listed in the S&P Global Sustainability Yearbook for 2024, achieving the highest honor of being in the Top 1% globally for the industry for the second consecutive year, and is the only institution in this industry in Taiwan to achieve this outstanding result.</li><li>Da-Lueh International has obtained a carbon neutrality verification statement, continuously striving to promote various carbon reduction measures and accelerating the realization of net-zero.</li>",
          "disc_03": "<li>Marked Da-Lueh International's 30th anniversary with the sustainability proposition 'Diligent Sustainability, Green Living,' upholding the spirit of 'diligence' and transitioning from three decades towards 'sustainability.'</li><li>Received 'Leadership Level A-' rating in the CDP Climate Change assessment.</li>"
        }
      }
    };
    ctx.body = jsonData;
  });

  router.post('/api/daLue/email', async (ctx) => {
      ctx.status = 200;
      const { data } = ctx.request.body;

    console.log('data', data);

    // const data = {
    //   "name": "John Doe",
    //   "phone": "123-456-7890",
    //   "email": "vmixp7@gmail.com",
    //   "content": "Hello, this is a sample message."
    // };
    // 清理輸入，避免 XSS 等
    const content = sanitizeHtml(data.content.trim(), { allowedTags: [], allowedAttributes: {} });
    if (!content) {
      console.log(`data.content`,data.content);
      ctx.status = 400;
      ctx.body = { code: '0' };
      return;
    }
    const message = `
      姓名:${data.name}
      電話:${data.phone}
      email:${data.email}

      內容:
      ${content}
      `;

      try {
          await ses.sendEmail({
              Destination: { ToAddresses: ['aitarf.crypto@gmail.com'] }, // 允許發送給未驗證的 Email 地址
              Message: {
                  Body: { Text: { Data: message } }, // 郵件正文，包含訊息
                  Subject: { Data: `Contact me` } // 郵件標題
              },
              Source: 'aitarf.crypto@gmail.com' // 寄件者 Email，需替換為已驗證的地址
          }).promise();
          ctx.body = { code: '1' };
      } catch (err) {
        console.log('err', err);
        ctx.body = { code: '0' };
      }
  });

  app.use(router.routes(), router.allowedMethods());

  http.createServer(app.callback()).listen(3009);
});
