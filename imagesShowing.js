export default class imagesShowingC {
    constructor(element, newImage, fadeTime) {
        this.element = element;
        this.newImage = newImage;
        this.fadeTime = fadeTime;
    }

    imagesShowingF() {
        const self = this;
        $(self.element).fadeTo(self.fadeTime, 0, function() {
            $(self.element).attr("src", self.newImage).fadeTo(self.fadeTime, 1);
        });
    }
}


// export default class imagesShowingC {
//
//     constructor(element, message) {
//         this.element = element;
//         this.message = message;
//     }
//     imagesShowingF(){
//         const self = this;
//         $(self.element).html(self.message);
//     }
//
// }
