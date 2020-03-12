package com.mystore.MyRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "D:\\Cucumber-Workspace\\Evaluation\\src\\main\\java\\com\\mystore\\Features\\MyStore.feature", 
			glue={"com.mystore.stepDefinitions"}, 
			format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, 
			monochrome = true,
			strict = true, 
			dryRun = false 
			)
	 
	public class TestRunner {
	 
	}
	
	
	

