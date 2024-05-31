import NewJobForm from "./components/FormComponent/NewJobForm";

export default function AddJob({user}){
  return (
    <main className="mt-12">
      <NewJobForm user={user}/>
    </main>
  )
}
