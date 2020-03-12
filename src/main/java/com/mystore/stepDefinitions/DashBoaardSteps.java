package com.mystore.stepDefinitions;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.mystore.Util.TestBase;
import com.mystore.pages.DashBoardPage;
import com.mystore.pages.HomePage;
import com.mystore.pages.SignInPage;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DashBoaardSteps extends TestBase{

	HomePage home;	 
	 SignInPage sign;
	 DashBoardPage dashboard;
	 JavascriptExecutor js ;
	 WebDriverWait wait =new WebDriverWait(driver,30);
	
	 @When("^user click on Tshirt menu$")
	 public void user_click_on_Tshirt_menu() throws Throwable {
		 dashboard =new DashBoardPage();
		 WebDriverWait wait =new WebDriverWait(driver,30);
		 wait.until(ExpectedConditions.elementToBeClickable(dashboard.tShirtMenu));		
		 dashboard.tShirtMenu.click();
		
	 }
	
	@When("^Uer click on selected product$")
	public void uer_click_on_selected_product() throws Throwable {
		 WebDriverWait wait =new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.elementToBeClickable(dashboard.tshirt));
		 dashboard.tshirt.click();
	}
	
	@When("^Add procudt to cart$")
	public void add_procudt_to_cart() throws Throwable {
		dashboard =new DashBoardPage();
		WebDriverWait wait =new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.elementToBeClickable(dashboard.addProductCart));

		 js = (JavascriptExecutor) driver;		
		js.executeScript("arguments[0].click();", dashboard.addProductCart);
	}

	@When("^user click on proceed to checkout$")
	public void user_click_on_proceed_to_checkout() throws Throwable {		
		wait.until(ExpectedConditions.elementToBeClickable(dashboard.proceedToCheckOut));
		dashboard.proceedToCheckOut.click();
		
	}

	@When("^user should navigate to summary and click on proceed to checkout$")
	public void user_should_navigate_to_summary_and_click_on_proceed_to_checkout() throws Throwable {
		wait.until(ExpectedConditions.elementToBeClickable(dashboard.summaryProceedToCheckOut));
		 js = (JavascriptExecutor) driver;		
		js.executeScript("arguments[0].click();", dashboard.summaryProceedToCheckOut);
		
	}

	@When("^user should navigate to address confirmation stage and click on proceed to checkout$")
	public void user_should_navigate_to_address_confirmation_stage_and_click_on_proceed_to_checkout() throws Throwable {
		wait.until(ExpectedConditions.elementToBeClickable(dashboard.addressProceedToCheckOut));		
		js = (JavascriptExecutor) driver;		
		js.executeScript("arguments[0].click();", dashboard.addressProceedToCheckOut);
	}

	@When("^user should navigate to SHIPPING details and click on checkbox and proceed to checkout$")
	public void user_should_navigate_to_SHIPPING_details_and_click_on_checkbox_and_proceed_to_checkout() throws Throwable {
		dashboard.termsOfservice.click();		
		
		wait.until(ExpectedConditions.elementToBeClickable(dashboard.shoppingProceedToCheckOut));
		js = (JavascriptExecutor) driver;		
		js.executeScript("arguments[0].click();", dashboard.shoppingProceedToCheckOut);
		
		
	}

	@When("^select payment method as pay by check$")
	public void select_payment_method_as_pay_by_check() throws Throwable {
		wait.until(ExpectedConditions.elementToBeClickable(dashboard.paymenetMode));
		js = (JavascriptExecutor) driver;		
		js.executeScript("arguments[0].click();", dashboard.paymenetMode);
		
		
	}

	@Then("^user click on I confirm my order$")
	public void user_click_on_I_confirm_my_order() throws Throwable {
		wait.until(ExpectedConditions.elementToBeClickable(dashboard.confirmOrder));
		js = (JavascriptExecutor) driver;		
		js.executeScript("arguments[0].click();", dashboard.confirmOrder);
	}


}
