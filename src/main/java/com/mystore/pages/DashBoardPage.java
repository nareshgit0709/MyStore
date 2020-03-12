package com.mystore.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.mystore.Util.TestBase;

public class DashBoardPage extends TestBase{




	@FindBy(xpath="//img[@title='Faded Short Sleeve T-shirts']")
	public WebElement tshirt;

	@FindBy(xpath="//div[@id='block_top_menu']/ul[1]/li[3]/a[1]")
	public WebElement tShirtMenu;

	@FindBy(xpath="//span[contains(text(),'Add to cart')]")
	public WebElement addProductCart;

	@FindBy(xpath="//a[contains(@title,'Proceed to checkout')]/span[contains(text(),'Proceed to checkout')]")
	public WebElement proceedToCheckOut;

	@FindBy(xpath="//p[@class='cart_navigation clearfix']/a/span")
	public WebElement summaryProceedToCheckOut;


	@FindBy(xpath="//p[@class='cart_navigation clearfix']/button[@name='processAddress']/span")
	public WebElement addressProceedToCheckOut;


	@FindBy(xpath="//p[@class='cart_navigation clearfix']/button[@name='processCarrier']/span")
	public WebElement shoppingProceedToCheckOut;

	@FindBy(name="cgv")
	public WebElement termsOfservice;

	@FindBy(xpath="//a[contains(@title,'Pay by bank wire')]/span[contains(text(),'(order processing will be longer)')]")
	public WebElement paymenetMode;

	@FindBy(xpath="//button[@type='submit']/span[contains(text(),'I confirm my order')]")
	public WebElement confirmOrder;


	@FindBy(xpath="//a[@title='Information']")
	public WebElement personalInfo;


	public DashBoardPage(){
		PageFactory.initElements(driver, this);
	}


	public PersonalInfoPage clickPersonalInfo() {
		
		personalInfo.click();
		
		return new PersonalInfoPage();
		
	}


}
