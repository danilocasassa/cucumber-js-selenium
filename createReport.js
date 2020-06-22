require("dotenv/config");
var reporter = require("cucumber-html-reporter");
let showReport = false;

if (process.argv.includes("--showReport")) showReport = true;

var options = {
  theme: "bootstrap",
  jsonFile: "./reports/cucumber_report.json",
  output: "./reports/cucumber_report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: showReport,
  name: "TESTES CONCLUÍDOS",
  screenshotsDirectory: "./reports/screenshots/",
  storeScreenshots: true,
  scenarioTimestamp: true,
};

reporter.generate(options);
