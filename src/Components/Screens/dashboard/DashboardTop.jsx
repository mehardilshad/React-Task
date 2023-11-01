import React from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ebook from '../../../assets/images/ebook.png'
import green from '../../../assets/images/task/active-students.svg'
import peach from '../../../assets/images/task/our-team.svg'
import blue from '../../../assets/images/task/students.svg'
import yellow from '../../../assets/images/task/completed.svg'
import ButtonLoader from '../../Loader/ButtonLoader'

function DashboardTop({
  isCountLoading,
  id,
  totalStudentsCount,
  enrolledStudents,
  notEnrolleStudents,
  courseCompleted,
}) {
  return (
    <MainContainer>
      <Heading>Info</Heading>
      <TopContainer id={id}>
        <Card to={'/students'}>
          <ImageContainer>
            <Logo src={green} />
          </ImageContainer>
          <Description>
            <p>{enrolledStudents}</p>
            <h3>Enrolled Students</h3>
          </Description>
        </Card>
        <Card to={'/students'}>
          <ImageContainer>
            <Logo src={peach} />
          </ImageContainer>
          <Description>
            {isCountLoading ? <ButtonLoader /> : <p>{notEnrolleStudents}</p>}
            <h3>Exam Completed</h3>
          </Description>
        </Card>
        <Card type="not_active" to="">
          <ImageContainer>
            <Logo src={blue} />
          </ImageContainer>
          <Description>
            {isCountLoading ? <ButtonLoader /> : <p>{totalStudentsCount}</p>}
            <h3>Total Applied Students</h3>
          </Description>
        </Card>
        <Card to={'/students'}>
          <ImageContainer>
            <Logo src={yellow} />
          </ImageContainer>
          <Description>
            {isCountLoading ? <ButtonLoader /> : <p>{courseCompleted}</p>}
            <h3>Course Completed</h3>
          </Description>
        </Card>
      </TopContainer>
    </MainContainer>
  )
}

export default DashboardTop

const MainContainer = styled.div`
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`

const Heading = styled.h3`
  color: #000;
  /* font-family: 'gordita_medium'; */
  font-size: 18px;
  margin: 30px 0 15px;
`
const TopContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ id }) =>
    id ? '1fr 1fr 1fr 1fr' : '1fr 1fr 1fr 1fr'};
  grid-gap: 20px;
  margin-bottom: 30px;
  padding: 0 15px;
  @media all and (max-width: 1280px) {
    width: auto;

    grid-template-columns: 1fr 1fr 1fr;
  }
  @media all and (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }
  @media all and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
const Card = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  /* border: 1px solid #2c2c2c; */
  border-radius: 5px;
  padding: 30px;
  /* font-family: 'gordita_regular'; */
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  :hover {
    opacity: 0.85;
    cursor: ${({ type }) =>
      type === 'not_active' ? 'not-allowed' : 'pointer'};
  }
`
const ImageContainer = styled.span`
  margin-right: 10px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Logo = styled.img`
  width: 100%;
  display: block;
`
const Description = styled.div`
  color: #000;

  p {
    color: #000;
    font-size: 22px;
    /* font-family: 'gordita_medium'; */
  }
  h3 {
    font-size: 12px;
    /* font-family: 'gordita_medium'; */
  }
`
