import { render, screen } from "@testing-library/react";
import TextBox2 from "../components/TextBox2";
import userEvent from "@testing-library/user-event";

describe("TextBox2 componente", () => {
    let box;
    let button;

    beforeEach(() => {

        render(<TextBox2 />);  //aquí generamos el virtual DOM

        box = screen.getByRole("caja", { name: "es una caja" });
        button = screen.getByRole("button", { name: "Pulsa para modificar el color del texto" });
    });

    it("Comprobar que se renderiza la caja en el documento", () => {

        expect(box).toBeInTheDocument();

    });

    it("Comprobar que se renderiza el botón en el documento", () => {

        expect(button).toBeInTheDocument();

    });

    it("Comprobar que se realiza correctamente la interacción al pulsar el botón", async () => {

        const user = userEvent.setup();

        expect(box).toHaveStyle({ 
            color: "rgb(255,192,203)" });

        await user.click(button);
        expect(box).toHaveStyle({ 
            color: "rgb(0,0,0)" });
    });
});
