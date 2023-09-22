export default class StopHidingEffect {

    constructor(element, hideDuration, timeout) {
        this.element = element;
        this.hideDuration = hideDuration;
        this.timeout = timeout;
    }


    StopHidingEffectF(){
        const self = this;
        $(self.element).css("pointer-events", "none");
        // After the show animation is complete, use setTimeout to hide the element
        setTimeout(function() {
            // Set the opacity to 0 over the hide duration
            $(self.element).animate({ opacity: 0 }, self.hideDuration);
        }, self.timeout); // Wait for 0.5 seconds before starting the hide animation

    }


}