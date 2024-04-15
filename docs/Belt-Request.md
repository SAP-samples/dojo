---
title: 'Belt Request'
layout: page
---
<div class="-alert alert-warning">
If this is your first time submitting a belt request, please visit the <a href="{{ '/Orientation-Request' | relative_url }}">Orientation Request</a> page for support.
</div>



Congratulations on making it to the point where you are considering making a belt claim!

Sometimes in our excitement we may have missed some of the signals and cues along the way.

## Immersive Learning Quality Check

Dialog is paramount to reinforce learning and is at the heart of the social connection of the Dojo Community.

Before working through the logistics of the belt claim, please ensure that you have found a Dialog Partner and upacked the concepts thoroughly.  Through this give and take we are challenged to recall what we have learned, test and deepen understanding.  Additionally, we increase awareness to consider how what we learn applies personally and to our home groups.

### Recap and Purposeful Reflection

The pull request will need to include a ***Recap and Purposeful Reflection***.

***Purposeful reflection illustrates key points of resonation from the content and dialog sessions through the learning progression.***

#### Belt Claim Review Criteria

During the review of the ***Belt Claim Pull Request*** the following criteria will be considered and labeled accordingly:

* Dialog
  * Sufficient: belt-claim-verified-dialog
    * ***For red and black level, belt claim must be unpacked during a Circle meetup with higher ranking senpai or sensei***
  * Deficient: belt-claim-insufficient-dialog
* Recap and Purposeful Reflection
  * Sufficient: belt-claim-verified-reflection
  * Deficient: belt-claim-insufficient-reflection
* YAML formatting:
  * Sufficient: belt-claim-verified-yaml
  * Deficient: belt-claim-incorrect-yaml-formatting

If a Deficiency Flag (red label) appears, the request will have 30 days to be ironed out.  If that time has passed and the belt claim is not able to clear, it will be closed.  If at a later time the impediments have been cleared a fresh pull request can be submitted or the pull request can be re-opened.

#### New Belt Claim

1. Open a web browser to the Members area of the Dojo GitHub repository:
    * [{{site.repositoryUrl}}/tree/main/docs/_data/members]({{site.repositoryUrl}}/tree/main/docs/_data/members)
1. Locate and open your file by your ID number
1. Verify all information is correct, select Edit (top right), and add the new domain level claim request:

```yaml
---
name: Your Name
inactive: false
board-area: Product Engineering
org-unit: Engineering Department
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

