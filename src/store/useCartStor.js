import React from 'react'
import toast from 'react-hot-toast'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStor=create(persist((set)=>({
    item:[],
    addCart:(pro)=>set((state)=>{
        const findItem=state.item.findIndex(e=>{return (e.id===pro.id && e.sizePro===pro.sizePro)})
        if(findItem===-1){
            toast.success("محصول به سبد خرید اضافه شد")
            return {item:[...state.item,pro]}
            
        }else{
            toast.error("در سبد خرید موجود است ")
            return {item:[...state.item]}
            
        }
        

    }),
    delCart:()=>set({item:[]}),
    deletItem:(idElem,sizeElem)=>set((state)=>{
        toast.success("محصول مورد نظر با موفقیت حذف شد")
        return {item: state.item.filter((e)=>!(e.id===idElem && e.sizePro===sizeElem))}
    })
}
)
)
)