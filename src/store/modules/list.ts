import { defineStore } from "pinia";
import store from '../index'

export const useListStore = defineStore('list', {
  state: () => {
    return {
      cssList: [] as string[],
      allList: [] as string[]
    }
  },
  actions: {
    addCssList (name: string) {
      if(!this.cssList.includes(name)) {
        this.cssList.push(name)
      }
    }
  }
})

export const useListStoreWithOut = () => {
  return useListStore(store)
}