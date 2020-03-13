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
  "duration": 28101499901,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Naigate_to_signin_page()"
});
formatter.result({
  "duration": 2608294306,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_log_into_app()"
});
formatter.result({
  "duration": 3239174880,
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
  "name": "Validate the success massage",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "validate changed first name on top of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "PersonalInfoSteps.user_navigate_to_personal_information_page()"
});
formatter.result({
  "duration": 1342319499,
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
  "duration": 282054559,
  "status": "passed"
});
formatter.match({
  "location": "PersonalInfoSteps.user_click_on_save_button()"
});
formatter.result({
  "duration": 1636809257,
  "status": "passed"
});
formatter.match({
  "location": "PersonalInfoSteps.validate_the_success_massage()"
});
formatter.result({
  "duration": 65032315,
  "status": "passed"
});
formatter.match({
  "location": "PersonalInfoSteps.validate_changed_first_name_on_top_of_the_page()"
});
formatter.result({
  "duration": 35617773,
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
  "duration": 41177039425,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Naigate_to_signin_page()"
});
formatter.result({
  "duration": 3139928834,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_log_into_app()"
});
formatter.result({
  "duration": 3067868620,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Order T-Shirt",
  "description": "",
  "id": "login-feature;order-t-shirt",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "user click on Tshirt menu",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Uer click on selected product",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Add procudt to cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user click on proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should navigate to summary and click on proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user should navigate to address confirmation stage and click on proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user should navigate to SHIPPING details and click on checkbox and proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select payment method as pay by check",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user click on I confirm my order",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user navigate to Order history page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Validate the order refference",
  "keyword": "Then "
});
formatter.match({
  "location": "DashBoaardSteps.user_click_on_Tshirt_menu()"
});
formatter.result({
  "duration": 3456033935,
  "status": "passed"
});
formatter.match({
  "location": "DashBoaardSteps.uer_click_on_selected_product()"
});
formatter.result({
  "duration": 2828021483,
  "status": "passed"
});
formatter.match({
  "location": "DashBoaardSteps.add_procudt_to_cart()"
});
formatter.result({
  "duration": 127393565,
  "status": "passed"
});
formatter.match({
  "location": "DashBoaardSteps.user_click_on_proceed_to_checkout()"
});
formatter.result({
  "duration": 3607206380,
  "status": "passed"
});
formatter.match({
  "location": "DashBoaardSteps.user_should_navigate_to_summary_and_click_on_proceed_to_checkout()"
});
formatter.result({
  "duration": 1401153201,
  "status": "passed"
});
formatter.match({
  "location": "DashBoaardSteps.user_should_navigate_to_address_confirmation_stage_and_click_on_proceed_to_checkout()"
});
formatter.result({
  "duration": 1427408653,
  "status": "passed"
});
formatter.match({
  "location": "DashBoaardSteps.user_should_navigate_to_SHIPPING_details_and_click_on_checkbox_and_proceed_to_checkout()"
});
formatter.result({
  "duration": 2321530876,
  "status": "passed"
});
formatter.match({
  "location": "DashBoaardSteps.select_payment_method_as_pay_by_check()"
});
formatter.result({
  "duration": 1202587724,
  "status": "passed"
});
formatter.match({
  "location": "DashBoaardSteps.user_click_on_I_confirm_my_order()"
});
formatter.result({
  "duration": 2515989946,
  "status": "passed"
});
formatter.match({
  "location": "DashBoaardSteps.user_navigate_to_Order_history_page()"
});
formatter.result({
  "duration": 2239077377,
  "status": "passed"
});
formatter.match({
  "location": "DashBoaardSteps.Validate_the_order_refference()"
});
formatter.result({
  "duration": 27520422,
  "status": "passed"
});
});