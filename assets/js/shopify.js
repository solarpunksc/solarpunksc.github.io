/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'solarpunk-surf-club.myshopify.com',
      storefrontAccessToken: '5324346f4dd8b36122de2ceff3fd2c50',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '7559575601405',
        node: document.getElementById('product-component-1643342226029'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
        "text-align": "left"
      },
      "button": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        "color": "#f7fefd",
        ":hover": {
          "color": "#f7fefd",
          "background-color": "#3a4c80"
        },
        "background-color": "#40548e",
        ":focus": {
          "background-color": "#3a4c80"
        }
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    },
    "buttonDestination": "checkout",
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Buy now"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        "color": "#f7fefd",
        ":hover": {
          "color": "#f7fefd",
          "background-color": "#3a4c80"
        },
        "background-color": "#40548e",
        ":focus": {
          "background-color": "#3a4c80"
        }
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        "color": "#f7fefd",
        ":hover": {
          "color": "#f7fefd",
          "background-color": "#3a4c80"
        },
        "background-color": "#40548e",
        ":focus": {
          "background-color": "#3a4c80"
        }
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#40548e",
        ":hover": {
          "background-color": "#3a4c80"
        },
        ":focus": {
          "background-color": "#3a4c80"
        }
      },
      "count": {
        "font-size": "16px",
        "color": "#f7fefd",
        ":hover": {
          "color": "#f7fefd"
        }
      },
      "iconPath": {
        "fill": "#f7fefd"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/