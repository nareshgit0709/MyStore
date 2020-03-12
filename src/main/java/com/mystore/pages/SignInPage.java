package com.mystore.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.mystore.Util.TestBase;

public class SignInPage extends TestBase{



	
	@FindBy(name="email")
	public WebElement email_address;

	@FindBy(name="passwd")
	public WebElement password;
	
	@FindBy(name="SubmitLogin")
	public WebElement signIn;
	
	
	public SignInPage(){
		PageFactory.initElements(driver, this);
	}


	public String validateLoginPageTitle(){

		return driver.getTitle();
	}
	
	public DashBoardPage signIn(String username , String pass) throws InterruptedException {
		
		email_address.sendKeys(username);
		password.sendKeys(pass);		
		signIn.click();
		
		Thread.sleep(1000);
		
		return new DashBoardPage();
	}

}
