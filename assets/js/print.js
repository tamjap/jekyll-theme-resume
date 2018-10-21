---
---

function printPDF(saveName) {
    /////////////////////////////////////////////////////////////////
    ///                                                           ///
    ///   printPDF()                                              ///
    ///     * Set all CSS to how the page should look on a full-  ///
    ///         sized screen                                      ///
    ///     * Scale to page size                                  ///
    ///     * Convert to image using html2Canvas                  ///
    ///     * Print to PDF using jsPDF                            ///
    ///                                                           ///
    /////////////////////////////////////////////////////////////////

    //Save current page status
    var currentPosition = $(window).scrollTop();
    var originalSidebarHeight = $('.sidebar').height();
    var originalContentHeight = $('.content').height();
    
    //Setup the page for printing
    window.scrollTo(0,0);
    $('.menu').hide();                                  //Do not print the menu
    window.innerWidth = {{ site.minPageWidth }} + 50;  //Set width so the full page prints

    var originalSkills = expandSection($('#ProfessionalSkills'), '.skillTalent', '.ulGroup'); //Expand Professional Skills Section
    var originalTalents = expandSection($('#PersonalTalents'), '.skillTalent', '.ulGroup'); //Expand Personal Talents Section
    var originalLanguages = expandSection($('#SpokenLanguages'), '.skillTalent', '.ulGroup'); //Expand Spoken Languages Section
    var originalExperience = expandSection($('#experience'), '.experience', '.entry');        //Expand Experience Section
    var originalEducation = expandSection($('#education'), '.education', '.entry');        //Expand Education Section

    var sidebarHeight = $('.sidebar').height();
    var contentHeight = $('.content').height();
    var pageHeight = Math.max(sidebarHeight, contentHeight);
    //alert("Sidebar: " + sidebarHeight + "; Content: " + contentHeight + "; PageHeight: " + pageHeight + "innerWidth: " + window.innerWidth);
    $('.sidebar').height(pageHeight);
    $('.content').height(pageHeight);

    var pdf = new jsPDF('p', 'pt', 'a4');
    //var originalHeight = $(document).height();
    //$(document).height(pdf.internal.pageSize.height);
    //$(document).height(originalHeight);
   //alert("Old Height: " + originalHeight + "New Height: " + pdf.internal.pageSize.height);
    pdf.addHTML(document.body,function() {
        pdf.save(saveName);
    });

    //Reset page
    //$(document).height(originalHeight);
    $(window).scrollTop(currentPosition);
    $('.sidebar').height(originalSidebarHeight);
    $('.content').height(originalContentHeight);
    $('.menu').show();

    restoreSection($('#ProfessionalSkills'), '.skillTalent', '.ulGroup', originalSkills); //Restore Professional Skills Section
    restoreSection($('#PersonalTalents'), '.skillTalent', '.ulGroup', originalTalents); //Restore Personal Talents Section
    restoreSection($('#SpokenLanguages'), '.skillTalent', '.ulGroup', originalLanguages); //Restore Spoken Languages Section
    restoreSection($('#experience'), '.experience', '.entry', originalExperience);        //Restore Experience Section
    restoreSection($('#education'), '.education', '.entry', originalEducation);        //Restore Education Section
};