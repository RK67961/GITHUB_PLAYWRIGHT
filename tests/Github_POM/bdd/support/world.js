import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import GithubHomePage from '../../github_pages/GithubHomePage.js';
import NewRepository from '../../github_pages/GithubNewRepositoryPage.js';
class CustomWorld {
  async init() {
    this.browser = await chromium.launch({ headless: false });
     this.context = await this.browser.newContext({
      storageState: 'playwright/.auth/github_adminstoragestatePOM.json'
    });
   this.page = await this.context.newPage();

    this.homepage = new GithubHomePage(this.page);
    this.newRepo = new NewRepository(this.page);
  }
  async close() {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
  }
}
setWorldConstructor(CustomWorld);