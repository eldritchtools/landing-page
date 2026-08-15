"use client";

import { Tooltip } from "react-tooltip"

export default function TooltipClientWrapper() {
    return <Tooltip
        id={"cardTooltip"}
        style={{ 
            textAlign: "start", outline: "1px #eee solid", 
            whiteSpace: "pre-wrap", maxWidth: "42rem", backgroundColor: "black", 
            borderRadius: "0.5rem", zIndex: 9999 
        }}
    />
}