function replaceParagraphProjects() {
        console.log("replaceParagraphProjects");
        var ParagraphProjects;

        ParagraphProjects = document.getElementById("ParagraphProjects");

        ParagraphProjects.innerHTML = "This is a website I designed using illustrator which may be implemented onto this website, because it currently is using a template for the Navbar from bootstrap, and very minimal css.";
    }

    function replaceParagraphMobile() {
        console.log("replaceParagraphMobile");
        var ParagraphMobile;

        ParagraphMobile = document.getElementById("ParagraphMobile");

        ParagraphMobile.innerHTML = "This is a mobile version for the previous design.";
    }
    //runs my replace functions
    replaceParagraphMobile()
    replaceParagraphProjects()