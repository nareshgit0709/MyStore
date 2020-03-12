package com.mystore.stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.mystore.Util.TestBase;
import com.mystore.pages.DashBoardPage;
import com.mystore.pages.HomePage;
import com.mystore.pages.SignInPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition extends TestBase{

	 	 
	 HomePage home;	 
	 SignInPage sign;
	 DashBoardPage dashboard;
	
	
	 @Given("^user is on Home Page$")
	 public void user_is_on_home_page(){
		
		 initialization();
		 home=new HomePage();
		// sign=new SignInPage();
		 
		  dashboard =new DashBoardPage();
		 
		 System.out.println("title== "+ home.validateHomePageTitle());
	 }
	
	 @When("^Naigate to signin page$")
	 public void Naigate_to_signin_page() throws InterruptedException{
		 
		 sign=home.click_signin();
		 
		System.out.println("title== "+ sign.validateLoginPageTitle());
	
	 }
	
	 @Then("^user log into app$")
	 public void user_log_into_app() throws InterruptedException{
	 
		sign.signIn(prop.getProperty("username"), prop.getProperty("password"));
		
		 
	 }
	
	



	 @Then("^Close the browser$")
	 public void close_the_browser(){
		 driver.quit();
	 }
	
	
	

	 }
