import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import Modal from "../components/Modal"
import { useEffect } from "react"
import { useAppStore } from "../stores/useAppStore"

export const Layout = () => {
  const localFavs = useAppStore((store)=>store.loadFromStorage)
  useEffect(()=>{
    localFavs()
  },[])
  return (
    <>
    <Header/>
    <main className="container mx-auto py-16">
       <Outlet/>
    </main>
    <Modal/>
    </>
)
}