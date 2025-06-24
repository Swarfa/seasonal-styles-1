$(document).ready(function() {

    // Define paths for default images (from your HTML)
    const defaultLogo = "images/four-seasons.gif";
    const defaultWear = "images/300x400.png";
    const defaultSlogan = "Outfitter for All Seasons!";
    const defaultTheme = "default-theme";

    // Data for each season
    const seasonsData = {
        "Spring": {
            slogan: "Spring into our New Collection!",
            logo: "images/spring-logo.png", // You need to create these images
            wear: "images/spring-wear.png",   // You need to create these images
            theme: "spring-theme"
        },
        "Summer": {
            slogan: "Catch the Summer Vibe with Our Gear!",
            logo: "images/summer-logo.png", // You need to create these images
            wear: "images/summer-wear.png",   // You need to create these images
            theme: "summer-theme"
        },
        "Fall": {
            slogan: "Fall for Our Cozy Autumn Styles!",
            logo: "images/fall-logo.png",   // You need to create these images
            wear: "images/fall-wear.png",     // You need to create these images
            theme: "fall-theme"
        },
        "Winter": {
            slogan: "Warm Up this Winter with Our Collection!",
            logo: "images/winter-logo.png", // You need to create these images
            wear: "images/winter-wear.png",   // You need to create these images
            theme: "winter-theme"
        }
    };

    function setActiveSeasonNav(seasonName) {
        // Remove active class from all nav links, then add to the selected one
        $('header nav ul li.seasons a').removeClass('active-season');
        $('header nav ul li.seasons a').each(function() {
            if ($(this).text() === seasonName) {
                $(this).addClass('active-season');
            }
        });
    }

    function applySeason(seasonName) {
        let seasonInfo;
        if (seasonName === "Default" || !seasonsData[seasonName]) {
            $('#logo').attr({'src': defaultLogo, 'alt': 'Eddie Browser Four Seasons Logo'});
            $('#wear').attr({'src': defaultWear, 'alt': 'Seasonal Wear'});
            $('#season-slogan').text(defaultSlogan);
            $('body').removeClass().addClass(defaultTheme);
        } else {
            seasonInfo = seasonsData[seasonName];
            $('#logo').attr({'src': seasonInfo.logo, 'alt': seasonName + ' Logo'});
            $('#wear').attr({'src': seasonInfo.wear, 'alt': seasonName + ' Wear'});
            $('#season-slogan').text(seasonInfo.slogan);
            $('body').removeClass().addClass(seasonInfo.theme);
        }
        setActiveSeasonNav(seasonName);
    }

    // Attach click event handlers to the navigation links
    $('header nav ul li.seasons a').on('click', function(e) {
        e.preventDefault();
        let seasonClicked = $(this).text();
        applySeason(seasonClicked);
    });

    // Apply default theme on page load for index.html
    // Check if this script is running on index.html (optional, but good practice if sharing scripts)
    if ($('body').length) { // A simple check that body exists
        applySeason("Default"); // Start with the default theme
    }
});