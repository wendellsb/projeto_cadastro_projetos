import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
import { useEffect, useState } from 'react'

function ProjectForm({ handleSubmit, btnText, projetosData }) {

    const [categories, setCategories] = useState([])
    const[projetos, setProjetos] = useState(projetosData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(projetos)
    }

    function handleChange(e) {
        setProjetos({ ...projetos, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProjetos({
          ...projetos,
          category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
          },
        })
      }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={projetos.name ? projetos.name : ''}
            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={projetos.budget ? projetos.budget : ''}
            />

            <Select
                name="category_id"
                text="Selecione a categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={projetos.category ? projetos.category.id : ''}
            />

            <SubmitButton text={btnText} />

        </form>
    )
}
export default ProjectForm