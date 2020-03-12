$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Cucumber-Workspace/Evaluation/src/main/java/com/mystore/Features/MyStore.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Login Test",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Naigate to signin page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user log into app",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 31983701040,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Naigate_to_signin_page()"
});
formatter.result({
  "duration": 5066927805,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_log_into_app()"
});
formatter.result({
  "duration": 3371367489,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Update Personal Information (First Name) in My Account",
  "description": "",
  "id": "login-feature;update-personal-information-(first-name)-in-my-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user navigate to personal information page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Edit the firstname as \"testfirst\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate the success massage.",
  "keyword": "Then "
});
formatter.match({
  "location": "PersonalInfoSteps.user_navigate_to_personal_information_page()"
});
formatter.result({
  "duration": 1724363816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testfirst",
      "offset": 28
    }
  ],
  "location": "PersonalInfoSteps.user_Edit_the_firstname_as(String)"
});
formatter.result({
  "duration": 329884453,
  "status": "passed"
});
formatter.match({
  "location": "PersonalInfoSteps.user_click_on_save_button()"
});
formatter.result({
  "duration": 1342483419,
  "status": "passed"
});
formatter.match({
  "location": "PersonalInfoSteps.validate_the_success_massage()"
});
formatter.result({
  "duration": 66008194,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Login Test",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Naigate to signin page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user log into app",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 43267232426,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Naigate_to_signin_page()"
});
formatter.result({
  "duration": 2314532816,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_log_into_app()"
});
formatter.result({
  "duration": 3394374162,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Order T-Shirt",
  "description": "",
  "id": "login-feature;order-t-shirt",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "user click on Tshirt menu",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Uer click on selected product",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Add procudt to cart",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click on proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user should navigate to summary and click on proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should navigate to address confirmation stage and click on proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user should navigate to SHIPPING details and click on checkbox and proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select payment method as pay by check",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user click on I confirm my order",
  "keyword": "Then "
});
formatter.match({
  "location": "DashBoaardSteps.user_click_on_Tshirt_menu()"
});
formatter.result({
  "duration": 3058843241,
  "status": "passed"
});
formatter.match({
  "location": "DashBoaardSteps.uer_click_on_selected_product()"
});
formatter.result({
  "duration": 2871619972,
  "status": "passed"
});
formatter.match({
  "location": "DashBoaardSteps.add_procudt_to_cart()"
});
formatter.result({
  "duration": 205085362,
  "status": "passed"
});
formatter.match({
  "location": "DashBoaardSteps.user_click_on_proceed_to_checkout()"
});
formatter.result({
  "duration": 3093320921,
  "status": "passed"
});
formatter.match({
  "location": "DashBoaardSteps.user_should_navigate_to_summary_and_click_on_proceed_to_checkout()"
});
formatter.result({
  "duration": 1590038139,
  "status": "passed"
});
formatter.match({
  "location": "DashBoaardSteps.user_should_navigate_to_address_confirmation_stage_and_click_on_proceed_to_checkout()"
});
formatter.result({
  "duration": 1276711286,
  "status": "passed"
});
formatter.match({
  "location": "DashBoaardSteps.user_should_navigate_to_SHIPPING_details_and_click_on_checkbox_and_proceed_to_checkout()"
});
formatter.result({
  "duration": 1986165308,
  "status": "passed"
});
formatter.match({
  "location": "DashBoaardSteps.select_payment_method_as_pay_by_check()"
});
formatter.result({
  "duration": 1337377838,
  "status": "passed"
});
formatter.match({
  "location": "DashBoaardSteps.user_click_on_I_confirm_my_order()"
});
formatter.result({
  "duration": 2020357662,
  "status": "passed"
});
});