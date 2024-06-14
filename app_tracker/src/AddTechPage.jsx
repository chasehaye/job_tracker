import NewTechForm from "./components/FormComponent/NewTechForm";

export default function AddTech({user}){
    return(
        <main className="mt-12">
            <NewTechForm user={user}/>
        </main>
    )
}