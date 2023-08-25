# Contributing Process

### Step 1: Prepare a pull request for review
Branch off `master` for your PR branch. The naming should be the same as the one we use for general development workflows, which you can find it [here](https://common-ground.atlassian.net/wiki/spaces/~5f809b643fe0760069b575da/pages/10518529/CashRent+Development+Workflow).

Once your branch fulfills the issue it tackles, you are ready to create a pull request (PR).

Fill out [the pull request template](https://github.com/cashrent/analytics-plugin-posthog/blob/main/.github/PULL_REQUEST_TEMPLATE/NEW_PULL_REQUEST.md).
Before you are ready for a team code review, you will also have to fill out the following sections in the template:

- **Resolves** - Just use a link to a JIRA ticket, like [COM-0](https://common-ground.atlassian.net/browse/COM-0).
Know that PRs without linked tickets, **will not** be reviewed.

- **Impact** - We stick to [Semantic Versioning](https://semver.org/lang/es/), so your PR should be marked as one of the following:
    - **patch**: resolves a critical bug within the core components library.
    - **major**: introduces breaking changes within the library.
    - **minor**: introduces backwards compatible changes.

- **Type** - Choose from one of the following:
    - **feature**: A new feature or functionality
    - **bugfix**: A bug fix
    - **performance**: A code change that improves performance
    - **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    - **refactor**: A code change that neither fixes a bug nor adds a feature
    - **chore**: Changes to the build process or auxiliary tools and libraries or documentation

- **Issue Description** - Describe the issue the PR is solving with the knowledge you've gained by working on it. This may differ from the original ticket as you now have more information at your disposal.
Include all information necessary to understand the issue this PR resolves so that the reviewer does not need to look at the original ticket.
Additionally, if you're adding or changing some of the existing UI components, attach figma documents for each one of the components added/changed, in order to allow reviewers to easily check what has been changed.

 - **Solution** - Summarize your solution to the problem. Please include short descriptions of any solutions you tested before arriving at your final solution. This will help reviewers know why you decided to solve this problem in this particular way and will speed up the review process.
Note new dependencies: If you have introduced any new dependencies, please list them, explain how they are used in your solution and any other libs that you considered.

- **Breaking changes** - List breaking changes, or otherwise list none.
    - Changing file names
    - Moving files
    - Deleting files
    - Renaming functions or exports
    - Changes to code which might cause previous versions of MOC or third-party code not to work as expecteNote any work that you did to mitigate the effect of any breaking changes such as creating migrations, deprecation warnings, etc.
    - New environment variables needed to be added

- **Testing Instructions** - Write instructions for testing your changes. You can assume that reviewers know how to start the app and how to perform basic setup tasks. For any task where there may be multiple ways to do something, be explicit. (e.g. there are several ways to "Create a Product" and many options once created before a product is published).
The steps you list should guide the reviewer through testing the feature or fix you've implemented. These steps will generally be very similar to the reproduction steps in the issue.

### Step 4: PR review process begins
The Community team triages all new pull requests as soon as the PR is complete.

#### PR gets reviewed
The team reviews code quality rules including:

- **PR template**: If the PR doesn't follow the template, the PR will be rejected and it will be pointed-out to the author the missing details.

- **Issue description**: Use this information as the starting point for your review. If something is not clear, reject the PR and ask for clarity by requesting changes. While the original issue may have useful information, the PR should contain the most up to date representation of the issue.

- **Solution**: Use this information to help determine a path to test this PR. Research any included packages or techniques that may have been used that you're not familiar with. Ask questions if you're confused.

- **Breaking changes**: Reviewers will look if any of your code introduce breaking changes and might ask you the real necessity of it. We will always try to be backwards-compatible.

- **Readability**: The linter will help with this, but call out anything that is difficult to understand or that you feel needs comments.

- **Documentation**: all code added or touched should have proper JSDoc, any new functionality should be documented, as outlined in JSDoc Style Guide.

- **Performance**: Code should be written with performance in mind.

- **Dependencies**: Any newly introduced dependencies should be updated to the latest version.

Reviewers will note any changes that they will want to QA in the app, even if they aren't listed in the testing steps (e.g if the code changes a base button, ensure that the button still works).

#### PR is ready to merge
Congrats - Once you have all the green lights with an approved PR, a reviewer will merge the code in order to publish a new version of it later on.

### Step 5: Congrats! It's merged. What happens next?
Now that your PR is merged, the feature will be released in the next release. 
