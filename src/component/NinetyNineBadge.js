import React from 'react'

function NinetyNineBadge({ size = 20 }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: Math.max(2, size * 0.15),
        backgroundColor: '#1F1C1C',
        color: '#fff',
        fontSize: size * 0.42,
        fontWeight: 700,
        lineHeight: 1,
      }}
    >
      99
    </span>
  )
}

export default NinetyNineBadge
