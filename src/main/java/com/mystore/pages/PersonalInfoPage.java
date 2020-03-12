package com.mystore.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.mystore.Util.TestBase;

public class PersonalInfoPage extends TestBase{
	
	@FindBy(name="firstname")
	public WebElement firstName;
	
	@FindBy(name="lastname")
	public WebElement lastName;

	@FindBy(name="old_passwd")
	public WebElement oldPassword;
	
	@FindBy(name="submitIdentity")
	public WebElement saveButton;
	
	
	@FindBy(xpath="//div[@id='center_column']/div/p")
	public WebElement successMessage;
	
	
	
	public PersonalInfoPage(){
		PageFactory.initElements(driver, this);
	}

}
