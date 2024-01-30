import { createVNode } from './vnode'
import { Text } from './vnode'
import { ShapeFlags } from 'packages/shared/src/shapeFlags'

export function renderComponentRoot(instance) {
  const { vnode, render } = instance
  
  let result

  try {
    if (vnode.shapeFlag & ShapeFlags.STATEFUL_COMPONENT) {
      result = normalizeVNode(render!())
    }
  } catch (error) {
    console.log(error)
  }

  return result
}

export function normalizeVNode(child) {
  if (typeof child === 'object') {
    return cloneIfMounted(child)
  } else {
    return createVNode(Text, null, String(child))
  }
}

export function cloneIfMounted(child) {
  return child
}
