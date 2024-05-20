import NewJobForm from "./components/FormComponent/NewJobForm";

export default function AddJob({user}){
  return (
    <main>
      <h1>Add an applied form job:</h1>
      <NewJobForm user={user}/>
    </main>
  )
}
