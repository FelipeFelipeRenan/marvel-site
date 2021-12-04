import { useState, useEffect } from "react";
import { CustomDialog, useDialog } from "react-st-modal";
import { Button, Modal } from "../Modal/style";
import { Li, Com } from "./style";

function CustomDialogContent() {
  // use this hook to control the dialog
  const dialog = useDialog();

  const [value, setValue] = useState();

  return (
    <Modal>
      <input
        placeholder="Endereço"
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          dialog.close(value);
        }}
      >
        Submeter
      </Button>
      <Button
        onClick={() => {
          dialog.close();
        }}
      >
        Cancelar
      </Button>
    </Modal>
  );
}
const Comic = () => {
  const [comicState, setComics] = useState([]);
  useEffect(() => {
    fetch(
      "http://gateway.marvel.com/v1/public/comics?ts=1638557267463&apikey=2c1b954463477c116f79101c725fd280&hash=be6691147db5103c412b52cf734db545"
    )
      .then((res) => res.json())
      .then((res) => {
        setComics(res.data.results);
      });
  }, []);

  return (
    <div>
      <Li>
        {comicState.map((comic) => {
          return (
            <ul key={comic.id}>
              <Com>
                <div
                  onClick={async () => {
                    const result = await CustomDialog(<CustomDialogContent />, {
                      title: "Confirmar Pedido",
                      showCloseIcon: true,
                    });
                  }}
                >
                  <h3>{comic.title}</h3>
                  <img
                    alt="comic"
                    src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  ></img>
                </div>
              </Com>
            </ul>
          );
        })}
      </Li>
    </div>
  );
};

export default Comic;

//`http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
