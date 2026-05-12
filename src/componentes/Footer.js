function Footer(){

    return (
<footer>
<div></div>
<div className="menuFooter">
    <ul>

                    <li><Link to="/sobreCurso"></Link>Sobre o Curso</li>
                    <li><Link to="/disciplinasTecnicas"></Link>Disciplinas Básicas</li>
                    <li><Link to="/disciplinasCurriculares"></Link>Disciplinas Técnicas</li>
                    <li><Link to="/equipe"></Link>Equipe</li>
    </ul>
</div>
<div className="credenciais">
    <h1>Desenvolvido por: Mariana Medeiros Colli - 2026</h1>
</div>
</footer>
    )
}

export default Footer;