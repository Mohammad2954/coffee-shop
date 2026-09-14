import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import toast from 'react-hot-toast' // ✅ این خط حیاتی است!

export const useStoreLove = create(
    persist(
        (set, get) => ({
            AllData: [],
            
            
            addal: (ar) => set({ AllData: ar }),
            
            addLoveItem: (idElem) => {
                // ۱. پیدا کردن آیتم با یک بار پیمایش
                const target = get().AllData.find(e => e.id === idElem)
                
                // ۲. ✅ اگر آیتم نبود، زود خارج شو (بدون برگرداندن undefined)
                if (!target) {
                    console.warn("آیتم پیدا نشد:", idElem)
                    return // ← اینجا return خالی مشکلی ندارد چون داخل set نیست
                }

                // ۳. معکوس کردن وضعیت love
                const newLoveStatus = !target.love

                // ۴. آپدیت State
                set({
                    AllData: get().AllData.map(e => 
                        e.id === idElem ? { ...e, love: newLoveStatus } : e
                    )
                })

                // ۵. نمایش پیام
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