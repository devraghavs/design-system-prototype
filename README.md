# xt-ui-kit

# Eslint

Command to check the lint error- npm run lint
Command to fix the lint error- npm run lint:fix

# prettier

to apply prettier changes -> npm run prettier-write
to check the code is in prettier style -> npm run prettier-check
Rules for commiting message

<!-- Earlier we use to commit the file using  -->

git commit -m "This is fail"

 <!-- But after using commitlint we are allowed to only commit the messages using a particular format  -->

git commit -m"ci: This is pass"

Here "ci" is type of message and add ":" to specify the key then " " space is mandatory then "the message you want has to start from lowercase"

<!-- example of commit message : -->

git commit -m "ci: initialised basic js project, added commitlint and husky to lint commit messages"

<!-- Types -->

@ Set of types that can be used are :
[
'build',
'chore',
'ci',
'docs',
'feat',
'fix',
'perf',
'refactor',
'revert',
'style',
'test'
];

<!-- How to start the project -->

We need to start the project with 'npm ci --legacy--peer--deps'

<!-- end -->

<!-- css variable manipulation -->
<!-- How to manipulate css variables given by us  -->

The below file theme file includes the global styling variables. To manipulate or make changes at global level, developer can add one css file at index level with strict use of variable names as mentioned

/\*_Importing font styles_/
@import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap');

- {
  font-family: 'Hind', sans-serif;
  font-style: normal;
  }
  .screen-reader-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  }

:root {

  <!-- /**Variables for theme pallete */ -->

--xt_ui_kit_primary_color: #fe414d;
--xt_ui_kit_secondary_color: #333333;
--xt_ui_kit_danger_color: #eb5757;

  <!-- /**Color not are in use for theme pallete */ -->

--xt_ui_kit_success_color: #3ba667;
--xt_ui_kit_positive_color: #6fcf97;
--xt_ui_kit_darkyellow_color: #ffe63b;
--xt_ui_kit_warning_color: #ff9b53;
--xt_ui_kit_green_color: #00e6c3;
--xt_ui_kit_mixyellow_color: #f7d494;
--xt_ui_kit_lightvoilet_color: #f6f2fd;
--xt_ui_kit_lightred_color: #fcb7b7;
--xt_ui_kit_lightgreen_color: #c9ecdd;
--xt_ui_kit_orange_color: #e88228;
--xt_ui_kit_transparent_color: #f2f2f2;

  <!-- /**Normal color pallete*/ -->

--xt_ui_kit_lightgray_color: #a9a9a9;
--xt_ui_kit_blue_color: #079fff;
--xt_ui_kit_white_color: #ffffff;
--xt_ui_kit_black_color: #000000;
--xt_ui_kit_lightyellow_color: #f6f8b5;
--xt_ui_kit_yellow_color: #fbec93;
--xt_ui_kit_grey_color: #b4b4b4;
--xt_ui_kit_bluishwhite_color: #f5faff;
--xt_ui_kit_voilet_color: #a290c9;
--xt_ui_kit_darkgreen_color: #219653;
--xt_ui_kit_brown_color: #8b7113;

  <!-- /**background colors*/ -->

--xt_ui_kit_disabled_color: #eeeeee;
--xt_ui_kit_background_color: #c4c4c4;
--xt_ui_kit_darkgray_color: #849cb5;

  <!-- /**Application font weight*/ -->

--xt_ui_kit_light: 300;
--xt_ui_kit_regular: 400;
--xt_ui_kit_medium: 500;
/\*_Not in use font weight_/
--xt_ui_kit_bold: 700;
--xt_ui_kit_semi_bold: 600;

  <!-- /**Application font size*/ -->

--xt_ui_kit_values: 14px;
--xt_ui_kit_input_field_label: 12px;

  <!-- /**Not used Application font size*/ -->

--xt_ui_kit_modal_headings: 20px;
--xt_ui_kit_major_headings: 36px;
--xt_ui_kit_sub_headings: 22px;
--xt_ui_kit_modal_descriptions: 18px;
--xt_ui_kit_information_strips: 16px;

  <!-- /** font sizes and padding */ -->

--xt_ui_kit_extrasmall_font: 10px;
--xt_ui_kit_small_font: 12px;
--xt_ui_kit_medium_font: 16px;
--xt_ui_kit_large_font: 18px;
--xt_ui_kit_padding_extrasmall_button: 0px 8px;
--xt_ui_kit_padding_small_button: 0px 12px;
--xt_ui_kit_medium_button: 0px 16px;
--xt_ui_kit_large_button: 0px 18px;
}

<!-- end -->
