---
---

function collapse(el, parentSelector, childSelector) {
    var belowWidth = window.matchMedia("(max-width: " + {{ site.minPageWidth }} + "px)");
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

    return;
};

function expandSection (el, parentSelector, childSelector) {
    var parent = $(el).parents(parentSelector);
    var skillTalent = $(parent).find(childSelector);
    var originalSetting = $(skillTalent).css('display');
    $(skillTalent).css('display', 'inline-block');
    return originalSetting;
};

function restoreSection(el, parentSelector, childSelector, originalSetting) {
    var parent = $(el).parents(parentSelector);
    var skillTalent = $(parent).find(childSelector);
    $(skillTalent).css('display', originalSetting);
};