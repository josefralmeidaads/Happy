import styled from 'styled-components';

export const PageCreateOrphanage = styled.div`
  display: flex;


   aside {
    height: 100%;
    position: fixed;
    padding: 32px 24px;
    background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }


  aside footer a button {
    width: 48px;
    height: 48px;

    border: 0;

    background: #12AFCB;
    border-radius: 16px;

    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

export const Main = styled.main`
  flex: 1;
`

export const CreateOrphanageForm = styled.form`
  width: 700px;
  margin: 64px auto;

  background: #FFFFFF;
  border: 1px solid #D3E2E5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

  fieldset legend {
    width: 100%;

    font-size: 32px;
    line-height: 34px;
    color: #5C8599;
    font-weight: 700;

    border-bottom: 1px solid #D3E2E5;
    margin-bottom: 40px;
    padding-bottom: 24px;
  }

`;

export const FieldSet = styled.fieldset`
  border: 0;

  & + & {
    margin-top: 80px;
  }
`;

export const Legend = styled.legend`

`;

export const InputBlock = styled.div`
  & + & {
    margin-top: 24px;
  }

  span {
    font-size: 14px;
    color: #8FA7B3;
    margin-left: 24px;
    line-height: 24px;
  }
  
`;

export const Input = styled.input`
    width: 100%;
    background: #F5F8FA;
    border: 1px solid #D3E2E5;
    border-radius: 20px;
    outline: none;
    color: #5C8599;
    height: 64px;
    padding: 0 16px;
`;

export const Label = styled.label`
  display: flex;
  color: #8FA7B3;
  margin-bottom: 8px;
  line-height: 24px;
`;

export const TextArea = styled.textarea`
  min-height: 120px;
  max-height: 240px;
  resize: vertical;
  padding: 16px;
  line-height: 28px;
  width: 100%;
  background: #F5F8FA;
  border: 1px solid #D3E2E5;
  border-radius: 20px;
  outline: none;
  color: #5C8599;
`;

export const UploadedImage = styled.div`

`;

export const NewImageButton = styled.button`
  width: 100%;
  height: 64px;
  background: #F5F8FA;
  border: 1px dashed #96D2F0;
  border-radius: 20px;
  cursor: pointer;
`;

export const ButtonSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  button {
    height: 64px;
    background: #F5F8FA;
    border: 1px solid #D3E2E5;
    color: #5C8599;
    cursor: pointer;
  }

    button.active {
    background: #EDFFF6;
    border: 1px solid #A1E9C5;
    color: #37C77F;
  }

  button:first-child {
    border-radius: 20px 0px 0px 20px;
  }

  button:last-child {
    border-radius: 0 20px 20px 0;
    border-left: 0;
  }
`;

