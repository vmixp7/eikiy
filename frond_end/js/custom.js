const APIURL = 'http://13.213.0.131:3009';
(function ($) {

  $('.select_lang').change(function () {
    const selectedLang = $(this).val();
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

  // 聯絡我們表單
  $('#contactusForm').on('submit', function (e) {
    e.preventDefault();
    const datas = $('#contactusForm').serializeArray();
    let dataObj = {};
    for (let i in datas) {
      dataObj[datas[i].name] = datas[i].value;
    }
    console.log(dataObj);
    $.ajax({
      url: `${APIURL}/api/daLue/email`,
      data: { "data": dataObj },
      type: "POST",
      dataType: 'json',
      async: false,
      success: function (msg) {
        console.log('ok--', msg);
        if (msg.code === '1') {
          alert('送出成功');
          location.reload();
        } else {
          alert('伺服器忙碌中，請稍後再試');
        }
      },
      error: function (error) {
        console.log('err--', error.statusText);
        alert('伺服器異常，請稍後再試');
      }
    });
  });

})(jQuery);

function setDalueData(msg, lang) {
  console.log('lang----------', lang);
  console.log('setDalueData--', msg);
  $('.goto-home').html(msg.goto_home);
  $('.goto-01').html(msg.goto_01);
  $('.goto-02').html(msg.goto_02);
  $('.goto-03').html(msg.goto_03);
  $('.goto-04').html(msg.goto_04);
  $('.goto-05').html(msg.goto_05);
  $('.goto-06').html(msg.goto_06);
  $('.goto-06-01').html(msg.goto_06_01);
  $('.goto-06-02').html(msg.goto_06_02);
  $('.goto-07').html(msg.goto_07);
  $('.new-title').html(msg.new_title);
  $('.service-title').html(msg.service_title);
  $('#tab01 a').html(msg.tab01);
  $('#tab02 a').html(msg.tab02);
  $('#tab03 a').html(msg.tab03);
  $('#tab04 a').html(msg.tab04);
  $('#tab05 a').html(msg.tab05);
  $('.join-us-tw').html(msg.join_us_tw);
  $('.label-name').html(msg.label_name);
  $('.label-phone').html(msg.label_phone);
  $('.label-email').html(msg.label_email);
  $('.label-content').html(msg.label_content);
  $('#content').attr("placeholder", msg.placeholder);
  $('.submit').html(msg.submit);

  $('.titleContents-a01 span').html(msg.titleContents_a01);
  $('.titleContents-a02 span').html(msg.titleContents_a02);
  $('.titleContents-a03 span').html(msg.titleContents_a03);
  $('.titleContents-a04 span').html(msg.titleContents_a04);
  $('.titleContents-a05 span').html(msg.titleContents_a05);
  $('.titleContents-a06 span').html(msg.titleContents_a06);
  $('.titleContents-a07 span').html(msg.titleContents_a07);

  $('.titleContents-b01 span').html(msg.titleContents_b01);
  $('.titleContents-b02 span').html(msg.titleContents_b02);
  $('.titleContents-b03 span').html(msg.titleContents_b03);
  $('.titleContents-b04 span').html(msg.titleContents_b04);
  $('.titleContents-b05 span').html(msg.titleContents_b05);
  $('.titleContents-b06 span').html(msg.titleContents_b06);

  $('#investor_relations .main-title span').html(msg.investor_relations.main_title);
  $('.table1-title').html(msg.investor_relations.table1_title);
  $('.table1-th-01').html(msg.investor_relations.table1_th_01);
  $('.table1-td-01').html(msg.investor_relations.table1_td_01);
  $('.table1-th-02').html(msg.investor_relations.table1_th_02);
  $('.table1-td-02').html(msg.investor_relations.table1_td_02);
  $('.table1-th-03').html(msg.investor_relations.table1_th_03);
  $('.table1-td-03').html(msg.investor_relations.table1_td_03);
  $('.table1-th-04').html(msg.investor_relations.table1_th_04);
  $('.table1-td-04').html(msg.investor_relations.table1_td_04);
  $('.table2-title').html(msg.investor_relations.table2_title);
  $('.table2-th-01').html(msg.investor_relations.table2_th_01);
  $('.table2-td-01').html(msg.investor_relations.table2_td_01);
  $('.table2-td-02').html(msg.investor_relations.table2_td_02);
  $('.table2-td-03').html(msg.investor_relations.table2_td_03);

  $('.text-title1').html(msg.investor_relations.text_title1);
  $('.text-title2').html(msg.investor_relations.text_title2);

  $('#corporate_sustainability .main-title span').html(msg.corporate_sustainability.main_title);
  $('.text1-title').html(msg.corporate_sustainability.text1_title);
  $('.text1-content').html(msg.corporate_sustainability.text1_content);
  $('.text2-title').html(msg.corporate_sustainability.text2_title);
  $('.disc-01').html(msg.corporate_sustainability.disc_01);
  $('.disc-02').html(msg.corporate_sustainability.disc_02);
  $('.disc-03').html(msg.corporate_sustainability.disc_03);

  $('#functional_committees .main-title span').html(msg.functional_committees.main_title);
  $('.text1-content').html(msg.functional_committees.text1_content);
  $('.table1-th').html(msg.functional_committees.table1_th);
  $('.table1-td span').html(msg.functional_committees.table1_td);
  $('.table2-th').html(msg.functional_committees.table2_th);
  $('.table2-td span').html(msg.functional_committees.table2_td);
  $('.table2-td .disc').html(msg.functional_committees.table2_disc);
  $('.table3-th').html(msg.functional_committees.table3_th);
  $('.table3-td span').html(msg.functional_committees.table3_td);
  $('.table4-th').html(msg.functional_committees.table4_th);
  $('.table4-td span').html(msg.functional_committees.table4_td);
  $('.table5-th').html(msg.functional_committees.table5_th);
  $('.table5-td span').html(msg.functional_committees.table5_td);
  $('.table5-td .disc').html(msg.functional_committees.table5_disc);
  $('.table6-th').html(msg.functional_committees.table6_th);
  $('.table6-td span').html(msg.functional_committees.table6_td);
  $('.table6-td .disc').html(msg.functional_committees.table6_disc);
  $('.table7-th').html(msg.functional_committees.table7_th);
  $('.table7-td span').html(msg.functional_committees.table7_td);
  $('.table8-th').html(msg.functional_committees.table8_th);
  $('.table8-td span').html(msg.functional_committees.table8_td);
  $('.table8-td .disc').html(msg.functional_committees.table8_disc);

  if (msg.about) {
    $('#gotothe-01 .main-title').html(msg.about.slogan);
    $('.aboutSlogan_en').html(msg.about.slogan_en);
    $('.aboutTitle').html(msg.about.title);
    $('.aboutText').html(msg.about.text);
  }
  if (msg.news && msg.news.length > 0) {
    let newsHtml = '';
    for (let i in msg.news) {
      // 取msg.news[i].text內的第一個<p></p>
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
    $('#news_list').html(newsHtml);
  }
  if (msg.service) {
    let allHtml = '';
    if (msg.service.hotel.length > 0) {
      let newsHtml = '';
      for (let i in msg.service.hotel) {
        newsHtml += `<a href="service_hotel.html?lang=${lang}&type=hotel&id=${msg.service.hotel[i].id}"><img src="${msg.service.hotel[i].img}"></a>`;
        if (i == 0) allHtml += newsHtml;
      }
      $('#info02').html(newsHtml);
    }
    if (msg.service.travel.length > 0) {
      let newsHtml = '';
      for (let i in msg.service.travel) {
        newsHtml += `<a href="service_hotel.html?lang=${lang}&type=travel&id=${msg.service.travel[i].id}"><img src="${msg.service.travel[i].img}"></a>`;
        if (i == 0) allHtml += newsHtml;
      }
      $('#info03').html(newsHtml);
    }
    if (msg.service.esg.length > 0) {
      let newsHtml = '';
      for (let i in msg.service.esg) {
        newsHtml += `<a href="service_hotel.html?lang=${lang}&type=esg&id=${msg.service.esg[i].id}"><img src="${msg.service.esg[i].img}"></a>`;
        if (i == 0) allHtml += newsHtml;
      }
      $('#info04').html(newsHtml);
    }
    if (msg.service.other.length > 0) {
      let newsHtml = '';
      for (let i in msg.service.other) {
        newsHtml += `<a href="service_hotel.html?lang=${lang}&type=other&id=${msg.service.other[i].id}"><img src="${msg.service.other[i].img}"></a>`;
        if (i == 0) allHtml += newsHtml;
      }
      $('#info05').html(newsHtml);
    }
    $('#info01').html(allHtml);
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
    // 常見失敗原因：儲存空間已滿 (Quota Exceeded Error)
  }
}

function getLocalStorage(locale) {
  const keyName = 'dalue_datas';
  const jsonString = localStorage.getItem(keyName);
  // 檢查是否有資料
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

