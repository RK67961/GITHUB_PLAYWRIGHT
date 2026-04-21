// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default({
  testDir: './',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  reporter:  [
    ['html', { open: 'always' }],
    // ['allure-playwright',{ open: 'always' }]
  //     ['playwright-html-reporter', {
  //   outputFolder: 'extent-report',
  //   filename: 'index.html',
  //   title: 'Playwright Test Report',
  //   includeFailureMsg: true,
  //   includeSuiteOnFailure: true,
  //   open: 'always'
  // }]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    slowMo: 10000,
    video: 'on'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        //storageState: 'playwright/.auth/practise_adminloginstate.json',
      }
    },
    {
      name: 'githubadmin',
      testDir: './tests/github',
      grep: /@user1/,
      use: {
        storageState: 'playwright/.auth/github_loginstate.json',
        baseURL: 'https://github.com'
      }
    },
    {
      name: 'githubotheruser',
      testDir: './tests/github',
      grep: /@user2/,
      use: {
        storageState: 'playwright/.auth/github_loginstateuser2.json',
        baseURL: 'https://github.com'
      }
    },
      {
        name: 'githubPOM',
      testDir: './tests/Github_POM',
        grep: /@other/,
      use: {
        trace: 'on',
        screenshot: 'only-on-failure',
        storageState: 'playwright/.auth/github_adminstoragestatePOM.json'
        
      }
      },
      {
      name: 'githubPOM-mobile',
      testDir: './tests/Github_POM/mobile_tests', 
      use: {
        ...devices['Pixel 5'],                    
        trace: 'on-first-retry',
        screenshot: 'on',
        storageState: 'playwright/.auth/github_adminstoragestatePOM.json'
      }
    },
    {
      name: 'githubPOM-ipad',
      testDir: './tests/Github_POM/mobile_tests',
      use: {
        ...devices['iPad Pro 11'],
        grep:'@ipad',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        storageState: 'playwright/.auth/github_adminstoragestatePOM.json'
      }
    },
    {
      name: 'githubPOM-accessibility',
      testDir: './tests/Github_POM/accessibility_tests',
      use: {
        ...devices['Desktop Chrome'],
        trace: 'on-first-retry',
        grep:'@accessibility',
        screenshot: 'only-on-failure',
        storageState: 'playwright/.auth/github_adminstoragestatePOM.json'
      }
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

