import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { createWorkStore, WorkSlice } from './workStore'

type StoreState = WorkSlice 

const options = {
   name: 'work-storage'
}

export const useAppStore = create<StoreState>()(persist((...store) => ({
     ...createWorkStore(...store)
}),options
))