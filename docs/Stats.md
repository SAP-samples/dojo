---
layout: page
title:

---
{% assign white_total = 0 %}
{% assign green_total = 0 %}
{% assign red_total = 0 %}
{% assign rBonus = 0 %}
{% assign black_total = 0 %}
{% assign bBonus = 0 %}
{% assign show_domain = true %}
{% assign belt_total = 0 %}
{% assign active_members = site.data.members | where_exp: "member", "member.inactive != true" %}

{% for dis in site.data.domains %}
    {% assign disL = dis[1].label | downcase %}
    {% assign gArr = site.data.members | where_exp: "member", "member.belts[disL] contains 'white'" %}
    {% assign gSize =  gArr | size %}
    {% assign white_total = white_total | plus: gSize %}
    {% assign gArr = site.data.members | where_exp: "member", "member.belts[disL] contains 'green'" %}
    {% assign gSize =  gArr | size %}
    {% assign green_total = green_total | plus: gSize %}
    {% assign rArr = site.data.members | where_exp: "member", "member.belts[disL] contains 'red'" %}
    {% assign rSize =  rArr | size %}
    {% assign red_total = red_total | plus: rSize %}
    {% assign bArr = site.data.members | where_exp: "member", "member.belts[disL] contains 'black'" %}
    {% assign bSize =  bArr | size %}
    {% assign black_total = black_total | plus: bSize %}
{% endfor %}
{% assign rBonus = red_total | times: 2 %}
{% assign bBonus = black_total | times: 3 %}
{% assign belt_total = white_total | plus: green_total | plus: rBonus | plus: bBonus  %}

{% assign noBoardCnt = 0 %}
<!--Inactive Members-->
{% assign inactiveArr = site.data.members | where_exp: "member", "member.inactive == true" %}
<!--Board Areas-->
{% assign boardAreas = active_members | where_exp: "member", "member.board-area != nil" | map: 'board-area' | join: ',' | split: ',' | uniq | sort %}

<div class="jumbotron p-5">
    <h1 class="display-4">Dojo Achievements</h1>
    <p class="lead">Active summary of the community's competence claims</p>
    <hr class="my-4">
    <div class="row">
        <div class="col-md-6 text-center my-4">
            <h1 class="display-4">{{site.data.members | size}}</h1>
            <img class="m-2" src="images/285989_AdvisoryCouncil_R_orange.png" height="150">
            <h3>Members with Belts</h3>
            <span>Active Members: {{active_members | size}}</span>
        </div>
        <div class="col-md-6 text-center my-4">
            <h1 class="display-4">{{belt_total}}</h1>
            <img class="m-2" src="images/286568_Badge_R_orange.png" height="150">
            <h3>Total Belts Granted</h3>
            <span>All-time Belt Count</span>
        </div>
    </div>
    <hr class="my-5">
    <h1 class="text-center my-5">Appeal & Awareness</h1>
    <div class="row">
        <div class="col-md-6 text-center my-6">
            <h1 class="display-5">{{white_total}}</h1>
            <img src="images/belt-white.png" height="60">
            <h3>White Belts</h3>
        </div>
        <div class="col-md-6 text-center my-6">
            <h1 class="display-5">{{green_total}}</h1>
            <img src="images/belt-green.png" height="60">
            <h3>Green Belts</h3>
        </div>
    </div>
    <hr class="my-5">
    <h1 class="text-center my-5">Action & Acceleration</h1>
    <div class="row">
        <div class="col-md-6 text-center my-6">
            <h1 class="display-5">{{red_total}}</h1>
            <img src="images/belt-red.png" height="60">
            <h3>Red Belts</h3>
        </div>
        <div class="col-md-6 text-center my-6">
            <h1 class="display-5">{{black_total}}</h1>
            <img src="images/belt-black.png" height="60">
            <h3>Black Belts</h3>
        </div>
    </div>
</div>
<div class="row">
    {% for domain in site.domains %}
        {%- include domain-stats.html -%}
    {% endfor %}
</div>
<hr class="my-4">
<h3 id="board-area-rep">Board Area Representation of Active Members</h3>
<ul class="list-group">
    {% for boardArea in boardAreas %}
    {% assign orgUnits = active_members | where_exp: "member", "member.board-area == boardArea" | map: 'org-unit' | join: ',' | split: ',' | uniq | sort %}
    <li class="list-group-item d-flex justify-content-between align-items-center active">
        {{boardArea}}
        <span class="badge badge-danger rounded-pill">{{active_members | where_exp: "member", "member.board-area == boardArea" | size }}</span>
    </li>
    {% for orgUnit in orgUnits %}
    <li class="list-group-item d-flex justify-content-between align-items-center">
        {{orgUnit}}
        <span class="badge badge-primary rounded-pill">{{active_members | where_exp: "member", "member.org-unit == orgUnit" | size }}</span>
    </li>
    {% endfor %}
    {% endfor %}
</ul>
<hr class="my-4">
<p><em>* Stats are based on those who have sumbitted for belts. Rank totals show how many actively hold that belt. Higher belts are not included in lower belt totals, but are reflected in the Total Belts Granted.</em></p>
<p><em>** Inactive Members: {{inactiveArr | size}}</em></p>
