
import { test, expect } from '../fixtures'; 
import  xlsx from 'xlsx'; 

const workbook = xlsx.readFile('tests/test-data/repodata.xlsx');
const sheet    = workbook.Sheets[workbook.SheetNames[0]];
const testData = xlsx.utils.sheet_to_json(sheet);

for (const data of testData) {
  test.skip(`Verify repo creation on iPad - ${data.reponame} @ipad`,
    async ({ homepage, newrepo, page }) => {
    const reponame =`${data.reponame}-${Date.now()}`;
    const repodescription = data.repodescription;
    await page.screenshot({path: `./screenshots/ipad-repo-before-${data.reponame}.png`});
    await homepage.openHomePage();
    await page.screenshot({path: `./screenshots/ipad-repo-homepage-${data.reponame}.png`});
    await homepage.createNewRepo();
    await page.screenshot({path: `./screenshots/ipad-repo-createpage-${data.reponame}.png`});
    await newrepo.validateCreateNewRepositoryPage();
    await newrepo.fillthedetails(reponame, repodescription);
    await page.screenshot({path: `./screenshots/ipad-repo-filled-${data.reponame}.png`,fullPage: true});
    await newrepo.validateRepositoryCreated(reponame);
    await page.screenshot({path: `./screenshots/ipad-repo-created-${data.reponame}.png`,fullPage: true});
    console.log(`Repo created on iPad: ${reponame}`);
  });
}