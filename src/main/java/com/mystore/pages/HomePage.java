package com.mystore.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.mystore.Util.TestBase;

public class HomePage extends TestBase{



	
	@FindBy(xpath="//a[@class='login']")
	WebElement signIn;

	public HomePage(){
		PageFactory.initElements(driver, this);
	}


	public String validateHomePageTitle(){

		return driver.getTitle();
	}
	
	public SignInPage click_signin()  {
		
		signIn.click();
		
		return new SignInPage();
		
	}


}
