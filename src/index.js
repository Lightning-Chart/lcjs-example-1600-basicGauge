const lcjs = require('@lightningchart/lcjs')
const { lightningChart, Themes } = lcjs

// Create a Gauge chart
const gauge = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })
    .Gauge({
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
    })
    .setTitle('Speed')
    .setUnitLabel('km/h')
    .setInterval(0, 120)

// Randomize gauge value every 2 seconds
setInterval(() => {
    gauge.setValue(Math.random() * 120)
}, 2000)
