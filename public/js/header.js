/**
 * =========================================
 * Script to handle localized url navigation
 * =========================================
 */

const languages = ["pl", "en", "de"];

/**
 * get url pathname without '/pl' or '/en' prefix
 * */
const getPathnameWithoutI18nCode = (pathname) => {
  if (languages.includes(pathname.split("/")[1])) {
    return pathname.substring(3);
  } else {
    return pathname;
  }
};

/**
 * upon language change redirect to localized url
 * */
const switcher = document.getElementById("language-switcher");
switcher.addEventListener("change", (e) => {
  if (languages.includes(e.target.value)) {
    window.location.replace(
      `/${e.target.value}${getPathnameWithoutI18nCode(
        window.location.pathname
      )}`
    );
  }
})(
  /**
   * ====================================
   * Script to handle selector in headers
   * ====================================
   */

  function () {
    "use strict";
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      if (all) {
        select(el, all).forEach((e) => e.addEventListener(type, listener));
      } else {
        select(el, all).addEventListener(type, listener);
      }
    };

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select("#header");
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add("header-scrolled");
        } else {
          selectHeader.classList.remove("header-scrolled");
        }
      };
      window.addEventListener("load", headerScrolled);
      onscroll(document, headerScrolled);
    }

    /**
     * Mobile nav toggle
     */
    on("click", ".mobile-nav-toggle", function (e) {
      select("#navbar").classList.toggle("navbar-mobile");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });

    /**
     * Mobile nav dropdowns activate
     */
    on(
      "click",
      ".navbar .dropdown > a",
      function (e) {
        if (select("#navbar").classList.contains("navbar-mobile")) {
          e.preventDefault();
          this.nextElementSibling.classList.toggle("dropdown-active");
        }
      },
      true
    );
  }
)();
