function collapse(el, parentSelector, childSelector) {
    var belowWidth = window.matchMedia("(max-width: 1300px)");
    var parent = $(el).parents(parentSelector);
    var skillTalent = $(parent).find(childSelector);
    if (belowWidth.matches) {
        if ($(el).text()==='-') {
            $(el).text('+');
            $(skillTalent).css('display', 'none');
        }
        else {
            $(el).text('-');
            $(skillTalent).css('display', 'inline-block');
        }
    }
};