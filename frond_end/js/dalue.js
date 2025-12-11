// header
window.addEventListener('scroll', function () {
  if (window.scrollY > 120) {
    document.querySelector('.dalue-header').classList.add('menu-bgcolor');
  } else {
    document.querySelector('.dalue-header').classList.remove('menu-bgcolor');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // hover menu
  document.querySelectorAll('.menu ul li.arr').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      const subLink = this.querySelector('.sub-link');
      if (subLink) subLink.style.display = 'block';
    });
    item.addEventListener('mouseleave', function () {
      const subLink = this.querySelector('.sub-link');
      if (subLink) subLink.style.display = 'none';
    });
  });

  // smooth scroll helper
  function smoothScrollTo(targetSelector, offset) {
    const target = document.querySelector(targetSelector);
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  // menu scroll navigation
  document.querySelectorAll('.goto-01').forEach(function (el) {
    el.addEventListener('click', function () {
      smoothScrollTo('#gotothe-01', 0);
    });
  });

  document.querySelectorAll('.goto-02').forEach(function (el) {
    el.addEventListener('click', function () {
      smoothScrollTo('#gotothe-02', -85);
    });
  });

  document.querySelectorAll('.goto-03').forEach(function (el) {
    el.addEventListener('click', function () {
      smoothScrollTo('#gotothe-03', -85);
    });
  });

  document.querySelectorAll('.goto-04').forEach(function (el) {
    el.addEventListener('click', function () {
      smoothScrollTo('#gotothe-04', -85);
    });
  });

  document.querySelectorAll('.goto-05').forEach(function (el) {
    el.addEventListener('click', function () {
      smoothScrollTo('#gotothe-05', -85);
    });
  });

  // service tab
  document.querySelectorAll('.service .photo').forEach(function (el) {
    el.style.display = 'none';
  });

  const info01 = document.getElementById('info01');
  if (info01) info01.style.display = 'flex';

  document.querySelectorAll('.tab-title li').forEach(function (li) {
    li.addEventListener('click', function () {
      // Remove 'choose' class from all siblings
      const parent = this.closest('.tab-title');
      if (parent) {
        parent.querySelectorAll('li').forEach(function (item) {
          item.classList.remove('choose');
        });
      }
      this.classList.add('choose');
    });
  });

  const tab01 = document.getElementById('tab01');
  if (tab01) {
    tab01.addEventListener('click', function () {
      document.querySelectorAll('.service .photo').forEach(function (el) {
        el.style.display = 'none';
      });
      const info01 = document.getElementById('info01');
      if (info01) info01.style.display = 'flex';
    });
  }

  const tab02 = document.getElementById('tab02');
  if (tab02) {
    tab02.addEventListener('click', function () {
      document.querySelectorAll('.service .photo').forEach(function (el) {
        el.style.display = 'none';
      });
      const info02 = document.getElementById('info02');
      if (info02) info02.style.display = 'flex';
    });
  }

  const tab03 = document.getElementById('tab03');
  if (tab03) {
    tab03.addEventListener('click', function () {
      document.querySelectorAll('.service .photo').forEach(function (el) {
        el.style.display = 'none';
      });
      const info03 = document.getElementById('info03');
      if (info03) info03.style.display = 'flex';
    });
  }

  const tab04 = document.getElementById('tab04');
  if (tab04) {
    tab04.addEventListener('click', function () {
      document.querySelectorAll('.service .photo').forEach(function (el) {
        el.style.display = 'none';
      });
      const info04 = document.getElementById('info04');
      if (info04) info04.style.display = 'flex';
    });
  }

  const tab05 = document.getElementById('tab05');
  if (tab05) {
    tab05.addEventListener('click', function () {
      document.querySelectorAll('.service .photo').forEach(function (el) {
        el.style.display = 'none';
      });
      const info05 = document.getElementById('info05');
      if (info05) info05.style.display = 'flex';
    });
  }
});
