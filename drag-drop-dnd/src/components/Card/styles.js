import styled, {css} from 'styled-components'

export const Container = styled.div`

  /* height:200px; */
  /* min-width:120px; */
  cursor:grab;
  color: #fff;
  background-color:#7159c1;
  max-width:200px;
  border:2px solid black;
  margin-top: 10px;
  margin: 10px 5px;
  font-size:12px;
  align-items: center;
  width: 300px;
  img {
    height:100%;
    width:200px;
  }
  ${props => props.isDragging && css`
  border:2px dashed red;
  cursor:grabbing;
  background: transparent;
  box-shadow: none;
  p,img{
    opacity: 0;
  }
  `}
`
