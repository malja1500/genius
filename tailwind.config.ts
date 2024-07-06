/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#2196F3",
        secondary: "#DAEEFF",
        success: "rgba(40, 199, 111, 0.12)",
        danger: "rgba(234, 84, 85, 0.12)",
        footerBackground: "#252641",
        footerCopyRightBackground: "#00000033",
        socialMediaIcon: "#263238",
        filterTitle: "#ECEFF1",
        rangeSlider: "#C8E6C9",
        rangeSliderCompleted: "#60B764",
        paginationPreviousBackground: "#ECEFF1",
        filterGridView: "#ECEFF1",
        courseStyleTwoDetails: "#ECEFF1",
        likeDislikeIcon: "#ECEFF1",
        courseDetailsAccordion: "#ECEFF1",
        darkBackground: "#1A1A2E",
        newsDetailsShareBox: "#ECEFF1",
        dashboardActiveMenuItem: "#00000099",
        dashboardHoverMenuItem: "#0000001A",
        dashboardTitleBox: "#ECEFF1",
        dashboardDarkMode: "#FFFFFF33",
        landingServicesBox: "rgb(36 42 56 / 1)",
        profileImageModalBackground: "rgba(82, 82, 82, 0.7)",
        profileImageModalCloseButton: "#B9B9B9",
        twoStepVerificationCloseButton: "#F1F7FF",
      },
      backgroundImage: {
        headerBg: "url('/src/assets/images/Header/header-bg.png')",
        headerBgBottom:
          "url('/src/assets/images/Landing/header-bg-bottom.png')",
        landingPageProgrammingLanguagesIcon:
          "url('/src/assets/images/Landing/Icons.png')",
        landingCategoriesTitleAfter:
          "url('/src/assets/images/Landing/LandingCategories/title-after.svg')",
        landingCategoriesTitleDarkAfter:
          "url('/src/assets/images/Landing/LandingCategories/title-after-dark.svg')",
        landingCategoriesItemsAfter:
          "url('/src/assets/images/Landing/LandingCategories/items-after.svg')",
        coursesLandingPageDots:
          "url('/src/assets/images/Courses/HeroSection/dots.svg')",
        coursesLandingPageDotsDark:
          "url('/src/assets/images/Courses/HeroSection/dots-dark.svg')",
        coursesSelectOptionBackground:
          "url('/src/assets/images/Courses/Icons/select-icon.svg')",
        coursesSelectOptionBackgroundDark:
          "url('/src/assets/images/Courses/Icons/select-icon-dark.svg')",
        coursesSelectOptionSort:
          "url('/src/assets/images/Courses/Icons/sort.svg')",
        coursesSelectOptionSortDark:
          "url('/src/assets/images/Courses/Icons/sort-dark.svg')",
        newsHeroSectionTitleDescriptionBeforeBackground:
          "url('/src/assets/images/News/news-hero-section-right-image.svg')",
        newsHeroSectionTitleDescriptionBeforeDarkBackground:
          "url('/src/assets/images/News/news-hero-section-right-image-dark.svg')",
        newsHeroSectionTitleDescriptionCircleBackground:
          "url('/src/assets/images/News/news-hero-section-circle.svg')",
        newsHeroSectionTitleDescriptionBackground:
          "url('/src/assets/images/News/dots.svg')",
        dashboardMyCoursesCoursesPerPageAndEditProfileSelectBoxIcon:
          "url('/src/assets/images/Courses/Icons/select-icon.svg')",
        dashboardMyCoursesCoursesPerPageAndEditProfileSelectBoxDarkIcon:
          "url('/src/assets/images/Courses/Icons/select-icon-dark.svg')",
      },
      colors: {
        primaryColor: "#2196F3",
        text1: "#263238",
        text2: "#455A64",
        text3: "#607D8B",
        successText: "rgb(40, 199, 111)",
        dangerText: "rgb(234, 84, 85)",
        red: "#F44336",
        darkText: "#CCCCCC",
        dashboardDarkModeLightModeIcon: "#e9e9e9",
      },
      fontFamily: {
        yekanBakh: "YekanBakh",
      },
      boxShadow: {
        primaryShadow: "0px 0px 50px 0px #0000000D",
        landingCategoryItemShadow: "0px 10px 50px 0px #0000000D",
        landingTeacherCoursesCount: "0px 0px 20px 0px #0000004D",
        footerJoinInputShadow: "0px 0px 20px 0px #00000005",
        footerJoinButtonShadow: "0px 0px 20px 0px #2196F333",
        courseAddToCarButtonShadow: "0px 0px 20px 0px #0000000D",
        courseAddCommentButton: "0px 0px 20px 0px #0000000D",
        authInputShadow: "0px 0px 20px 0px #00000005",
        courseDetailsHeroSectionSearchBoxShadow: "0px 0px 20px 0px #0000000D",
        newsSortActiveTabShadow: "0px 0px 20px 0px #0000001A",
        dashboardNotificationHomeShadow: "0px 0px 20px 0px #0000000D",
        profileImageModalShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
      },
      borderColor: {
        filterAccordionBorder: "#ECEFF1",
        courseDetailsInformationBox: "#ECEFF1",
        courseDetailsTabsBorder: "#ECEFF1",
        commentsBorder: "#CFD8DC",
        darkBorder: "#585454",
        authInputBorder: "#CFD8DC",
        authNumberInputBorder: "#CFD8DC",
        dashboardUserInfoEditProfileBorder: "#CFD8DC",
        editProfileFormInputBorder: "#CCCCCC",
      },
      animation: {
        pulse: "pulse 1s infinite",
      },
      keyframes: {
        pulse: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
