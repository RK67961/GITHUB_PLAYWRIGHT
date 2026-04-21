export class GitHubProjectsPage {
    constructor(page) {
        this.page = page;
        this.dragSource = page.locator('[data-board-column="Todo"]').getByRole('button', { name: /Drag me/i }).first();
        this.inProgressColumn = page.locator('[data-board-column="In Progress"]');
        this.todoIssueText = page.getByText('Todo').first();
    }
    async dragIssueToInProgress() {
    // await this.dragSource.scrollIntoViewIfNeeded();
    // await this.inProgressColumn.scrollIntoViewIfNeeded();
    // await this.dragSource.dragTo(this.inProgressColumn);
    await this.dragSource.scrollIntoViewIfNeeded();
        await this.inProgressColumn.scrollIntoViewIfNeeded();

        const sourceBox = await this.dragSource.boundingBox();
        const targetBox = await this.inProgressColumn.boundingBox();

        await this.page.mouse.move(
            sourceBox.x + sourceBox.width / 2,
            sourceBox.y + sourceBox.height / 2
        );

        await this.page.mouse.down();

        await this.page.mouse.move(
            targetBox.x + targetBox.width / 2,
            targetBox.y + targetBox.height / 2,
            { steps: 10 }
        );

        await this.page.mouse.up();
    }
    async isTodoVisible() {
        return await this.todoIssueText.isVisible();
    }
    
}