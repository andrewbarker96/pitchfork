import RootLayout from "@/app/layout"
import React from "react"
import { Slide } from "@mui/material"
import Skeleton from "@mui/material"
import ImageSkeleton from "@/components/skeletons/content-skeleton"

export default function HomePage() {
  return (
    <RootLayout>
      <h1>Welcome to my website!</h1>
      <ImageSkeleton />
    </RootLayout>
  )
}