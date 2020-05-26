import React from "react"

import feature from "../images/feature.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "3rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Easy Record"
      description="별점으로 쉽게 기록하고 더 자세하게 후기를 남겨 만화를 찾는 사람들에게 도움을 주세요."
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Recommended System</h3>
        <p style={{ color: COLORS.gray }}>
          기록해주신 만화 데이터를 활용하여 <br/>나에게 딱 맞는 만화를 추천해드립니다.
        </p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content
