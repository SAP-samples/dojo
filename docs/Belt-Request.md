---
title: 'Belt Request'
layout: page
---
<div class="-alert alert-warning">
If this is your first time submitting a belt request, please visit the <a href="{{ '/Orientation-Request' | relative_url }}">Orientation Request</a> page for support.
</div>



Congratulations on making it to the point where you are considering making a belt claim!

Sometimes in our excitement we may have missed some of the signals and cues along the way.

## Insightful Learning Quality Check

Dialog is paramount to reinforce learning and is at the heart of the social connection of the Dojo Community.

Before working through the logistics of the belt claim, please ensure that you have found a Dialog Partner and upacked the concepts thoroughly.  Through this give and take we are challenged to recall what we have learned, test and deepen understanding.  Additionally, we increase awareness to consider how what we learn applies personally and in our social circles.

### Purposeful Reflection

The pull request will need to include a ***Purposeful Reflection***.

***Purposeful reflection illustrates key points of resonation from the content and dialog sessions through the learning progression.***

#### Guidance

* Throw away or delete all of your stored notes
* Take a moment and center on the *Mission* and *Principles* of the domain
* Take a moment and center on the belt level competence guidance
* Time box creating your reflection (at least the first draft) to 30 minutes
* Describe:
  * 3 points of resonation
  * 3 points of struggle and how it was resolved
  * Overall experience with dialog sessions
  * Any story of how you have attempted to apply what has been learned
* Once you have submitted your belt claim, bring it up at the next Dojo Circle to be tested 

#### Belt Claim Review Criteria

During the review of the ***Belt Claim Pull Request*** the following criteria will be considered and labeled accordingly:

* Dialog
  * Sufficient: belt-claim-verified-dialog
    * ***For red and black level, belt claim must be unpacked during a Circle meetup with higher ranking senpai or sensei***
  * Deficient: belt-claim-repeat-dialog
* Purposeful Reflection
  * Sufficient: belt-claim-verified-reflection
  * Deficient: belt-claim-expand-reflection
* Live Demo
  * Sufficient: belt-claim-verified-demo
  * Deficient: belt-claim-retest-demo 
* Formatting:
  * Sufficient: belt-claim-verified-formatting
  * Deficient: belt-claim-correct-formatting

If a Deficiency Flag (red label) appears, the request will have 30 days to be ironed out.  If that time has passed and the belt claim is not able to clear, it will be closed.  If at a later time the impediments have been cleared a fresh pull request can be submitted or the pull request can be re-opened.

#### New Belt Claim

1. Open a web browser to the Members area of the Dojo GitHub repository:
    * [{{site.repositoryUrl}}/tree/main/docs/_data/members]({{site.repositoryUrl}}/tree/main/docs/_data/members)
1. Locate and open your file by your (hyphenated) name
1. Verify all information is correct, select Edit (top right), and add the new domain level claim request:

```yaml
---
name: Your Name
url: LinkedIn Url
inactive: false
belts:
  mindset: green
  agile: green
```

1. Enter "belt request" in the single line field underneath "Propose changes" near the bottom of the page
1. Submit the form by pressing the green "Propose Changes" button
1. The "Open a pull request" screen will open
1. In the large textarea provide your ***Recap and Purposeful Reflection*** of your experience and the belt claim
1. Press "Create pull request"
1. The pull request will be listed at [{{site.repositoryUrl}}/pulls]({{site.repositoryUrl}}/pulls)
1. A Dojo Sensei will respond as soon as practicable via email commententary with the pull request
