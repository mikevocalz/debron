import { StateCreator } from "zustand";
import { Work } from '../sanity/types/Works'
import { getWorks } from "app/sanity/sanity-utils";


export interface WorkSlice {
    work: Work[];
    fetchWork: () => void;
    selectedItem: string | null;
    setSelectedItem: (item:any) => void;
}

export const createWorkStore: StateCreator<WorkSlice> = (set) => ({
    work: [], //data array
    fetchWork: async () => { //fetch dada
        const res = getWorks()
        set({ work: await res })
    },
    selectedItem: null, // ID of the selected item
  setSelectedItem: (item) => set({ selectedItem: item }),

})

        
