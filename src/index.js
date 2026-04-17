window.lcjsSmallView = window.devicePixelRatio >= 2
const lcjs = require('@lightningchart/lcjs')
const { lightningChart, Themes } = lcjs

// Create a Gauge chart
const gauge = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })
    .Gauge({
        theme: (() => {
    const t = Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined
    return t && window.lcjsSmallView ? lcjs.scaleTheme(t, 0.5) : t
})(),
textRenderer: window.lcjsSmallView ? lcjs.htmlTextRenderer : undefined,
    })
    .setTitle('Speed')
    .setUnitLabel('km/h')
    .setInterval(0, 120)

// Randomize gauge value every 2 seconds
setInterval(() => {
    gauge.setValue(Math.random() * 120)
}, 2000)
