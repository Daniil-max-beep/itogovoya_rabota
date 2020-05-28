// let sliderFactory = {
//     createNewSlider:function () {
        let slider1 = {
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
                
                this.imgesUrl.push('https://inkyiv.net/wp-content/uploads/2017/11/bc4b9b357fe757be5b10.jpg');
                this.imgesUrl.push('https://sb-advice.com/wp-content/uploads/2018/09/post_5b9c8671cc29d.jpeg');
                this.imgesUrl.push('https://www.2do2go.ru/uploads/29190eea8a3419abca2b2203a23f0863.jpeg');
                this.imgesUrl.push('http://doubleyou.by/assets/cache/images/portfolio/belaseptika/337-1200x-0dd-1200x-206.jpg');

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
//         return slider;
//     }
// }



    // onButtosClick: function (operation) {
    //     let operElement = operation.currentTarget;
    //     let curr = operElement.innerHTML;

    //   slider1.showBtnClick(curr);
    // },

    // for (let i = 0; i < this.arrayOfButtons.length; i++) {
    //     let button = this.arrayOfButtons[i];

    //     button.addEventListener('click', this.onButtosClick);

    // }
