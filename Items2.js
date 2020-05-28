let slider2 = {
    imgesUrl: [],
    currentImages: 0,
    button1: null,
    button2: null,
    slideImage: null,
    getElement: function (id) {
        return document.querySelector(id);
    },

    start: function (param) {

        let that = this;

        let el = this.getElement('#'+ param);

        this.button1 = el.querySelector('.button1');
        this.button2 = el.querySelector('.button2');
        this.slideImage = el.querySelector('.slied');


        this.button1.addEventListener('click', function (el) {
            that.showPrevtBtn(el);
        });
        this.button2.addEventListener('click', function (el) {
            that.showNextBtn(el);
        });
        
        this.imgesUrl.push('https://avatars.mds.yandex.net/get-zen_doc/1710676/pub_5dacb99ba3f6e400b0fb0af3_5dacbab2c7e50c00b1295ea1/scale_1200');
        this.imgesUrl.push('https://pohod-lifehack.ru/wp-content/uploads/2019/07/nabor-dlya-otdyha-na-prirode.jpg');
        this.imgesUrl.push('https://avatars.mds.yandex.net/get-pdb/2296909/ae8b4f09-cfa1-4199-a397-1deb3f597c8b/s1200');
        this.imgesUrl.push('https://avatars.mds.yandex.net/get-pdb/916253/f066dc56-e5e8-4db3-8357-5cc7de43742a/s1200');

        this.slideImage.src = this.imgesUrl[this.currentImages];

        this.button1.disabled = true;
    },

    showNextBtn: function () {
        this.currentImages++;
        this.slideImage.src = this.imgesUrl[this.currentImages];

        this.button1.disabled = false;

        if (this.currentImages === this.imgesUrl.length - 1) {
            this.button2.disabled = true;
        }
    },

    showPrevtBtn: function () {
        this.currentImages--;
        this.slideImage.src = this.imgesUrl[this.currentImages];

        this.button2.disabled = false;

        if (this.currentImages === 0) {
            this.button1.disabled = true;
        }
    }



}