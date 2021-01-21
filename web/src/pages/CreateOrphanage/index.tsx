import React from "react";
import { Marker } from 'react-leaflet';

// import PrimaryButton from "../../components/PrimaryButton";
// import Sidebar from "../../components/Sidebar";
// import './styles.css';
import {
  PageCreateOrphanage,
  Main,
  CreateOrphanageForm,
  FieldSet,
  Legend,
  InputBlock,
  Input,
  Label,
  TextArea,
  UploadedImage,
  NewImageButton,
  ButtonSelect,

} from './styles';
import { FiPlus } from "react-icons/fi";
// import Map from "../../components/Map";
// import happyMapIcon from "../../components/Map/happMapIcon";

export default function OrphanagesMap() {
  return (
    <PageCreateOrphanage>
      {/* <Sidebar /> */}

      <Main>
        <CreateOrphanageForm>
          <FieldSet>
            <Legend>Dados</Legend>

            {/* <Map style={{ width: '100%', height: 280 }}>
              <Marker interactive={false} icon={happyMapIcon} position={[-27.2092052,-49.6401092]} />
            </Map> */}

            <InputBlock>
              <Label>Nome</Label>
              <Input/>
            </InputBlock>

            <InputBlock>
              <Label>Sobre <span>Máximo de 300 caracteres</span></Label>
              <TextArea maxLength={300} />
            </InputBlock>

            <InputBlock>
              <Label>Fotos</Label>

              <UploadedImage>

              </UploadedImage>

              <NewImageButton>
                <FiPlus size={24} color="#15b6d6" />
              </NewImageButton>
            </InputBlock>
          </FieldSet>

          <FieldSet>
            <Legend>Visitação</Legend>

            <InputBlock>
              <Label>Instruções</Label>
              <TextArea/>
            </InputBlock>

            <InputBlock className="input-block">
              <Label>Nome</Label>
              <Input />
            </InputBlock>

            <InputBlock className="input-block">
              <Label>Atende fim de semana</Label>

              <ButtonSelect className="button-select">
                <button type="button" className="active">Sim</button>
                <button type="button">Não</button>
              </ButtonSelect>
            </InputBlock>
          </FieldSet>

          {/* <PrimaryButton type="submit">Confirmar</PrimaryButton> */}
        </CreateOrphanageForm>
      </Main>
    </PageCreateOrphanage>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;