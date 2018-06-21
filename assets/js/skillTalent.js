function collapse(el) {
    var primaryColor = $(el).css('background');
    var secondaryColor = $(el).css('color');
    var belowWidth = window.matchMedia("(max-width: 1300px)");
    var parent = $(el).parent().find(".skillTalent");
    var skillTalent = $(el).parent().next().find(".ulGroup");
    if (belowWidth.matches) {
        if ($(el).text()==='-') {
            $(el).text('+');
            $(skillTalent).css('display', 'none');
            $(parent).css('background', secondaryColor);
            $(parent).css('color', primaryColor);
        }
        else {
            $(el).text('-');
            $(skillTalent).css('display', 'inline-block');
            $(parent).css('background', primaryColor);
            $(parent).css('color', secondaryColor);
        }
    }
};