import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css' 
import { useNavigate } from 'react-router-dom'

function NewProject() {

    const history = useNavigate()

    function createPost(projetos) {

        //initialize cost and services
        projetos.cost = 0
        projetos.services = []

        fetch('http://localhost:5000/projetos', {
            method:'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(projetos),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            history('/projetos', {message: 'Projeto criado com sucesso!' })
        })
        .catch(err => console.log(err))

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços.</p>
            <p>Formulário</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject