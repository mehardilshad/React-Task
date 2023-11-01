import React, { useContext, useRef } from 'react'
import styled from 'styled-components'
import { Context } from '../../contexts/Store'

function LandingPage() {
  const { state, dispatch } = useContext(Context)
  const access_token = state.user_details
  return (
    <Container>
      <div>home</div>
    </Container>
  )
}

export default LandingPage

const Container = styled.div`
  padding: 10px;
`
