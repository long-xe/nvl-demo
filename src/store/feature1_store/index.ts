import { create } from 'zustand'

interface Feature1State {
    bears: number
    increasePopulation: (by: number) => void
    removeAllBears: () => void
}

export const useFeature1Store = create<Feature1State>((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}))
