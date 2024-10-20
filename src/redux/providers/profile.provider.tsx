'use client'

import { addAccessToken, addInfo } from "@/redux/slices/profile.slice"
import { ProfileStore, profileStore } from "@/redux/stores/profile.store"
import { useRef } from "react"
import { Provider } from "react-redux"

export default function ProfileProvider({
  children,
  accessToken = '',
  info = null
}: {
  children: React.ReactNode,
  accessToken?: string
  info?: any
}) {
  const storeRef = useRef<ProfileStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = profileStore()
    storeRef.current.dispatch(addAccessToken(accessToken));
    if (accessToken) {
      storeRef.current.dispatch(addInfo(info));
    }
  }
  return (
    <Provider store={storeRef.current}>{children}</Provider>
  )
}

