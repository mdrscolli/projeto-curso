import dadosDisciplinasTecnicas from'../dados/dadosDisciplinasTecnicas'

function ListarDisciplinaTecnica() {

    return (
        <section className='disciplinas'>
            <header className='headerDisciplinas'>
                <h1>Disciplinas Técnicas</h1>
            </header>
                <div  className='contentDisciplinas'>
            
            
            {
                dadosDisciplinasTecnicas.map(
                    (item, index)=>(
                        <artcle key={index}>
                        <img src={item.link_imagem}
                        alt='{item, nome}'
                        title='{item.nome}' />
                        {item.nome} - {item.sigla}
                        </artcle>
                    )
                )
            }
            </div>          
 </section>
        
    )

}
export default ListarDisciplinaTecnica