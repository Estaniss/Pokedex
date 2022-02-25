import styled from "styled-components";
import Background from "../../assets/images/fundopokebola.jpeg";

export const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: white;
`;
export const Answer = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

export const Wrapper = styled.div`
  background-image: url(${Background});
  width: 60%;
  margin-left: 20%;
  border: 2px solid black;
  text-align: center;
  height: 600px;
  background-color: red;
  border-radius: 10px;
  background-position: center;
`;
export const Button = styled.button`
  background-color: black;
  font-size: 1em;
  border-radius: 3px;
  width: 300px;
  height: 30px;
  border-color: white;
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;

export const Input = styled.input`
  color: #035e7b;
  font-size: 1em;
  border: 2px solid #035e7b;
  border-radius: 5px;
  width: 300px;
  height: 30px;
  margin-right: 15px;
`;

export const Display = styled.div`
  width: 60%;
  height: 40%;
  align-items: center;
  border-radius: 200px;
  margin-top: 150px;
  margin-left: 20%;
`;
export const Name = styled.h2`
  text-align: center;
  color: red;
  margin: 0px;
`;
export const Status = styled.h5`
  text-align: center;
  color: red;
  font-weight: bold;
  padding: 5px;
  margin: 0px;
`;
export const Info = styled.h5`
  text-align: center;
  color: red;
  padding: 5px;
  margin: 0px;
`;
export const Img = styled.img`
  width: 150px;
  height: 150px;
  background-color: white;
  background-position: center;
  border-radius: 50%;
`;
export const DisplayInfo = styled.div`
  display: flex;
  justify-content: center;
`;

export const Buscar = styled.h3`
  text-align: center;
  color: white;
`;
