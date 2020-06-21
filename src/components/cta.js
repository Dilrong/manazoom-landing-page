import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="To be released during the winter"
      description="2020년 겨울에 만나요!"
    />
    <Button>ManaZoom</Button>
  </div>
)

export default CallToAction
