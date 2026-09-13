import React from 'react'
import toast from 'react-hot-toast'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStor=create(persist((set,get)=>({
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
    }),
    increaseDate:(idElem,sizeElem)=>set((state)=>{
        const targetItem=state.item.find(e=>(e.id===idElem&&e.sizePro===sizeElem))
        if(targetItem&&targetItem.count>=10){
            toast.error("بیشتر از حد مجاز")
            return {...state.item}
        }
        
        const updateElem=state.item.map(e=>{
            if(e.id===idElem&&e.sizePro===sizeElem){
                return {...e,count:e.count+1,price:e.price+e.formol}
            }
            return e
        })
        return {item:updateElem}
    }),
    decriseData:(idElem,sizeElem)=>set((state)=>{
        const targetItem=state.item.find(e=>(e.id===idElem&&e.sizePro===sizeElem))
        if(targetItem&&targetItem.count<=1){
            toast.error("کمتر از حد مجاز")
            return {...state.item}
        }
        const updateElem=state.item.map(e=>{
            if(e.id===idElem&&e.sizePro===sizeElem){
                return {...e,count:e.count-1,price:e.price - e.formol}
            }
            return e
        })
        return {item:updateElem}
    }),
    coutElem:(idElem,sizeElem)=>{
        let findCount= get().item.find(e=>(e.id===idElem&&e.sizePro===sizeElem))
        return findCount.count
    }
        
        
}
)
)
)