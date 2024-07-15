---
title: 'Orientation Request'
layout: page
---

Putting on a white belt helps to introduce newcomers to the dojo concept and its offerings.

### Practice

We practice:

* How to work in short iterations
* How to experiment with new ideas
* Healthy ways to solicit feedback from others
* Tools and techniques for deeper learning
* Dialectic approaches

### Centering

We center from core principles:

* Bias towards transparency
* Failure is equally valuable to success
* Network with peers for support
* Colocate learning investments within team backlogs
* Deliver iteratively, responsively to feedback

### Pointers

*What Learning and Development paths are available?*

At the top of page, you will see a drop down for Domains. We recommend Mindset to everyone.

*How do you read the content?*

Intersect with the Mission section of a domain first.  Then reflect on the Principle statements.  Review the Guidance instructions.  Keep note of the associated Community Circles for dialog to progress.  Under each belt level, you will see a list of resources and exercises for practice aligned for an eventual belt claim. There are also time estimates to help you plan however it could take you more or less time to complete each step.

*How to navigate the site?*

Across the top of the Dojo, you will see a navigation bar. The first drop down is Domains. From here, you will see the available domains of learning that you can progress through to level up through green, red, and black level. When you enter a domain, you'll find a description of the mission and principles for the domain, links to communities you can join and engage with, and a list of activities and learning material you'll need to complete in order to submit for a belt. You will also find estimated durations for each section to help you plan an appropriate amount of time.

*Do I have to buy the books and movies I see in the learning channels?*

We want everyone to have access to move through each domain and the ability to earn the belts along the way. We have looked for freely available resources and when possible make alternatives to paid content available, however there are some concepts that are best mastered through content that is not freely available.

### First Exercise

* Choose a domain
  * If unsure, then choose Mindset
* Make a white belt claim as detailed below

### Purposeful Reflection

The pull request will need to include a ***Purposeful Reflection***.

***White level reflection illustrates the motivation for engaging this learning journey.***

#### Guidance

* Take a moment and center on the *Mission* and *Principles* of the domain
* Take a moment and center on the belt level competence guidance
* Time box creating your reflection to 30 minutes
* Once you have submitted your belt claim, bring it up at the next Dojo Circle to introduce yourself 

#### White Belt Claim Review Criteria

During the review of the ***White Belt Pull Request*** the following criteria will be considered and labeled accordingly:

* Purposeful Reflection
  * Sufficient: belt-claim-verified-reflection
  * Deficient: belt-claim-expand-reflection
* Live Demo
  * Sufficient: belt-claim-verified-demo
  * Deficient: belt-claim-retest-demo 
* Formatting:
  * Sufficient: belt-claim-verified-formatting
  * Deficient: belt-claim-correct-formatting

If a Deficiency Flag (red label) appears, the request will have 30 days to be ironed out. If that time has passed and the belt claim is not able to clear, it will be closed. If at a later time the impediments have been cleared a fresh pull request can be submitted or the pull request can be re-opened.

### First Belt Claim

1. Create a fork of the Dojo GitHub repostiory:
    * Open a web browser to [{{site.repositoryUrl}}]({{site.repositoryUrl}})
    * Click the button *Fork* located in the upper right quadrant of the page
    * Ensure *Owner* is set to your GitHub account
1. Navigate to the *members* area of the Dojo GitHub repository ***fork***:
    * From the *Code* tab, navigate to the *docs* folder
    * From the *docs* folder, navigate to the *_data* folder
    * From the *_data* folder, navigate to the *members* folder
1. On the right side of the screen select "Create new file" from the "Add file" dropdown
1. Name the file with your name (hyphenated) in lowercase and with a yaml extension
1. Back in the GitHub tab, add the following template data in the "Edit new file" section

```yaml
---
name: TODO-Name
url: TODO-LinkedIn-Url
inactive: false
belts:
  TODO-domain: TODO-level
```

1. Replace all of the TODO values appropriately
    * name and url suggested to match LinkedIn
    * domain and level are the belt claim request you are making
1. Verify things look correct, similar to the following for example:

```yaml
---
name: Your Name
url: TODO-LinkedIn-Url
inactive: false
belts:
  mindset: white
```

1. Enter "belt request" in the single line field underneath the "Commit new file" prompt near the bottom of the page
1. Submit the form by pressing the green "Commit new file" button
1. Navigate to the "Pull requests" tab of your forked repository
1. Press the green "New pull request" button to open the "Comparing changes" screen
1. Ensure that the pull requests the main branch from your repository into the main branch of the *dojo/center* repository
1. Press "Create pull request" to open the "Open a pull request" screen
1. To formalize the pull request, press the "Create pull request" button
1. The pull request will be listed at [{{site.repositoryUrl}}/pulls]({{site.repositoryUrl}}/pulls)
1. A Dojo Sensei will respond as soon as practicable via email commententary with the pull request
