package com.mystore.stepDefinitions;

import org.junit.Assert;

import com.mystore.Util.TestBase;
import com.mystore.pages.DashBoardPage;
import com.mystore.pages.HomePage;
import com.mystore.pages.PersonalInfoPage;
import com.mystore.pages.SignInPage;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PersonalInfoSteps extends TestBase{

	 
	 HomePage home;	 
	 SignInPage sign;
	 DashBoardPage dashboard;
	 PersonalInfoPage personalinfo;
	
	 @When("^user navigate to personal information page$")
	 public void user_navigate_to_personal_information_page() throws Throwable {
		 dashboard =new DashBoardPage();
		 personalinfo= dashboard.clickPersonalInfo();
		 
	 }

	 @When("^user Edit the firstname as \"([^\"]*)\"$")
	 public void user_Edit_the_firstname_as(String fname) throws Throwable {
	    
		 personalinfo.firstName.clear();
		 personalinfo.firstName.sendKeys(fname);
	 }

	 @When("^user click on save button$")
	 public void user_click_on_save_button() throws Throwable {
	    
		 personalinfo.oldPassword.sendKeys(prop.getProperty("password"));
		 personalinfo.saveButton.click();
		 
	 }

	 @Then("^Validate the success massage\\.$")
	 public void validate_the_success_massage() throws Throwable {		 
		 
		 System.out.println("text is === "+personalinfo.successMessage.getText());
		 Assert.assertEquals("Your personal information has been successfully updated.", personalinfo.successMessage.getText());
		 
	 }



}
