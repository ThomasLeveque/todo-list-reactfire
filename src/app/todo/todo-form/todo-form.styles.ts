import styled from 'styled-components';
import colors from '../../app.colors';

export const TodoFormContainer = styled.form`
  margin: 20px 0;
  align-items: center;
  background-color: ${colors.background};
  border: 2px solid ${colors.border};
  border-radius: 16px;
  display: flex;
  padding: 10px;
  max-width: 100%;
  width: 600px;

  input {
    width: 100%;
    border: none;
    background: transparent;
    font-size: 15px;
    padding: 12px;
  }

  button {
    font-weight: 700;
    white-space: nowrap;
    margin-left: 20px;
    background-color: ${colors.secondary};
    color: ${colors.white};
    border-color: transparent;
    border-radius: 16px;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    border-width: 0 0 4px;
    padding: 13px 16px;
    text-transform: uppercase;
    font-size: 15px;
    transition: filter 0.2s, -webkit-filter 0.2s;
    transform: translateZ(0);

    &:active {
      background: none;
      border-radius: 16px;
      border-width: 4px 0 0;
    }

    &:after {
      background-color: ${colors.primary};
      border-color: transparent;
      border-width: 0 0 4px;
      bottom: -4px;
      content: '';
      left: 0;
      right: 0;
      top: 0;
      border-radius: 16px;
      background-clip: padding-box;
      border-style: solid;
      position: absolute;
      z-index: -1;

      &:active {
        border-width: 0;
        bottom: 0;
      }
    }
  }
`;
