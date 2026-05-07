import yaml from 'js-yaml'
import type { NavItem } from '../types'

function toPath(val: string): string {
  let p = val
  p = p.replace(/^docs\//, '')
  p = p.replace(/^\//, '')
  p = '/' + p.replace(/\.md$/, '')
  return p
}

export default function parseMkDocs(yml: string): NavItem[] {
  const doc = yaml.load(yml) as any
  const nav = doc?.nav
  if (!nav || !Array.isArray(nav)) return []

  function walk(arr: any[]): NavItem[] {
    const res: NavItem[] = []
    for (const el of arr) {
      if (typeof el === 'string') {
        res.push({ title: el, path: '/' + el.replace(/\.md$/, '') })
      } else if (typeof el === 'object') {
        const key = Object.keys(el)[0]
        const val = el[key]
        if (typeof val === 'string') {
          res.push({ title: key, path: toPath(val) })
        } else if (Array.isArray(val)) {
          res.push({ title: key, children: walk(val) })
        } else if (typeof val === 'object') {
          // convert mapping object to array of single-key objects
          const arr: any[] = []
          for (const k in val) arr.push({ [k]: val[k] })
          res.push({ title: key, children: walk(arr) })
        }
      }
    }
    return res
  }

  return walk(nav)
}
