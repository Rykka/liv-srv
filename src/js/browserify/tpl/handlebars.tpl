<div>Hello {{ name }}</div>
<div>
{{#each stories }}
    <span >{{ name}}</span>
    <span style='font-size:0.5em;'> {{ body }}</span>
{{/each}}
{{#if true }}
    true
{{/if}}
</div>
