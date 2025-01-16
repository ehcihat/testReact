import { render, screen } from "@testing-library/react";
import TextBox from "../components/TextBox";
import userEvent from "@testing-library/user-event";

describe('TextBox componente', () => {

    let box;
    let button;
    beforeEach(() => {
        render(<TextBox />); //aquí generamos el virtual DOM
  
        box = screen.getByRole('caja', { name: 'es una caja' });
        button = screen.getByRole('button', { name: 'Pulsa para modificar el color' });
    });

    it('la caja de texto se encuentra en el documento', () => {

        expect(box).toBeInTheDocument();
    });
    
    it('la caja con el texto tiene un color inicial', () => {

        expect(box).toHaveStyle({
            backgroundColor: 'rgb(255,255,0)'
        });
    });
    
    it('comprobar si al pulsar el botón cambia el botón de fondo', async () => {
     
       
        const user = userEvent.setup()
        
        await user.click(button);
 
        expect(box).toHaveStyle({
            backgroundColor: 'rgb(255,0,0)'
        });
    });
});