import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../../../contexts/Store'
import { general } from '../../../axiosConfig'

function ForgotPassword() {
  const [checked, setChecked] = useState()
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [selectedDate, setSelectedDate] = useState('')

  const [id, setId] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [country, setCountry] = useState([])
  const [loading, setLoading] = useState(false)

  const [viewPassword, setViewPassword] = useState(false)
  const [password, SetPassword] = useState('') // Add loading state

  const [code, setCode] = useState({
    country_code: '+91',
    flag:
      'https://api.mindmitra.talrop.works/media/countries/flags/indian-flag.jpeg',
    id: 1,
    name: 'India',
    phone_code: '+91',
    phone_number_length: 10,
    web_code: 'IN',
  })
  const { dispatch } = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    let user_details = localStorage.getItem('user_details')
    user_details = JSON.parse(user_details)
    dispatch({ type: 'UPDATE_USER', user_details: user_details })
  }, [])

  //   useEffect(() => {
  //     general
  //       .get('/countries/')
  //       .then((response) => {
  //         const { StatusCode, data } = response.data
  //         // handle success
  //         console.log(response.data)
  //         setCountry(data)
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error)
  //       })
  //   }, [id])

  const renderContries = () => {
    return country.map((country) => <div>{country.country_code}</div>)
  }
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value)
  }

  const handleInputChange = (e) => {
    let inputValue = e.target.value
    // Remove non-digit characters and limit to 10 digits
    inputValue = inputValue.replace(/\D/g, '').slice(0, 10)

    setNumber(inputValue)
  }
  const handleIChange = (e) => {
    let inputValue = e.target.value
    // Remove non-digit characters and limit to 10 digits
    // inputValue = inputValue.replace(/\D/g, '').slice(0, 10)

    setEmail(inputValue)
  }

  const handleSubmit = async (e) => {
    // e.preventDefault()
    setLoading(true)

    if (number.length === code.phone_number_length) {
      if (code.country_code === '+91') {
        try {
          const response = await general.post('/signup/', {
            phone: number,
            country: code.web_code,
          })

          const { StatusCode } = response.data

          if (StatusCode == '6000') {
            const user_details = {
              phone: number,
            }
            dispatch({
              type: 'UPDATE_USER',
              user_details,
            })
            navigate('/otp-page')
          }
        } catch (error) {
          console.error('Error creating post sss:', error.response)
          console.log(error)
          navigate('/')
          setErrorMessage(
            'An error occurred while registering. Please try again.',
          )
        }
      } else {
        setErrorMessage('Invalid country code')
      }
    } else {
      setErrorMessage('Please enter a valid Email.')
    }

    setLoading(false)

    // Remove the error message after 5 seconds
    setTimeout(() => {
      setErrorMessage(null)
    }, 3000)
  }

  return (
    <>
      <Main>
        <Wrapper>
          <Right>
            <TopText>
              <Titile>Let’s Get Started!</Titile>
              <SubTitile>
                Enter your email and an OTP will be sent to you
              </SubTitile>
            </TopText>
            <InputBox>
              <input
                type="email"
                id="email"
                maxLength={30}
                className="active"
                placeholder="Enter your email address"
                value={email}
                onChange={handleIChange}
              />
            </InputBox>
            {errorMessage && <ErrorText>{errorMessage}</ErrorText>}

            <ButtonBox
              type="submit"
              onClick={() => {
                handleSubmit()
                navigate('/otp-page')
              }}
            >
              {loading ? 'Loading...' : 'Get OTP'}
            </ButtonBox>

            <Expert>
              Login if you already have an <Log to="/login-page">account!</Log>{' '}
            </Expert>
          </Right>
        </Wrapper>
      </Main>
    </>
  )
}

export default ForgotPassword
const Main = styled.div`
  padding: 150px 0 50px 0;
  height: 100vh;
  background: #f6f7f9;
`
const Wrapper = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  gap: 100px;
  width: 90%;
  margin: 0 auto;
  @media all and (max-width: 980px) {
    flex-direction: column-reverse;
  }
`
const Right = styled.div`
  /* margin: 140px 0 0 0; */
  padding: 50px 0;
  margin: 0 auto;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 7px;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media all and (max-width: 1440px) {
    /* margin: 140px 0 0 0; */
    /* width: 36%; */
  }
  @media all and (max-width: 980px) {
    width: 75%;
  }
`
const TopText = styled.div`
  text-align: center;
`
const Titile = styled.h5`
  font-size: 24px;
  font-weight: 500;
  margin: 30px 0 7px 0;

  /* font-family: "dm_sans_bold"; */
  @media all and (max-width: 1440px) {
    margin-top: 15px;
  }
  @media all and (max-width: 1050px) {
    font-size: 22px;
  }
`
const SubTitile = styled.p`
  color: #7a838a;
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  @media all and (max-width: 1050px) {
    font-size: 14px;
  }
`
const Bar = styled.p`
  margin: 0;
  color: #dededf;
  margin-left: 5px;
  border-right: 1px solid #dededf;
  width: 5px;
  height: 20px;
`
const InputBox = styled.div`
  background-color: #f6f7f9;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 300;
  padding: 10px 20px;
  align-items: flex-end;
  margin-top: 40px;
  width: 50%;
  &.number {
    margin-top: 40px;
  }
  /* @media all and (max-width: 1440px) {
    margin-top: 25px;
    margin-bottom: 10px;

    height: 35px;
  } */
  @media all and (max-width: 1280px) {
    height: 30px;
  }
  label {
    /* padding-left: 10px; */
    margin-bottom: 5px;
  }
  input {
    border: none;
    /* background-color: #f6f7f9; */
    /* height: 20px; */
    font-size: 18px;
    width: 100%;
    cursor: pointer;
    @media all and (max-width: 1280px) {
      font-size: 16px;
    }
    :focus {
      outline: none;
      /* border: 1px solid red; */
    }

    ::placeholder {
      font-size: 16px;
      font-weight: 400;
    }
  }
  input[type='file'] {
    border: none;
    margin-top: 10px;
    font-size: 18px;
    width: 100%;
    cursor: pointer;
  }
`
const ButtonBox = styled.button`
  background-color: #366ee3;
  color: #fff;
  text-align: center;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 8px;
  margin-top: 40px;
  width: 50%;
  border: none;
  font-size: 18px;
  /* margin: 0 auto; */
  text-align: center;
  cursor: pointer;
  @media all and (max-width: 1050px) {
    padding: 15px 130px;
  }
`
const Log = styled(Link)`
  color: #2b3990;
  text-decoration: none;
`
const Expert = styled.h5`
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
  text-align: center;
  color: #818181;
  margin-top: 20px;
  width: 80%;
  /* @media all and (max-width: 1440px) {
    margin-top: 11%;
  } */
`
const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`
const PassBox = styled.div`
  /* margin-top: 5px; */
  display: flex;
  justify-content: center;
  align-items: center;
`
const Eye = styled.div`
  /* margin-right: 15px; */
  display: flex;
  justify-content: center;
  align-items: center;
`
