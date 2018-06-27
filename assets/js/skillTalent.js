function collapse(el, parentClass, childClass) {
    var belowWidth = window.matchMedia("(max-width: 1300px)");
    var parent = $(el).parents(parentClass);
    var skillTalent = $(parent).find(childClass);
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