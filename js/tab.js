/**
 * Created by lily on 17/1/22.
 */
function Tab(el,options) {
    this.init(el,options);
}
Tab.prototype = {
    constructor: Tab,
    init: function(el, options) {
        if((el = $(el)).length == 0) return;
        this.el = el;
        this.options = options || {
            con_class: ".menu-con",
            lis: ".menu-list li",
            active_class: "on"
        };
        this.lis = this.el.find(this.options.lis);
        this.cons = this.el.find(this.options.con_class);
        this.lis_click();
    },
    lis_click: function(){
        var _this = this;
        this.lis.on("click", function(){
            var index = $(this).index();
            _this.cons.hide().eq(index).show();
            _this.lis.removeClass("on");
            $(this).addClass("on");
        })
    }
};

var all_menus = $(".menu");
$.each(all_menus,function(index,item){
    new Tab($(item));
});