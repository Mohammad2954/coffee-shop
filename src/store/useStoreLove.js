import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import toast from 'react-hot-toast' 

export const useStoreLove = create(
    persist(
        (set, get) => ({
            AllData: [],
            
            
            addal: (ar) => set({ AllData: ar }),
            
            addLoveItem: (idElem) => {
                const target = get().AllData.find(e => e.id === idElem)
                
                if (!target) {
                    console.warn("آیتم پیدا نشد:", idElem)
                }

                const newLoveStatus = !target.love

                set({
                    AllData: get().AllData.map(e => 
                        e.id === idElem ? { ...e, love: newLoveStatus } : e
                    )
                })

                toast.success(
                    newLoveStatus 
                        ? "محصول با موفقیت به علاقه مندی ها اضافه شد" 
                        : "محصول با موفقیت از علاقه مندی ها حذف شد"
                )
            }
        }),
        {
            name: 'love-storage',
            version: 1,
            migrate: (persistedState, version) => {
                return { AllData: [] }
            }
        }
    )
)