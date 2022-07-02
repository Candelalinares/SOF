import React, { useState } from 'react';
import { Data } from './data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './accordion.css'

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  margin-bottom: 8rem;
`;

const Container = styled.div`
  position: absolute;
  justify-content:center;
  width: 44rem;
  margin-bottom: 88rem;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  margin-bottom: 8rem;

`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 18px;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background:  #a6382e8a;
  color: #fff;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #A6382E;
  border-top: 1px solid #A6382E;
  transition: .2s all ease-in-out;
  p {
    font-size: 1rem;
    font-family: Be Vietnam Pro;
    text-align: flex-start;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className='container'>


      <IconContext.Provider value={{ className: 'fondo' }}>
        <AccordionSection>
          <Container value={{ className: 'contenedor' }}>
            {Data.map((item, index) => {
              return (
                <>
                  <Wrap className='ancho' onClick={() => toggle(index)} key={index}>
                    <h1 className='question'>{item.question}</h1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p className='answer'>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </Container>
        </AccordionSection>
      </IconContext.Provider>
    </div>
  );
};

export default Accordion;