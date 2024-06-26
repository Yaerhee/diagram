import React, { memo } from 'react'
import { Handle, useStore, Position } from 'reactflow'

export default memo(({ id }: any) => {
  const label = useStore((s) => {
    const node = s.nodeInternals.get(id)

    if (!node) {
      return null
    }

    // @ts-ignore
    return `position x:${parseInt(node.position.x)} y:${parseInt(
      // @ts-ignore
      node.position.y,
    )}`
  })

  return (
    <>
      <div className="wrapper gradient">
        <div className="inner">{label || 'no node connected'}</div>
      </div>
      <Handle type="target" position={Position.Left} />
    </>
  )
})
