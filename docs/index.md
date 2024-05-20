
<div class="row">
    <div class="col-md-5 col-sm-4 text-center">
        <img class="img-fluid" src="images/DojoLogo-Black-Center.png" style="max-height:350px">
    </div>
    <div class="col-md-7 col-sm-8 text-right d-none d-sm-block">
        <img class="img-fluid" src="images/Pagoda-Black.png" style="max-height:350px">
    </div>
</div>

<h5>{{site.homepageIntroduction.tagline}}</h5>

<p>...</p>

{%- include dojo-instructions.html -%}

<br/>
<h5>Levels</h5>

{% for beltLevel in site.beltLevels %}
<img src="images/belt-{{beltLevel.value}}.png" height="50" alt="{{beltLevel.value}}" />
<a name="{{beltLevel.value}}-belt">{{beltLevel.label}}</a>
<ul>
    {% for competence in beltLevel.competences %}
    <li>{{competence}}</li>
    {% endfor %}
</ul>
{% endfor %}

<br/>
<h5>Domains</h5>

<ul>
{% for domain in site.domains %}
    {% assign domainInfo = site.data.domains | where: "label",domain %}
    <li>
        <p><a name="domain-{{domain}}" href="{{ domain | relative_url}}">{{ domain }}</a></p>
        <p>{{ domainInfo[0]["mission"]}}</p>
    </li>
{% endfor %}
</ul>
