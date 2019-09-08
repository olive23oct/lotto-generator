import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import _ from 'underscore';
import styled from 'styled-components';

// underscore -> _
// jQuery -> $ . import jQuery from 'jquery'
// 제이쿼리 사용시 백엔드 코드인지 프론트 코드인지 꼭 확인해야함
// -> axios 사용
const Row = styled.div`
  display : flex;
  flex-direction : row;
`
// `` ES6 추가


const Number = styled.span`
  display : flex;
  width : 100px;
  height : 100px;
  border-radius : 50px;
  justify-content : center;
  align-items : center;
  font-size : 3rem;
  background : ${ props => {
    const n =  parseInt(props.children, 10 );
    if( n <= 10) {
      return 'yellow';
    } else if ( n <= 20 ){
      return 'blue';
    } else if ( n <= 30 ){
      return  'red';
    } else if ( n <= 40 ){
      return 'black';
    } else
      return 'green';
  } };
  color : ${ props =>{
    const n = parseInt( props.children, 10 );
    if ( 10 < n && n <= 20){
      return 'white';
    } else if ( 20 < n && n <= 40 ){
      return 'white';
    } else {
      return 'black';
    }
  }}
`

function generate(){
  let numbers = [];
  _.times( 45, n => numbers.push( n + 1 ) );
  // times : 원하는 횟수만큼 반복 실행
  // 45개짜리 배열 생성
  numbers = _.shuffle( numbers );
  numbers.length = 6;
  return numbers;
}

const Home = () => {
  const [ list, setList ] = React.useState( [] );
  const regenerate = () => {
    setList( generate() );
  }
  React.useEffect( () => {
    // mount, update
    regenerate();
  }, [] ); // 주시할 대상
  return(
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <div className="container">
      <Row>
      {/* list.join( ',' ) */}
      { list.map( element => <Number key={ element }>{ element }</Number>)}

      </Row>

      <div>
        <button onClick={ regenerate }>재생성</button>
        {/*<button onClick={ ()=> setList( generate() )>재생성</button>} */}

        {/*  
          { [ <></> ] }
        */}
      </div>
    </div>

      {/* scope */}
      <style jsx>{ `
        .container{
          width : 100vw;
          height : 100vh;
          display : flex;
          flex-direction : column;
          justify-content: center;
          align-items : center;
        }
      `}
      </style>

  </div>
  )
}

export default Home
