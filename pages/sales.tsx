"use client"
import dynamic from "next/dynamic"

const SalesBar = dynamic(() => import("@/components/PieChart"), { ssr: false })

const Sales = () => {
  const labels = ['Jan', 'Feb', 'Mar']
  const data = labels.map(() => Math.random() * 20643)
  return (
    <div>
      <span className="capitalize">sales</span>
      <SalesBar datasets={{
        labels,
        data
      }} />
    </div>
  )
}

export default Sales