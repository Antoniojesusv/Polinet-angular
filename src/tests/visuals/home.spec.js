/* cogemos la biblioteca de aserciones */
const assert = require("assert");
const homePage = require("../pageobjects/home.page");
const data = require("../constants.js");
const http = require("superagent");
const superagentPromisePlugin = require("superagent-promise-plugin");
/* QUEDA PENDIENTE PARA INTEGRACION PROBAR SI ENTRAMOS DESDE MOVIL O PC */
/* var client = require("webdriverio").remote({
  desiredCapabilities: {
    platformName: "iOS",
    aplicación: "net.company.SafariLauncher",
    udid: "123123123123abc",
    deviceName: "iPhone"
  }
});

console.log(client.isMo
bile); // salidas: verdadera
console.log(client.isIOS); // salidas: verdadera
console.log(client.isAndroid); // outputs: falso */

beforeEach(() => {
  homePage.open();
});
describe("Polinet page", function() {
  describe("#header", function() {
    //Cambiar posicion y crear macro. usar con beforeach
    it("should have the right title", function() {
      browser.url("dashboard");
      browser.pause(500);
      var title = browser.getTitle();
      assert.equal(title, "Others | Egret");
    });
    /* CREAR FICHERO DE CONSTANTES PARA LOS COLORES */
    it("should bring the color of the background", () => {
      let elem = $("mat-toolbar.topbar");
      let color = elem.getCssProperty("background-color");
      assert.equal(color.parsed.hex, "#3f51b5");
    });
    /* CONSTANTES, PATRON PAGEOBJET */
    it.only("should bring the value of the text head", () => {
      /* MOCK HTTP REQUEST PARA LOS BOTONES */
      http
        .post("http://localhost:4200")
        .use(supeargentPromisePluging)
        .send({
          request: {
            url: "http://localhost:4200",
            method: "GET"
          },
          response: {
            status: 404
          }
        })
        .then(() => {
          assert.equal(homePage.title, data.header.title);
        });
    });
    //SOLO FUNCIONA EN FIREFOX
    describe("#Crear Cuenta", function() {
      it("should bring the correct url to click crear cuenta", () => {
        homePage.clickSignup();

        assert.equal(browser.getUrl(), "http://localhost:4200/signup");
      });

      /* it("should bring to value of nick Crear Cuenta", () => {
        let elem = $("#mat-input-0");
        elem.setValue("Usuario1");
        let value = elem.getValue();
        assert.equal(value, "Usuario1");
      }); */
    });

    //PASA LOS TEST EN CHROME PERO NO EN FIREFOX
    xdescribe("#Login", function() {
      it("should activate modal login", () => {
        browser.click("button.mat-raised-button");
        browser.pause(500);
        let elem = $("app-signin form h4");
        let value = elem.getText();
        assert.equal(value, "Login");
      });

      it("should used the nick", function() {
        let elem = $("#mat-input-0");
        elem.setValue("Usuario2");
        let value = elem.getValue();
        assert.equal(value, "Usuario2");
      });
    });
    xdescribe("#Recuperar Contraseña", function() {
      it("should behave...", () => {
        browser.click("mat-dialog-actions.mat-dialog-actions button");
        let elem = $("#mat-input-2");
        elem.setValue("estoesunaprueba@gmail.com");
        let value = elem.getValue();
        assert.equal(value, "estoesunaprueba@gmail.com");
      });
    });
  });

  describe("#body", () => {
    describe("mat-card ", function() {
      it("should bring the font-family", function() {
        browser.url("dashboard");
        browser.pause(500);
        let elem = $("div.content");
        let family = elem.getCssProperty("font-family");
        assert.equal(family.value, "roboto");
      });

      it("should bring the font-weight", function() {
        let elem = $("home-buttons");
        let weight = elem.getCssProperty("font-weight");
        assert.equal(weight.value, "400");
      });

      it("should bring the font-size", function() {
        let elem = $("home-buttons");
        let size = elem.getCssProperty("font-size");
        assert.equal(size.value, "14px");
      });

      it("should bring max-width of home-buttons", function() {
        let elem = $("home-buttons");
        let width = elem.getCssProperty("max-width");
        assert.equal(width.value, "60%");
      });

      it("should bring max-width of mat-card", function() {
        let elem = $("mat-card.mat-card div mat-card");
        let width = elem.getCssProperty("max-width");
        assert.equal(width.value, "22%");
      });
    });

    describe("#Notices", () => {
      it("should bring max-width of news", () => {
        let elem = $("news");
        let width = elem.getCssProperty("max-width");
        assert.equal(width.value, "40%");
      });
      it("should bring scroll of news mat-card", () => {
        let elem = $("news mat-card");
        let width = elem.getCssProperty("overflow-y");
        assert.equal(width.value, "scroll");
      });
      it("should bring title of news", () => {
        let elem = $("news mat-list h2");
        let text = elem.getText();
        assert.equal(text, "Noticias");
      });

      it("should bring font-size of news", function() {
        let elem = $("news mat-list mat-list-item");
        let font = elem.getCssProperty("font-size");
        assert.equal(font.value, "16px");
      });

      it("should bring padding of news", function() {
        let elem = $("news mat-list mat-list-item");
        let font = elem.getCssProperty("padding-top");
        assert.equal(font.value, "15px");
        let font1 = elem.getCssProperty("padding-bottom");
        assert.equal(font1.value, "15px");
        let font2 = elem.getCssProperty("padding-left");
        assert.equal(font2.value, "0px");
        let font3 = elem.getCssProperty("padding-right");
        assert.equal(font3.value, "0px");
      });
    });
  });

  describe("#footer", function() {
    it("should bring the white color of the letter", () => {
      let elem = $("footer.c-footer");
      let color = elem.getCssProperty("color");
      assert.equal(color.parsed.hex, "#ffffff");
    });

    it("should bring the blue color of the background", () => {
      let elem = $("footer.c-footer");
      let color = elem.getCssProperty("background-color");
      assert.equal(color.parsed.hex, "#3f51b5");
    });

    it("should bring true with exit font facebook", function() {
      let facebook = browser.isExisting("footer i.fa-facebook");
      assert.equal(facebook, true);
    });

    it("should bring true with exit font twitter", function() {
      let twitter = browser.isExisting("footer i.fa-twitter-square");
      assert.equal(twitter, true);
    });

    it("should bring true with exit font instagram", function() {
      let instagram = browser.isExisting("footer i.fa-instagram");
      assert.equal(instagram, true);
    });

    it("should bring color font", () => {
      let elem = $("i.fa-facebook");
      let color = elem.getCssProperty("color");
      assert.equal(color.parsed.hex, "#ffffff");
    });
  });
});
