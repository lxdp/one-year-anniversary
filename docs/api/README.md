# API Documentation

> This project has no external API. This directory is a placeholder for internal data contracts.

---

## Scene Config Contract

When the scene data format is finalised, document it here:

```ts
// Placeholder — update when data/scenes/ is created
interface SceneConfig {
  id: string
  title: string
  background: string        // path to background asset
  atmosphere?: AtmosphereConfig
  hotspots: HotspotData[]
}

interface HotspotData {
  id: string
  position: { x: number; y: number }  // percentage of viewport (0-100)
  label: string
  thought: string           // text revealed on hover
  onClick?: 'next-scene' | string     // optional action
}

interface AtmosphereConfig {
  audioSrc?: string         // optional ambient audio file
  particles?: boolean
}
```

## Update Policy

Update this file when:
- The scene data format is finalised
- A new field is added to SceneConfig or HotspotData
- An internal contract changes that multiple files depend on

Do not write API docs for components that are not consumed externally.
