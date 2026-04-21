import { test, expect } from '@playwright/test';
import  {GithubHomePage}  from '../github_pages/GithubHomePage';
import { NewRepository } from '../github_pages/GithubNewRepositoryPage';
import * as fs from 'fs';
import { parse } from 'csv-parse/sync';
const csvContent = fs.readFileSync('tests/test-data/repodata1.csv');
const testData = parse(csvContent, {
    columns: true,
    skip_empty_lines: true
});

console.log('CSV Data:', testData);
for (const data of testData) {
    test(`Verify repo creation-${data.reponame} @other`,async ({ page }) => {
        const reponame = `${data.reponame}-${Date.now()}`;
        const repodescription = data.repodescription;
        const homepage = new GithubHomePage(page);
        await homepage.openHomePage();
        await homepage.createNewRepo();
        const newrepo = new NewRepository(page);
        await newrepo.validateCreateNewRepositoryPage();
        await newrepo.fillthedetails(reponame, repodescription);
        await newrepo.validateRepositoryCreated(reponame);
    });
}