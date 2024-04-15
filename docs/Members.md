---
layout: page
title: Members
datatable: true
---

<hr/>
<span class="text-info">Hold down shift to sort on multiple columns (secondary, tertiary, etc)</span>
<div>
    <table id="members-table" class="table table-bordered table-hover table-active display" data-page-length='25'>
        <thead>
            <tr>
                <th class="text-center" scope="col"></th>
                {% for domain in site.domains -%}
                <th class="text-center" scope="col">{{domain}}</th>
                {% endfor %}
            </tr>
        </thead>
        <tbody>
            {% for member_record in site.data.members %}
                {% assign member_id = member_record[0] %}
                {% assign member = member_record[1] %}
                {% if member.inactive == true %}
                    {% continue %}
                {% endif %}

                <tr>
                    <td class="text-left" scope="row">
                        <div class="text-primary">{{ member.name }}</div>
                        <span class="badge ml-3 text-muted">{{member.board-area}}</span>
                        <br>
                        <span class="badge ml-3 text-muted">{{member.org-unit}}</span>
                    </td>
                    {% for domain in site.domains %}
                        {% assign beltColor = "" %}
                        {% assign domainLower = domain | downcase %}
                        {% for item in member.belts %}
                            {% if item[0] == domainLower %}
                            {% assign beltColor = item[1] %}
                            {% endif %}
                        {% endfor %}
                        {% case beltColor %}
                            {% when "black" %}
                                {% assign beltValue = 4 %}
                            {% when "red" %}
                                {% assign beltValue = 3 %}
                            {% when "green" %}
                                {% assign beltValue = 2 %}
                            {% when "white" %}
                                {% assign beltValue = 1 %}
                            {% else %}
                                {% assign beltValue = 0 %}
                        {% endcase %}
                        {% if beltValue > 0 %}
                            <td class="text-center" data-search="{{ beltColor }}" data-sort="{{ beltValue }}"><img class="mx-auto d-block" src="images/belt-{{ beltColor }}.png" height="30" /></td>
                        {% else %}
                            <td class="text-center" data-search="{{ beltColor }}" data-sort="{{ beltValue }}"><img class="mx-auto d-block" src="" height="30" /></td>
                        {% endif %}
                    {% endfor %}
                </tr>
            {% endfor %}
        </tbody>
    </table>
</div>

<script>
    $(document).ready(function() {
        $('#members-table').DataTable({
        });
    } );
</script>
