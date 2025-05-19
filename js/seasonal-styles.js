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

    function applySeason(seasonName) {
        let seasonInfo;

        if (seasonName === "Default" || !seasonsData[seasonName]) {
            // Apply default styles
            $('#logo').attr('src', defaultLogo);
            $('#wear').attr('src', defaultWear);
            $('#season-slogan').text(defaultSlogan);
            $('body').removeClass().addClass(defaultTheme);
        } else {
            seasonInfo = seasonsData[seasonName];
            $('#logo').attr('src', seasonInfo.logo);
            $('#wear').attr('src', seasonInfo.wear);
            $('#season-slogan').text(seasonInfo.slogan);
            // Remove any existing season theme classes before adding the new one
            $('body').removeClass().addClass(seasonInfo.theme);
        }
    }

    // Attach click event handlers to the navigation links
    $('header nav ul li.seasons a').on('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        
        // Extract season name from the link's href or text.
        // Using text() is safer if href might contain # or other characters.
        // Your href attributes are clean ("Spring", "Summer", etc.), so $(this).attr('href') also works.
        let seasonClicked = $(this).text(); // "Default", "Spring", "Summer", etc.
        
        applySeason(seasonClicked);
    });

    // Apply default theme on page load for index.html
    // Check if this script is running on index.html (optional, but good practice if sharing scripts)
    if ($('body').length) { // A simple check that body exists
        applySeason("Default"); // Start with the default theme
    }
});