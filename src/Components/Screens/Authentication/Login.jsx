// import React, { useContext, useState } from 'react'

// // packages
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

// import { general } from '../../../axiosConfig'
// import { Context } from '../../../contexts/Store'

// function LoginPage() {
//   const navigate = useNavigate()
//   //states
//   const [isChecked, setChecked] = useState(false)
//   const [viewPassword, setViewPassword] = useState(false)
//   const [username, setUsername] = useState('')
//   const [password, SetPassword] = useState('')
//   const { dispatch } = useContext(Context)

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     general
//       .post('/login/', {
//         username,
//         password,
//       })
//       .then(function (response) {
//         const { StatusCode } = response.data
//         console.log(response.data.data)
//         if (StatusCode == 6000) {
//           navigate('/dashboard/')
//         }
//       })
//       .catch(function (error) {
//         console.log(error)
//         navigate('/')
//       })
//   }

//   return (
//     <Main>
//       <Wrapper>
//         <Right>
//           <TopText>
//             <Titile>Welcome,</Titile>
//             <SubTitile>Please Enter Your Username and Password</SubTitile>
//           </TopText>
//           <Inputs>
//             <InputUser>
//               <UserBox>
//                 <img
//                   src={
//                     require('../../../assets/images/loginpage/account_circle.svg')
//                       .default
//                   }
//                   alt="account_circle"
//                 />
//               </UserBox>
//               <InputContainer
//                 type="text"
//                 placeholder="Enter Username"
//                 name="username"
//                 // required
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               ></InputContainer>
//             </InputUser>
//             <InputBox>
//               <PassBox>
//                 <img
//                   src={
//                     require('../../../assets/images/loginpage/lock.svg').default
//                   }
//                   alt="lock"
//                 />
//               </PassBox>
//               <input
//                 type={viewPassword ? 'text' : 'password'}
//                 placeholder="Enter Password"
//                 name="password"
//                 required
//                 value={password}
//                 onChange={(e) => SetPassword(e.target.value)}
//               ></input>
//               <Eye onClick={() => setViewPassword(!viewPassword)}>
//                 <img
//                   src={
//                     require('../../../assets/images/loginpage/visibility.svg')
//                       .default
//                   }
//                   alt="visibility"
//                 />
//               </Eye>
//             </InputBox>
//           </Inputs>
//           <For to="/forgot-password">Forget Password?</For>

//           <ButtonBox
//             // onClick={() => {
//             //     if (location.pathname === "/Loginpage") {
//             //         navigate("/OtpPage");
//             //     }
//             // }}
//             onClick={handleSubmit}
//           >
//             Login
//           </ButtonBox>
//           <Expert>
//             Don't you have an account?{' '}
//             <Log to="/verify-mail"> Create Account</Log>{' '}
//           </Expert>
//         </Right>
//       </Wrapper>
//     </Main>
//   )
// }

// export default LoginPage
// const Main = styled.div`
//   padding: 150px 0 50px 0;
// `
// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 100px;
//   width: 90%;
//   margin: 0 auto;
//   @media all and (max-width: 980px) {
//     flex-direction: column-reverse;
//   }
// `

// const Right = styled.div`
//   width: 45%;
//   text-align: center;
//   @media all and (max-width: 1440px) {
//   }
//   @media all and (max-width: 980px) {
//     width: 75%;
//   }
// `

// const Eye = styled.div`
//   margin-right: 15px;
//   margin-top: 7px;
// `
// const UserBox = styled.div`
//   margin-top: 5px;
// `
// const PassBox = styled.div`
//   margin-top: 5px;
// `

// const Inputs = styled.div`
//   margin-bottom: 10px;
// `

// const For = styled(Link)`
//   text-decoration: underline;
//   color: #2b3990;
//   text-align: end;
//   display: block;
//   margin-bottom: 15px;
//   /* width: 80%; */
//   @media all and (max-width: 1280px) {
//     font-size: 12px;
//   }
// `

// const TopText = styled.div``
// const Titile = styled.h5`
//   font-size: 24px;
//   font-weight: 500;
//   margin: 30px 0 7px 0;

//   /* font-family: "dm_sans_bold"; */
//   @media all and (max-width: 1440px) {
//     margin-top: 15px;
//   }
//   @media all and (max-width: 1050px) {
//     font-size: 22px;
//   }
// `
// const SubTitile = styled.p`
//   color: #7a838a;
//   font-size: 16px;
//   font-weight: 300;
//   line-height: 20px;
//   @media all and (max-width: 1050px) {
//     font-size: 14px;
//   }
// `

// const InputUser = styled.div`
//   background-color: #f6f7f9;
//   /* height: 40px; */
//   display: flex;
//   border-radius: 8px;
//   font-size: 18px;
//   font-weight: 300;
//   padding: 10px 20px;
//   align-items: center;
//   margin-top: 50px;

//   input {
//     border: none;
//     background-color: #f6f7f9;
//     padding-left: 10px;
//     height: 20px;
//     font-size: 20px;
//     width: 100%;
//     cursor: pointer;
//     :focus {
//       outline: none;
//       border: 1px solid #f1f2f378;
//     }

//     ::placeholder {
//       font-size: 14px;
//       font-weight: 400;
//     }
//   }
// `
// const InputBox = styled.div`
//   background-color: #f6f7f9;
//   /* height: 40px; */
//   display: flex;
//   border-radius: 8px;
//   font-size: 18px;
//   font-weight: 300;
//   padding: 10px 20px;
//   align-items: center;
//   margin-top: 10px;
//   /* width: 80%; */

//   input {
//     border: none;
//     background-color: #f6f7f9;
//     padding-left: 10px;
//     height: 20px;
//     font-size: 20px;
//     width: 100%;
//     cursor: pointer;
//     :focus {
//       outline: none;
//       border: 1px solid #f1f2f378;
//     }

//     ::placeholder {
//       font-size: 14px;
//       font-weight: 400;
//     }
//   }
// `
// const ButtonBox = styled.button`
//   background-color: #366ee3;
//   color: #fff;
//   font-size: 16px;
//   text-align: center;
//   padding: 15px 30px;
//   text-decoration: none;
//   border-radius: 8px;
//   margin-top: 5px;
//   width: 100%;
//   border: none;
//   cursor: pointer;
//   /* width: 80%; */
// `
// const Log = styled(Link)`
//   color: #2b3990;
//   text-decoration: underline;
// `
// const Expert = styled.h5`
//   font-size: 16px;
//   font-weight: 300;
//   cursor: pointer;
//   text-align: center;
//   color: #818181;
//   margin-top: 20px;
//   /* width: 80%; */
//   @media all and (max-width: 1280px) {
//     font-size: 15px;
//   }
// `
// const InputContainer = styled.input`
//   border: none;
//   background-color: #f6f7f9;
//   padding-left: 10px;
//   height: 20px;
//   font-size: 20px;
//   width: 100%;
//   cursor: pointer;
//   :focus {
//     outline: none;
//     border: 1px solid #f1f2f378;
//   }

//   ::placeholder {
//     font-size: 14px;
//     font-weight: 400;
//   }
// `

import React, { useContext, useState } from 'react'

// packages
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../contexts/Store'
import { general } from '../../../axiosConfig'

function LoginPage() {
  const navigate = useNavigate()
  //states
  const [isChecked, setChecked] = useState(false)
  const [viewPassword, setViewPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, SetPassword] = useState('')
  const { dispatch } = useContext(Context)

  const handleSubmit = (e) => {
    e.preventDefault()

    general
      .post('/login/', {
        username,
        password,
      })
      .then(function (response) {
        const { StatusCode } = response.data
        console.log(response.data.data)
        if (StatusCode == 6000) {
          navigate('/dashboard/login-dashboard')
        }
      })
      .catch(function (error) {
        console.log(error)
        navigate('/')
      })
  }

  return (
    <Main>
      <Wrapper>
        <Left>
          <ImageBox>
            <img
              src={require('../../../assets/images/image.png')}
              alt="loginimage"
            />
          </ImageBox>
        </Left>
        <Right>
          <TopText>
            <Titile>Welcome Again, Login</Titile>
            <SubTitile>Please enter your Username and Password</SubTitile>
          </TopText>
          <Inputs>
            <InputUser>
              <UserBox>
                <img
                  src={
                    require('../../../assets/images/loginpage/account_circle.svg')
                      .default
                  }
                  alt="account_circle"
                />
              </UserBox>
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </InputUser>
            <InputBox>
              {/* <PassIcon /> */}
              <PassBox>
                <img
                  src={
                    require('../../../assets/images/loginpage/lock.svg').default
                  }
                  alt="lock"
                />
              </PassBox>
              <input
                type={viewPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                name="password"
                required
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
              ></input>
              <Eye onClick={() => setViewPassword(!viewPassword)}>
                <img
                  src={
                    require('../../../assets/images/loginpage/visibility.svg')
                      .default
                  }
                  alt="visibility"
                />
              </Eye>
            </InputBox>
          </Inputs>
          <For to="/forgot-password">Forget Password?</For>
          <ButtonBox
            // onClick={() => {
            //     if (location.pathname === "/Loginpage") {
            //         navigate("/OtpPage");
            //     }
            // }}
            onClick={handleSubmit}
          >
            Login
          </ButtonBox>
          <Expert>
            Don't you have an account?{' '}
            <Log to="/verify-mail"> Create Account</Log>{' '}
          </Expert>
        </Right>
      </Wrapper>
    </Main>
  )
}

export default LoginPage
const Eye = styled.div`
  margin-right: 15px;
  margin-top: 7px;
`
const UserBox = styled.div`
  margin-top: 5px;
`
const PassBox = styled.div`
  margin-top: 5px;
`
const Check = styled.div`
  display: flex;
  color: #818181;
  margin-left: 10px;
  @media all and (max-width: 1280px) {
    font-size: 14px;
  }
`
const TCBox = styled(Link)`
  text-decoration: underline;
  color: #366ee3;
  margin-left: 5px;
`

const Inputs = styled.div`
  margin-bottom: 10px;
`
const Box = styled.div`
  margin-bottom: 20px;
  display: flex;
`
const CheckBox = styled.div`
  width: 19px;
  height: 19px;
  border-radius: 5px;
  margin-top: 1px;
  cursor: pointer;
  border: 1px solid #c1bfbf;
  @media all and (max-width: 1280px) {
    margin-top: 0;
    width: 15px;
    height: 15px;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`
const For = styled(Link)`
  text-decoration: underline;
  color: #2b3990;
  text-align: end;
  display: block;
  margin-bottom: 15px;
  width: 80%;
  @media all and (max-width: 1280px) {
    font-size: 12px;
  }
`
const Main = styled.div`
  padding: 150px 0 70px 0;
  height: 100vh;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  width: 90%;
  margin: 0 auto;
  @media all and (max-width: 980px) {
    flex-direction: column-reverse;
  }
`
const Left = styled.div`
  width: 55%;
  /* margin: 95px 0 0 0px; */
  @media all and (max-width: 1440px) {
    /* width: 60%; */
  }
  @media all and (max-width: 1050px) {
    width: 64%;
  }
  @media all and (max-width: 980px) {
    width: 75%;
  }
`
const ImageBox = styled.div`
  align-items: center;
  width: 100%;
  /* @media all and (max-width: 1440px) {
    width: 90%;
  } */
  @media all and (max-width: 980px) {
    width: 100%;
  }
  img {
    width: 100%;
    display: block;
  }
`
const Right = styled.div`
  /* margin: 140px 0 0 0; */
  width: 40%;
  @media all and (max-width: 1440px) {
    /* margin: 140px 0 0 0; */
    /* width: 36%; */
  }
  @media all and (max-width: 980px) {
    width: 75%;
  }
`
const LogoBox = styled.div`
  width: 16%;
  /* margin-bottom: 20px; */
`
const TopText = styled.div``
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

const InputUser = styled.div`
  background-color: #f6f7f9;
  /* height: 40px; */
  display: flex;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 300;
  padding: 10px 20px;
  align-items: center;
  margin-top: 50px;
  width: 80%;
  /* @media all and (max-width: 1440px) {
    margin-top: 25px;
    margin-bottom: 10px;
    padding: 8px 10px;
    height: 35px;
  } */

  input {
    border: none;
    background-color: #f6f7f9;
    padding-left: 10px;
    height: 20px;
    font-size: 20px;
    width: 100%;
    cursor: pointer;
    :focus {
      outline: none;
      border: 1px solid #f1f2f378;
    }

    ::placeholder {
      font-size: 14px;
      font-weight: 400;
    }
  }
`
const InputBox = styled.div`
  background-color: #f6f7f9;
  /* height: 40px; */
  display: flex;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 300;
  padding: 10px 20px;
  align-items: center;
  margin-top: 10px;
  width: 80%;

  input {
    border: none;
    background-color: #f6f7f9;
    padding-left: 10px;
    height: 20px;
    font-size: 20px;
    width: 100%;
    cursor: pointer;
    :focus {
      outline: none;
      border: 1px solid #f1f2f378;
    }

    ::placeholder {
      font-size: 14px;
      font-weight: 400;
    }
  }
`
const ButtonBox = styled.button`
  background-color: #366ee3;
  color: #fff;
  text-align: center;
  padding: 15px 160px;
  text-decoration: none;
  border-radius: 8px;
  margin-top: 5px;
  width: 100%;
  border: none;
  cursor: pointer;
  width: 80%;
`
const Log = styled(Link)`
  color: #2b3990;
  text-decoration: underline;
`
const Expert = styled.h5`
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
  text-align: center;
  color: #818181;
  margin-top: 20px;
  width: 80%;
  @media all and (max-width: 1280px) {
    font-size: 15px;
  }
`
