import imagesShowingC from "./imagesShowing.js";
export default class StopImageShowingEffect{


    constructor(element, newImage, fadeTime, timeout) {
    this.element = element;
    this.newImage = newImage;
    this.fadeTime = fadeTime;
    this.timeout = timeout;
    }

    StopImageShowingEffectF(){
        const self = this;
        setTimeout(function() {
            const imageShow = new imagesShowingC(self.element, self.newImage, self.fadeTime);
            imageShow.imagesShowingF();
        }, self.timeout)
    }

}