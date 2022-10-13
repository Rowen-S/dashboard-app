import searchIcon from 'assets/svg/search.svg'
import styled from 'styled-components/macro'

// export const SearchInput = styled.input`
//   background: no-repeat scroll 7px 7px;
//   background-image: url(${searchIcon});
//   background-size: 20px 20px;
//   background-position: 12px center;
//   position: relative;
//   display: flex;
//   padding: 16px;
//   align-items: center;
//   width: 100%;
//   white-space: nowrap;
//   background: none;
//   border: none;
//   outline: none;
//   border-radius: 20px;
//   color: ${({ theme }) => theme.text1};
//   border-style: solid;
//   border: 1px solid ${({ theme }) => theme.bg3};
//   -webkit-appearance: none;

//   font-size: 18px;

//   ::placeholder {
//     color: ${({ theme }) => theme.text3};
//   }
//   transition: border 100ms;
//   :focus {
//     border: 1px solid ${({ theme }) => theme.primary1};
//     outline: none;
//   }
// `

export const SearchInput = styled.input`
  background: no-repeat scroll 7px 7px;
  background-image: url(${searchIcon});
  background-size: 20px 20px;
  background-position: 12px center;
  position: relative;
  display: flex;
  padding: 16px;
  padding-left: 40px;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  border: none;
  outline: none;
  border-radius: 20px;
  color: ${({ theme }) => theme.text1};
  border-style: solid;
  border: 1px solid ${({ theme }) => theme.bg3};
  -webkit-appearance: none;
  font-size: 18px;

  ::placeholder {
    color: ${({ theme }) => theme.text3};
  }
  transition: border 100ms;
  :focus {
    border: 1px solid ${({ theme }) => theme.primary1};
    outline: none;
  }
`
