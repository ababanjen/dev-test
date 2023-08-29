import { Chart, initTE } from "tw-elements"
import { useRef, useEffect } from "react"
import { randomColors } from "@/helpers/helpers"

type ChartTypes = {
  datasets: { labels?: (string | number)[], data: (string | number)[] }
}

const PieChart = ({ datasets }: ChartTypes) => {
  const barRef = useRef<any>()
  const config = {
    type: "pie",
    data: {
      labels: datasets.labels,
      datasets: [{
        data: datasets.data,
        backgroundColor: randomColors(datasets.data)
      }]
    }
  }
  const Pie = new Chart(barRef.current, config)
  useEffect(() => {
    initTE({ Chart: Pie });
  }, [])

  return (
    <div >
      <canvas id="sales" ref={barRef} />
    </div>
  )
}

export default PieChart