import { useListStoreWithOut } from "../store/modules/list"
const useListStore = useListStoreWithOut()
const cssComponents = import.meta.glob('./Css/*.vue')
const baseComponents = import.meta.glob('./Base/*.vue')

const getCompentName = (path: string) => {
  return path.split('/').pop()?.split('.')[0]
}

export default {
  install (app: any) {
    for (const path in cssComponents) {
      cssComponents[path]().then((mod:any) => {
        const compName = getCompentName(path)!
        app.component(compName, mod.default)
        useListStore.addCssList(compName)
      })
    }

    for (const path in baseComponents) {
      baseComponents[path]().then((mod: any) => {
        const compName = getCompentName(path)
        app.component(compName, mod.default)
      })
    }
  }
}