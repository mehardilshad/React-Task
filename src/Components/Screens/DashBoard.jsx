import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import ChartsContainer from './dashboard/ChartsContainer'
import DashboardTop from './dashboard/DashboardTop'

function DashBoard() {
  const [isCountLoading, setCountLoading] = useState(false)
  const [lineGraphData, setLineGraphData] = useState({})
  const [dateArray, setDateArray] = useState([])
  const [studentArray, setStudentArray] = useState([])

  const getShortMonthName = (date) => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    return monthNames[date.getMonth()].substring(0, 3)
  }

  const user_data = [
    {
      day: 1,
      date: '2023-06-30',
      students: 3,
    },
    {
      day: 2,
      date: '2023-07-01',
      students: 5,
    },
    {
      day: 3,
      date: '2023-07-02',
      students: 3,
    },
    {
      day: 4,
      date: '2023-07-03',
      students: 7,
    },
    {
      day: 5,
      date: '2023-07-04',
      students: 4,
    },
    {
      day: 6,
      date: '2023-07-05',
      students: 8,
    },
    {
      day: 7,
      date: '2023-07-06',
      students: 3,
    },
    {
      day: 8,
      date: '2023-07-07',
      students: 7,
    },
  ]

  useEffect(() => {
    const fetchDetails = () => {
      setLineGraphData(user_data)

      let newArr = user_data.reduce((prev, next) => prev.concat(next.date), [])

      newArr = newArr.map((item, index) => {
        const month = getShortMonthName(new Date(item))
        const day = item.slice(item.length - 2)

        return `${day} ${month}`
      })

      const newStudentsArr = user_data.reduce(
        (prev, next) => prev.concat(next.students),
        [],
      )

      setDateArray(newArr)
      setStudentArray(newStudentsArr)
    }
    fetchDetails()
  }, [])

  return (
    <>
      <MainContainer id="main">
        <Cover>
          <ChartsContainer
            enrolledStudents={'100'}
            onProgress={'70'}
            examCompleted={'30'}
            courseCompleted={'10'}
            studentArr={studentArray}
            dateArr={dateArray}
          />
          <DashboardTop
            isCountLoading={isCountLoading}
            totalCount={'350'}
            totalStudentsCount={'350'}
            enrolledStudents={'100'}
            notEnrolleStudents={'30'}
            courseCompleted={'10'}
          />
        </Cover>
      </MainContainer>
    </>
  )
}

export default DashBoard

const MainContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 50px 0;
`
const Cover = styled.div`
  /* padding: 0 12px; */
`
