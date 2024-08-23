import '../App.css';
import { useEffect } from 'react';

function EUA() {
    useEffect(() => {
        fetch('./estadosunidos.json')
            .then(res => res.json())
            .then(resposta => mostrarJogadoras(resposta));
    }, []);

    function mostrarJogadoras(resposta) {
        const section = document.querySelector('.jogadoras');
        const jogadorasHTML = resposta.map(jogadora => `
            <div class="divAPI">
                <img class="imagem" src="${jogadora.img}" alt="" />
                <span><span class="span">Nome:</span>${jogadora.nome}</span>
                <span><span class="span">Idade:</span>${jogadora.idade}</span>
                <span><span class="span">Posição:</span>${jogadora.posicao}</span>
            </div>
        `).join('');

        section.innerHTML = jogadorasHTML;
    }

    return (
        <>
            <nav className="bodyJogadoras">
                <div className="jogadoras">
                    <div className='cabecalho'>
                        <h1>bla</h1>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default EUA;