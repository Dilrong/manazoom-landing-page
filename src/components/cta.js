import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="To be released during the winter"
      description="2020년 겨울 안에 만화를 기록하고 추천 받을 수 있습니다."
    />
    <Button>ManaZoom</Button>
  </div>
)

export default CallToAction
