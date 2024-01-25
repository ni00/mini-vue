import { extend } from '@vue/shared'
import { createRenderer } from 'packages/runtime-core/src/renderer'
import { patchProp } from './patchOps'
import { nodeOps } from './nodeOps'

const rendererOptions = extend({ patchProp }, nodeOps)

let renderer

function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions))
}

export const render = (...args) => {
  ensureRenderer().render(...args)
}
