import { render, screen } from "@testing-library/react";
import FormuUsuario from "../components/FormUsuario";
import userEvent from "@testing-library/user-event";

describe('FormuUsuario componente', () => {

 
    let button;
    let textField;
    let header;
    beforeEach(() => {
        render(<FormuUsuario />); //aquí generamos el virtual DOM
        button = screen.getByRole('button', { name: 'Submit' });
        textField = screen.getByRole("textbox", { name: "Nombre" });
        header = screen.getByRole("heading", { level: 2 , name: "Rellena el formulario" });
        
    });

    it("se renderiza el botón en el documento", () => {

        expect(button).toBeInTheDocument();
    });

    it("se renderiza el textfield en el documento", () => {
     
        expect(textField).toBeInTheDocument();
    });

    it("se renderiza la cabecera de nivel 2 en el documento", () => {

        expect(header).toBeInTheDocument();
    });

    it("borra el texto del campo de texto al pulsar el botón", async () => {

        const user = userEvent.setup();

        await user.type(textField, "Tahiche");

        expect(textField).toHaveValue("Tahiche");

        await user.click(button);
   
        expect(textField).toHaveValue("");
    });
});