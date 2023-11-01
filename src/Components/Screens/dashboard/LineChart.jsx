import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import styled from 'styled-components'

function LineChart({ studentArr, dateArr }) {
  Chart.register(...registerables)

  const data = {
    labels: dateArr,

    datasets: [
      {
        label: 'Students',
        data: studentArr,
        fill: true,
        backgroundColor: '#ef8637c9',
        borderColor: '#ef8637',
        tension: 0.5,
      },
    ],
  }

  const options = {
    plugins: {
      drawBorder: false,
      title: {
        display: false,
        text: '',
      },
    },

    layout: {
      padding: 20,
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
      },
    },
  }

  return (
    <Container>
      <Line data={data} options={options} />
    </Container>
  )
}

export default LineChart

const Container = styled.div`
  canvas {
    /* height: 225px !important; */
    width: 100% !important;
    margin: 0 auto;
  }
`
