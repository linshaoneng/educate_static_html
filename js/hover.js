/**
 * Created by lily on 2017/2/11.
 */
function Hover(el,options) {
    this.init(el,options);
}
Hover.prototype = {
    constructor: Hover,
    init: function(el,options){
        this.el = el;
        this.options = options || {
                hover_el: "li",
                change_attr: "top",
                hidden: 145,
                show: 0,
                show_el: ""
            };
        this.hover_objs = this.el.find(this.options.hover_el);
        this.bind_hover();
    },
    bind_hover: function() {
        if(!this.hover_objs || !this.hover_objs.length || !this.options || !this.options.show_el) return;
        var _this = this;
        this.hover_objs.hover(function() {
            $(this).find(_this.options.show_el).animate({
                "top": _this.options.show + "px"
            });
        },function() {
            $(this).find(_this.options.show_el).animate({
                "top": _this.options.hidden + "px"
            });
        })
    }
};

var box_el = $(".diploma");
if(box_el && box_el.length != 0) {
    new Hover(box_el, {
        hover_el: "li",
        change_attr: "top",
        hidden: 145,
        show: 0,
        show_el: ".hidden-box"
    })
}