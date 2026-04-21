import { test, expect } from '../fixtures';
test('Verify drag and drop in github @other',async({homepage,profilepage,projectspage})=>{ 
    await homepage.openHomePage();
    await homepage.navigatetoProfile();
    await profilepage.projectsLink.click();
    await profilepage.myproject.click();
    await projectspage.dragIssueToInProgress();
    await expect(projectspage.inProgressColumn).toContainText('Drag me');
});