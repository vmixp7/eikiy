const APIURL = 'http://13.213.0.131:3009';

(function () {
  // 語言選擇器
  document.querySelectorAll('.select_lang').forEach(function (el) {
    el.addEventListener('change', function () {
      const selectedLang = this.value;
      const pathname = window.location.pathname;
      const search = window.location.search;

      const fileName = pathname.substring(pathname.lastIndexOf('/') + 1);
      let params = '';
      if (selectedLang === 'en') {
        if (search === '') {
          params = '?lang=en';
        } else {
          params = search.replace('?lang=tw', '?lang=en');
        }
        window.location.href = fileName + params;
      } else {
        if (search === '') {
          params = '?lang=en';
        } else {
          params = search.replace('?lang=en', '?lang=tw');
        }
        window.location.href = fileName + params;
      }
    });
  });

  // 聯絡我們表單
  const contactForm = document.getElementById('contactusForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(contactForm);
      let dataObj = {};
      formData.forEach(function (value, key) {
        dataObj[key] = value;
      });
      console.log(dataObj);

      fetch(`${APIURL}/api/daLue/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: dataObj }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (msg) {
          console.log('ok--', msg);
          if (msg.code === '1') {
            alert('送出成功');
            location.reload();
          } else {
            alert('伺服器忙碌中，請稍後再試');
          }
        })
        .catch(function (error) {
          console.log('err--', error);
          alert('伺服器異常，請稍後再試');
        });
    });
  }
})();

function setDalueData(msg, lang) {
  console.log('setDalueData--', msg);

  // Helper function to set innerHTML for multiple elements
  function setHtml(selector, content) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.innerHTML = content;
    });
  }

  // Helper function to set attribute
  function setAttr(selector, attr, value) {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  }

  setHtml('.goto-home', msg.goto_home);
  setHtml('.goto-01', msg.goto_01);
  setHtml('.goto-02', msg.goto_02);
  setHtml('.goto-03', msg.goto_03);
  setHtml('.goto-04', msg.goto_04);
  setHtml('.goto-05', msg.goto_05);
  setHtml('.goto-06', msg.goto_06);
  setHtml('.goto-06-01', msg.goto_06_01);
  setHtml('.goto-06-02', msg.goto_06_02);
  setHtml('.goto-07', msg.goto_07);
  setHtml('.new-title', msg.new_title);
  setHtml('.service-title', msg.service_title);

  const tab01a = document.querySelector('#tab01 a');
  if (tab01a) tab01a.innerHTML = msg.tab01;
  const tab02a = document.querySelector('#tab02 a');
  if (tab02a) tab02a.innerHTML = msg.tab02;
  const tab03a = document.querySelector('#tab03 a');
  if (tab03a) tab03a.innerHTML = msg.tab03;
  const tab04a = document.querySelector('#tab04 a');
  if (tab04a) tab04a.innerHTML = msg.tab04;
  const tab05a = document.querySelector('#tab05 a');
  if (tab05a) tab05a.innerHTML = msg.tab05;

  setHtml('.join-us-tw', msg.join_us_tw);
  setHtml('.label-name', msg.label_name);
  setHtml('.label-phone', msg.label_phone);
  setHtml('.label-email', msg.label_email);
  setHtml('.label-content', msg.label_content);

  const contentEl = document.getElementById('content');
  if (contentEl) contentEl.setAttribute('placeholder', msg.placeholder);

  setHtml('.submit', msg.submit);

  setHtml('.titleContents-a01 span', msg.titleContents_a01);
  setHtml('.titleContents-a02 span', msg.titleContents_a02);
  setHtml('.titleContents-a03 span', msg.titleContents_a03);
  setHtml('.titleContents-a04 span', msg.titleContents_a04);
  setHtml('.titleContents-a05 span', msg.titleContents_a05);
  setHtml('.titleContents-a06 span', msg.titleContents_a06);
  setHtml('.titleContents-a07 span', msg.titleContents_a07);

  setHtml('.titleContents-b01 span', msg.titleContents_b01);
  setHtml('.titleContents-b02 span', msg.titleContents_b02);
  setHtml('.titleContents-b03 span', msg.titleContents_b03);
  setHtml('.titleContents-b04 span', msg.titleContents_b04);
  setHtml('.titleContents-b05 span', msg.titleContents_b05);
  setHtml('.titleContents-b06 span', msg.titleContents_b06);

  const investorTitle = document.querySelector('#investor_relations .main-title span');
  if (investorTitle) investorTitle.innerHTML = msg.investor_relations.main_title;

  setHtml('.table1-title', msg.investor_relations.table1_title);
  setHtml('.table1-th-01', msg.investor_relations.table1_th_01);
  setHtml('.table1-td-01', msg.investor_relations.table1_td_01);
  setHtml('.table1-th-02', msg.investor_relations.table1_th_02);
  setHtml('.table1-td-02', msg.investor_relations.table1_td_02);
  setHtml('.table1-th-03', msg.investor_relations.table1_th_03);
  setHtml('.table1-td-03', msg.investor_relations.table1_td_03);
  setHtml('.table1-th-04', msg.investor_relations.table1_th_04);
  setHtml('.table1-td-04', msg.investor_relations.table1_td_04);
  setHtml('.table2-title', msg.investor_relations.table2_title);
  setHtml('.table2-th-01', msg.investor_relations.table2_th_01);
  setHtml('.table2-td-01', msg.investor_relations.table2_td_01);
  setHtml('.table2-td-02', msg.investor_relations.table2_td_02);
  setHtml('.table2-td-03', msg.investor_relations.table2_td_03);

  const csTitle = document.querySelector('#corporate_sustainability .main-title span');
  if (csTitle) csTitle.innerHTML = msg.corporate_sustainability.main_title;

  setHtml('.text1-title', msg.corporate_sustainability.text1_title);
  setHtml('.text1-content', msg.corporate_sustainability.text1_content);
  setHtml('.text2-title', msg.corporate_sustainability.text2_title);
  setHtml('.disc-01', msg.corporate_sustainability.disc_01);
  setHtml('.disc-02', msg.corporate_sustainability.disc_02);
  setHtml('.disc-03', msg.corporate_sustainability.disc_03);

  setAttr('#company_img', 'src', msg.company_img);
  setHtml('.corporate_title1', msg.corporate_title1);
  setHtml('.corporate_title2', msg.corporate_title2);

  const fcContent = document.querySelector('#functional_committees .content');
  if (fcContent) fcContent.innerHTML = msg.functional_committees.content;
  const fcTitle = document.querySelector('#functional_committees .main-title');
  if (fcTitle) fcTitle.innerHTML = msg.functional_committees.main_title;

  const fiTitle = document.querySelector('#financial_information .main-title span');
  if (fiTitle) fiTitle.innerHTML = msg.financial_information.main_title;

  document.querySelectorAll('#financial_information .table-td .a1').forEach(function (el) {
    el.innerHTML = msg.financial_information.table_td_a1;
  });
  document.querySelectorAll('#financial_information .table-td .a2').forEach(function (el) {
    el.innerHTML = msg.financial_information.table_td_a2;
  });
  document.querySelectorAll('#financial_information .table-td .a3').forEach(function (el) {
    el.innerHTML = msg.financial_information.table_td_a3;
  });
  document.querySelectorAll('#financial_information .table-td .a4').forEach(function (el) {
    el.innerHTML = msg.financial_information.table_td_a4;
  });
  document.querySelectorAll('#financial_information .table-td .abook').forEach(function (el) {
    el.innerHTML = msg.financial_information.table_td_abook;
  });

  if (msg.about) {
    const aboutTitle = document.querySelector('#gotothe-01 .main-title');
    if (aboutTitle) aboutTitle.innerHTML = msg.about.slogan;
    setHtml('.aboutSlogan_en', msg.about.slogan_en);
    setHtml('.aboutTitle', msg.about.title);
    setHtml('.aboutText', msg.about.text);
  }

  if (msg.news && msg.news.length > 0) {
    let newsHtml = '';
    for (let i in msg.news) {
      const match = msg.news[i].text.match(/<p>(.*?)<\/p>/);
      const firstText = match ? match[1] : "";
      newsHtml += `
          <a class="swiper-slide" href="news.html?lang=${lang}&id=${msg.news[i].id}">
              <div class="img">
                  <img src="${msg.news[i].img}" width="100%" alt="">
              </div>
              <div class="text">
                  <p>${firstText}</p>
              </div>
          </a>
          `;
    }
    const newsList = document.getElementById('news_list');
    if (newsList) newsList.innerHTML = newsHtml;
  }

  if (msg.service) {
    let allHtml = '';
    if (msg.service.hotel.length > 0) {
      let newsHtml = '';
      for (let i in msg.service.hotel) {
        newsHtml += `<a href="service_hotel.html?lang=${lang}&type=hotel&id=${msg.service.hotel[i].id}"><img src="${msg.service.hotel[i].img}"></a>`;
        if (i == 0) allHtml += newsHtml;
      }
      const info02 = document.getElementById('info02');
      if (info02) info02.innerHTML = newsHtml;
    }
    if (msg.service.travel.length > 0) {
      let newsHtml = '';
      for (let i in msg.service.travel) {
        newsHtml += `<a href="service_hotel.html?lang=${lang}&type=travel&id=${msg.service.travel[i].id}"><img src="${msg.service.travel[i].img}"></a>`;
        if (i == 0) allHtml += newsHtml;
      }
      const info03 = document.getElementById('info03');
      if (info03) info03.innerHTML = newsHtml;
    }
    if (msg.service.esg.length > 0) {
      let newsHtml = '';
      for (let i in msg.service.esg) {
        newsHtml += `<a href="service_hotel.html?lang=${lang}&type=esg&id=${msg.service.esg[i].id}"><img src="${msg.service.esg[i].img}"></a>`;
        if (i == 0) allHtml += newsHtml;
      }
      const info04 = document.getElementById('info04');
      if (info04) info04.innerHTML = newsHtml;
    }
    if (msg.service.other.length > 0) {
      let newsHtml = '';
      for (let i in msg.service.other) {
        newsHtml += `<a href="service_hotel.html?lang=${lang}&type=other&id=${msg.service.other[i].id}"><img src="${msg.service.other[i].img}"></a>`;
        if (i == 0) allHtml += newsHtml;
      }
      const info05 = document.getElementById('info05');
      if (info05) info05.innerHTML = newsHtml;
    }
    const info01 = document.getElementById('info01');
    if (info01) info01.innerHTML = allHtml;
  }
}

function setLocalStorage(datas) {
  const keyName = 'dalue_datas';
  const jsonString = JSON.stringify(datas);
  try {
    localStorage.setItem(keyName, jsonString);
    console.log(`JSON 資料已成功儲存到 localStorage, Key: ${keyName}`);
  } catch (e) {
    console.error("儲存到 localStorage 失敗:", e);
  }
}

function getLocalStorage(locale) {
  const keyName = 'dalue_datas';
  const jsonString = localStorage.getItem(keyName);
  if (jsonString) {
    try {
      const retrievedObject = JSON.parse(jsonString);
      console.log("成功從 localStorage 取出的 JSON 物件:");
      if (locale === 'en') {
        return retrievedObject.en;
      } else {
        return retrievedObject.tw;
      }
    } catch (e) {
      console.error("解析 JSON 失敗:", e);
      return null;
    }
  } else {
    console.log(`在 localStorage 中找不到 Key: ${keyName} 的資料。`);
  }
}
