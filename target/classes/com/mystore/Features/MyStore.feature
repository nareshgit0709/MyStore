Feature: Login Feature

Background: Login Test
Given user is on Home Page
When  Naigate to signin page
And 	user log into app 

Scenario: Update Personal Information (First Name) in My Account
When user navigate to personal information page
And  user Edit the firstname as "testfirst"
And  user click on save button
Then Validate the success massage.

Scenario:  Order T-Shirt
When user click on Tshirt menu
And  Uer click on selected product
And  Add procudt to cart
And  user click on proceed to checkout
And  user should navigate to summary and click on proceed to checkout
And  user should navigate to address confirmation stage and click on proceed to checkout
And  user should navigate to SHIPPING details and click on checkbox and proceed to checkout
And  select payment method as pay by check
Then user click on I confirm my order 
		